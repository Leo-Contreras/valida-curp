var express = require('express');
var router = express.Router();

router.post('/validate', function(req, res, next) {
    const curp = req.body.curp;
    const validationResult = isValidCurp(curp);

    if (validationResult.valid) {
        res.status(200).json(validationResult);
    } else {
        res.status(200).json({ valid: false });
    }
});



function isValidCurp(curp) {
    const regex = /^([A-Z]{1}[AEIOU]{1}[A-Z]{2})(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2\d|3[0-1]))([HM]{1})(?:AS|BC|BS|CC|CH|CL|CM|CS|DF|DG|GR|GT|HG|JC|MC|MN|MS|NE|NL|NT|OC|PL|QR|SP|SL|SR|TC|TL|TS|VZ|YN|ZS|NE|DF){1}([B-DF-HJ-NP-TV-Z]{3})([A-Z\d]{2})$/;
    const match = curp.match(regex);

    if (!match) {
        return false;
    }

    const firstNameLetter = match[1];
    const birthDateStr = match[2];
    const sex = match[3] === "H" ? "Hombre" : "Mujer";
    const birthDate = new Date(
        parseInt(birthDateStr.slice(0, 2), 10) + 1900,
        parseInt(birthDateStr.slice(2, 4), 10) - 1,
        parseInt(birthDateStr.slice(4, 6), 10)
    );

    return {
        valid: true,
        firstNameLetter,
        lastName1Letter: firstNameLetter[0],
        lastName2Letter: firstNameLetter[1],
        sex,
        birthDate,
    };
}



module.exports = router;

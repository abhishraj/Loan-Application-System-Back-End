export function joiValidation(data, schema) {
    const options = {
        convert: true, // attempts to cast values to the required types (e.g. a string to a number).
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: false, // remove unknown props
    };

    try {
        const { error, value } = schema.validate(data, options);
        if (error && error.details && error.details.length) {
            return {
                isJoi: true,
                errors: error.details,
            };
        } else {
            return {
                data: value,
            };
        }

    } catch (err) {
        return {
            isJoi: false,
            errors: err,
        };
    }
}

export function makeJoiValidationResponse(joiValidationResult, res) {
    let joiErrors = false;
    if (joiValidationResult.isJoi) {
        joiErrors = true;
        res.status(422).send({error: "Bad Request with wrong query or body inputs"});
    }
    return joiErrors;
}
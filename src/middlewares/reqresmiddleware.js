export function makeSuccessResponse(status, body, res) {
    res.status(status).send(body);
}

export function makeErrorResponse(status, exception, res, errorMessage) {
    if (exception.stack) {
        res.status(status).send(exception);
    } else {
        res.status(status).send({error: errorMessage});
    }
}
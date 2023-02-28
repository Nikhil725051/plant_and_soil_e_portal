function createError(status, message){
    var error = new Error(message);
    error.status = status
    return error;
}

module.exports = createError;
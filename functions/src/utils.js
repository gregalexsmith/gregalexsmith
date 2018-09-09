function logError(error) {
    if (typeof error === 'string') {
        console.log("ERROR: " + error);
    } else {
        console.log("ERROR: " + error.code);
        console.log("detail: " + JSON.stringify(error));
    }
}

module.exports = {
    logError
}
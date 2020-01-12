function handleError(err, req, res, next) {
    console.error(err.stack);
    console.error(err.message);
    const errors = {
        "NO USER FOUND" : {
            statusReturn: 400,
            writeToLog: "NO USER FOUND!!"
        },
        "PASSWORD MISMATCH" : {
            statusReturn: 400,
            writeToLog: "PASSWORD MISMATCH!"
        },
    };

    let errObj = errors[err.message];

    if (!errObj){
        errObj = {
            statusReturn : 500,
            writeToLog: "General Error"
        }
    }
    res.status(errObj.statusReturn).send('Something broke!:' + errObj.writeToLog)
}

module.exports = {
    handleError
};
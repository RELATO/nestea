let ForbiddenError = require('epilogue').Errors.ForbiddenError;

function userCtrl(User, userResource) {
    userResource.delete.auth((req, res, context) => {
        throw new ForbiddenError("can't delete a user");
    });

    function customEndpoint(req, res) {
        res.status(200);
        res.send('sup internet');
    }

    function notTestedEndpoint(req, res) {
        res.status(200);
        res.send('sup internet you need to test me');
    }

    return {
        customEndpoint: customEndpoint,
        notTestedEndpoint: notTestedEndpoint
    };
}

export = userCtrl;

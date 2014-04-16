var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    cordova = require('cordova');


function Identifier() {}


Identifier.prototype.getIdentifier = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Identifier.getInfo', arguments);
    exec(successCallback, errorCallback, "Identifier", "getIdentifier", []);
};

module.exports = new Identifier();

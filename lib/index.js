const NMFCCodes = require('./NMFCCodes').NMFCCodes;

const lookup = function (nmfc) {
    NMFCCode = NMFCCodes[nmfc];
    if (NMFCCode) {
        return NMFCCode;
    } else {
        return null;
    }
};

exports.lookup = lookup;

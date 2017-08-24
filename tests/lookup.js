#!/usr/bin/env node
const vows = require('vows');
const assert = require('assert');
nmfc = require ('../lib/index');

const tests = {
    'valid NMFC returns object': {
        topic: function () {
            return nmfc.lookup('186590');
        },
        'should find by NMFC': function (nmfc) {
            assert.equal(nmfc.classCode, "85.00");
            assert.equal(nmfc.description, "Electric hand held Power Tools, or parts");
            assert.equal(nmfc.item, "Tools");
            assert.equal(nmfc.nmfc, "186590");
            assert.equal(nmfc.sub, " ");
        }
    },
    'invalid NMFC returns null': {
        topic: function () {
            return nmfc.lookup("11111");
        },
        'returns null when NMFC not found': function (nothing) {
            assert.equal(nothing, null);
        }
    }
};

vows.describe('nmfcCodes').addBatch(tests).export(module);

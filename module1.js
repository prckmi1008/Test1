/**
 * @module //module1
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Module1
 * @extends Montage
 */
exports.Module1 = Montage.specialize(/** @lends Module1# */ {
    constructor: {
        value: function Module1() {
            this.super();
        }
    }
});

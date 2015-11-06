/**
 * Created by Jeremy on 11/1/2015.
 *
 * Generates some random hash strings to be displayed by the hashCodes component
 */
var HashService = (function () {
    function HashService() {
        this.hash = this.getHashes(17);
    }
    HashService.prototype.getHashes = function (rows) {
        this.hash = [];
        for (var ii = 0; ii < rows; ii++) {
            var randHash = '0x' + Array(4 + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, 4).toUpperCase();
            this.hash.push(randHash);
        }
        return this.hash;
    };
    return HashService;
})();
exports.HashService = HashService;
//# sourceMappingURL=hashService.js.map
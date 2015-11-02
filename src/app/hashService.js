/**
 * Created by Jeremy on 11/1/2015.
 *
 * Generates some random hash strings to be displayed by the hashCodes component
 */
var HashService = (function () {
    function HashService() {
        this.hash = [
            "0xF495",
            "0xFACC",
            "0xFACC",
            "0xFACC",
            "0xFACC",
            "0xFACC"
        ];
    }
    HashService.prototype.getHashes = function () {
        return this.hash;
    };
    return HashService;
})();
exports.HashService = HashService;
//# sourceMappingURL=hashService.js.map
/**
 * Created by Jeremy on 11/1/2015.
 */
var WordService = (function () {
    function WordService() {
        this.words = ["WORD1", "WORD2", "WORD3", "WORD4", "WORD5", "WORD6", "WORD7", "WORD8"];
        this.currentWord = "";
    }
    WordService.prototype.onMouseOver = function (event, value) {
        console.log('Mouse over', event, value);
    };
    return WordService;
})();
exports.WordService = WordService;
//# sourceMappingURL=wordService.js.map
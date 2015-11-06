/**
 * Created by Jeremy on 11/1/2015.
 */

export class WordService {
    words:string[];
    currentWord: string;

    constructor(){
        this.words = ["WORD1","WORD2", "WORD3", "WORD4","WORD5","WORD6","WORD7","WORD8"];
        this.currentWord = "";
    }

    onMouseOver(event,value){
        console.log('Mouse over',event,value)
    }


}
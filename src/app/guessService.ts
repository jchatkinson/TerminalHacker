/**
 * Created by Jeremy on 11/1/2015.
 */

export class GuessModel{
    constructor(
        public word:string = "",
        public correctLetters:number = 0,
        public access:string = "DENIED"
    ){}
}

export class GuessService {
    guesses:GuessModel[];

    constructor(){
        this.guesses = [
            new GuessModel("GUESS1",0,"DENIED"),
            new GuessModel("GUESS2",0,"DENIED"),
            new GuessModel("GUESS3",0,"DENIED")
        ];
    }
    addGuess(value:GuessModel):void {
        this.guesses.push(value);
    }
    resetGuesses(){
        this.guesses = [];
    }
}
/**
 * Created by Jeremy on 11/1/2015.
 */

export class GuessModel{
    status:string = "started";
    constructor(
        public word:string = "",
        public matches:number = 0,
        public access:string = ""
    ){}
}

export class GuessService {
    guesses:GuessModel[] = [
        new GuessModel("GUESS1",0,"DENIED"),
        new GuessModel("GUESS2",0,"DENIED"),
        new GuessModel("GUESS3",0,"DENIED")
    ];

    addGuess(value:GuessModel):void {
        this.guesses.push(value);
    }

}
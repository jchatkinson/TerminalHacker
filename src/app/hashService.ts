/**
 * Created by Jeremy on 11/1/2015.
 *
 * Generates some random hash strings to be displayed by the hashCodes component
 */

export class HashService {
    hash:string[];

    constructor(){
        this.hash = [
            "0xF495",
            "0xFACC",
            "0xFACC",
            "0xFACC",
            "0xFACC",
            "0xFACC"
        ];
    }
    getHashes() {
        return this.hash;
    }
}
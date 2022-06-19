import { Tweet } from "./tweet.interface";

export interface Notices {
    notices: Notice[];
}

export interface Notice {
    tipo:    string;
    titular: string;
    image:   string;
    tweets:  Tweet[];
}







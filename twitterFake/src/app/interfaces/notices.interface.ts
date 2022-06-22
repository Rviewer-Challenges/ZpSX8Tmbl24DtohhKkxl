import { TweetElement } from './tweet.interface';

export interface Notices {
    notices: Notice[];
}

export interface Notice {
    id:number;    
    tipo:    string;
    titular: string;
    image:   string;
    tweets:  TweetElement[];
}







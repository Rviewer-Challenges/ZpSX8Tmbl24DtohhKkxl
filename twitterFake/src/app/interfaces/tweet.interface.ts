import { User } from "./User.interface";



export interface Tweet {
    tweets: TweetElement[];
}

export interface TweetElement {
    id:      number;
    tweet:   string;
    user:    User;
    images:  string[];
    link?:    string;
    reply:   number;
    retweet: number;
    likes:   number;
    hashtag: string[];
}


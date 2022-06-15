export interface Tweet {
    tweets: TweetElement[];
}

export interface TweetElement {
    id:      number;
    tweet:   string;
    user:    User;
    images:  string[];
    reply:   number;
    retweet: number;
    likes:   number;
    hashtag: string;
}

export interface User {
    "user-name": string;
    user:        string;
    logo:        string;
}

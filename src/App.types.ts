export type AppProps = {
    title: string
}

export interface Name {
    first: string;
    last: string;
}
export interface Login {
    uuid: string;
}

export interface User {
    name: Name;
    login: Login;
    email: string
}

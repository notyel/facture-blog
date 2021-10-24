export interface geo {
    lat: string;
    lng: string;
}

export interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
}

export interface company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface userBlog {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    phone: string;
    website: string;
    company: company;
}
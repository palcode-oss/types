export enum Perms {
    Student,
    Teacher,
    Admin
}

export interface User {
    email: string;
    displayName: string;
    username: string;
    perms: Perms;
    uid: string;
    schoolId: string;
}

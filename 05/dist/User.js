export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date;
    }
    print() {
        console.log(this.firstName, this.lastName);
    }
}

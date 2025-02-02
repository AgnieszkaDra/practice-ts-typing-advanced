

export class User {
    firstName: string;
    lastName: string;
    createdAt: Date;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date;
    }
    print() {
        console.log(this.firstName, this.lastName);
    }
  }
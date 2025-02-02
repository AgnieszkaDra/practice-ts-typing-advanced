// @ts-check
export function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = new Date();
}
User.prototype.print = function () {
    console.log(this.firstName, this.lastName);
};

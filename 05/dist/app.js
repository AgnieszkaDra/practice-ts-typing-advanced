import { User } from './User';
import { formatDate } from './helpers.js';
const user1 = new User('Marek', 'Kowalski');
console.log(formatDate(user1.createdAt));
const user2 = new User('Adam', 'Kowalski');
console.log(formatDate(user2.createdAt));

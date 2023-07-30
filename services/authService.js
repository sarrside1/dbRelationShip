require('dotenv').config();
// users hardcoded for simplicity, store in a db for production applications
const users = [{username: process.env.AUTH_USERNAME, password: process.env.AUTH_PASSWORD }];


module.exports = authenticate
async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    console.log(user);
    if (user) {
        return true;
    }
    return false;
}

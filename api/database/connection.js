const mongoose = require('mongoose')

async function connect() {
    const db = await mongoose.connect('mongodb+srv://sheshumadhunala1988:W6G8c2fzNl0pNVux@cluster0.5xxde.mongodb.net/');

    console.log('Database Connected !')
    return db;
}

module.exports = connect;
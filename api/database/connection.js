const mongoose = require('mongoose')

async function connect() {
    const db = await mongoose.connect('');

    console.log('Database Connected !')
    return db;
}

module.exports = connect;

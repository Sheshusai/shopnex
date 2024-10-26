
 
const express = require('express')
const connect = require('./database/connection')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const authRouter = require('./routes/auth/auth-routes')

const app = express();
const PORT = process.env.PORT || 5000 


connect().then(()=> {
    try {
        app.listen(PORT, ()=> {
            console.log(`server is listening on port ${PORT}`);
        })
    }
    catch(e) {
        console.log(e);
    }
})
.catch(error => {
    console.log(error)
})


app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());








app.use('/api/auth', authRouter);

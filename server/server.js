//basic server configuration hai
const express= require('express')
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')
//create a data base connection
//ham ek seperate file banake uze imort/use kar skte h idr
mongoose.connect(
    'mongodb+srv://gauravmehra5263:gauravmehra2003@cluster0.n6v103b.mongodb.net/'
    ).then( ()=>console.log("mongoDB connected"))
    .catch((error)=>console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin :  'http://localhost:5173/',
        methods: ['GET' , 'POST' , 'DELETE' , 'PUT'],
        allowedHeaders :[
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ] ,
        credentials:true
    })
    
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log('server is now running on port ${PORT}'))
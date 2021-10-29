const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());
app.set('port', process.env.PORT || 4000);

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) chokeon 204
    credentials: true 
}
app.use(cors(corsOptions));

app.get('/', (req, res)=>{

    console.log(req);

    /*Select no banco*/

    res.send("Aqui!");
})

app.post('/api/class', (req,res)=>{

     /*Inserir no banco*/

    res.send("Armazenou!")
})

app.get('/home', (req, res)=>{
    res.send("Hello world!");
})

app.listen(4000);
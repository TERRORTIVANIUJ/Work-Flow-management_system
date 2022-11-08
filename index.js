import express from 'express';
import cors from 'cors';

const app = express();

app.use("/javaFolder", express.static('./javaFolder/'));
app.use("/css", express.static('./css/'));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());


 
const PORT = process.env.PORT || 6005;
app.listen(PORT, function(){
    console.log('api started on port', PORT)
}) 
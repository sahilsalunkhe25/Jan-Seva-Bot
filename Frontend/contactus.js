const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const port = 80;
const app = express();

main().catch(err => console.log(err));

async function main() {
    // const connect =  mongoose.createConnection('mongodb+srv://sahilsalunkhe25:test@cluster0.o2zdz5m.mongodb.net/jansevacontact?retryWrites=true&w=majority'); 
    await mongoose.connect('mongodb://127.0.0.1:27017/jansevacontact');
    console.log("Connected");

    const contactschema = new mongoose.Schema({
        name: String,
        phone: String,
        email: String,
        query: String,
    });
    
    const contact = mongoose.model('contacts', contactschema); 

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, 'static')));

    // app.get('/contactus', (req, res)=>{
    //     res.status(200).sendFile(path.join(__dirname, 'contactus.html'));
    // });

    app.post('/contactus', (req, res) => {
      var myData = new contact(req.body);
      console.log(req.body)
      myData.save()
        .then(() => {
          // res.send("<script>alert('Your contact info has been saved.'); window.location.href='/';</script>");
          res.send("submitted");
          return;
        })
        .catch(() => {
          res.status(400).send("Item could not be saved");
          return;
        });
    });
    
    app.use(cors());


    app.listen(port, ()=>{
        console.log(`The application started successfully on port ${port}`);
    });
}

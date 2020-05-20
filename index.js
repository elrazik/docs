const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const word = require('./scripts/word')
const pdf = require('./scripts/pdf')

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/word',function(req,res){
    word.word()
    res.redirect('/')
})
router.get('/pdf',function(req,res){
    pdf.pdf()
    res.redirect('/')
})

app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
const express = require('express');
const router = express.Router();
const AuthorModel = require('../model/Person');
const BooksModel = require('../model/Story');
const EditionModel = require('../model/Edition');

/* GET home page. */
router.post('/book', async function (req, res, next) {
    console.log(req.body);
    const {title} = req.body;
    await BooksModel.findOne({title: title}).populate([{path:'author'},{path:'edition'}])
        .then(data=>{
            if(data) {
                res.json(JSON.stringify(data))
            }else
             res.json(JSON.stringify({data:null}));
        });
    // console.log(title);
})

router.get('/books', function(req, res, next) {
  // console.log(req.body);
  BooksModel.find({})
      .then(data=>{
        if (data){
          res.json(data);
          // console.log(data);
        }
      })
      .catch(err=>console.log(err));
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;


// ,{new:true}
//, populate:[{path:'author'}]
//, populate:{path:'author'}
//.populate([{path:'author'},{path:'edition'}])
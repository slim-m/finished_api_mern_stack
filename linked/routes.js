const express = require('express')
const router = express.Router()
const Article = require('../models/article')

 router.get('/', async (req, res) =>{
    try {
        const article = await Article.find()
        res.json(article)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
   });

   //single article

   router.get('/:articleId',async(req,res)=>{
    try { 
        //res.json(req.params.id);
        const article = await Article.findOne({'_id':req.params.articleId})
        res.json(article)
    } catch (error) {
        res.status(409).json(error)
    }
})



router.post('/',async (req, res) => {
 /*    console.log(req.body); */
 const article = new Article({
    title: req.body.title,
    author: req.body.author,
    comments:req.body.comments
  })
  try {
    const newarticle = await article.save()
    res.status(201).json(newarticle)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

router.delete('/:articleId', async (req, res) => {
    try {
      const removeArticle = await Article.remove({ _id: req.params.articleId});
      res.json({ message: 'Article removed ' });
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  });

  router.patch('/:articleId', async (req,res)=>{
      
/*    try{

    const updateArticle = await Article.updateMany(
        {_id: req.params.articleId},
        { $set:{title:req.body.title}},
        { $set:{author:req.body.author}},
        { $set:{comments:req.body.comments}} 


    );
        res.json(updateArticle);

    } catch (err) {

        res.json({ message :err})

    } */

    Article.updateMany({ _id : req.params.articleId },{$set : req.body })
    .then(()=>{
        res.json("oumourek wwadh7a")
    }).catch(err =>{
        res.json(err)
    })


  })

/*  trouver une seul article by titre ou ssimple id n'est pas ID MONGO

  async function getSubscriber(req, res, next) {
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.subscriber = subscriber
  next()
} */

   module.exports = router 

   /* router.post('/', async (req, res) =>{
    
    console.log(req.body);
    
    });
 
 
    module.exports = router
 */


  
/* router.get('/contact', function (req, res) {
      res.render('contact');
    });
  
router.get('/art', function (req, res) {
      res.render('article');
    });

    module.exports = router */
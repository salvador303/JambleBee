var express = require('express');
var router = express.Router();
var request = require('request')
var videos = require('./videos');

    
    
    /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/videos/download/:id', videos.downloadById); 

module.exports = router;
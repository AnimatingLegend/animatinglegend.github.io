var express = require('express');
var router = express.Router();

// === home page === \\
router.get('/', function(req, res, next) {
     res.render('index', { title: 'Home | animatinglegend.io' });
});

// === projects page === \\
router.get('/projects', function(req, res, next) {
     res.render('projects', { title: 'Projects | animatinglegend.io'});
});

// === blog page === \\
router.get('/blog', function(req, res, next) {
     res.render('blog', { title: 'Blog | animatinglegend.io'});
});

module.exports = router;
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/apistate', function(req, res) {
    res.json({ status:1, message:"Api is live" });
});

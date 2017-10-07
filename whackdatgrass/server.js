var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var address = require("./models/address");

var mongoose = require('mongoose');

var port = process.env.PORT || 8080;

// configuring the app to use bodyParser();  ** to get data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Putting the routes here because I am not really understanding the file structure completely.

var router = express.Router();


// API ROUTES
//==================================//
router.use(function( req, res, next) {
  console.log('something is happening Probably a post');
  next();
});

router.get('/', function ( req , res ) {
    res.json( { message: 'Ape E Eye is working' } );  // @ localhost:8080/api
});

router.route('/address')

    
    .post(function(req, res) {

        var address = new address();     
        address.address = req.body.address;  
        
        address.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'address created!' });
        });

    });

  



    


router.route('/address/:address_id')

  .get(function(req, res) {
        address.findById(req.params.address_id, function(err, address) {
            if (err)
                res.send(err);
            res.json(address);
        });
    })

    .put(function(req, res) {
        address.findById(req.params.address_id, function(err, bear) {

            if (err)
                res.send(err);

            address.address = req.body.address; 

            // save the bear
            address.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'address updated!' });
            });

        });
    })

    .delete(function(req, res) {
        address.remove({
            _id: req.params.address_id
        }, function(err, address) {
            if (err)
                res.send(err);

            res.json({ message: 'deleted' });
        });
    });

















app.use('/api', router);








//mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whackdatgrass",
  {
    useMongoClient: true
  }
);






app.listen( port );
console.log(' Grass gets whacked @ ' + port );
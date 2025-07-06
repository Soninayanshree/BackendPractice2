var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
//connect-flash  create & use
// router.get('/', function(req, res) {
//   res.render('index');
// });

// router.get('/failed', function(req, res) {
//   req.flash("age" , 15);
//   req.flash("harsh" , 25);
//   res.send('bangaya');
// });

// router.get('/checkkro', function(req, res) {
//   console.log(req.flash("age") ,req.flash("harsh"));
//   res.send('check kro be ke console per ');
// });

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "nayan",
    nickanme: "shree",
    description: "innocent girl",
    categories: ["simple", "caring", "emotional"],
  });
  res.send(userData);
});
router.get("/find", async function (req, res) {
  // case-senstive search
  //here this operators '^' used for starting and '$' is used for ending and '^ $' used for extact match
  // const regex = new RegExp("^nAyan$", "i");
  // let finduser = await userModel.find({username : regex});

  //find doc where array filed contains all set of values
  //here we use $all opertor to search set values in all doc array 
  // let finduser = await userModel.find({categories : { $all : ["loving" , "caring"]}})

  //specific date range search
  //here we use $gte greater than or equal to and $lte less than or equal to operator used
  // var date1 = new Date('2025-07-05');
  // var date2 = new Date('2025-07-06');
  // let finduser = await userModel.find({datecreated : { $gte : date1, $lte : date2 }});

  // filter data based on  existence field
  //here we use $exists operator with values true or false
  // let finduser = await userModel.find({datecreated : { $exists : true }});
  
  //filter data based on sepecific field length 
  //fro this we use $expr expression ,$and and inside this and we use $gte and $late operator inside this we use $strLenCP
  let finduser = await userModel.find({
    $expr : {
      $and : [
        { $gte : [{ $strLenCP : '$username'}, 0]},
        { $lte : [{ $strLenCP : '$username'}, 15]},
      ]
    }
  });
  res.send(finduser);
});

module.exports = router;

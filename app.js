var express = require("express");
var app = express();
var bodyPaser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB     = require("./seeds");


seedDB();
// mongodb setup
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// connecting to the database
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyPaser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.get("/", function(req, res){
    res.redirect("/campgrounds");
});


// INDEX - show all campgrounds
app.get("/campgrounds", function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});


// CREATE - add new campgrounds to DB
app.post("/campgrounds", function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});


// NEW - show for to create new campground
app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});


// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // Find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            // render show template with that campground
            res.render("show", {campgrounds: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
    console.log("Go to http://localhost:3000");
});

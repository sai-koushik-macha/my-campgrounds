var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1521255450884-b3e8e92cd615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1544239649-4238bf7bd7d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhbXBncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                Campground.comments.push(comment);
                                Campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });

    // add a few comments
}

module.exports = seedDB;

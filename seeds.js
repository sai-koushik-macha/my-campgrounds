const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1521255450884-b3e8e92cd615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1544239649-4238bf7bd7d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhbXBncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
];

function seedDB() {
    // Remove all campgrounds
    Campground.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach((seed) => {
            Campground.create(seed, (err, campground) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer",
                        },
                        (err, comment) => {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        }
                    );
                }
            });
        });
    });

    // add a few comments
}

module.exports = seedDB;

var express = require("express")
var app = express()



app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        { name: "Salman Creek", image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        { name: "Granite Hill", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        { name: "Mountain Goat's", image: "https://images.unsplash.com/photo-1521255450884-b3e8e92cd615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
    ];
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
    console.log("Go to http://localhost:3000");
});

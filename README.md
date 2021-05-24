# Refactor Mongoose Code
* Create a models directory
* Use models.exports
* Require everything correctly!

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our errors go away!
* Display comments on campgrounds show page


# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESFUL ROUTES


| Name      | Path              | HTTP Verb | Purpose                                           | Mongoose Method           |
| ---       | ---               | ---       | ---                                               | ---                       |
| INDEX     | /dogs             | GET       | List all dogs                                     | DOG.find()                |
| NEW       | /dogs/new         | GET       | Show new dog form                                 | N/A                       |
| CREATE    | /dogs             | POST      | Create a new dog, then redirect somewhere         | Dog.create()              |
| SHOW      | /dogs/:id         | GET       | Show info about one specfic dog                   | Dog.findById()            |


INDEX       /campgrounds
NEW         /campgrounds/new
CREATE      /campgrounds
SHOW        /campgrounds/:id


NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments        POST


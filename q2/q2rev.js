
var _u = require('./node_modules/lodash/lodash.js'); 
var _ = require('./node_modules/underscore/underscore.js');

var paths = [
 "animals.dogs.poodle",
 "animals.cats.tabby",
 "animals.cats.siamese",
 "animals.dogs.labrador",
 "animals.dogs.hound",
 "plants.trees",
 "animals.birds.parrot.grey"];

arrangeIntoTree(paths);

function prettyPrint(tree, level) {
    if (tree.children.length > 0) {
        level = level + " "
        _.each(tree.children, function(myobj) {
            console.log(level, myobj.name);
            prettyPrint(myobj, level);
        });
    }
}

function arrangeIntoTree(paths) {
    console.log("root")
    var tree = [];

    _.each(paths, function(path) {

        var pathParts = path.split('.');
        var currentLevel = tree; // initialize currentLevel to root
        _.each(pathParts, function(part) {
            // check to see if the path already exists.
            var existingPath = _.findWhere(currentLevel, {
                name: part
            });

            if (existingPath) {
                currentLevel = existingPath.children;
            } else {
                var newPart = {
                    name: part,
                    children: [],
                }

                currentLevel.push(newPart);
                currentLevel = newPart.children;
            }
        });
    });

    //cb(tree);
    
     _.each(tree, function(myobj) {
        var myObj = JSON.stringify(myobj);
        
        console.log(" ", myobj.name)
        prettyPrint(myobj, "  ");
    });
}


module.exports = {
   arrangeIntoTree : arrangeIntoTree
}
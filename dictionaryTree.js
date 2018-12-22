// A dictionary tree to store and check usernames

// User queries a string. Returns true if the name already exists
// Users saves a name. Checks the above and if false then enters the name

// TODOS
// make into an object with methods
// Export so that only a single object exist across imports
// Make it so that we cant add the same name twice. Report back the error.
// Check this  distinguishes between upper and lower cases
// make a bunch of unit tests.


// function NameDB() {
//     this.names = {};
// }

let names = {};

const addName = (name) => {
    
    let chars = name.split('');

    if(namesExists(name)) {
        console.log(`Your name ${name} already exists`);
        return;
    }

    // add a space onto the end of each name so that if only 'bob' already 
    // exists then we can say that 'bo' does not exist
    chars.push(' ');

    let currentObj = names;

    chars.forEach((_, index) => {
        if(!currentObj) {
            throw new Error ('There should always be a current name object');
        }
        
        // if we don't have a letter create an object for it
        if(!currentObj.hasOwnProperty(chars[index])) {
            currentObj[chars[index]] = {};
        }

        // Set currentObj to be the next level down, 
        // but only if there are still chars left to check
        if(index < (chars.length - 1)) {
            currentObj = currentObj[[chars[index]]]
        }
    });
};

addName('bob');
addName('bob');

const nameExists = (name) => {
    
    let chars = name.split('');

    // Add a space onto the end of each name so that if only 'bob' already 
    // exists then we can say that 'bo' does not exist.
    chars.push(' ');

    let currentObj = names;
    let isWordFound = false;

    chars.forEach((_, index) => {

        if(currentObj === undefined) {
            throw new Error ('There should always be a current name object');
        }

        // If the letter exists set up for another level down then we have it.
        if(currentObj[chars[index]]) {

            // Set currentObj to be the next level down, 
            // but only if there are still chars left to check
            if(index < (chars.length - 1)) {
                currentObj = currentObj[[chars[index]]]
            } else {
                // we got all the way throgh chars and each was found
                isWordFound = true;
            }
        } 
        // If there are still letters to find but no more levels in the array
        // then our full word is not there and so return false.
        else if(!currentObj[chars[index]] && index <= (chars.length - 1) ) {
            isWordFound = false;
            currentObj = {};
        }
    });

    return isWordFound;
}

console.log(names);
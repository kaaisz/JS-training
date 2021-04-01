console.log('start');

function loginUser(email, password, callback) { // callback is the function
    setTimeout(() => {
        console.log("Now we have the data");
        // return { userEmail: email } - not gonna work
        // use callback instead below
        callback( { userEmail: email } )
    }, 5000);
}

const user = loginUser('john@example.com', 123456, (user) => {
    console.log(user);
});

// this will show undefined
console.log(user);

console.log('finish');
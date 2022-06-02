//2U Assessment by Codesignal

// Debug your banana constructor here. Run the test cases first to see the test feedback

// Codewriting

// Using the following guidelines, the constructor function below should create a "Banana" object. The starter code is broken, and it's up to you to debug the code in order to match the following test cases.

// All bananas are yellow
// All bananas have a length and diameter which are set at instantiation
// Bananas also have an isYummy property which defaults to true, because all bananas are yummy.
// All bananas have the ability to rot, which toggles isYummy to false.
// [execution time limit] 30 seconds

// function Banana = (diameter) => {
//     this.color = 'yellow';
//     this.length = length;
//     this.diameter = diameter;
//     this.isYummy;
//     let rot = function() {
//         this.isYummy = false;
//     }
// };

// module.exports = Banana;

//Solution:

function Banana(diameter, length) {
    this.color = 'yellow';
    this.length = length;
    this.diameter = diameter;
    this.isYummy = true;

    this.rot = () => {
        this.color = 'brown';
        this.isYummy = false;
    };
}

const myBanana = new Banana(10, 11);
const rotBanana = new Banana(20, 30);
rotBanana.rot();

console.log(myBanana);
console.log(rotBanana);

module.exports = Banana;

//-----------------------------------

// Create a GET route at /api/pets which will return all members of the pets collection from MongoDB.

// [execution time limit] 10 seconds

// const MONGO_URI =
//     'mongodb+srv://admin:admin123@cluster0.ztj3m.mongodb.net/fsf_assessment?retryWrites=true&w=majority';

// const express = require('express');
// const app = express();
// const { MongoClient } = require('mongodb');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const client = new MongoClient(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// app.get('/api/pets', (req, res) => {
//     let db = client.db('fsf_assessment');
//     // TODO: Set up your GET route here
// });

// module.exports = {
//     // for testing purposes
//     open: async () => {
//         await client.connect();
//         const server = app.listen(3000);
//         return server;
//     },
//     close: async (server) => {
//         server.close();
//         await client.close();
//     },
// };

const MONGO_URI =
    'mongodb+srv://admin:admin123@cluster0.ztj3m.mongodb.net/fsf_assessment?retryWrites=true&w=majority';

const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/api/pets', (req, res) => {
    let db = client.db('fsf_assessment');
    // TODO: Set up your GET route here
    const pets = await db.find({})
    res.json(pets)
});

module.exports = {
    // for testing purposes
    open: async () => {
        await client.connect();
        const server = app.listen(3000);
        return server;
    },
    close: async (server) => {
        server.close();
        await client.close();
    },
};

//-------------------------------------------

// Codewriting

// Instructions
// Debug the state variable greeting so that it correctly uses the React.useState() hook with an initial value of "Welcome the following students to class!". Create another state variable called group using the React.useState() hook with an initial value of [Tamar, Grace, John]. Modify the JSX to render the greeting and group values onto the page, as follows:

// Welcome the following students to class!

// Tamar
// Grace
// John
// Please Note:

// The text of the greeting and group variables should be identical to the initial values shared in the directions.
// Do not alter the className or id tags
// Use React.useState() rather than useState()
// Do not attempt to import React, { useState } in the main.jsx file
// [execution time limit] 60 seconds

{
    /* <html>
    <head>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel" src="main.jsx"></script>
        <link rel="stylesheet" href="main.css">
    </head>
    <body class="main">
        <div id="root"></div>
    </body>
</html> */
}



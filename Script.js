var database =[
    {
        username: "Hari",
        password: "Secret"
    },
    {
        username: "Krish",
        password: "12345"
    },
    {
        username: "Messi",
        password: "leftfoot"
    }
];

var newsFeed =[
    {
        username: "Nike",
        tagline: "Just do it"
    },
    {
        username: "Apple",
        tagline: "Think Different"
    }
];

var userNamePrompt = prompt("Enter Username");
var passwordPrompt = prompt("Enter Password");

function validUser(name,pass)
{
    for(var i=0; i<database.length; i++)
    {
        if(database[i].username === name && database[i].password === pass)
        {
            return true;
        }
    }
    return false;
}

function login(name,pass)
{
    if(validUser(name,pass))
    {
        console.log(newsFeed);
    }
    else
    {
        console.log("Invalid Creds");
    }
}

/* function login(name,pass){
    if(name === database[0].username && pass === database[0].password)
    {
        console.log(newsFeed);
    }
    else
    {
        console.log("Improper Details");
    }
} */

login(userNamePrompt,passwordPrompt);
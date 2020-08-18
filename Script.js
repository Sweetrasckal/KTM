var database =[
    {
        username: "Hari",
        password: "Secret"
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

function login(name, pass){
    if(name === database[0].username && pass === database[0].password)
    {
        console.log(newsFeed);
    }
    else
    {
        console.log("Improper Details");
    }
}

login(userNamePrompt, passwordPrompt);
// DOM = DOCUMENT OBJECT MODEL
// object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

const username="";
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent+=username ===""?"Guest": username;
//Username is empty then print welcome guest o/w print welcome username.
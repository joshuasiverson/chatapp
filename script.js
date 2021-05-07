//This is where Firebase config will go
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaH-aevPpSUuQN7FCuQFQfueO0by5ds9E",
    authDomain: "chatapp-50090.firebaseapp.com",
    databaseURL: "https://chatapp-50090-default-rtdb.firebaseio.com",
    projectId: "chatapp-50090",
    storageBucket: "chatapp-50090.appspot.com",
    messagingSenderId: "863367374387",
    appId: "1:863367374387:web:bd87bce52bac0779f02546"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//All our variable declarations
let database = firebase.database();
let name = document.querySelector("#username");
let input = document.querySelector("#message");

//Code to PUSH data to the database
input.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
     database.ref("messages").push({
       name: name.value, 
       message: input.value
     })
   input.value="";
   }
 })

//Code to RETRIEVE data from the database
database.ref("messages").on('child_added', function(message) {
    let messages = document.querySelector("#messages");
    let name = message.val().name;
    let value = message.val().message;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "@" + name;
    let p = document.createElement("p");
    p.innerHTML = value; 
    div.appendChild(span);
    div.appendChild(p);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; 
  })

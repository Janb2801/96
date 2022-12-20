//YOUR FIREBASE LINKS 
var firebaseConfig = {
      apiKey: "AIzaSyDux9RgkM1cJ1ng_8vrcfy8QTOj4rB7BJo",
      authDomain: "classtest-2e44e.firebaseapp.com",
      databaseURL: "https://classtest-2e44e-default-rtdb.firebaseio.com",
      projectId: "classtest-2e44e",
      storageBucket: "classtest-2e44e.appspot.com",
      messagingSenderId: "601367789702",
      appId: "1:601367789702:web:bec965932f0080a8599107"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
function send(){
msg=document.getElementById("MSG").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0                   

})      
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
var firebaseConfig = {
      apiKey: "AIzaSyBJdeCixn2hsa0gaehkvJ9adX8YQohdCz8",
      authDomain: "kwitter-d4fe9.firebaseapp.com",
      databaseURL: "https://kwitter-d4fe9-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4fe9",
      storageBucket: "kwitter-d4fe9.appspot.com",
      messagingSenderId: "1053175854902",
      appId: "1:1053175854902:web:d6af6fe408dc80e5b96597"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

function Addroom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"   
      });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

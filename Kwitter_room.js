var firebaseConfig = {
  apiKey: "AIzaSyC-9jgJBU2jTkBNZhxYiypdhFRJ9KkHuwY",
  authDomain: "letschat-web-app-11abb.firebaseapp.com",
  databaseURL: "https://letschat-web-app-11abb-default-rtdb.firebaseio.com",
  projectId: "letschat-web-app-11abb",
  storageBucket: "letschat-web-app-11abb.appspot.com",
  messagingSenderId: "877987888394",
  appId: "1:877987888394:web:717164248e371b6b848ef3"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username_key");
document.getElementById("user_name").innerHTML = "Welcome " + username;

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding main folder"
  });
  localStorage.setItem("roomname_key", room_name);
  window.location = "Kwitter_message.html";
}


function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
    document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log(Room_names);

        //Start code
        div_tag = '<div class="Room_names" id="' + Room_names + '" onclick="redirectToRoomName(this.id)">' + Room_names + '</div><hr>';
        document.getElementById("output").innerHTML += div_tag;
        //End code
      });
    });
}
getData();


function redirectToRoomName(room_id) {
  localStorage.setItem("roomnname_key", room_id);
  window.location = "Kwitter_message.html";
}
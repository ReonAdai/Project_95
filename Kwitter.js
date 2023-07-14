function addUser() {
    user_name = document.getElementById("username").value;
    console.log(user_name);
    localStorage.setItem("username_key", user_name);
    console.log("2");
    window.location = "Kwitter_room.html";
}
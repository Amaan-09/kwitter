//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDmGnkrfVSIN-C4DquBU6iuTb3bUrcKtUI",
      authDomain: "kwitter-3adbc.firebaseapp.com",
      databaseURL: "https://kwitter-3adbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-3adbc",
      storageBucket: "kwitter-3adbc.appspot.com",
      messagingSenderId: "712930282756",
      appId: "1:712930282756:web:384554a533f787eb229451",
      measurementId: "G-1S4TC0JNGW"
    };
    firebase.initializeApp(firebaseConfig);
    room_name= localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

function send() {
      msg= document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
}
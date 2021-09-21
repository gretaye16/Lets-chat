
  // Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyDu8cN2cDkby6Fk7RJM9Ca2A3aAzP-APK4",
      authDomain: "kwitter-f90ea.firebaseapp.com",
      databaseURL: "https://kwitter-f90ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-f90ea",
      storageBucket: "kwitter-f90ea.appspot.com",
      messagingSenderId: "289856761120",
      appId: "1:289856761120:web:3f62d577a0316429ecfb45"
    };
  
    // Init]=ialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name: user_name,message:msg,like:0
      })
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDc7Z27t7_ufcnVV4ajhZbbPfCF1A7rKyQ",
      authDomain: "kwitter-1a424.firebaseapp.com",
      databaseURL: "https://kwitter-1a424-default-rtdb.firebaseio.com",
      projectId: "kwitter-1a424",
      storageBucket: "kwitter-1a424.appspot.com",
      messagingSenderId: "843326622857",
      appId: "1:843326622857:web:0db76697ff68bb67030a58",
      measurementId: "G-GZC4Q9X7JR"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

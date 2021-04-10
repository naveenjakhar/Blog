import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyC8bKPMJ-jhhY6WUsWCga8CR5XKQ2ad1yA",
  authDomain: "my-blog-88a97.firebaseapp.com",
  projectId: "my-blog-88a97",
  storageBucket: "my-blog-88a97.appspot.com",
  messagingSenderId: "111527265125",
  appId: "1:111527265125:web:00080b8e0700fd474f978c",
  measurementId: "G-YMRSKKPNL1"
};
  
  const fire=firebase.initializeApp(firebaseConfig);


  firebase.analytics();
  export default fire;
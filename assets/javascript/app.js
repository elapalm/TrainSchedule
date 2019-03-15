  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGm-3rFsQ16L3VjOqwR3mKtVrkd_QopnQ",
    authDomain: "trainschedule-a32ce.firebaseapp.com",
    databaseURL: "https://trainschedule-a32ce.firebaseio.com",
    projectId: "trainschedule-a32ce",
    storageBucket: "trainschedule-a32ce.appspot.com",
    messagingSenderId: "904088002713"
  };
  firebase.initializeApp(config);

  var trainDatabase = firebase.daabase();

  // Button for adding the next train

  $("#train-button"),on("click", function(event){
    event.preventDefault();

    var trainName = $("train-name").val().trim();
    var trainDestination = $("train-destination").val().trim();
    var trainFrequency = $("train-frequency").val().trim();
    var nextArrival = $("train-next-arrival").val().trim();
    var trainMinAway = $("minutes-away").val().trim();
  })

  // Empty array to hold variables before pushing them to the database

  var trainVars = {
    trainName,
    trainDestination,
    trainFrequency,
    nextArrival,
    trainMinAway
  };

  // Push to Database

  database.ref().push(trainVars);
  console.log(trainVars.trainName);
  console.log(trainVars.trainDestinatin);
  console.log(trainVars.trainFrequency);
  console.log(trainVars.nextArrival);
  console.log(trainVars.trainMinAway);
  
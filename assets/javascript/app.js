// ADD DOCUMENT.READY!!!!!!
$(document).ready(function () {

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

  var database = firebase.database();


  // Button for adding the next train

  $("#train-button"), on("click", function (event) {
    event.preventDefault();
    //use let to create variables 
    var trainName = $("train-name").val().trim();
    var trainDestination = $("train-destination").val().trim();
    var trainFrequency = $("train-frequency").val().trim();
    var nextArrival = $("train-next-arrival").val().trim();
    var trainMinAway = $("minutes-away").val().trim();
      });

    // Push to Database

    database.ref().push({
      trainName: trainName,
      trainDestination: trainDestination,
      trainFrequency: trainFrequency,
      nextArrival: nextArrival,
      trainMinAway: trainMinAway,
    });

    console.log(trainVars.trainName);
    console.log(trainVars.trainDestination);
    console.log(trainVars.trainFrequency);
    console.log(trainVars.nextArrival);
    console.log(trainVars.trainMinAway);

    var newEntry = $("<tr>").text(trainName);
    $("<tr>").text(trainName),
      $("<tr>").text(trainDestination),
      $("<tr>").text(trainFrequency),
      $("<tr>").text(nextArrival),
      $("<tr>").text(trainName),


    $("#train-table > tbody").append(newRow);
});


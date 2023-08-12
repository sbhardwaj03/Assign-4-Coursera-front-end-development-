(function () {
  // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
  // See Lecture 52, part 2
  var speakWord = "Hello";

  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Rewrite the 'speak' function and attach it to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;
})();

(function () {
  // STEP 8: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
  var speakWord = "Good Bye";

  // STEP 9: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 10: Rewrite the 'speak' function and attach it to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 11: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;
})();

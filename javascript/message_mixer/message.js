const MessageMixer = require('./messageMixer.js');

function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
  }

  displayMessage();


//   console.log(MessageMixer.palindrome('andrew'));

console.log(MessageMixer.pigLatin('Andrew is up early.', 'l'));

  
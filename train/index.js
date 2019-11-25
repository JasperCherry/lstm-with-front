const brain = require('brain.js');
const fs = require('fs');



const trainingData = [
  'My message is that we will be watching you.',
  'This is all wrong. I shouldnt be up here. I should be back in school on the other side of the ocean.',
  'Yet you all come to us young people for hope. How dare you!',
  'You have stolen my dreams and my childhood with your empty words. And yet Im one of the lucky ones.',
  'People are suffering. People are dying. Entire ecosystems are collapsing.',
  'We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you!',
  'For more than 30 years, the science has been crystal clear.',
  'Fifty percent may be acceptable to you. But those numbers do not include tipping points.',
  'How dare you pretend that this can be solved with just business as usual and some technical solutions?',
  'There will not be any solutions or plans presented in line with these figures here today, because these numbers are too uncomfortable.',
  'You are failing us. But the young people are starting to understand your betrayal.',
  'And if you choose to fail us, I say: We will never forgive you.',
  'The eyes of all future generations are upon you.',
  'Right here, right now is where we draw the line. The world is waking up.',
];
for (let x = 0; x < trainingData.length; x += 1) {
  trainingData[x] = trainingData[x].toLowerCase();
}
console.log(trainingData);



const net = new brain.recurrent.LSTM();
const result = net.train(trainingData, {
  iterations: 1000000,
  log: details => console.log(details),
  errorThresh: 0.011,
});
console.log(result);

const json = net.toJSON();
fs.writeFile('model.js', JSON.stringify(json), 'utf8', () => {
  console.log('Written file');
});

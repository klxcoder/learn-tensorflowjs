import { TRAINING_DATA } from './data.js';

const INPUTS = TRAINING_DATA.inputs;

console.log('INPUTS = ', INPUTS)

const OUTPUTS = TRAINING_DATA.outputs;

console.log('OUTPUTS = ', OUTPUTS)

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index within range
    [array[i], array[j]] = [array[j], array[i]];   // Swap elements
  }
}

fisherYatesShuffle([INPUTS, OUTPUTS])
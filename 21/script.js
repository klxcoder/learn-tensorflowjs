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

const tfmin = (arr) => {
  let minSize = arr[0][0]
  let minBedroom = arr[0][1]
  arr.forEach((row) => {
    if (row[0] < minSize) minSize = row[0]
    if (row[1] < minBedroom) minBedroom = row[1]
  })
  return [minSize, minBedroom]
}

const tfmax = (arr) => {
  let maxSize = arr[0][0]
  let maxBedroom = arr[0][1]
  arr.forEach((row) => {
    if (row[0] > maxSize) maxSize = row[0]
    if (row[1] > maxBedroom) maxBedroom = row[1]
  })
  return [maxSize, maxBedroom]
}

const getArrSubtractMin = (_arr, min) => {
  const arr = []
  _arr.forEach((row) => {
    arr.push([row[0] - min[0], row[1] - min[1]])
  })
  return arr
}

const rest = () => {

  // Input feature Array of Arrays needs 2D tensor to store.

  // Output can stay 1 dimensional.

  const OUTPUTS_TENSOR = tf.tensor1d(OUTPUTS);

  // Function to take a Tensor and normalize values

  // with respect to each column of values contained in that Tensor.

  function normalize(arr, _min, _max) {

    const result = tf.tidy(function () {

      // Find the minimum value contained in the Tensor.

      const MIN_VALUES = _min || tf.tensor(tfmin(arr));

      // Find the maximum value contained in the Tensor.

      const MAX_VALUES = _max || tf.tensor(tfmax(arr));

      // Now subtract the MIN_VALUE from every value in the Tensor

      // And store the results in a new Tensor.

      const TENSOR_SUBTRACT_MIN_VALUE = tf.tensor(getArrSubtractMin(arr, tfmin(arr)));

      // Calculate the range size of possible values.

      const RANGE_SIZE = tf.sub(MAX_VALUES, MIN_VALUES);

      // Calculate the adjusted values divided by the range size as a new Tensor.

      const NORMALIZED_VALUES = tf.div(TENSOR_SUBTRACT_MIN_VALUE, RANGE_SIZE);



      return { NORMALIZED_VALUES, MIN_VALUES, MAX_VALUES };

    });

    return result;

  }

  // Normalize all input feature arrays and then 

  // dispose of the original non normalized Tensors.

  const FEATURE_RESULTS = normalize(INPUTS);

  console.log('Normalized Values:');

  FEATURE_RESULTS.NORMALIZED_VALUES.print();

  console.log('Min Values:');

  FEATURE_RESULTS.MIN_VALUES.print();

  console.log('Max Values:');

  FEATURE_RESULTS.MAX_VALUES.print();

  // Now actually create and define model architecture.
  const model = tf.sequential()

  // We will use one dense layer with 1 neuron (units) and an input of
  // 2 input feature values (representing house size and number of rooms)

  model.add(tf.layers.dense({ inputShape: [2], units: 1 }))

  model.summary()

  train()

  async function train() {
    const LEARNING_RATE = 0.01; // Choose learning rate that's suitable for the data we are using.

    // Compile the model with the defined learning rate and specify a loss function to use.
    model.compile({
      optimizer: tf.train.sgd(LEARNING_RATE),
      loss: 'meanSquaredError',
    })

    // Finally do the training itself.
    let results = await model.fit(FEATURE_RESULTS.NORMALIZED_VALUES, OUTPUTS_TENSOR, {
      validationSplit: 0.15, // Take aside 15% of the data to use for validation testing.
      shuffle: true,         // Ensure data is shuffled in case it was an order
      batchSize: 64,         // As we have a lot of training data, batch size is set to 64.
      epochs: 10,            // Go over the data 10 times!
    })

    OUTPUTS_TENSOR.dispose()
    FEATURE_RESULTS.NORMALIZED_VALUES.dispose()

    console.log("Average error loss: " + Math.sqrt(results.history.loss[results.history.loss.length - 1]))
    console.log("Average validation error loss: " + Math.sqrt(results.history.val_loss[results.history.val_loss.length - 1]))

    evaluate(); // Once trained evaluate the model.
  }

  function evaluate() {
    // Predict answer for a single piece of data.
    tf.tidy(function () {
      let newInput = normalize([[750, 1]], FEATURE_RESULTS.MIN_VALUES, FEATURE_RESULTS.MAX_VALUES)

      let output = model.predict(newInput.NORMALIZED_VALUES)
      output.print()

      // Finally when you no longer need to make any more predictions,
      // clean up remaining Tensors.
      FEATURE_RESULTS.MIN_VALUES.dispose()
      FEATURE_RESULTS.MAX_VALUES.dispose()
      model.dispose()

      console.log(tf.memory().numTensors)
    })
  }
}

rest()
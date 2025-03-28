const randFunction30 = () => {
  return 30;
}

const randFunction31 = () => {
  return 31;
}

const randFunction32 = () => {
  return 32;
}

tf.rand([5], randFunction30).print(); // [30, 30, 30, 30, 30]

tf.rand([2, 3], randFunction31).print();
// [[31, 31, 31],
//  [31, 31, 31]]

tf.rand([2, 2, 2], randFunction32).print();
// [[[32, 32],
//   [32, 32]],
//  [[32, 32],
//   [32, 32]]]

function randFunctionBinary() {
  return Math.random() < 0.5 ? 0 : 1;
}

tf.rand([3, 4], randFunctionBinary).print()
// [[0, 1, 1, 0],
//   [0, 0, 0, 0],
//   [1, 1, 1, 1]]

tf.rand([3, 4], () => Math.random()).print()
// [[0.6163216, 0.4061178, 0.5180693, 0.2011063],
//   [0.3759019, 0.8650147, 0.2850605, 0.5753669],
//   [0.7374136, 0.5712001, 0.3047007, 0.3473371]]
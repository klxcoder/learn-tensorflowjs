const a = tf.tensor1d([1, 2]);
const b = tf.tensor1d([3, 4]);
const c = tf.tensor1d([5, 6]);
tf.stack([a, b, c]).print();
// [[1, 2],
//   [3, 4],
//   [5, 6]]
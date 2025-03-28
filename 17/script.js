//
console.log(tf.scalar(30).shape) // []
console.log(tf.tensor1d([1, 2, 3, 4]).shape) // [4]
//
console.log(tf.tensor(30).shape) // []
console.log(tf.tensor([1, 2, 3, 4]).shape) // [4]
//
console.log(tf.tensor([[1, 2, 3, 4]]).shape) // [1, 4]
console.log(tf.tensor([[1], [2], [3], [4]]).shape) // [4, 1]
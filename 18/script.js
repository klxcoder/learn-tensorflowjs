{
  console.log('-----------Example 1--------------')
  // a
  const a = tf.tensor([1, 2, 3])
  console.log(a.shape) // [3]
  // b
  const b = tf.tensor([4, 5, 6])
  console.log(b.shape) // [3]
  // dot
  tf.dot(a, b).print() // 32
  console.log(1 * 4 + 2 * 5 + 3 * 6) // 32
}

{
  console.log('-----------Example 2--------------')
  // a
  const a = tf.tensor1d([1, 2]);
  console.log(a.shape) // [2]
  // b
  const b = tf.tensor2d([[1, 2], [3, 4]]);
  console.log(b.shape) // [2, 2]
  // dot
  tf.dot(a, b).print(); // [7, 10]
}

{
  console.log('-----------Example 3--------------')
  // a
  const a = tf.tensor1d([1, 2]);
  console.log(a.shape) // [2]
  // b
  const b = tf.tensor2d([[1, 2], [3, 4]]);
  console.log(b.shape) // [2, 2]
  // dot
  tf.dot(b, a).print(); // [5, 11]
}

{
  console.log('-----------Example 4--------------')
  // b
  const b = tf.tensor2d([[1, 2], [3, 4]]);
  console.log(b.shape) // [2, 2]
  // c
  const c = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
  console.log(c.shape) // [2, 3]
  // dot
  tf.dot(b, c).print();
  // [[9, 12, 15],
  //  [19, 26, 33]]
}

{
  const tensor = tf.scalar(30);
  console.log(tensor);
  tensor.print();
}

{
  const tensor = tf.tensor1d([1, 2, 3]);
  console.log(tensor);
  tensor.print();
}

{
  const tensor = tf.tensor2d([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log(tensor);
  tensor.print();
}
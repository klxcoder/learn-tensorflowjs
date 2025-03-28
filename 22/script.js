const x = tf.tensor([[1, 4, 5], [2, 3, 6]]);
x.min(0).print(); // [1, 3, 5] (min of each column)
x.min(1).print(); // [1, 2] (min of each row)
x.min().print();   // 1     (min of entire tensor)

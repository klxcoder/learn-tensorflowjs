# From
  - https://js.tensorflow.org/api/4.22.0/#dot

# Syxtax

```js
tf.dot(t1, t2)
```

# Explain
Computes the dot product of two matrices and/or vectors, `t1` and `t2`.

# Explain from ChatGPT
The function computes the dot product according to standard linear algebra rules:

- Vector · Vector → Scalar

- Matrix · Vector → Vector

- Matrix · Matrix → Matrix

For valid operations, the inner dimensions must match:

- For `vector-vector`, both must have the same length.
- For `matrix-vector`, the vector length must match the matrix's column count.
- For `matrix-matrix`, the first matrix's column count must match the second matrix's row count.

Invalid dimension combinations will throw an error.

# Example 1
```js
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
```

# Example 2
```js
console.log('-----------Example 2--------------')
// a
const a = tf.tensor1d([1, 2]);
console.log(a.shape) // [2]
// b
const b = tf.tensor2d([[1, 2], [3, 4]]);
console.log(b.shape) // [2, 2]
// dot
tf.dot(a, b).print(); // [7, 10]
```

# Explain example 2

$$
\begin{bmatrix} 1 & 2 \end{bmatrix}
\cdot
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
=
\begin{bmatrix}
(1 \times 1) + (2 \times 3) & (1 \times 2) + (2 \times 4)
\end{bmatrix}
=
\begin{bmatrix} 7 & 10 \end{bmatrix}
$$

# Example 3
```js
console.log('-----------Example 3--------------')
// a
const a = tf.tensor1d([1, 2]);
console.log(a.shape) // [2]
// b
const b = tf.tensor2d([[1, 2], [3, 4]]);
console.log(b.shape) // [2, 2]
// dot
tf.dot(b, a).print(); // [5, 11]
```

# Explain Example 3

$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\cdot
\begin{bmatrix} 1 \\ 2 \end{bmatrix}
=
\begin{bmatrix}
(1 \times 1) + (2 \times 2) \\
(3 \times 1) + (4 \times 2)
\end{bmatrix}
=
\begin{bmatrix} 5 \\ 11 \end{bmatrix}
$$

# Example 4
```js
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
```

# Explain Example 4

$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\cdot
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
=
\begin{bmatrix}
(1 \times 1) + (2 \times 4) & (1 \times 2) + (2 \times 5) & (1 \times 3) + (2 \times 6) \\
(3 \times 1) + (4 \times 4) & (3 \times 2) + (4 \times 5) & (3 \times 3) + (4 \times 6)
\end{bmatrix}
=
\begin{bmatrix}
9 & 12 & 15 \\
19 & 26 & 33
\end{bmatrix}
$$
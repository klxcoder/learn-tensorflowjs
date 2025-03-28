# Table

| Distribution            | Description                                  | Key Parameters                | Range                    | Shape Characteristics       |
|-------------------------|----------------------------------------------|-------------------------------|---------------------------|-----------------------------|
| **Random Uniform**        | Equal probability across a specified range   | `low`, `high`                 | `[low, high)`             | Flat (all values equally likely) |
| **Random Normal**         | Bell-shaped curve (Gaussian distribution)    | `mean`, `std` (standard deviation) | `(-∞, ∞)`             | Symmetrical around the mean |
| **Random Standard Normal**| Special case of Normal with mean 0, std 1    | None (fixed)                   | `(-∞, ∞)`                  | Bell-shaped, centered at 0 |
| **Random Gamma**          | Models waiting times; skewed distribution    | `shape`, `scale`               | `[0, ∞)`                  | Right-skewed (positively skewed) |

# Key points:
  - `Uniform` is best for equal probabilities.
  - `Normal` is ideal for naturally occurring data like heights or test scores.
  - `Standard Normal` is a special case of Normal and is often used in Z-score calculations.
  - `Gamma` is useful in modeling waiting times or reliability data.
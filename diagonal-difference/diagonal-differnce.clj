(defn diagonal [matrix] (map-indexed (fn [index row] (nth row index)) matrix))

(defn diagonalDifference [matrix]
  (let [primaryDiagonal (diagonal matrix)
        secondaryDiagonal (diagonal (reverse matrix))
        primarySum (reduce + primaryDiagonal)
        secondarySum (reduce + secondaryDiagonal)
        maxSum (max primarySum secondarySum)
        minSum (min primarySum secondarySum)]
    (- maxSum minSum)))
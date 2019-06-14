(defn miniMaxSum [posInts]
  (let
   [sums (map (fn [pInt] (- (reduce + posInts) pInt)) posInts)
    {miniSum :miniSum maxSum :maxSum}
    (reduce
     (fn [{miniSum :miniSum maxSum :maxSum} sum]
       (cond
         (< sum miniSum) {:miniSum sum :maxSum maxSum}
         (> sum maxSum) {:miniSum miniSum :maxSum sum}
         :else {:miniSum miniSum :maxSum maxSum}))
     {:miniSum (first sums) :maxSum (first sums)}
     sums)]
    (prn miniSum maxSum)))
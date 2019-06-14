(defn compareTriplets [a b]
  (reduce
   (fn [ret index]
     (let [[aPoints bPoints] ret
           aItem (nth a index)
           bItem (nth b index)
           isAPoint (> aItem bItem)
           isBPoint (< aItem bItem)]
       (cond
         isAPoint (vector (inc aPoints) bPoints)
         isBPoint (vector aPoints (inc bPoints))
         :else ret)))
   (vector 0 0)
   (range (count a))))
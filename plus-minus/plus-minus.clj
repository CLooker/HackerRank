(defn counters [integers]
  (reduce
   (fn [accum integer]
     (let [{plusCounter :plusCounter, minusCounter :minusCounter, zeroCounter :zeroCounter} accum]
       (cond
         (pos? integer) (merge accum {:plusCounter (inc plusCounter)})
         (neg? integer) (merge accum {:minusCounter (inc minusCounter)})
         :else (merge accum {:zeroCounter (inc zeroCounter)}))))
   {:plusCounter 0 :minusCounter 0 :zeroCounter 0}
   integers))

(defn plusMinus [integers]
  (let [{plusCounter :plusCounter, minusCounter :minusCounter, zeroCounter :zeroCounter} (counters integers)
        length (count integers)]
    (doseq [counter [plusCounter minusCounter zeroCounter]] (println (double (/ counter length))))))
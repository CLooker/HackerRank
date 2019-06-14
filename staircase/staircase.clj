(defn getHashes [n]
  (map-indexed
   (fn [i _]
     (repeat (inc i) "#"))
   (range n)))

(defn staircase [n]
  (let [hashes (getHashes n)]
    (doseq [i (range n)]
      (let [hashSegment (clojure.string/join (nth hashes i))
            lengthToAdd (- n (inc i))
            spacesSegment (apply str (repeat lengthToAdd " "))
            ret (clojure.string/join [spacesSegment hashSegment])]
        (println ret)))))

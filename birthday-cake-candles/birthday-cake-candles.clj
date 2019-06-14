(defn birthdayCakeCandles [candleHeights]
  (let [maxHeight (apply max candleHeights)
        tallestCandles
        (filter (fn [candleHeight] (= candleHeight maxHeight)) candleHeights)]
    (count tallestCandles)))
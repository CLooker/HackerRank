(defn getNextMultiple [denominator integer]
  (let [currInt (inc integer)]
    (if (= 0 (mod currInt denominator))
      currInt
      (getNextMultiple denominator currInt))))

(defn gradingStudents [grades]
  (map
   (fn [grade]
     (let [nextFiveMultiple (getNextMultiple 5 grade)
           shouldRetGrade? (or (< grade 38)
                               (>= (- nextFiveMultiple grade) 3))]
       (if shouldRetGrade? grade nextFiveMultiple)))
   grades))
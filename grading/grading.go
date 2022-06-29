package grading

func gradingStudents(grades []int32) []int32 {
	var result []int32

	for _, grade := range grades {
		if grade < 38 {
			result = append(result, grade)
			continue
		}

		multiple := nextMultiple(5, grade)
		if multiple-grade >= 3 {
			result = append(result, grade)
			continue
		}

		result = append(result, multiple)
	}

	return result
}

func nextMultiple(denom int32, n int32) int32 {
	next := n + 1

	if next%denom == 0 {
		return next
	} else {
		return nextMultiple(denom, next)
	}
}

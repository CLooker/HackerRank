package birthdaychocolate

func birthday(ns []int32, targetSum int32, targetSize int32) int32 {
	var result int32 = 0

	for i := 0; i < len(ns); i++ {
		var sum int32 = 0
		for j := i; j < i+int(targetSize) && j < len(ns); j++ {
			sum += ns[j]
		}

		if sum == targetSum {
			result++
		}
	}

	return result
}

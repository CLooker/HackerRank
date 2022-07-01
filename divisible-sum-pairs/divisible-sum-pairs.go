package divisiblesumpairs

func divisibleSumPairs(ignored int32, divisor int32, ns []int32) int32 {
	var result int32 = 0

	for i, n := range ns {
		for j := i + 1; j < len(ns); j++ {
			sum := n + ns[j]
			if sum%divisor == 0 {
				result++
			}
		}
	}

	return result
}

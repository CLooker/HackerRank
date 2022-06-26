package main

func aVeryBigSum(ar []int64) int64 {
	var sum int64 = 0

	for _, n := range ar {
		sum += n
	}

	return sum
}

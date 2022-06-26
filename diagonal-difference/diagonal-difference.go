package main

import (
	"math"
)

func diagonalDifference(arr [][]int32) int32 {
	primaries := diagonals(arr)
	primariesSum := sum(primaries)

	var arrReversed [][]int32
	for i := len(arr) - 1; i >= 0; i-- {
		arrReversed = append(arrReversed, arr[i])
	}
	secondaries := diagonals(arrReversed)
	secondariesSum := sum(secondaries)

	return int32(math.Abs(float64(primariesSum) - float64(secondariesSum)))
}

func diagonals(arr [][]int32) []int32 {
	var result []int32
	for i, ar := range arr {
		result = append(result, ar[i])
	}
	return result
}

func sum(arr []int32) int32 {
	var result int32 = 0
	for _, n := range arr {
		result += n
	}
	return result
}

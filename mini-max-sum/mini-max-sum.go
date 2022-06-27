package main

import (
	"fmt"
	"math"
)

func miniMaxSum(arr []int32) {
	var sums []uint64
	for i := 0; i < len(arr); i++ {
		var sum uint64 = 0
		for j, n := range arr {
			if i != j {
				sum += uint64(n)
			}
		}
		sums = append(sums, sum)
	}

	var min uint64 = math.MaxUint64
	var max uint64 = 0
	for _, sum := range sums {
		if sum < min {
			min = sum
		}

		if sum > max {
			max = sum
		}
	}

	fmt.Println(min, max)
}

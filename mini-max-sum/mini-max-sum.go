package main

import (
	"fmt"
	"math"
)

func miniMaxSum(arr []int32) {
	var sumMin uint64 = math.MaxUint64
	var sumMax uint64 = 0

	for i := 0; i < len(arr); i++ {
		var sum uint64 = 0
		for j, n := range arr {
			if i != j {
				sum += uint64(n)
			}
		}

		if sum < sumMin {
			sumMin = sum
		}

		if sum > sumMax {
			sumMax = sum
		}
	}

	fmt.Println(sumMin, sumMax)
}

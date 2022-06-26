package main

import "fmt"

func plusMinus(arr []int32) {
	positiveCount := 0
	negativeCount := 0
	zeroCount := 0

	for _, n := range arr {
		if n > 0 {
			positiveCount++
		} else if n < 0 {
			negativeCount++
		} else {
			zeroCount++
		}
	}

	length := float32(len(arr))
	fmt.Println(float32(positiveCount) / length)
	fmt.Println(float32(negativeCount) / length)
	fmt.Println(float32(zeroCount) / length)
}

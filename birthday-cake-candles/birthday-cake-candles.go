package main

func birthdayCakeCandles(ns []int32) int32 {
	var max int32 = 0
	var freq int32 = 0

	for _, n := range ns {
		if n > max {
			max = n
			freq = 1
		} else if n == max {
			freq++
		}
	}

	return freq
}

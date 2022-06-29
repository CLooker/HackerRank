package appleandorange

import "fmt"

func countApplesAndOranges(s int32, t int32, a int32, b int32, apples []int32, oranges []int32) {
	fmt.Println(hitCount(s, t, a, apples))
	fmt.Println(hitCount(s, t, b, oranges))
}

func hitCount(
	targetStart int32,
	targetEnd int32,
	hitterStart int32,
	hitterDistances []int32,
) int32 {
	var result int32 = 0

	for _, d := range hitterDistances {
		hitterEnd := hitterStart + d
		isHit := hitterEnd >= targetStart && hitterEnd <= targetEnd
		if isHit {
			result++
		}
	}

	return result
}

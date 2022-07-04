package drawingbook

import "math"

func pageCount(pageMax int32, pageTarget int32) int32 {
	a := pageMax - pageTarget
	b := pageTarget - 1

	if a <= b {
		return a / 2
	} else {
		return int32(math.Ceil(float64(b) / float64(2)))
	}
}

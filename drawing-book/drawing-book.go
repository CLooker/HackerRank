package drawingbook

import "math"

func pageCount(pageMax int32, pageTarget int32) int32 {
	fromStart := pageTarget - 1
	fromEnd := pageMax - pageTarget

	if fromStart < fromEnd {
		return int32(math.Ceil(float64(fromStart) / float64(2)))
	} else if (pageMax-pageTarget == 1) && (pageMax%2 == 0) {
		return (fromEnd / 2) + 1
	} else {
		return fromEnd / 2
	}
}

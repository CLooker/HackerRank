package sockmerchant

func sockMerchant(ignored int32, colors []int32) int32 {
	freqByColor := make(map[int32]int32)
	for _, color := range colors {
		if freqByColor[color] == 0 {
			freqByColor[color] = 1
		} else {
			freqByColor[color]++
		}
	}

	var pairCount int32 = 0
	for _, freq := range freqByColor {
		var pairableCount int32
		if freq%2 == 0 {
			pairableCount = freq
		} else {
			pairableCount = freq - 1
		}

		pairCount += (pairableCount / 2)
	}

	return pairCount
}

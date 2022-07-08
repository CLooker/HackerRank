package utopiantree

func utopianTree(growthCycleMax int32) int32 {
	height := int32(1)

	for growthCycle := int32(1); growthCycle <= growthCycleMax; growthCycle++ {
		if growthCycle%2 == 0 {
			height++
		} else {
			height *= 2
		}
	}

	return height
}

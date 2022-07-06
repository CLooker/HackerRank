package thehurdlerace

func hurdleRace(jumpMax int32, heights []int32) int32 {
	heightMax := int32(0)
	for _, h := range heights {
		if h > heightMax {
			heightMax = h
		}
	}

	if heightMax <= jumpMax {
		return 0
	} else {
		return heightMax - jumpMax
	}
}

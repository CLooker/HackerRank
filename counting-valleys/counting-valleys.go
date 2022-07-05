package countingvalleys

func countingValleys(_ int32, directions string) int32 {
	var position int32 = 0
	var valleyCount int32 = 0
	inValley := false

	for _, dir := range directions {
		if dir == 'U' {
			position++
		} else {
			position--
		}

		if position < 0 {
			inValley = true
		}

		if position == 0 && inValley {
			inValley = false
			valleyCount++
		}
	}

	return valleyCount
}

package betweentwosets

func getTotalX(leftNs []int32, rightNs []int32) int32 {
	nStart := leftNs[len(leftNs)-1]
	nEnd := rightNs[0]

	var count int32 = 0

	for n := nStart; n <= nEnd; n += nStart {
		evenlyDivisibleByAllLeftNs := true
		for _, ln := range leftNs {
			if n%ln != 0 {
				evenlyDivisibleByAllLeftNs = false
				break
			}
		}

		if !evenlyDivisibleByAllLeftNs {
			continue
		}

		factorForAllRightNs := true
		for _, rn := range rightNs {
			if rn%n != 0 {
				factorForAllRightNs = false
				break
			}
		}

		if factorForAllRightNs {
			count++
		}
	}

	return count
}

package pickingnumbers

func pickingNumbers(ns []int32) int32 {
	lenMax := 0

	for i, n := range ns {
		keepables := []int32{n}

		for j, nn := range ns {
			if i == j {
				continue
			}

			isKeepable := true
			for _, keepable := range keepables {
				var difference int32
				if nn-keepable >= 0 {
					difference = nn - keepable
				} else {
					difference = keepable - nn
				}

				if difference > 1 {
					isKeepable = false
					break
				}
			}

			if isKeepable {
				keepables = append(keepables, nn)
			}
		}

		if len(keepables) > lenMax {
			lenMax = len(keepables)
		}
	}

	return int32(lenMax)
}

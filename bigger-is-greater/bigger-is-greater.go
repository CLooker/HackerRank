package biggerisgreater

func biggerIsGreater(word string) string {
	chars := []rune(word)

	pivotIdx := -1
	for i := 1; i < len(chars); i++ {
		if chars[i] > chars[i-1] {
			pivotIdx = i - 1
		}
	}

	if pivotIdx == -1 {
		return "no answer"
	}

	pivot := chars[pivotIdx]
	pivotIdxNext := -1
	for i := pivotIdx; i < len(chars); i++ {
		if chars[i] > pivot {
			pivotIdxNext = i
		}
	}

	chars[pivotIdx] = chars[pivotIdxNext]
	chars[pivotIdxNext] = pivot

	result := ""
	for i := 0; i <= pivotIdx; i++ {
		result += string(chars[i])
	}
	for i := len(chars) - 1; i > pivotIdx; i-- {
		result += string(chars[i])
	}

	if result == word {
		return "no answer"
	} else {
		return result
	}
}

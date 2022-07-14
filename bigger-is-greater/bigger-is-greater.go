package biggerisgreater

func biggerIsGreater(word string) string {
	chars := []rune(word)

	i := -1
	for j, char := range chars {
		if j == 0 {
			continue
		}

		if char > chars[j-1] {
			i = j
		}
	}

	if i == -1 {
		return "no answer"
	}

	pivot := chars[i-1]

	j := -1
	for k, char := range chars {
		if k >= i && char > pivot {
			j = k
		}
	}

	chars[i-1] = chars[j]
	chars[j] = pivot

	var tail []rune
	for k := len(chars) - 1; k >= i; k-- {
		tail = append(tail, chars[k])
	}

	var resultChars []rune
	resultChars = append(resultChars, chars[0:i]...)
	resultChars = append(resultChars, tail...)

	result := string(resultChars)
	if result == word {
		return "no answer"
	} else {
		return result
	}
}

package separatethenumbers

import (
	"fmt"
	"strconv"
	"strings"
)

func separateNumbers(numStr string) {
	if len(numStr) < 2 {
		fmt.Println("NO")

		return
	}

	size := 1
	sizeMax := len(numStr) / 2
	numStrArrs := [][]string{}

	for size <= sizeMax {
		sizeLocal := size
		numStrArr := []string{}

		for i := 0; i+sizeLocal <= len(numStr); i += sizeLocal {
			numStrArrItem := numStr[i : i+sizeLocal]

			n, err := strconv.Atoi(numStrArrItem)
			if err != nil {
				return
			}

			nInc := n + 1
			nIncStrLen := len(strconv.Itoa(nInc))

			if nIncStrLen > sizeLocal {
				i--
				sizeLocal++
			}

			numStrArr = append(numStrArr, numStrArrItem)
		}

		start := numStr[0:size]
		numStrArr2 := []string{start}

		for i := len(start); i < len(numStr); i += size {
			j := i + size
			if j > len(numStr) {
				j = len(numStr)
			}

			numStrArr2Item := numStr[i:j]
			numStrArr2 = append(numStrArr2, numStrArr2Item)
		}

		numStrArrs = append(numStrArrs, numStrArr)
		numStrArrs = append(numStrArrs, numStrArr2)

		size++
	}

	for _, numStrArr := range numStrArrs {
		if len(numStrArr) < 2 {
			continue
		}

		isOrdered := true
		for i, nStr := range numStrArr {
			if i == len(numStrArr)-1 {
				break
			}

			n, err := strconv.Atoi(nStr)
			if err != nil {
				isOrdered = false
				break
			}

			nStrNext := numStrArr[i+1]

			nNext, err := strconv.Atoi(nStrNext)
			if err != nil {
				isOrdered = false
				break
			}

			if n+1 != nNext {
				isOrdered = false
				break
			}
		}

		if !isOrdered {
			continue
		}

		hasALeadingZero := false
		for _, nStr := range numStrArr {
			if nStr[0:1] == "0" {
				hasALeadingZero = true
				break
			}
		}

		end := numStrArr[len(numStrArr)-1]
		endMatches := strings.HasSuffix(numStr, end)

		if endMatches && !hasALeadingZero {
			fmt.Printf(
				"YES %s\n",
				numStrArr[0],
			)

			return
		}
	}

	fmt.Println("NO")
}

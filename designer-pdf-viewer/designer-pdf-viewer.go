package designerpdfviewer

import "strings"

func designerPdfViewer(letterHeights []int32, word string) int32 {
	alphabet := "abcdefghijklmnopqrstuvwxyz"

	letterHeightMax := int32(0)
	for _, letter := range word {
		alphabetIdx := strings.Index(alphabet, string(letter))
		letterHeight := letterHeights[alphabetIdx]
		if letterHeight > letterHeightMax {
			letterHeightMax = letterHeight
		}
	}

	return letterHeightMax * int32(len(word))
}

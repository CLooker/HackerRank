package main

import "fmt"

func staircase(length int32) {
	for stairCount := 1; int32(stairCount) <= length; stairCount++ {
		stair := ""

		spaceCountMax := length - int32(stairCount)
		for spaceCount := 1; spaceCount <= int(spaceCountMax); spaceCount++ {
			stair += " "
		}

		poundCountMax := stairCount
		for poundCount := 1; poundCount <= poundCountMax; poundCount++ {
			stair += "#"
		}

		fmt.Println(stair)
	}
}

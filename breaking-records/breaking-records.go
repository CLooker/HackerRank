package breakingrecords

func breakingRecords(scores []int32) []int32 {
	max := scores[0]
	min := scores[0]
	nMaxChanges := 0
	nMinChanges := 0

	for _, s := range scores {
		if s > max {
			max = s
			nMaxChanges++
		}

		if s < min {
			min = s
			nMinChanges++
		}
	}

	return []int32{int32(nMaxChanges), int32(nMinChanges)}
}

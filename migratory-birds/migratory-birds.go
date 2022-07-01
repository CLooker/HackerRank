package migratorybirds

func migratoryBirds(ids []int32) int32 {
	freqById := make(map[int32]int32)
	for _, id := range ids {
		if freqById[id] == 0 {
			freqById[id] = 1
		} else {
			freqById[id]++
		}
	}

	var freqMax int32 = 0
	var idOfFreqMax int32
	for id, freq := range freqById {
		if freq > freqMax {
			freqMax = freq
			idOfFreqMax = id
		}
	}

	return idOfFreqMax
}

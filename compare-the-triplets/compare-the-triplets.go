package main

func compareTriplets(a []int32, b []int32) []int32 {
	var aPoints int32 = 0
	var bPoints int32 = 0

	for i := 0; i < len(a) && i < len(b); i++ {
		aItem := a[i]
		bItem := b[i]
		if aItem > bItem {
			aPoints++
		} else if bItem > aItem {
			bPoints++
		}
	}

	return []int32{aPoints, bPoints}
}

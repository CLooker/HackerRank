package catsandamouse

func catAndMouse(x int32, y int32, z int32) string {
	mouseADistance := int32(0)
	if x-z > 0 {
		mouseADistance = x - z
	} else {
		mouseADistance = z - x
	}

	mouseBDistance := int32(0)
	if y-z > 0 {
		mouseBDistance = y - z
	} else {
		mouseBDistance = z - y
	}

	if mouseADistance < mouseBDistance {
		return "Cat A"
	} else if mouseBDistance < mouseADistance {
		return "Cat B"
	} else {
		return "Mouse C"
	}
}

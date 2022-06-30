package kangaroo

func kangaroo(aPos int32, aJumpSize int32, bPos int32, bJumpSize int32) string {
	var behindJumpSize int32
	var aheadJumpSize int32
	if aPos <= bPos {
		behindJumpSize = aJumpSize
		aheadJumpSize = bJumpSize
	} else {
		behindJumpSize = bJumpSize
		aheadJumpSize = aJumpSize
	}

	if aheadJumpSize >= behindJumpSize {
		return "NO"
	}

	var behindPos int32
	var aheadPos int32
	if aPos <= bPos {
		behindPos = aPos
		aheadPos = bPos
	} else {
		behindPos = bPos
		aheadPos = aPos
	}

	isWinnable := winnable(
		behindPos,
		behindJumpSize,
		aheadPos,
		aheadJumpSize,
	)

	if isWinnable {
		return "YES"
	} else {
		return "NO"
	}
}

func winnable(behindPos int32, behindJumpSize int32, aheadPos int32, aheadJumpSize int32) bool {
	if aheadPos <= behindPos {
		return aheadPos == behindPos
	} else {
		return winnable(
			behindPos+behindJumpSize,
			behindJumpSize,
			aheadPos+aheadJumpSize,
			aheadJumpSize,
		)
	}
}

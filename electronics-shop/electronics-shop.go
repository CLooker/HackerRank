package electronicsshop

func getMoneySpent(keyboardPrices []int32, drivePrices []int32, moneyTotal int32) int32 {
	var result int32 = -1

	for _, kp := range keyboardPrices {
		for _, dp := range drivePrices {
			price := kp + dp
			if price <= moneyTotal && price > result {
				result = price
			}

		}
	}

	return result
}

package bonappetit

import "fmt"

func bonAppetit(bill []int32, k int32, b int32) {
	var sum int64 = 0

	for i, it := range bill {
		if int32(i) != k {
			sum += int64(it)
		}
	}

	quotient := sum / 2
	difference := b - int32(quotient)

	if difference == 0 {
		fmt.Println("Bon Appetit")
	} else {
		fmt.Println(difference)
	}
}

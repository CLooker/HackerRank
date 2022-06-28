package main

import (
	"fmt"
	"strconv"
	"strings"
)

func timeConversion(time string) string {
	split := strings.Split(time, ":")
	hhUnformatted := split[0][0:2]
	mm := split[1]
	ssUnformatted := split[2]

	hh := hhUnformatted
	if strings.Contains(ssUnformatted, "PM") {
		hhUnformattedN, err := strconv.Atoi(hhUnformatted)
		if err != nil {
			return ""
		}
		hh = strconv.Itoa(hhUnformattedN + 12)
	}
	if hh == "24" {
		hh = "12"
	} else if hh == "12" {
		hh = "00"
	}

	ss := ssUnformatted[0:2]

	return fmt.Sprintf(
		"%s:%s:%s",
		hh,
		mm,
		ss,
	)
}

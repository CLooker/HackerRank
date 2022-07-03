#!/bin/bash 

set -u

read costs_len costs_idx_skip
read -r -a costs
read amt_charged

sum_splittable=0
for i in "${!costs[@]}"; do
  if ((i != costs_idx_skip)); then
    ((sum_splittable += costs[i]))
  fi
done

amt_actual=$((sum_splittable / 2))
amt_diff=$((amt_charged - amt_actual))

if ((amt_diff == 0)); then 
  echo 'Bon Appetit'
else
  echo "$amt_diff"
fi

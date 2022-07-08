#!/bin/bash

read growth_cycle_maxes_length

growth_cycle_maxes=()
for ((i=0; i < growth_cycle_maxes_length; i++)); do
  read growth_cycle_max
  growth_cycle_maxes+=($growth_cycle_max)
done

for growth_cycle_max in "${growth_cycle_maxes[@]}"; do
  height=1
  for ((growth_cycle=1; growth_cycle <= growth_cycle_max; growth_cycle++)); do
    if ((growth_cycle % 2 == 0)); then
      ((height++))
    else
      ((height *= 2))
    fi
  done
  echo $height
done

#!/bin/bash

read ignored
read -r -a colors

declare -A freq_by_color
for color in "${colors[@]}"; do
  freq="${freq_by_color[$color]}"

  if [ -z "$freq" ]; then
    freq_by_color["$color"]=1
  else
    ((freq_by_color[$color]++))
  fi
done

pair_count=0
for color in "${!freq_by_color[@]}"; do
  freq="${freq_by_color[$color]}"

  pairable_count=
  if ((freq % 2 == 0)); then
    pairable_count=$freq
  else
    pairable_count=$((freq - 1))
  fi

  pair_count_local=$((pairable_count / 2))

  ((pair_count += pair_count_local))
done

echo $pair_count

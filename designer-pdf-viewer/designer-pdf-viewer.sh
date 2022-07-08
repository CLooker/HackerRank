#!/bin/bash

read -r -a letter_heights
read word

alphabet=abcdefghijklmnopqrstuvwxyz

letter_height_max=0
for ((i=0; i < ${#word}; i++)); do
  letter="${word:$i:1}"
  alphabet_prefix=${alphabet%%$letter*}
  alphabet_idx=${#alphabet_prefix}
  letter_height="${letter_heights[alphabet_idx]}"
  if ((letter_height > letter_height_max)); then
    letter_height_max=$letter_height
  fi
done

word_len=${#word}

echo $((letter_height_max * word_len))
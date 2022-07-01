#!/bin/bash

read args

a_pos=$(echo $args | cut -d ' ' -f 1)
a_jump_size=$(echo $args | cut -d ' ' -f 2)
b_pos=$(echo $args | cut -d ' ' -f 3)
b_jump_size=$(echo $args | cut -d ' ' -f 4)

behind_jump_size=
ahead_jump_size=
if (( a_pos <= b_pos )); then
  behind_jump_size=$a_jump_size
  ahead_jump_size=$b_jump_size
else
  behind_jump_size=$b_jump_size
  ahead_jump_size=$a_jump_size
fi

if (( ahead_jump_size >= behind_jump_size )); then
  echo 'NO'
  exit 0
fi

behind_pos=
ahead_pos=
if (( a_pos <= b_pos )); then
  behind_pos=$a_pos
  ahead_pos=$b_pos
else
  behind_pos=$b_pos
  ahead_pos=$a_pos
fi

while true; do
  if (( ahead_pos <= behind_pos )); then
    if (( ahead_pos == behind_pos )); then
        echo 'YES'
    else
        echo 'NO'
    fi
    break
  else
    behind_pos=$(( behind_pos + behind_jump_size ))
    ahead_pos=$(( ahead_pos + ahead_jump_size ))
  fi
done

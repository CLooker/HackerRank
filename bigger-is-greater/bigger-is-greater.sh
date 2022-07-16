#!/bin/bash

main() {
  local words_len
  read words_len

  local words=()
  while ((${#words[@]} < words_len)); do
    local word
    read word
    words+=($word)
  done

  for word in "${words[@]}"; do
    solve $word
  done
}

solve() {
  local word=$1
  local chars=($(echo $word | grep -o .))

  local pivot_idx=-1
  for ((i=1; i < ${#chars[@]}; i++)); do
    local char=${chars[i]}
    local i_prev=$((i - 1))
    local char_prev=${chars[i_prev]}

    if [[ $char > $char_prev ]]; then
      pivot_idx=$i_prev
    fi
  done
  
  if ((pivot_idx == -1)); then
    echo "no answer"
    return
  fi

  local pivot=${chars[pivot_idx]}
  local pivot_idx_next=-1
  for ((i=pivot_idx; i < ${#chars[@]}; i++)); do
    local char=${chars[i]}
    if [[ $char > $pivot ]]; then
      pivot_idx_next=$i
    fi
  done

  chars[$pivot_idx]=${chars[pivot_idx_next]}
  chars[$pivot_idx_next]=$pivot

  local result=""
  for ((i=0; i <= pivot_idx; i++)); do
    result="$result${chars[i]}"
  done
  for ((i=${#chars[@]}; i > pivot_idx; i--)); do
    result="$result${chars[i]}"
  done

  if [ "$result" = "$word" ]; then
    echo "no answer"
  else
    echo "$result"
  fi
}

main

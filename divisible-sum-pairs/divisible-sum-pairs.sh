#!/bin/bash

read ns_len divisor
read -r -a ns

result=0
for i in "${!ns[@]}"; do
  n="${ns[i]}"
  
  for (( j=$((i + 1)); j < ns_len; j++ )); do
    nn="${ns[j]}"
    sum=$((n + nn))
    remainder=$((sum % divisor))    
  
    if ((remainder == 0)); then
      ((result++))
    fi 
  done
  
done

echo "$result"
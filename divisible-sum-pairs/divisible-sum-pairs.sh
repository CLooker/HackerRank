#!/bin/bash

read line0
read line1

divisor=$(echo "$line0" | cut -d ' ' -f 2)
read -r -a ns <<< "$line1"
ns_len="${#ns[@]}"
result=0

for i in "${!ns[@]}"; do
  n="${ns[i]}"
  
  for (( j=$((i + 1)); j < ns_len; j++ )); do
    nn="${ns[j]}"
    sum=$((n + nn))
    remainder=$(expr $sum % $divisor)    
  
    if ((remainder == 0)); then
      ((result++))
    fi 
  done
  
done

echo $result
#!bin/bash

# Script will be showed below:

# Reset
Color_Off='\033[0m'       # Text Reset

# Regular Colors
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green

TYPE=$1

function buildApp() {
  fastlane ios build type:build --env $1
  fastlane android build type:build --env $1
}

function main() {

  if [ -z $TYPE ]; then
    read -p 'Enter your environment (development,staging,production): ' env
    TYPE=$env
  fi

  # increaseCodepushVersion
  buildApp $TYPE
  
  if [ $? -eq 0 ]; then
    printf "\n$Green Build App Successful\n"
  else
    printf "\n$Red Build App Failed\n"
  fi
}

main

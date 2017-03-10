#!/bin/sh

printf "Deploying App...\n"

POE="index.js"
PR= echo | ps ax | grep $POE | grep -v grep | awk '{print $1}' | xargs kill > /dev/null 2>&1

printf "\nDeploying server...\n"
printf "\nDownloading dependencies\n"

npm install --save
npm run build
nohup node server > "$POE.out" 2> "$POE.err" &

printf "\nProcess PID: "
echo $!

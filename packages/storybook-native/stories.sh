#!/bin/bash
set -euo pipefail

# Returns computer IP address
# This is used in config/storybook, fixing the infinite loading sidebar bug
# See: https://github.com/storybookjs/react-native/issues/55
host=$(ifconfig wlp58s0 | grep inet | grep -v inet6 | awk '{print $2}')

json="{\"runStorybook\": true, \"host\": \"$host\", \"port\": 7007 }"
echo $json > ./storybook/config.json

printf "\n🚨 ️Don't forget to run \"yarn android\" in a new shell once the server is up!\n\n"
start-storybook -p 7007 -h $host
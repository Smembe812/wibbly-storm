#!/bin/bash
emulator -avd Expo_emulator -no-snapshot-load | ( 
    while read output; do
        if [ "${output##*( )}" = "emulator: INFO: boot completed" ]; then 
            expo start -c --android --stream; #--no-dev --minify --tunnel;
        else 
            echo "$output"; 
        fi
    done
)
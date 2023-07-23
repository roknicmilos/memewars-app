#!/bin/bash

set -e

cd "$MW_APP_STAGING_DIR_PATH"

# Print current location in the file system
# and the content of that location:
echo "Current directory: $PWD"
echo "Content of the current directory:"
ls -la

# Build and start the containers:
docker compose build
docker compose -p memewars-app-staging up -d

#!/bin/bash

set -e

. /app/scripts/utils.sh

export REACT_APP_APP_URL=$APP_BASE_URL
export REACT_APP_API_URL=$API_BASE_URL

npm install
if bool "$APP_DEV_SERVER"; then
  printc "Starting development server...\n" "info"
  npm start
else
  printc "Building production ready files and starting production server...\n" "info"
  npm run build
  serve -s build
fi

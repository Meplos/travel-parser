#!/bin/bash

npm run build
cp -R ./dist/* ./public
firebase deploy --only hosting
# Dev environment

All scripts are ment to be run from root of the project, and will not work if run from anywhere else. (Something for future work?!).

## build.sh

This script builds the dev docker image. The image is called node-tester.

## run.sh

This will run the node-tester image, to be used when developing. It will allow you to run the npm scripts without needing to worry about the node version. (Trivial I know, but its for testing...)

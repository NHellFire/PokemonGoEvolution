#!/bin/sh
if [ "$( git config --local --get core.hooksPath)" != "hooks" ]; then
	git config --local --add core.hooksPath hooks
fi

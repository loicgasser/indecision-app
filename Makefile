SHELL = /bin/bash

.PHONY: help
help:
	@echo "Usage: make <target>"
	@echo
	@echo "Possible targets:"
	@echo "- serve              Serve the app in auto-reload mode on default port 8080"
	@echo "- build-dev          Autocompiles JSX in ES6 files to ES5 files"
	@echo ""

.PHONY: serve
serve:
	live-server public/

.PHONY: build-dev
build-dev:
	babel src/app.jsx --out-file=public/scripts/app.js --watch
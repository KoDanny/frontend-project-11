install:
	npm ci

lint:
	npx eslint

build:
	NODE_ENV=production npx webpack

develop:
	npx webpack serve
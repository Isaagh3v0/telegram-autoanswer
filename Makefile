docker_build:
	docker build -t enauto .
docker:
	docker start -d enauto
init:
	npm i yarn --global && yarn
build:
	yarn build:production
start:
	yarn start
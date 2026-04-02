USER_ID:=$(shell id -u)
GROUP_ID:=$(shell id -g)

build:
	docker buildx build -t fakeponse-frontend:latest .

start:
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker compose up -d

logs:
	docker compose logs

stop:
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker compose down

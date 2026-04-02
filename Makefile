build:
	docker buildx build -t fakeponse-frontend:latest .

start:
	docker compose up -d

logs:
	docker compose logs

stop:
	docker compose down

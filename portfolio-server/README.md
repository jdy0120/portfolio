```
docker-compose --env-file ./envs/.env.production -f ./ci/composes/docker-compose.yaml up -d --build
docker-compose --env-file ./envs/.env.local -f ./ci/composes/docker-compose.local.yaml up -d --build
```

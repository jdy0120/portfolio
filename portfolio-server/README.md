```
docker-compose -f ./ci/composes/docker-compose.local.yaml --env-file ./envs/.env.local up --build
docker-compose -f ./ci/composes/docker-compose.yaml --env-file ./envs/.env.production up --build
```

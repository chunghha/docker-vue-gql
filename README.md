This project was generated with [Vue CLI](https://github.com/vuejs/vue-cli).
```
yarn build
docker stop vue-gql
docker rm -v vue-gql
docker build . -t vue-gql
docker run --name vue-gql -d -p 8080:80 vue-gql
docker ps
```

*Or if you can run bash then just,*

```
sh run.sh
```

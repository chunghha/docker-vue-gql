#!/usr/bin/env bash

yarn build
docker stop vue-gql
docker rm -v vue-gql
docker build . -t vue-gql
docker run --name vue-gql -d -p 8080:80 vue-gql
docker ps

#!/bin/bash

sleep 10
npm install knex -g
knex migrate:latest
npm run devStart
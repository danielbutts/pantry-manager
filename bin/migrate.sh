#!/bin/bash

dropdb pantry_manager_dev
createdb pantry_manager_dev
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
psql pantry_manager_dev

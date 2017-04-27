#!/bin/bash

dropdb pantry_weasel_dev
createdb pantry_weasel_dev
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
psql pantry_weasel_dev

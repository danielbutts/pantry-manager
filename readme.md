# Pantry Weasel
#### By Daniel Butts and Sean McDermott
* * *

### *Making the best of your pantry*
Pantry Weasel is a recipe search application that allows you to make the most out of the ingredients you already have to create new and exciting meals.

## How to install:

* Fork and clone the git repo into the directory of your choice.
* Run `npm install` to install all of the dependencies.
* You'll need to create a new `.env` file in the root directory of the project. Paste this code into that file:

```
DB_TYPE="postgres"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="pantry_weasel_dev"
API_URL=http://api.yummly.com/v1/api/recipes?
DATABASE_URL=postgres://localhost:5432/pantry_weasel_dev

SESSION_SECRET= // any random assortment of characters will do, at least 16 characters. KEEP SECRET!

// In order to use this app you will need to obtain a Yummly API key and ID.

API_KEY=

API_ID=
```
* Create your PostgreSQL database then migrate and seed the schema.
```
$ createdb pantry_weasel_dev
$ node_modules/.bin/sequelize db:migrate
$ node_modules/.bin/sequelize db:seed:all
```
  ###### Current Bug:
    You will need to manually insert data for the pantries table. From inside your PostgreSQL console run `INSERT INTO pantries (id) VALUES (1);` for as many users as you wish to have, replacing the 

* Start your dev server with `npm run dev` and open up the app by visiting `https://localhost:5432/`, replacing `5432` with whichever port you wish to set up your local server on.

## How to use:

Upon visiting the homepage at `pantry-weasel.herokuapp.com` you will be presented with a simple search bar. All you need to do is enter whatever ingredients you wish to cook with, separated by either a comma or a space, and the Yummly® recipe API will provide you with a number of recipes that fit those requirements.

Below the search bar you will see the most recent searches by other users to give you inspiration of what to look for.

## Signing in:

By registering and signing in with an email and password, you will have access to your **Pantry** by clicking on the link in the navbar. Once there, you can add and delete ingredients to keep track of what you have in stock. You can also generate search queries simply by clicking on ingredients within your pantry, so you don't have to type anything in or remember what you have in stock.

## Future features:

- ##### Inventory Cross Referencing
  * You will have the option to filter the search results by cross referencing them with every other ingredient in your pantry to reduce the number of recipes that contain ingredients you don't currently have. This maximizes the amount of search results you receive that you can actually cook with the ingredients you have on-hand.

- ##### Tag Management
  * Recipes and ingredients can be managed by searchable tags to keep track of properties such as food categories, flavor classification, or cuisine style. Custom tag generation allows you to organize your pantry exactly the way you want.

## Tech Stack:
  This app is built with standard **HTML**, **CSS**, and **JavaScript** on the front end with some help from **Bootstrap** and **jQuery**. The backend is powered by **node.js** and **Express** which is hooked up to **PostgreSQL** via the **Sequelize** ORM, which proved to be the most challenging part of this project.

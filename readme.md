# Pantry Weasel
*Making the best of your pantry*

Pantry Weasel is a recipe search application that allows you to make the most out of the ingredients you already have to create new and exciting meals.

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

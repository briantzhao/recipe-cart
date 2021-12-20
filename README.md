# Recipe Cart

## Project Specification

Recipe Cart was created to help users with the task of storing recipes and compiling a shopping list based on those recipes. It takes all of the notes and scraps of paper that typically go into planning your weekly grocery trip and puts it all into one app.

### Front End

On the client side, Recipe Cart takes recipe urls submitted by the user and scrapes information regarding the ingredients and recipes. Through this interface, users can build up a stockpile of recipes that they've found that pique their interest.

Once they've added their recipes of interest, they can compile a shopping list by choosing the recipes they've saved. The interface for compiling a shopping list will be represented by a table of meals for the week. The user will be able to click and drag recipes that they want into the appropriate spot on the table.

The table can also be gradually populated when submitting urls - the user will be able to specify when they want to cook a submitted recipe via dropdowns, and dropdowns will be dynamically populated based on what meals are already planned, to ensure no overlap.

The shopping list page will also provide users with the ability to reuse recipes/ingredients lists from previous weeks through a calendar interface.

The app will then render the consolidated list of ingredients as a shopping list. They can then mark ingredients off the list, depending on if they already have that ingredient.

### Back End

On the server side, Recipe Cart will use a relational database to store several tables. These tables include tables for:

- users
- recipes
- recipe ingredients
- weekly recipes/shopping carts
  JWT will be used for user authentication.

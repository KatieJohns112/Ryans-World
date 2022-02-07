# Ryan's World 

## Initial Setup 

1. Clone this repository 
1. Run `git init` from the root directory of Ryan's World (the same directory that the `.sln` file is in) 

> **NOTE:** Make sure that you do this before you run `create-react-app` in the `client` directory

## SQL Database Setup

1. Run both of the SQL Scripts included in this Repo.
1. Run `SELECT` SQL commands in a Query window to see what data this Repo consists of.

## Server Side

1. Install Nuget Packages `Microsoft.Data.SQLClient` version 4.0.1 as well as `Microsoft.ASP.Net.Core.Authentication.JWTBearer`version 5.0.5

## Client Side

1. In `client` directory run `npx create-react-app .`
1. Install firebase and react router using `npm install react-router-dom@5.2.0 firebase@8.7.1`

> **NOTE:** When running this app run the back end server first then run `npm start` inside the `client` directory in the repo.

## How to navigate Ryan's World

Upon serving the correct hosts through your browser, you will be prompted with an option to sign in or register as a new user. You will need to register as a new user.

After creating your account, you will notice five nav bar selections allowing users to navigate to Home, Book, Tags, Categories or Comments.

You can begin creating your Book list by navigating to the `Book` link in the nav bar. After selecting the `Create new Book` button you will be prompted with a form to create a new Book using an ImageURL, Title, Author, Favorite Scale, and Day of the Week to read.

Once you have have created a new Book using the `Create new Book` form it will populate under the `Book` link in the navbar. You will also have the ability to Update, Delete, or view the Books Details if so desired.

A logged in user will have the same capabilities to create a Tag as they had with creating a new Book.

The logged in user can navigate to the `Tag` link in the navbar where they can also Update, Delete, or view a Tag's details.

## Documentation

dbdiagram : https://dbdiagram.io/d/61eadec57cf3fc0e7c524a78 
wireframe : https://www.figma.com/file/jlEg0hz3QSKZHVCOCL4T9Y/Ryan's-World?node-id=0%3A1

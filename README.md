<img src="./docs/logo.png" align="right"
     alt="Lumberjack" width="120" height="120">

# oBlog 🗞 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## Informations 👀

oBlog is a simplistic API created as part of an o'Clock Challenge.
The API has many classic routes such as :

- GET: /api/posts - Returns all available posts.
- GET: /api/categories - Returns all available categories.
- GET: /api/posts/2 - Returns the item that matches the parameter ID
- GET: /api/categories/2 - Returns the category that matches the parameter ID
- GET: /api/posts/category/2 - Returns all posts belonging to the category with the parametered ID
- POST : /api/posts - Add a new post, Verify the data with Joi
- POST : /api/categories - Add a new category, Verify data with Joi

Created in the Model View Controller pattern and Object Oriented Programming. The API data comes from a PostgreQL database versioned with Sqitch. The data sent in a request are validated with Joi.

## Technologies 💻

-   Express
-   PostgreSQL
-   Sqitch
-   Joi

## Local Installation 🏗️

### Prerequisite 🌱

-   [NodeJS](https://nodejs.org/en/)

### Step by step 👣

-   1 | Fork the repository https://github.com/TheoBIET/oBlog
-   2 | Create a psql database named "oblog"
-   3 | Run `sqitch deploy`
-   4 | If you have no errors, you can start the API with `npm start`
-   5 | Add a star to this repository
-   6 | Now you can test all the routes from the Requests.http file
-   7 | Enjoy! :)
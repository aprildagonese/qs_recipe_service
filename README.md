# QS Recipes

A microservice built as a housing for recipes by ingredient for a project at [Turing School of Software & Design](turing.io). The project, sharing the same name, was an exercise in SOA requiring use of Node and Express. Users are able to log a food which the database will use to retrieve recipes for.

Along with the code found in this repository, the application, [Quantified Self](https://quantifiedselfapp.herokuapp.com), utilizes another Express.js [service](https://github.com/PeregrineReed/quantified-self) for account info and user login/logout and a React [frontend](https://github.com/aprildagonese/qs_frontend) for UI/UX.

### Versions
* npm - 6.9.0
* Node - v11.14.0
* Express - 4.16.0
* psql (PostgreSQL) 11.3

## Setup and Installation

Fork and clone this repository

Run the following commands in your terminal:
```
$ npm install
$ npx sequelize db:create
$ npx sequelize db:migrate
```

## API Endpoints

### Key Endpoints

#### GET /api/v1/keys
* Request
```
/api/v1/keys?email=<YOUR-EMAIL>
```

* 201 Response
```
{
    "key": <YOUR-KEY>
}
```

* 404 Response (no email)
```
{
    "error": "Please provide an email address"
}
```

* 404 Response (email already registered)
```
{
    "error": "A key has already been registered to this email address."
}
```

### Recipe Endpoints

#### POST /api/v1/recipes
* Request
```
/api/v1/recipes?ingredient=popcorn
```

* 201 Response (no body)

* 401 Response
```
{
    "error": {<DB-ERROR>}
}
```

#### GET /api/v1/recipes
* Request
```
/api/v1/recipes?ingredient=egg
```

* 200 Response
```
{
    "ingredient": "Egg",
    "avg_calories": 556.8847456754086,
    "recipes": [
        {
            "id": 1,
            "ingredient": "Egg",
            "label": "Egg Noodle",
            "recipe_url": "http://www.edamam.com/recipe/egg-noodle-59c70510ab18f27b3c374f5c4790c8b9/egg",
            "health_labels": "[\"Sugar-Conscious\",\"Vegetarian\",\"Peanut-Free\",\"Tree-Nut-Free\",\"Alcohol-Free\"]",
            "calories": 1807.63066666667,
            "prep_time": 0,
            "ingred_count": 5,
            "createdAt": "2019-05-15T19:20:56.573Z",
            "updatedAt": "2019-05-15T19:20:56.573Z"
        },
        {...},
        {...}
    ]
}
```

* 404 Response
```
{
    "error": {<DB-ERROR>}
}
```

#### GET /api/v1/recipes/calories
* Request
```
/api/v1/recipes/calories?ingredient=egg
```

* 200 Response
```
{
    "ingredient": "Egg",
    "avg_calories": 556.8847456754086,
    "recipes": [
        {
            "id": 2,
            "ingredient": "Egg",
            "label": "Egg & soldiers",
            "recipe_url": "http://www.edamam.com/recipe/egg-soldiers-2a4f1799c656dcd7e2c35ca9b1492be2/egg",
            "health_labels": "[\"Sugar-Conscious\",\"Vegetarian\",\"Peanut-Free\",\"Tree-Nut-Free\",\"Alcohol-Free\"]",
            "calories": 66.39,
            "prep_time": 0,
            "ingred_count": 2,
            "createdAt": "2019-05-15T19:20:56.565Z",
            "updatedAt": "2019-05-15T19:20:56.565Z"
        },
        {...},
        {...}
    ]
}
```

* 404 Response
```
{
    "error": {<DB-ERROR>}
}
```

#### GET /api/v1/recipes/time
* Request
```
/api/v1/recipes/time?ingredient=egg
```

* 200 Response
```
{
    "ingredient": "Egg",
    "avg_calories": 556.8847456754086,
    "recipes": [
        {
            "id": 1,
            "ingredient": "Egg",
            "label": "Egg Noodle",
            "recipe_url": "http://www.edamam.com/recipe/egg-noodle-59c70510ab18f27b3c374f5c4790c8b9/egg",
            "health_labels": "[\"Sugar-Conscious\",\"Vegetarian\",\"Peanut-Free\",\"Tree-Nut-Free\",\"Alcohol-Free\"]",
            "calories": 1807.63066666667,
            "prep_time": 0,
            "ingred_count": 5,
            "createdAt": "2019-05-15T19:20:56.573Z",
            "updatedAt": "2019-05-15T19:20:56.573Z"
        },
        {...},
        {...}
    ]
}
```

* 404 Response
```
{
    "error": {<DB-ERROR>}
}
```

#### GET /api/v1/recipes/ingredients
* Request
```
/api/v1/recipes/ingredients?ingredient=egg
```

* 200 Response
```
{
    "ingredient": "Egg",
    "avg_calories": 556.8847456754086,
    "recipes": [
        {
            "id": 2,
            "ingredient": "Egg",
            "label": "Egg & soldiers",
            "recipe_url": "http://www.edamam.com/recipe/egg-soldiers-2a4f1799c656dcd7e2c35ca9b1492be2/egg",
            "health_labels": "[\"Sugar-Conscious\",\"Vegetarian\",\"Peanut-Free\",\"Tree-Nut-Free\",\"Alcohol-Free\"]",
            "calories": 66.39,
            "prep_time": 0,
            "ingred_count": 2,
            "createdAt": "2019-05-15T19:20:56.565Z",
            "updatedAt": "2019-05-15T19:20:56.565Z"
        },
        {...},
        {...}
    ]
}
```

* 404 Response
```
{
    "error": {<DB-ERROR>}
}
```

## Contributors

* [Peregrine Balas](https://github.com/PeregrineReed)
* [April Dagonese](https://github.com/aprildagonese)

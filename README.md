# ![CF](http://i.imgur.com/7v5ASc8.png) LAB

## Lab 33 - Async Redux

### Author: Chris Kozlowski

### Links and Resources

- [CodeSandbox](https://codesandbox.io/s/8no0opljj2)
- [GitHub Repo](https://github.com/kozlowskicd/lab_33)

### Modules

#### `detailer.js`

Displays prop data from the Redux store.

#### `lister.js`

Displays prop data from Redux store and maps fetchPerson method to dispatch
fetchPerson(url) - When clicked, calls the getPerson action from the Redux store

#### `person-page.js`

Displays a link to retrive API data.
fetchPeople() - When clicked, calls the getPeople action from the Redux store
Displays the Lister and Detailer components

#### `app.js`

Renders the PersonPage component.

#### `actions.js`

getPeople() - Retrives a list of names from an API
getPerson(url) - Retrieves stats for that person

#### `utils.js`

get() - Generic function for performing GET requests to an API

### Setup

#### `.env` requirements

- N/A

#### Running the app

- Navigate to the CodeSandbox fork located [Here](https://codesandbox.io/s/8no0opljj2)

#### Tests

- How do you run tests?
- What assertions were made?
- What assertions need to be / should be made?

#### UML

![Lab 33 UML](https://github.com/kozlowskicd/lab_33/blob/master/20190105_174452.jpg?raw=true "Lab 33 UML")

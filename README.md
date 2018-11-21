# carousell-reddit-clone
Creating a reddit clone for Carousell Coding Exercise.

## Running the App
1. Clone the repo.
2. Run `npm install`. 
3. Run `npm start`. Go to <localhost:3000> to view your app. 

The app is also hosted online on [Heroku](http://dylan-reddit-clone.herokuapp.com/).

## Frameworks and Technologies
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I used `react-bootstrap` for simple styling.
I used Create-React-App's recommended testing utility `Jest` and `Enzyme`. Run `npm test` to run the tests.
I added a new `react-toastify` to notify the user whenever a new Post is added through `AddPost`.

## Test Design
I've designed some simple smoke tests, and a snapshot test.

Apart from that, I've also tested the DOM to ensure that the buttons and links work. For example, testing that upvotes does increase the number of votes.

## Design Decisions
I decided to make a 1 page app. I could have refactored `AddPost` out of `App` to a new page, but I thought it was unecessary for such a simple app demo. It does not significantly simplify the app structure.

I chose to use a simple React framework instead of a React-Redux framework becacuse there is not much data to pass around. Since only posts are passed from the parent `App` to the children `Posts`, passing data as `props` is sufficient. 

In accordance to the MVC model, I created 1 container, `App`, which calls the 2 components `AddPost`, and `Post`. The container App handles the data wrangling, while the components are simply concerned with presentation. All the posts are stored in the `state` of the parent Component, `App`. The posts and handler functions are passed as `props` down to its children `Post` and `AddPost`. 

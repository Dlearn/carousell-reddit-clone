# carousell-reddit-clone
Creating a reddit clone for Carousell Coding Exercise.

## Running the App
Clone the repo and run `npm install` to install all the necessary libraries. Then run `npm start` to host the server locally. Go to [localhost:3000] to view your app. 

The app is also hosted online on [Heroku](http://dylan-reddit-clone.herokuapp.com/).

## Frameworks and Technologies
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I used `react-bootstrap` for simple styling.

I used Create-React-App's recommended testing utility `Jest` and `Enzyme`.

I added a new `react-toastify` to notify the user whenever a new Post is added through `AddPost`.

## Test Design
I've designed some simple smoke tests, and a snapshot test.

Apart from that, I've also tested the DOM to ensure that the buttons and links work. For example, testing that upvotes does increase the number of votes.

## Running the Tests
Run `npm test` to run the tests.

## Design Decisions
I decided to make a 1 page app. I could have refactored `AddPost` out of `App` to a new page, but I thought it was unecessary for such a simple app demo. It does not significantly simplify the app structure.

I chose to use a simple React framework instead of a React-Redux framework becacuse there is not much data to pass around. Since only posts are passed from the parent `App` to the children `Posts`, passing data as `props` is sufficient. 

In accordance to the MVC model, I created 1 container, `App`, which calls the 2 components `AddPost`, and `Post`. The container App handles the data wrangling, while the components are simply concerned with presentation. All the posts are stored in the `state` of the parent Component, `App`. The posts and handler functions are passed as `props` down to its children `Post` and `AddPost`. 

For memory, storing the posts, I decided to use Javascript's default Arrays. For this exercise, for maximum speed and space performance, it would have been better to use a List (for better sorting). However, I thought that the maximimally optimized performance data storage is not the point of this exercise. Hence, I decided to use a default data structure in Javascript. if I wanted efficient storage, I would use a backend or database to store my data. Since I decided to use Javascript Arrays instead of Lists, my sort function suffers. Instead of `O(n)` for sorting for lists, I use `O(n lg n)` for sorting Arrays (Javascript uses Qsort for `.sort()`). 

One of the parts I had trouble with was making sure that React *only* rerenders the DOM elements that have changed. To achieve this, I stored a `this.previousVotes` variable in the `Posts` component. If the new `post.votes` is different from `previousVotes`, then the component has to be rerendered. This saves a lot of time and memory since only components that need to be rerendered will be rerendered.
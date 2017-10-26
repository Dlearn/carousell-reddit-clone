# carousell-reddit-clone
Creating a reddit clone for Carousell Coding Exercise.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I decided to make a 1 page app. I could have refactored AddPost to a new page, but I thought it was unecessary for such a simple app demo. It does not significantly simplify the app structure.

For memory, storing the posts, I decided to use Javascript's default Arrays. For this exercise, for maximum speed and space performance, it would have been best to use a List (for better sorting). However, if I wanted efficient storage, I would use a backend to store my data. Hence, I thought that it would be best if I just stuck to the default JS Arrays.

All the posts are stored in the state of the parent Componenet, App. The posts are passed as properties down to its children Post, and AddPost. 
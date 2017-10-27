# carousell-reddit-clone
Creating a reddit clone for Carousell Coding Exercise.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I used React-Bootstrap for simple styling.

I decided to make a 1 page app. I could have refactored AddPost to a new page, but I thought it was unecessary for such a simple app demo. It does not significantly simplify the app structure.

I chose to use a simple React framework instead of a  React-Redux framework becacuse there is not that much data to pass around. Since only posts are passed from the parent App to the children Posts, passing state as props is sufficient. 

For memory, storing the posts, I decided to use Javascript's default Arrays. For this exercise, for maximum speed and space performance, it would have been better to use a List (for better sorting). However, I thought that the maximimally optimized performance data storage is not the point of this exercise. Hence, I decided to use a default data structure in Javascript. if I wanted efficient storage, I would use a backend or database to store my data. 

All the posts are stored in the state of the parent Componenet, App. The posts are passed as properties down to its children Post.
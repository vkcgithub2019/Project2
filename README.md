
MVP
Project 2 is a indiviualized project. I am creating a website for hard to find classic VW parts. 

My website allows users to: 
- simply browse for fun without signing up or logging in
- browse parts for sale
- list parts for sale
- search for parts to buy
- obtain information about upcoming events in the area
- browse the gallery 
- go to video links

Target audience: Classic VW vehicles enthusiasts, DIY home mechanics, repair shops, hobbyists.

Problems: Parts for old VW vehicles are getting very difficult to find because they don't make them anymore. Looking for good working parts is a big chore an has to be done deligently. Searching for used parts world-wide is necessary. 

How it works: When a user wants to search for parts, there is a search field on the front page. The search will find the closest match and it will go to the detail page. If the user decided to buy it, he/she can click on the buy cutton and it will bring the user to the seller's information page. However, to buy a part or to sell parts, the user needs to login. Login authentication is done through passport.

There are 3 routes: api-routes.js, Authentication-routes.js, and html-routes.js. In the api-routes, there are route for user login authentication, logout authentication, adding user, adding parts, finding parts, and user data. In the Authenticatin route, there route for user signup, user login, user logout, and user data. In the html route, there are many routes with each route corresponding to each feature on the home page, i.e. About, Login, Logout, signup, Gallery, Sell, Events, and Links. 



Technologies used: 
- sequelize
- node express
- passport for login authentication
- MVC paradigm and server-side API.
- Used a Node and Express Web Server;
- MySQL Database an ORM 
- api routes: GET and POST routes for retrieving and adding new data;
- Heroku
- used my own api, no third party API is utilized at this time. 

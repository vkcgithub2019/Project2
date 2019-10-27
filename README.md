
Classic Parts is an app where users can find hard to find classic VW parts for their air-cooled engine vehicles. These includes VW vans/bus, Bugs/Beetles, Kharman Ghia, Squareback, Fastback, and the Thing. We only do classic VW parts. Anyone who has parts for sale can list it on this website. But in order to list parts for sale or to buy parts, user has to first signup and login. 

In summary, my website allows users to: 
- simply browse for fun without signing up or logging in
- browse parts for sale
- list parts for sale
- search for parts to buy
- obtain information about upcoming events in the area
- browse the gallery 
- go to video links 

Target audience: Classic VW vehicles enthusiasts, DIY home mechanics, repair shops, hobbyists.

Problems: Parts for old VW vehicles are getting very difficult to find because they don't make them anymore. Looking for good working parts is a big chore and has to be done deligently. Searching for used parts world-wide is necessary. 

How it works: When a user wants to search for parts, there is a search field on the front page. The search will find the closest match and it will go to the detail page. If the user decided to buy it, he/she can click on the buy button and it will bring the user to the seller's information page. 

Technologies used in the construction of this website

-   Node and Express web server: Express is used to create the web server application in Nodes.js.

-   MYSQL and Sequelise ORM: Sequelize is a promise-based ORM for Node.js. In other words, Sequelize, which is a         database ORM that will interface with the Mysql database for us.

-   There are 3 routes: api-routes.js, Authentication-routes.js, and html-routes.js. In the api-routes, there are         route for user login authentication, logout authentication, adding user, adding parts, finding parts, and user       data. In the Authenticatin route, there route for user signup, user login, user logout, and user data. In the        html  route, there are many routes with each route corresponding to each feature on the home page, i.e. About,       Login,Logout, signup, Gallery, Sell, Events, and Links. The GET route is used to retrieve informations from the      database and the POST route is used to post the information to the database. There is no third party api.

-   passport: used for login authentication

-   Heroku: the app is deployed in Heroku and user's input (listing parts for sale) will be populated on this            platform.

-   MVC paradigm: Model, View, Controller structure is used. For the database side, the Models consists of the      
    index.js, parts.js and users.js files. The index.js file setup ajax call that hits the /api/parts route and render the available objects(parts) to the page. The part.js file involves creating the sequalize database of various fields. The user.js deals with the user information such as email and passwords.

Here is the link to the deployed site in Heroku:  https://mighty-badlands-39967.herokuapp.com

Here is the link to the deployed site in Github: https://github.com/vkcgithub2019/classicParts
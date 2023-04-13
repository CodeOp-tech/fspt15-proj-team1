# Artega

## Project Description

Artega is a vitual art exhibition app. It is an app that any art lover can enjoy, but it was specifically created for users who may have difficulties attending an art exhibition in person. In creating Artega, our goal was to make the experience of visiting an art exhibition accesible, easy, and enjoyable. With accessiblity in mind, we focused on including large, easy to understand icons for navigation and included a text-to-speech feature for any large blocks of text so users do not have to read large amounts of text to enjoy the app.

Current features include a virtual exhibition of the Rijksmuseum, which can be enjoyed from the Gallery page. After a user visits the Gallery page, they are able to click on individual pieces of art to obtain more information about that specific piece of art. From the detailed view, a user has the ability to add favorite pieces of art to review again before leaving the virtual exhibition. Additional exhibitions from other museums can be added in future incarnations of the app.

Another feature that can be accessed from the VideoTour page are two collections of art-focused, educational videos: Learn From Masters and Great Art Explained. By allowing users to access these curated videos directly from the app, it takes the guesswork and potential frustration out of having to search through countless videos online to find content that is focused exlusively on learning about and appreciating art. The Learn From Masters collection includes videos dedicated to exploring the works and lives of some of hte greatest artists in history such as Van Gogh and Michelangelo. The Great Art Explained collection includes videos dedicated to exploring some of the world's most iconic and captivating works of art, including the Mona Lisa and Klimt's The Kiss.

## Technologies

- React
- Express
- Node.js
- Bootstrap
- MySQL

## React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## File Structure

In the source, we created a **components** and a **pages** folder.

The **components** folder contains 7 files which include the following:
The _Footer.jsx_ file contains the code for the footer for the entire app.
The _NavBar.jsx_ file contains the code for the navigation bar for the entire app.
There are also CSS and logo files.

The **pages** folder contains 8 files which include the following:
The _Home.jsx_ page contains the code for the homepage, including the images for the slider and an introduction to the Artega app.
The _Gallery.jsx_ page is accessed from the navigation bar and from the Explore button in the Home page. It includes an introduction to the Rijksmuseum museum and fetches data from the Rijksmuseum API. This page displays the Rijksmuseum's entire collection of art in batches, using a masonry gallery layout. A Load more button at the button of the page allows a user to see more art. Clicking on an individual piece of art directs the user to the ArtView for details on the individual piece of artwork.
The _ArtView.jsx_ page is accessed by clicking on an image from the Gallery. It fetches data from the Rijksmuseum API and provides further details on each piece of art in the Rijksmuseum collection.
The _VideoTour.jsx_ page contains the code to enable a users to explore the Learn From Masters and Great Art Explained video collections without having to search for them on YouTube.

**React styled components** are used instead of a global CSS file.

## Available Scripts

In the project directory, you can run:

### `npm install`

Run `npm install` in the project foler to install dependencies related to Express.

Go to client folder `cd client` and run `npm install` to install dependencies related to React.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

You can test your API in `http://localhost:5002`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Additional Packages

- [react-router-dom](https://www.geeksforgeeks.org/what-is-react-router-dom/)
- [react-splide](https://splidejs.com/integration/react-splide/)
- [react-responsive-masonry](https://www.npmjs.com/package/react-responsive-masonry)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

## Database Prep

Access the MySQL interface in terminal by running `mysql -u root -p`
Create a new database called 'art': `create database art`

Add a `.env` file to root containing MySQL authentication information:

```
DB_HOST = localhost
DB_USER = root
DB_PASS = YOUR PASSWORD
DB_NAME = art
SUPER_SECRET=mkaejRGAWTRKLWQE4IR792B309N27GBVV7389B3
REACT_APP_API_KEY=413c7b6be3msh42fe1d0387adabbp157ab9jsn976f3c951d21

```

- Run `npm run migrate` in the root folder in a new terminal window. This will create table 'favorites'.

## User Flow

- [Image here:](Artega_UserFlow.png)

## API Routes

We utilized the Rijksmuseum API to obtain data for the Gallery and ArtView. For the Gallery, the route used is `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`  
For the Artview, the route used is `https://www.rijksmuseum.nl/api/en/collection/${params.objectNumber}?key=${API_Key}` and the data used from the API inclues the scLabelLine which provides the title, artist information, materials, and date of creation and the label.description which provides a short description of the piece of art such as subject matter.

## Credit statement

This is a student project that was created at
[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.

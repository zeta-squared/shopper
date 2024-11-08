# Shopper
A React shopping list SPA. Once an account is created a user can create and maintain their shopping list. This project was undertaken to develop my skills with React.

To run this application it requires the API backend [shopper-express-api](https://github.com/zeta-squared/shopper-express-api).

## Installation
This project was build with `node` version 18.19.1, so to ensure full compatability ensure your version of `node` is at least 18.19.1. You can check this by running `node -v`. All the dependencies are located in `./package.json` and can be installed by running `npm install`.

As mentioned above, this application requires the [shopper-express-api](https://github.com/zeta-squared/shopper-express-api) backend (optionally, if you prefer a [Flask](https://flask.palletsprojects.com/en/stable/) API there is the [shopper-flask-api](https://www.github.com/zeta-squared/shopper-flask-api)). Of course, when you run the api be sure to note the URL. This will need to be placed in `./.env` (you will need to create this file as well) under `REACT_APP_SHOPPER_BASE_API_URL`. For example, if you leave the [shopper-express-api](https://github.com/zeta-squared/shopper-express-api) as the default then your `.env` file should contain the entry
```
REACT_APP_SHOPPER_BASE_API_URL=http://localhost:<port>
```
If you would also like to change the default port (3000) the React application runs on you can add
```
PORT=<port>
```
to the `.env` file.

Now you are ready to run the application. Use `npm start` to run as a development server. You can also build the code with `npm run build` and run on a local server such as `serve`. Make sure you have `serve` installed by checking `serve -v`. If not, run `npm install -g serve`. With `serve` installed and the build complete you can now host the production server by using the command `serve -s build`.
>[!CAUTION]
>There is an issue I have come across that I did not accomodate for. It is unpredictable in nature. Because React makes duplicate requests in strict mode when running as a development server the API will sometimes return bad responses that cause errors on the frontend. For this reason I prefer to run the application as a production server.

## Framework
The application is constructed in the React.js framework with JavaScript. Unfortunately, I have not yet had exposure with TypeScript but this is something I would like to introduce eventually. The project requires some utilities supplied by the [Node.js](https://nodejs.org) but this is mainly just the installation via `npm`.

### Acknowledgement
This project came to life after undertaking [Miguel Grinberg's](https://github.com/miguelgrinberg) tutorial, [The React Mega-Tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial). Much of the paradigms used in the project follow from Miguel's tutorial.

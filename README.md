# Shopper
A React shopping list SPA. Once an account is created a user can create and maintain their shopping list. This project was undertaken to develop my skills with React.

To run this application it requires the API backend [shopper-api](https://github.com/zeta-squared/shopper-api).

## Installation
This project was build with `node` version 18.19.1, so to ensure full compatability ensure your version of `node` is at least 18.19.1. You can check this by running `node -v`. All the dependencies are located in `./package.json` and can be installed by running `npm install`.

As mentioned above, this application requires the [shopper-api](https://github.com/zeta-squared/shopper-api) backend. Of course, when you run the api be sure to note the URL. This will need to be placed in `./.env` (you will need to create this file as well) under `REACT_APP_BASE_API_URL`. For example, if you leave the [shopper-api](https://github.com/zeta-squared/shopper-api) as the default then your `.env` file should contain the entry
```
REACT_APP_BASE_API_URL=http://localhost:5000
```

Now you are ready to run the application. Use `npm start` to run in a development server. There is an issue I have come across that I did not accomodate for. It is unpredictable in nature. Because React makes duplicate requests in strict mode when running as a development server the API will sometimes return bad responses that cause errors on the frontend. For this reason I prefer to build the code with `npm run build` and run on a local server such as `serve`. Make sure you have `serve` installed by checking `serve -v`. If not, run `npm install -g serve`. With `serve` installed and the build complete you can now host the production server by using the command `serve -s build`.

## Framework
The application is constructed in the React.js framework with JavaScript. Unfortunately, I have not yet had exposure with TypeScript but this is something I would like to introduce eventually. The project requires some utilities supplied by the [Node.js](https://nodejs.org) but this is mainly just the installation via `npm`.

### Acknowledgement
This project came to life after undertaking [Miguel Grinberg's](https://github.com/miguelgrinberg) tutorial, [The React Mega-Tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial). Much of the paradigms used in the project follow from Miguel's tutorial.

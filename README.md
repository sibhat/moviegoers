## Moviegoers

Moviegoers is an app intended to keep its users up-to-date with movies and tv shows.

## Build status

Build status of continus integration i.e. travis. -

[![Build Status](https://travis-ci.com/sibhat/moviegoers.svg?branch=master)](https://travis-ci.com/sibhat/moviegoers)

## Tech/framework used

<b>Built with</b>

-   [CRA](https://facebook.github.io/create-react-app)
-   [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
-   [Redux](https://redux.js.org)
-   [Redux-thunk](https://github.com/reduxjs/redux-thunk)
-   [Material-UI](https://material-ui.com)
-   [react-spring](https://react-spring.surge.sh)
-   [animejs](https://animejs.com)
-   [Jest](https://jestjs.io)
-   [Enzyme](https://airbnb.io/enzyme)
-   [Travis](https://travis-ci.com)

## Features

This app uses redux for state managment, and Material-UI for layout of all components(which was fun to learn jss in two days). As to more feature coming soon, I am looking in to testing strategy for each components, to reduce an expected bugs.

## Installation

[Sign Up](https://www.themoviedb.org/account/signup) for an account with 'The Movie Database.'

Once you are logged in you can go to _settings_ -> [_api_](https://www.themoviedb.org/settings/api) and create an api application, and save the key in .env with REACT_APP_MOVIEDB_API variable name.

[The Movie Database API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

```js
npm start
```

## Tests

To run the tests use code below.

```js
npm test
```

## How to use?

When I designed the app, my idea was giving my users more informations without requireing them to click(less click -> more info). The app starts initially loading a logo, to get the users exited about whats coming. Right after that,the main section (main react component) that display a trailer for the first popular tv show will be displayed. As you scroll down, there will be stack of results (shows and movies), and on hover, there will be more info about that specific show/movie. Clicking one of the cards, will route you to different page, where you can read more info, and see recommended result based on your selection.

I am working on a feature, where users will also be able to search for tv shows as well, but currently, user can search for a movie.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## License

MIT © [sibhat](https://github.com/sibhat)

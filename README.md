# Fetching API from Github Gists

Using the API below, which will fetch Github gists, display each user’s avatar
(owner.avatar_url) and files name (files.xxx) in a list.
The list needs to be high performance, well structured, and easy to maintain.

You can use start will ReactJS template project using CLI: create-react-app API

## In each row:


* Profile Image is from (array[n].owner.avatar_url)
* File Name is from (array[n].files.xxx)

## API: https://api.github.com/gists/public
## API Doc: https://developer.github.com/v3/gists/#list-all-public-gists

![Review](./src/components/imagesPro/Image1.png)

Page query options:
* since=YYYY-MM-DDTHH:MM:SSZ
* per_page=15
* page=2

## Requirements:
* Scroll 30 items then go to the next page using pagination
* Scrolling the list should be smooth
* Indicator to show loading state while the next page data is being fetched
* Scroll to the top when the next page is loaded
* When a row is clicked, the corresponding title should change its color, and picture
should get darker to indicate a pressed state

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## Github GeaphQL API

A React app that looks up a user by its name and displays his latest 15 repositories.
To begin:

### `Generate an Access Token`

To generate access token visit [https://github.com/settings/tokens](https://github.com/settings/tokens). Under **Select Scopes**, check **public_repo** which will give you access to public repositories. **_copy-save the token somewhere safe_**.

### `Clone the repository`

### `.env`

After cloning the repository open the project from your editor and on _root folder_ create a **.env** file. In there, copy-paste the following:

##### `REACT_APP_GITHUB_KEY = PASTE HERE YOUR ACCES TOKEN`

and save.

The final steps:

### `npm install`

and

### `npm start`

## USAGE

To change the repository owner, go to `queries.js` and in the query `repositoryOwner(login: "add_your_selection")`.

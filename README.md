## Github GeaphQL API

A React app that looks up a user by its name and displays his latest 15 repositories.
To begin:

### `Generate an Access Token`

To generate access token visit [https://github.com/settings/tokens](https://github.com/settings/tokens) and click **Generate new token**. Under **Select Scopes**, check **public_repo** which will give you access to public repositories. Press **Generate Token**, and **_copy-save the token somewhere safe_**.

### `Clone the repository`

### `.env`

After cloning the repository open the project from your editor and on _root folder_ create a **.env** file. In there, copy-paste the following:

##### `REACT_APP_GITHUB_KEY = PASTE HERE YOUR ACCES TOKEN`

and save.

**DO NOT** use quotation when you paste the access token

The final steps:

### `npm install`

and

### `npm start`

## USAGE

To change the repository owner, go to `queries.js` and in the query `repositoryOwner(login: "add_your_selection")`. Similarly with number of repositories, add the number of repositories you want to display `repositories(last: 15)`

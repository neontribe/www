# Neontribe Website

The neontribe MVP with static HTML, CSS, and JS.

## Dev on the prototype

Use yarn

```bash
git clone git@github.com:neontribe/www.git
cd www
nvm install
npm install -g yarn
yarn
yarn start-prototype
```

## 🚀 Quick start

1.  **Prerequisites**

    - git
    - [nvm](https://github.com/creationix/nvm)

1.  **Get up and running**

    Navigate into your new site’s directory and start it up.

    ```sh
    git clone git@github.com:neontribe/www.git
    cd www
    nvm use
    npm install -g yarn
    yarn
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Save your changes and the browser will update in real time!

## 👷‍♀️ Maintenance

Please use `yarn` to manage the dependencies and scripts in this project. You shouldn't have to worry about which version you have, so long as it is better than 1.0.1 this system will take care of the details.

1. **Keeping your local copy up to date**

   It's a good idea check that your node version and dependencies are in sync. When you pull from a branch we suggest running these commands to be sure:

   ```sh
   nvm use
   yarn
   ```

1. **Adding dependencies**

   The best way to add a new dependency is via `yarn` as follows:

   ```sh
   yarn add --exact some-cool-package
   ```

   If the package is part of the test or build tools for this project please be sure to add `--dev`.

   \*_why `--exact`? To avoid problems with dependencies updating unexpectedly because of semver masking we want to "pin" them to a specific version number. This'll also help our robots when they want to tell us about updates._

1. **Maintaining dependencies**

   If you want to check for, and update to, new versions of our dependencies manually the easiest way to do so is by running

   ```sh
   yarn upgrade-interactive --latest
   ```

   This will give you a nice menu of updates to choose from, and will maintain `package.json` and `yarn.lock` automatically.

## Deployment

The website is deployed using now.sh, the production website reflects master, pull requests which are made against master are considered staging branches.

When contributing to the project branch from master and create a pull request, make sure that changes are approved and that your staging branch works as you expect. **When you merge into master the change will shortly be available on the production site.**

## Updating `tribers`

Don't like your bio? Want to change your words? Or maybe just give your social media links? You can change all of this data in the `tribers/` directory.

Here is an example markdown file with all of the features you can have in it, exhaustively:

    ---
    name: 'John Smith'
    words:
      - Words
      - Go
      - Here
    image: images/john.jpg
    story: stories/john.md
    social:
      twitter: 'jsmith'
      github: 'smithj'
      linkedin: 'jsmith-23'     # this must be the bit after `in/` for your public linkedin profile URL
      instagram: 'johns'
      twitch: 'jsmithgaming'
      facebook: 'john.smith'
      youtube: 'johnschmidt'
    ---

    Your bio goes here

Edit the file, commit, and make a pull request. (Don't add more than five social links though; they won't all fit.)

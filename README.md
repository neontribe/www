# :computer: Neontribe Website

The neontribe MVP with static HTML, CSS, and JS. 

## 🚀 Quick start

1.  **Prerequisites**

    - git
    - [nvm](https://github.com/creationix/nvm)
    - [yarn](https://github.com/yarnpkg/yarn)*

    *install as a global package with `npm install -g yarn`

1.  **Get up and running**

    Navigate into your new site’s directory and start it up.

    ```sh
    git clone git@github.com:neontribe/www.git
    cd www
    nvm use
    yarn
    yarn develop
    ```

    :warning: `git clone` might not work if the user is not the owner of the directory where he/she wants to clone this repository. The following error might be thrown: `Permission denied (publickey). fatal: Could not read from remote repository.` If that happens, change ownership of that directory `sudo chown <username>: <path-to-directory> -R`.

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Save your changes and the browser will update in real time!

## :wrench: Maintenance :construction:

Please use `yarn` to manage the dependencies and scripts in this project. You shouldn't have to worry about which version you have, so long as it is better than 1.0.1. This system will take care of the details.

1. **Keeping your local copy up to date**

   It's a good idea check that your node version and dependencies are in sync. When you pull from a branch, we suggest running these commands to be sure:

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

   \*_why `--exact`? To avoid problems with dependencies updating unexpectedly because of semver masking we want to "pin" them to a specific version number. This will also help our robots when they want to tell us about updates._

1. **Maintaining dependencies**

   If you want to check for and update to new versions of our dependencies manually, the easiest way to do so is by running:

   ```sh
   yarn upgrade-interactive --latest
   ```

   This will give you a nice menu of updates to choose from and will maintain `package.json` and `yarn.lock` automatically.

## :fireworks: Deployment

The website is deployed using `now.sh`. The production website reflects the `master` branch. Pull requests which are made against master are considered staging branches.

When contributing to the project branch from master and create a pull request, make sure that changes are approved and that your staging branch works as you expect. **When you merge into master the change will shortly be available on the production site.**

## :construction_worker: Adding `tribers`

To add yourself or another colleague to the `tribers`, you need to: 

1. navigate to `src/data/tribers`
2. add a markdown file titled <first-name>.md -> e.g. in the command line you can do `touch jane.md`
3. for content, here is an example markdown file with all of the features you can have in it, exhaustively:

```sh
    ---
    name: 'Jane Doe'
    words:
      - Words
      - Go
      - Here
    image: images/jane.jpg
    story: stories/jane.md
    social:
      twitter: 'janedoe'
      github: 'doej'
      linkedin: 'jane-doe'     # this must be the bit after `in/` for your public linkedin profile URL
      instagram: 'janeyd'
      twitch: 'jdoegaming'
      facebook: 'jane.doe'
      youtube: 'janedoe'
    ---

    Your bio goes here
```
:rotating_light: You must follow the format included above and don't add more than five social links because they won't all fit.

4. add a photo of you in the `src/data/tribers/images` directory. 
:white_check_mark: Make sure that the name will match the one inserted next to the image field in the markdown file (see previous step).

5. commit your changes and make a pull request

## :recycle: Updating `tribers`

Don't like your bio? Want to change your words? Or maybe just add/remove your social media link(s)? You can change all of these in the `src/data/tribers` directory.

1. find the related markdown file and edit it as needed and/or replace the image in the `src/data/tribers/images` directory

2. commit your changes and make a pull request

# @westegg/gatsby-theme-core-starter

> A slim, trim, MDX powered, Gatsby starter with CI builds, Renovate bot automatic updates, and easy publishing with Github Pages

# Built on [Westegg](http://repo.westegg.xyz)

# Getting Starter

- Create new repo using this one as starter

* Setup Github Actions
  - Go to your Github account `Settings / Developer settings / Personal access tokens`
  - Create one named off your new repo and copy the token
  - Go to your new repo `Settings / Secrets` and create one with key `ACCESS_TOKEN` and the token as the value
* Setup Github Pages
  - Edit `CNAME` file in repo to your domain without `https://` prefix
  - Go to your repo `Settings / Options / Github Pages`
  - Set `Source` as `gh-pages branch`
  - Set `Custom domain` to your domain

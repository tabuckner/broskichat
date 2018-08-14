# BroskiChat
[![Build Status](https://travis-ci.com/tabuckner/broskichat.svg?branch=develop)](https://travis-ci.com/tabuckner/broskichat)
[![codecov](https://codecov.io/gh/tabuckner/broskichat/branch/develop/graph/badge.svg)](https://codecov.io/gh/tabuckner/broskichat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Collaborative project for the BroskiTownUSA group. Both API and APP directories are housed in a single repo for now. There are some project dependencies outlined below. If you have any questions or concerns feel free to reach out. Check out the [API](broskichat-api/README.md) and [APP](broskichat-app/README.md) README files.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node
If you dont already have Node installed, you will need it in order to use this project.

[Get Node Here](https://nodejs.org/en/download/). We recommend the LTS version. If you wanna go crazy, maybe check out [NVM](https://github.com/creationix/nvm/blob/master/README.md).

Then verify installation with: 
```
node --version
```

#### Yarn
We use `yarn` for this project. In the past it has been touted as being better, and has a slightly better UX in my opinion. 

Follow the [installation instructions](https://yarnpkg.com/lang/en/docs/install/#debian-stable) from Yarn.

Then verify installation with:

```
yarn --version
```

### Installing

#### Backend

CD into the API directory

(from project root)

```
cd broskichat-api
```

Install

```
yarn install
```

Done.

#### Frontend

CD into the APP directory

(from project root)
```
cd broskichat-app
```

Install

```
yarn install
```

Done.

## Developing!
In order to develop on either directory, simply change directory, and run the start script. 
**NOTE** The Frontend is dependent on the backend until we have a CI/CD process in place. If you are working on the FE you need to start the BE. 

### Backend

change directory
```
cd broskichat-api
```

start it
```
yarn start
```

### Frontend

*Terminal 1*
start the api
```
cd broskichat-api && yarn start
```

*Terminal 2*
change directory
```
cd broskichat-app
```

start the app
```
yarn start
```


## Running the tests

**NO CI/CD PROCESS YET**

### E2E

NONE YET

```
<...>
```

### STYLE

NONE YET

```
<...>
```

## Design Tenets

* Must be responsive for all screen sizes
* Must match theme
* Pretty
* Make use of bulma classes

## Deployment

No deployment process yet.

## Built With

* [LoopBack](https://loopback.io/) - Backend Framework
* [React](https://reactjs.org/) - Frontend Framework
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - DB
* [Bulma](https://bulma.io/)- CSS Framework

## Contributing

To make a contribution to the project simply open a PR and we will review!

To become a member of the team please contact us by opening an issue in the github repo. 

## Authors

* **Taylor Buckner** - *Initial work* - [tabuckner](https://github.com/tabuckner)
* **TEAM MEMBER** - *ROLE* - [githubprofile](#)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

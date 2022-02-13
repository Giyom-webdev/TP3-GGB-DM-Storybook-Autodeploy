[![Build Status](https://travis-ci.com/morewings/cra-template-npm-library.svg?branch=master)](https://travis-ci.com/morewings/cra-template-npm-library)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=morewings/cra-template-npm-library)](https://dependabot.com)
[![dependencies Status](https://david-dm.org/morewings/cra-template-npm-library/status.svg)](https://david-dm.org/morewings/cra-template-npm-library)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7448a6f6-8be5-4d26-b886-f59db21ebb4e/deploy-status)](https://app.netlify.com/sites/cra-template-npm-library/deploys)
[![npm version](https://badge.fury.io/js/cra-template-npm-library.svg)](https://www.npmjs.com/package/cra-template-npm-library)
[![npm](https://img.shields.io/npm/dm/cra-template-npm-library)](https://www.npmjs.com/package/cra-template-npm-library)


# Components Storybook

### Bouton

Grousseur du bouton : Utiliser la props "size" : 'large', 'default', 'small'

Type de bouton : Utiliser la props "type" : 'primary', 'default', 'dashed', 'text', 'link'

### Card

Grousseur de la carte : Utiliser la props "size" : 'default', 'small'

### Carousel

Autoplay sur les images : Utiliser la props "autoplay" : 'true', 'false'

### Error404

Statut de la page : Utiliser la props "status" : '404', '500' (celle-ci est requise et va définir les images et icônes dans page)

Titre de la page : Utiliser la props "title" : '404', '500'

Sous-titre de la page : Utiliser la props "subTitle" : 'Sorry, the page you visited does not exist.',
    'Sorry, something went wrong.'
    
### Formulaire

Grosseur du bouton du formulaire : Utiliser la props "size" : 'large', 'default', 'small'

Type de bouton du formulaire: Utiliser la props "type" : 'primary', 'default', 'dashed', 'text', 'link'

### Message

Placement du popup : Utiliser la props "top" : 'top', 'top*3'

### Notification

Type de bouton de la boite de notification: Utiliser la props "type" : 'primary', 'default', 'dashed', 'text', 'link'

### Pagination

Version de pagination: Utiliser la props "simple" : '0', '1'

### Spinner

Grosseur du Spinner : Utiliser la props "size" : 'large', 'default', 'small'

### TreeSelect

Focus sur la sélection : Utiliser la props "focus" : 'true', 'false'

# Lien librairie NPM

https://www.npmjs.com/package/dmorel-components-library

# Lien CPANEL

https://storybook.dmorel.devwebgarneau.com/


# NPM library Create React App template

[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish NPM libraries with **rollup**, **eslint** and **stylelint** configurations. See [full documentation](https://cra-template-npm-library.netlify.com/).

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template npm-library
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template npm-library
```

Then

```shell script
cd %PROJECT_NAME%
yarn start
```

## Features

- Handles all modern JS features.
- Bundles `commonjs` and `es` module formats.
- [Husky](https://github.com/typicode/husky) for git hooks.
- [Eslint](https://eslint.org/) and [stylelint](https://stylelint.io/).
- [Rollup](https://rollupjs.org/guide/en/) for bundling.
- [Babel](https://babeljs.io/) for transpiling.
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing.
- Supports CSS modules, SASS/SCSS, Less and PostCSS.
- [Storybook](https://storybook.js.org/) for documentation and demo.
- And [much more](https://cra-template-npm-library.netlify.com/).

## Contributors

@morewings, @sky0matic

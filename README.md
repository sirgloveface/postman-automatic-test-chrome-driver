## Description

Project to make automatic test e2e.

The test has two parts:  
1. First test the apis
2. Second make a visual test e2e

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://git@github.com:sirgloveface/postman-automatic-test-chrome-driver.git

# go into app's directory
$ cd postman-automatic-test-chrome-driver

# install app's dependencies
$ npm install
```

## Usage

``` bash
# Run chromedriver on port 9515
./chromedriver

# Aplication run
npm run start

# Another form to run
# Before Use
npm i -g newman
npm i -g newman-reporter-htmlextra

# Use newman
Este comando se usa para ejecutar la coleccion iterando sobre los datos que se encuentran en el archivo data.json

newman run collection.json -d data.json -r cli,htmlextra --reporter-htmlextra-title "Reporte GetProducts" --reporter-htmlextra-export getProductsApiTest.html

# run linter
npm run lint

# run unit tests
npm run test:unit

# run e2e tests
npm run test:e2e

```
For a detailed explanation on how things work, check out the [xxxx](https://xxxx).
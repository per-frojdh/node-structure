## Title

### Description

### Built with (Dependencies)

[Lockdown] is used to lock down dependencies, and has generated a lockdown.json file containing the current versions and checksums.
Supposedly it will cause npm to fail, if it attempts to download a never version than what Lockdown expects. To learn more about 
Lockdown and how to upgrade/add modules, read [here][Lockdown].

### Development dependencies
* ESLint
* ESLint-config-airbnb

### How to run

#### Make sure you set the following variables in config.json
* basePath
* logDirectory
* host
* port
* testData

```
node index.js
```

### How to test
```
npm test
```
####Dependencies for testing are as follows (and listed in package.json under dev-dependencies):
* mocha (v2.3.4)
* chai (v3.4.1)
* supertest (v1.1.0)
* Make sure the testData variable in config.json is present and points to the correct folder.

Tests are under the tests/ folder and also use files under tests/data/

### Service Structure

This is the basic folder structure for this project. Additional logic should be added to services, following
a similar structure of the code inside. Additional config related variables should be put in config/config.json.
Routehandlers should be added inside the files of routes/
```
├── config/
|   ├── config.json
├── logs/
|   ├── access-yyyyMMdd.log
|   ├── log-yyyyMMdd.log
├── routes/
|   ├── index.js
|   ├── markdown.js
├── services/
|   ├── my-service/
|   |   ├── package.json
|   |   ├── our-own-lib.js
├── static/
|   ├── email-base.css
|   ├── email-template.template
├── tests/
|   ├── data/
|   |   ├── test.md
|   ├── test.js
├── .eslintrc
├── index.js
├── package.json
├── lockdown.json
├── README.md
```


[Lockdown]: https://www.npmjs.com/package/lockdown

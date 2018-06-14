<p align="center">
  <a href="http://trello.com/">
  <img alt="fundempresa" width="628" height="192" src="http://www.freelogovectors.net/wp-content/uploads/2017/03/trello-logo.png" />
  </a>
</p>

# trello-tests

This project main goal is to create an GUI automation framework that will test acceptance tests for Trello application.
For this project Protractor testing framework has been chosen. Due to protractor's asynchronous testing, Mocha is used to run tests. 
The approach of this project is BDD, that's why Chai library is used to get all assertions. 

**Browser Support**

The framework support:

<p align="center">
  <img alt="fundempresa" width="50" height="50" src="https://vignette.wikia.nocookie.net/mipequeoponyfanlabor/images/8/8b/Mozilla-firefox-vector-logo.png/revision/latest?cb=20130410042340&path-prefix=es" />
  <img alt="fundempresa" width="50" height="50" src="https://cdn.icon-icons.com/icons2/1381/PNG/512/googlechrome_93595.png" />
  <img alt="fundempresa" width="50" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AwozGF0Gx6Z3zOy11nfS6R0oGIBnvwySJUajcSSTfNztaG3H" />
  <img alt="fundempresa" width="50" height="50" src="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/safari-icon.png" />
  </a>
</p>



**Prerequisites**
-
What things you need to install the software and how to install them

    Give examples
    
**Installing**
-
In order to execute in locally the tests, these tools need to be installed:
- node js version 8.11.3
        
        https://nodejs.org/es/
    
- selenium-standalone, it can be installed using the following commands
    
        npm install selenium-standalone@latest -g   
        selenium-standalone install       

- Download the project,
        
        https://github.com/AT-06/trello-tests.git
                          
**Running the tests**
-
To run the tests,

- Open command line and start selenium-standalone,
        
        selenium-standalone start        
    NOTE: Do not close the command line and do not stop the service.

- Open a new command line in the project's root directory and download all project's dependencies,
      
        npm install

- Open `config.json` file from project's root directory and fill the following fields with valid credentials, 
        
        "email": "test_mail@test.com"
        "password": "Password_123"
In order to run tests execute the following command in command line where dependencies where downloaded,

        npm test        
- In case you want to run tests in sauce labs, fill the following fields with valid credentials from sauce labs account.
        
        "sauceUser": "user_saucelabs"
        "sauceKey": "key123456"
In order to run tests execute the following command in command line where dependencies where downloaded,
        
        npm run saucelabs        
- In case you want to run tests in broserstack, fill the following fields with valid credentials from browserstack account.
         
        "browserStackUser": "user_browserstack",
        "browserStackKey": "key987654"    
In order to run tests execute the following command in command line where dependencies where downloaded,

        npm run browserstack        

To run on docker with Firefox node use:

        npm run dockerFirefox
            
To run on docker with Chrome node use:

        npm run dockerChrome
            
To run with tag you can choose different commands:

        npm run team
       
        npm run boards
        
        npm run acceptance 
        
To combine tag you can combine or use this commands:

        npm run team acceptance
        
        npm run boards acceptance
        
        npm run team boards
       
**Eslint**
    
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

You can run eslint with command:

        npm run eslint

**Framework structure**
-
Two features from trello application has been taken to test,

    Boards
    Teams
Framework has been structured in page objects for each of these features in directories with the respective names.
Each page object has a prefix that describe it,
    
    board.toolbar.page.js
    team.toolbar.page.js
And the prefix that shows it is a page object.

Tests are structured in `spec` directory and as in page objects, each feature has its own directory.
Prefix determines the functionality of the feature,
    
    create.board.spec.js
    udpate.team.spec.js
The second word the feature it belongs to and the prefix determines it is a test spec. 

**Contacts**
-
If you want to be informed about new code releases, bug fixes, security fixes, general news and information about
trello-tests project check to the GitHub repository https://github.com/AT-06/trello-tests.git

**Contributors**
-
- Ariel Gonzales (pipo411) - https://github.com/pipo411
- Christian Galarza (Chritian92) - https://github.com/Chritian92
- Omar Huanca (omar-limbert) - https://github.com/omar-limbert
- Manuel Valdez (manu863018) - https://github.com/manu863018
- Carlos Gonzales (carledriss) - https://github.com/carledriss



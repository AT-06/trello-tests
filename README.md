# trello-tests

This project main goal is to create an GUI automation framework that will test acceptance tests for Trello application.
For this project Protractor testing framework has been chosen. Due to protractor's asynchronous testing, Mocha is used to run tests. 
The approach of this project is BDD, that's why Chai library is used to get all assertions. 

**Prerequisites**
-
What things you need to install the software and how to install them

    Give examples
    
**Installing**
-
In order to execute in locally the tests, these tools need to be installed:
- node js versin 8.11.3
        
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

- Opem a new command line in the project's root directory and download all project's dependecies,
      
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
     
**Coding style tests**
-
Explain what these tests test and why

    Give an example

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



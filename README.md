# getting started

 - install node packages from [package.json](./package.json)
 - try out example script using `node example.js`


 # tasks 

> NB: 
> - do not place multiple tasks into same commit.
> - tasks can be made in any order

- **create branch** this repo and send your changes back as pull request (write your student number in tahvel into PR title)

- add [eslint](https://eslint.org/) to project
- configure eslint using [airbnb rulset](https://github.com/airbnb/javascript)
- enforce and use rule based of your student number in tahvel, rules need to be setup globally and can disabled using line or file based override settings.
    - first number:
        - `0`: disable console usage
        - `1`: use double quotes
        - `2`: do not use semicolon in the end of lines
    - 2nd number:
        - `0`: disable undefined variables usage
        - `1`: allow `==` usage equality operators next to `===`
        - `2`: enforce a maximum line length to 100 characters
        - `3`: use space for indent
        - `4`: allow tabs usage in code
        - `5`: allow undefined variables usage
        - `6`: enforce a maximum line length to 80 characters
        - `7`: allow plus-plus usage example (`var++` / `++var`)
        - `8`: disable `==` usage equality operators
        - `9`: use tab for indent
    - Other than that, you are free to modify lint settings as you see fit.
- add GitHub actions to run eslint
- add [jest](https://jestjs.io/) to project and write at-least one test for [`sum.js`](./sum.js).
    - use your student number in tahvel as input, for example when number would be 81 then `8+1=82`
- add GitHub actions to run test ([jest](https://jestjs.io/))
- add CODEOWNERS file:
    - set [`@eritikass`](https://github.com/eritikass) as codeowner for all the code
    - set yourself as codeowner for any new code you added (test file)

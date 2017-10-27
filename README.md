# Regular Expressions

### Build a series of functions that will validate various types of user inputs.

We're learning to validate user input. Users will provide different information about themselves, and you need to use regular expressions to validate (and potentially reformat) particular input values. Do not use pre-built libraries for this assignment; you should write the regexes yourself.

You should write all of your functions in a single module and export them as properties of an object (see the sample code). You should write all of the functions in the `hw.js` file according to the specification in comments above it.

## Normal mode
Write a function to validate a variety of different types of user inputs. Verify that your functions correctly validate the inputs ~~using the provided mocha tests~~.

- [x] First / last name
- [x] Phone numbers
- [x] Email address
- [x] Street addresses
- [x] Usernames
- [x] URL's
- [x] IPv4 addresses

## Hard mode
- [ ] Reformat the above fields to a standardized format (remove extra spaces, standardize capitalization, add parentheses to phone numbers, etc).

- [x] Use the regular expressions to validate a simple form. The form itself doesn't have to do anything.

## Nightmare mode
Try to write a regular expression that will validate HTML. Note that the full validator is gonna be really complex, but see if you can handle a more straightforward subset.

## Part Two:
Go back and add form validation to recent projects with user input. This can be by exporting a module or creating a new function.

### Liner notes:
* Used GitKraken
* Used fieldsets/legends to group forms
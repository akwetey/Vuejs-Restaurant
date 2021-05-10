# Challenge VueJS Frontend Developer

## Context

You've just started to work with _Company Inc._, an italian restaurant franchise that want to have 
presence on Internet and bring some customers to their large network of restaurants trying to create
a viral campaign of marketing.

At this point, they have an unfinished Single Page Application without the main feature to the campaign:
a `Pasta Carbonara meal calculator`.
They have a "secret" formula with all the required ingredients, and you should introduce the quantity you own. Then,
it will give you the number of meals you can cook at home. Once the calculator gives you the number of meals you can cook,
the site will navigate to a new page with the "secret" formula exposed, and the exact quantities of each ingredient
you have to use.

The boss is very funny and would like to include a _Joke of the Day_ on every Store showed in the list of `Our Stores`
section. Also, you can include this component in the results page with the "secret" formula.
The API where you can obtain the _Joke of the Day_ is from `https://api.jokes.one/jod?category=knock-knock`. Take in
mind that the API has a limit of usage, and you should take the best solution if the site reaches too many visits.

## What you have to do

Currently, you should focus to complete the missing parts:
- The RecipeForm component has the form where the user must introduce the ingredients and calculate the meals. You must
add the logic for the submit button click. In the Carbonara view component's data method, you will find the "secret" 
  formula. (As an example, if the user introduce: pasta 1040, bacon 410, eggs 3, milk 405, butter 1010, oil 300, the
  calculation should output "2 meals").
- Create the new page that should be redirected when the user submits the ingredients, showing the restaurants' info,
  using the Banner component to show the content.
- Add an input filter in Stores where the user can search for a specific Store name. Also, in Desktop devices, the list
should have 4 columns instead of 1.

## What we will consider

### Maintainability

The application has a low effort on changes or evolutions, so you will make changes in long periods of time and you
should remember easily how the code is structured to make them fast.
Keep in mind also that you are not the only one developer in the company and other teammates could have to add
code on it. Avoid duplicated code.

### Performance

As a Single Page Application the speed of navigation in the site should be really fast. But we have a lot of users
that have old mobile devices, so they are continuously complaining about the Stores page.
Also, you can refactor the code in components where you think it can be a performance gain.

### Optimization

The production build size is almost 1mb. You should optimize it to not exceed the recommended size (244kb).

### Quality Assurance

The application should be fully usable in all browsers (except Internet Explorer) and with the most used devices.

Keep in mind that the code will not change so frequently in time, but changes could be made from different developers,
so you must ensure that the main features of the application are always working, and behave as intended.

### For an A++

- Include unit tests where you think is meaningful
- Use Cypress as e2e testing tool
- Make the whole application could switch between Light and Dark mode

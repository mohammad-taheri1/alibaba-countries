# Alibaba Countries App

## Deployed Verison

[https://countries.devempower.ir/](https://countries.devempower.ir/)

## Requirements:

-  [x] See all countries from the API on the homepage
-  [x] Search for a country using an input field
-  [x] Filter countries by region
-  [x] Click on a country to see more detailed information on a separate page (client-side routing)
-  [x] Clicking on border countries on the detail page should link the user to the detail of those countries

## Bonuses

-  [x] Bonus: Toggle the color scheme between light and dark mode without using any 3rd party libraries
-  [ ] Bonus: Searching using the keywords Grmany or Grmny should also work
-  [x] Bonus: Add sort functionality for both Population and Country Name
-  [ ] Bonus: Make all content server-side rendered and also have a fallback if the server-side render faces an error
-  [ ] Bonus: Collect analytical data (in whichever way you prefer) using Google Analytics
-  [x] Bonus: Make sure styles are loaded whenever they're really needed. e.g., The styles for the details page don't load on the homepage
-  [x] Bonus: Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable
-  [x] Bonus: Dockerize your application by creating an efficient Dockerfile
-  [ ] Bonus: Add unit tests for components
-  [x] Bonus: Store the filters in the URL query strings and sync it with the component filter object
-  [ ] Bonus: Add lazy loading for country images and list

## Extra

-  [x] Debouncing on Search input

## Packages

-  React-router-dom: for implementign SPA
-  Sass: for better css management

## Work with Docker

-  To create the image:

   ```
   docker build . -t alibaba-countries:1.0.0
   ```

-  To see the images list

   ```
   docker image ls
   ```

-  To run the image

   ```
   docker run -d -p 3333:3000 --name alibaba-countries-app alibaba-countries:1.0.0
   ```

   then go to `http://localhost:3333/` to see the application



<img src="https://imgur.com/XOS1Vdh.png"  width="150px" height="150px">

  

# LAB | Express Cinema

  

<br><br>

  

## Introduction

  

![image](https://imgur.com/htFqlDP.png)

  

The goal of this exercise is to learn how to seed the database on your own and to be able to create a cinema web page, where we will display the list of movies. In addition to that, you will create a detail page, where more details will be shown for each movie individually.

  

## Requirements

  

- Fork this repo

- Clone this repo

  

## Submission

  

Upon completion, run the following commands:

  

```

$ git add .

$ git commit -m "done"

$ git push origin master

```

  

- Create Pull Request so we can check up your work.

  

<br><br>

  

## Instructions

  

<br>

  

### Iteration 0 | Initialize the project

  

**This lab has the starter code based on the RootLauncher, the Express Generator.**

  

After forking and cloning the project, you will have install all the dependencies:

  

```shell

$ npm install

```

  

To run the app:

  

```shell

$ npm run dev

```

  

Now you are ready to start. 🚀

  

<br>

  

### Iteration 1 | Seed the database

  

First, we need to seed our database. Below you will find an array of objects with info for 8 movies. You should create two files:

  

- In the root, create a folder `models` and in it add the `Movie.model.js` file for the Movie model.

- In the root, create a folder `seeds` and inside create the `movies.seed.js` file and write the code necessary to seed the database.

  

Below you will find the seeds you should add to the `seeds/movies.seed.js`. As shown in the movies array, each of the movies has the same properties (_title_, _director_, etc.) so based on the available information, go ahead and create the `Movie` model in the `models/Movie.model.js` file.

  

```javascript
{
	title: "Red Sparrow",
	director: "Francis Lawrence",
	stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
	image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
	description:"Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
	showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
}

```

  

<br>

  

### Iteration 2 | The Home Page

  

Now when you have all movies in the database, you shall proceed to getting them to be displayed to the user.

  

We need our home page. Simple and beautiful, you can use the `index.hbs` to create the following home page:

  

![image](https://imgur.com/htFqlDP.png)

  

The `button` should be a link redirecting to the `/movies` route. (_You will create this route in the following iteration._)

  

<br>

  

### Iteration 3 | List the Movies

  

Proceed to creating the `/movies` route. We need to list all the movies we have in our database. You should create a `movies.hbs` file, and display a list of all the movies.

To summarize, in this iteration your goal is to create `/movies` route that will render `movies.hbs` view. This view should have all the movie titles and movie images displaying. In addition to this, as displayed on the image below, add the link _See more_ that should point to the each movie details page. (_You will be creating this page in the following iteration._)

  

![image](https://imgur.com/nFFH2O8.png)

  

<br>

  

### Iteration 4 | Display Movie Details

  

Finally, you have to create a view to display the details about each movie. You need a `movie/:id` route, where the user can check all the info about each movie, after clicking on the `See More` button shown on the `/movies` view.

  

![image](https://user-images.githubusercontent.com/23629340/36986933-6f8060b4-209b-11e8-8571-496914f9ae96.png)

  

<br>

  

## Bonus: Styling

  

Our app should be pretty ugly right now if you (correctly) focused on the back-end during this exercise. To be a fully functioning web app, we need to add some styles.

  

In your layout require bootstrap, and add some very basic styles to make our movies app look "ready" for production.

  

That's it!

  

<br>

  

**Happy coding!** :heart:

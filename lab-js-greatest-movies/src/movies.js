// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // Create a Set to store unique directors
  const uniqueDirectors = new Set();
  
  // Iterate through the movies array
  moviesArray.forEach(movie => {
    // Add each director to the Set
    movie.director.split(',').forEach(director => {
      uniqueDirectors.add(director.trim());
    });
  });
  
  // Convert the Set back to an array and return it
  return Array.from(uniqueDirectors);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // Filter the movies array for Steven Spielberg's movies
  const stevenSpielbergMovies = moviesArray.filter(movie => 
    movie.director.toLowerCase().includes('steven spielberg')
  );
  
  // Count the number of drama movies
  const count = stevenSpielbergMovies.filter(movie => 
    movie.genre.includes('Drama')
  ).length;
  
  return count;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // Calculate the sum of all scores
  const totalScore = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
  
  // Calculate the average score
  const averageScore = totalScore / moviesArray.length;
  
  // Round to 2 decimals
  return Number(averageScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Filter the movies array for drama movies
  const dramaMovies = moviesArray.filter(movie => 
    movie.genre.includes('Drama')
  );
  
  // Calculate the sum of scores for drama movies
  const totalDramaScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  
  // Calculate the average score of drama movies
  const averageDramaScore = totalDramaScore / dramaMovies.length;
  
  // Round to 2 decimals
  return Number(averageDramaScore.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Sort the movies array by year in ascending order
  return moviesArray.sort((a, b) => a.year - b.year);
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Sort the movies array alphabetically by title
  return moviesArray.sort((a, b) => a.title.localeCompare(b.title));
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // Map over the movies array
  return moviesArray.map(movie => ({
    ...movie,
    duration: convertDurationToMinutes(movie.duration)
  }));
}

function convertDurationToMinutes(duration) {
  // Split the duration string
  const [hours, minutes] = duration.replace('h ', '').replace('min', '').split(':');
  
  // Convert hours and minutes to numbers
  const hoursNum = parseInt(hours) || 0;
  const minutesNum = parseInt(minutes) || 0;
  
  // Calculate total minutes
  return (hoursNum * 60 + minutesNum);
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // Group movies by year
  const groupedMovies = moviesArray.reduce((acc, movie) => {
    acc[movie.year] = acc[movie.year] || [];
    acc[movie.year].push(movie);
    return acc;
  }, {});
  
  // Calculate average score for each year
  const yearAverages = Object.values(groupedMovies).map(movies => ({
    year: movies[0].year,
    avgScore: scoresAverage(movies)
  }));
  
  // Find the year with the highest average score
  const bestYearAvg = yearAverages.reduce((max, current) => 
    max.avgScore > current.avgScore ? max : current
  );
  
  return bestYearAvg;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

module.exports.run = async (movies) => {
	/*
		You are given a list of urls that will be used to search up movies. Make a GET call with axios using the given urls to search each movies. Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.
	
		You are welcome to change this function to an async/await.
	
		Example:
	
		function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
		[
			{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
			{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
		]
	
		Write your code below the comment.
	*/

	const axios = require('axios');
	const movieArray = []

	for (let i = 0; i < movies.length; i++) {
		const result = await axios.get(movies[i])
			.then( await function (response) {
				let info = {
					"Title": response.data.Title,
					"Year": response.data.Year,
					"Genre": response.data.Genre
				}
				movieArray.push(info)
				if(movies.length === movieArray.length){
					return movieArray
				}
			})
			.catch(function (error) {
				console.log(`Error: ${error.message}`)
			});
	}
	return movieArray
};

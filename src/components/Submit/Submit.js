import React from 'react';
import './Submit.css';

const Submit = props => (
	// Component: input & submit
	<div>
		<button onClick={doSearch}>Search</button>
		<input id="user-search"></input>
	</div>
);

// Performs Search
function doSearch(){
	let userSearch = document.getElementById('user-search').value;
	console.log("It Works: " + userSearch);

	// Sending XMLHTTPRequest
	var tvAPI = new XMLHttpRequest();
	tvAPI.onreadystatechange = function () {

		// Ensure valid response
		if (this.readyState === 4 && this.status === 200) {
			
			// hold search results
			let result = JSON.parse(tvAPI.responseText);
			
			// Hold all outputs
			let output = "";

			// loop through results
			for(let i = 0; i < result.length; i++){
				// console.log(result[i]);

				let name = result[i].show.name;
				let score = result[i].score;
				
				// Setting image
				let image = "";
				if(result[i].show.image){
					// Run if result contains img
					image = result[i].show.image.medium;
				}

				// Setting description
				let summary = "No Description";
				if (result[i].show.summary){

					// Run if result contains summary
					summary = result[i].show.summary;
				}

				output += `<div class="show-result">
							<div class="show-name">${name}<br>${score}</div>
							<div class="show-summary">${summary}</div>
							<div class="show-image"><img src="${image}"></div>
						  </div>`;
			}

			// Generating output and displaying
			document.getElementById("results").innerHTML = output;
			
		}
	};
	// Request and response
	tvAPI.open("GET", `https://api.tvmaze.com/search/shows?q=${userSearch}`, true);
	tvAPI.send();
}

const SubmitPropTypes = {
	// always use prop types!
};

Submit.propTypes = SubmitPropTypes;

export default Submit;
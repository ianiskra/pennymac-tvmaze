import React, { useState } from 'react';
import './Submit.css';
import Results from '../Results';

const Submit = props => {

	// Create UseState Hooks
	const [value, setVal] = useState();
	const [outputVal, setOutput] = useState();
	
	// Return as Component
	return(
		<div>
			<button onClick={doSearch}>Search</button>
			<input onChange={(e) => setVal(e.target.value)} />
			<Results output={outputVal} />
		</div>
	)

// Performs Search
function doSearch(){
	let userSearch = value;
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
				setOutput(output);
			
			}
		};
		// Request and response
		tvAPI.open("GET", `https://api.tvmaze.com/search/shows?q=${userSearch}`, true);
		tvAPI.send();
	}

};

const SubmitPropTypes = {
	// always use prop types!
};

Submit.propTypes = SubmitPropTypes;

export default Submit;
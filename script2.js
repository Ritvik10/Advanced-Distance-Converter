(function(){

    'use strict';

    let convertType = 'miles';
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form= document.getElementById('convert');

		document.addEventListener('keydown',function(event){

			const key = event.code;

			if (key === 'KeyK'){
				
				convertType= 'Kilometers';
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in a number of kilometers and click the convert button to convert the distance in miles";
			}
			
			else if (key === 'KeyM'){
				
				convertType= 'Miles';
				heading.innerHTML = "Miles to Kilometers Converter";
				intro.innerHTML = "Type in a number of Miles and click the convert button to convert the distance in Kilometers";
			}

		});

		form.addEventListener('submit',function(event){

			event.preventDefault();

			const distance = parseFloat(document.getElementById('distance').value);

			if (distance){

				if (convertType == 'Miles'){

					const converted = (distance * 1.609344).toFixed(3);
					answerDiv.innerHTML = `${distance} miles converted to ${converted} kilometers.`;

				}

				else {

					const converted = (distance * 0.621371192).toFixed(3);
					answerDiv.innerHTML = `${distance} kilometers converted to ${converted} miles.`;

				}

			}
			 else{

				answerDiv.innerHTML = `<h2>Input an integer for conversion.</h2>`;


			 }


		});

})();
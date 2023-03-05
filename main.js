
window.onload = function() {
    document.getElementById('main_container').style.display = 'none';
  };


// Execute a function when the user presses a key on the keyboard
document.querySelector('input').addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});

document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
    const place = document.querySelector('input').value;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=5f429e3a30fa4a3e9ea43830232802&q=${place}`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.getElementById('main_container').style.display = 'flex';
            document.querySelector('#location').textContent = data.location.name;
            document.querySelector('#condition').textContent = data.current.condition.text;
            document.querySelector('#temp').textContent = `${Math.round(data.current.temp_f)}\u00B0`;
            document.querySelector('#high').textContent = `H:${Math.round(data.forecast.forecastday[0].day.maxtemp_f)}\u00B0 `;
            document.querySelector('#low').textContent = `L:${Math.round(data.forecast.forecastday[0].day.mintemp_f)}\u00B0`;

        //Set background color Day or Night
        if(data.current.is_day === 1) {
            document.querySelector('#main_container').style.background = "linear-gradient(132deg, rgba(47,200,222,1) 0%, rgba(23,144,255,1) 50%)";
            document.querySelector('#main_container').style.color = "white";
        } else {
            document.querySelector('#main_container').style.background = "linear-gradient(132deg, rgba(47,200,222,1) 0%, rgba(23,144,255,1) 100%)";
            document.querySelector('#main_container').style.color = "white";
        }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

// Things to figure out:
//  - Higher-quality icons (not blurry)
//  - Spend time on the css (less ugly & better responsive design)
  
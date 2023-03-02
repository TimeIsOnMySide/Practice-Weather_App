
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
    const place = document.querySelector('input').value;
    const url = `http://api.weatherapi.com/v1/current.json?key=5f429e3a30fa4a3e9ea43830232802&q=${place}`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        //   console.log(data.current.condition.text);
        document.querySelector('#location').textContent = data.location.name;
        document.querySelector('#condition').textContent = data.current.condition.text;
        document.querySelector('#icon').src = data.current.condition.icon;
        document.querySelector('#temp').textContent = data.current.temp_f;
  
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

// Things to figure out:
//  - degree symbol for temp_
//  - Higher-quality icons (not blurry)
//  - Spend time on the css (less ugly & better responsive design)
  
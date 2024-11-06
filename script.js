let engBtn = document.getElementById('Eng-btn');
let hindiBtn = document.getElementById('Hindi-btn');
let p = document.getElementById('jokes');

engBtn.addEventListener('click', function() {
    p.classList.remove('fade-in'); // Remove the class to restart the animation
    fetch('https://api.api-ninjas.com/v1/dadjokes', {
        method: 'GET',
        headers: {
            'X-Api-Key': 'iAxWRMUNCI31hZzcb8PdqQ==IIjzbfRTU0MAuCdJ'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data) && data.length > 0) {
            p.textContent = data[0].joke;
        } else {
            p.textContent = "Couldn't fetch a joke!";
        }
        p.classList.add('fade-in'); // Re-apply the class for fade-in effect
    })
    .catch(error => console.log("Error:", error));
});

hindiBtn.addEventListener('click', generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=0765472a810e8489eae8ce12b7a5', config);
    const data = await res.json();
    p.innerHTML = data.jokeContent;
}

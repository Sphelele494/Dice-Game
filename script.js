const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const results = document.getElementById('status');
//Fetching The Immages From The Json File....
async function fetchimages() {
    try{
        //Fetch The json File
        const response = await fetch('images.json');
        //Parse Json Data
        const data = await response.json();
        //Accessing the array
        const imagesArray = data.images;
        const imagesArray2 = data.images2;

        //This Is The Area Where I Should Randomize The Images
        const randomImage = Math.floor(Math.random() * imagesArray.length);
        const randomImage2 = Math.floor(Math.random() * imagesArray2.length);

        player1.setAttribute('src', imagesArray[randomImage]);
        player2.setAttribute('src', imagesArray2[randomImage2]);

        //If Else Statement To Declare The Winner
        if (randomImage > randomImage2) {
            results.innerHTML = 'Player One Wins!!!';
        } else if (randomImage < randomImage2) {
            results.innerHTML = 'Player Two Wins!!!';
        } else {
            results.innerHTML = 'Its A Draw!!';
        }

    } catch(error){
        console.log('Error fetching the Json file:', error);
    }
}

fetchimages();
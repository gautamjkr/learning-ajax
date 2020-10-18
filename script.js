 const CAT_URL ="https://cat-fact.herokuapp.com/facts/random?animal_type=dog";


const myScreen = document.querySelector('.fact-sheet');
const forFacts = document.querySelector('.for-facts');
const forImages = document.querySelector('.for-images');
const getFacts = document.querySelector('.get-facts');
const finalImage = document.querySelector('.final-image');
const finalFact = document.querySelector('.final-fact');


const completeListOne = [];

const completeListTwo = [];

function getNewFacts(){

// getFacts.innerText = `CLICK AGAIN FOR MORE`;    
const promise = fetch(CAT_URL);
promise
.then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
})

.then(function(processedResponse) {
    const para = document.createElement("div");
    para.className = 'final-fact';
    para.style.fontSize = "25px";
    para.innerText = `- ` + processedResponse.text;
    completeListOne.push(para.innerText);
    forFacts.appendChild(para);
    

});

const anotherPromise = fetch("https://dog.ceo/api/breeds/image/random");

anotherPromise
.then(function(response){
    const anotherProcessingPromise = response.json();
    return anotherProcessingPromise;
})

.then(function(processedResponse){
    const dogImage = document.createElement("img");
    dogImage.className = 'final-image';
    dogImage.src = processedResponse.message;
    dogImage.alt = "an image of a dog";
    completeListTwo.push(dogImage.src)
    forImages.appendChild(dogImage);


})



}

getFacts.addEventListener("click", getNewFacts); 




// document.querySelector('.sample-button').addEventListener("click", function(){
//     const addFacts = document.querySelector('.for-facts');
    
//     for(let i=0; i < completeListOne.length; i++){
//         const d1 = document.createElement('div');
//         d1.className = 'final-fact';
//         d1.innerText = completeListOne[i];
//         addFacts.appendChild(d1);
        
//     }
    
    
// })





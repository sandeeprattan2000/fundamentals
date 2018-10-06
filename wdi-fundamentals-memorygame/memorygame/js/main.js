 
//Memory Game : Code - written by Sandeep Sharma : Dated - 10/6/2018
 

// Variable declaration.
var cards = [
   
{   
rank : "queen",
suit : "hearts",
cardImage : "images/queen-of-hearts.png"   
},
{   
rank : "queen",
suit : "diamonds",
cardImage : "images/queen-of-diamonds.png"   
},
{   
rank : "king",
suit : "hearts",
cardImage : "images/king-of-hearts.png"   
},
{   
rank : "king",
suit : "diamonds",
cardImage : "images/king-of-diamonds.png"   
}
];
 
var cardsInPlay = [];

//Functions
 
var checkForMatch = function(){
   
    

    if (cardsInPlay.length === 2 )
    {
        if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");   
        }else {
           
            console.log("Sorry,try again")
        }
    }
   
};
 
var flipCard = function(){
    cardId = this.getAttribute('data-id');
    console.log("user flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage); 
    checkForMatch();
 
};
 

var createBoard = function () {

    for (i=0 ; i < cards.length ; i++) {

        var cardElement;
        console.log('lenght of cards - ' + cards.length);
        console.log('this is the value if i - ' + i);
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        
        cardElement.setAttribute('data-id', i); 
        cardElement.addEventListener('click',flipCard);
      
        document.getElementsByTagName('div')[0].appendChild(cardElement);
       
        
    };
};

//calling the function.

createBoard();


// Pervious Assingments :
 
//flipCard(2);
 
 
 
//var cardOne = cards[0];
//var cardTwo = cards[2];
 
//cardsInPlay.push(cardOne)
//cardsInPlay.push(cardTwo)
/*if (cardsInPlay.length === 2 )
    {
        if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");   
        }else {
           
            console.log("Sorry,try again")
        }
       
        
        
    }
*/
 

let userName = prompt("whats your name?")
//Input

let responseIMG = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')

userName ? (greeting.innerText= `Hello, ${userName}!` )
: (greeting.innerText= 'Hello boy')


function shakeMagic8Ball(){
    let userQuestion = prompt("What do you want to ask?")
    console.log(userQuestion);
    
    //DO NOT TOUCH
    let randomNumber = Math.floor(Math.random()* 8);
    let eightBall = '';
    let imageChoice = ''
    
    switch (randomNumber) {
      case 0:
          eightBall = 'Yes';
          imageChoice = 'yes.png'
        break;
      case 1:  
        eightBall = 'It is certain';
        imageChoice = '8ball.png'
        break;
      case 2:
          eightBall = 'It is decidedly so';
          imageChoice = 'yes.png'
        break;
      case 3:
          eightBall = 'Your speaking is incoherent, reply again';
          imageChoice = 'thumbs down.png'
        break;
      case 4:
          eightBall = 'Cannot predict now';
          imageChoice = 'no.png'
        break;
      case 5:
          eightBall = 'Unlikely';
          imageChoice = 'no.png'
        break;
      case 6:
          eightBall = 'No';
          imageChoice = 'no.png'
        break;
      case 7:
          eightBall = 'It is Beyond My Understanding';
          imageChoice = 'yes.png'
        break;
      case 8:
        eightBall = 'It Seems To Be So';
        imageChoice = 'yes.png'
        break;
        
    }
    
    console.log(eightBall)

   responseText.innerText = `${userName} Has Asked ${userQuestion} to the boy. The boy Replies ${eightBall}!`

   responseIMG.src = imageChoice
}
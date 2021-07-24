const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let score = 5;


// function drawComponent(imageSrc, x, y, width, height) {
//     context.drawImage(imageSrc, x, y, width, height);
// };

// 1) ADDING BACKGROUND IMAGE //


const backgroundImg = new Image();

backgroundImg.src = './images/background.jpg';




// 2) ADD IMAGES TO GAME //

const toucan = {
    x: 755,
    y: 500,
    width: 250,
    height: 300,

};

const toucanImg = new Image();
toucanImg.src = "./images/toucan2.png"


const cloud = {
    x: 0,
    y: -90,
    width: canvas.width,
    height: 400,

};

const cloudImg = new Image();

cloudImg.src = "./images/clouds.png"


const scoreLeaf = {
    x: 600,
    y: 5,
    width: 300,
    height: 200,

};

const scoreImg = new Image();

scoreImg.src = './images/scoreLeaf.png';


const fruit = {
    x: 500,
    y: 50,
    width: 50,
    height: 75,
};

const fruitImg = new Image();

//FRUIT ARRAY FOR LATER//
// const fruitImg2 = new Image();
// const fruitImg3 = new Image();
// const fruitImg4 = new Image();
// const fruitImg5 = new Image();
// const fruitImg6 = new Image();




fruitImg.src = './images/pineapple.png';
// fruitImg2.src = './images/banana.png';
// fruitImg3.src = './images/papaya.png';
// fruitImg4.src = './images/watermelon.png';
// fruitImg5.src = './images/pom.png';
// fruitImg6.src = './images/apple.png';

// const fruitImages = [
//     fruitImg, fruitImg2, fruitImg3, fruitImg4, fruitImg5, fruitImg6
// ]





const drawEverything = () => {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

    context.drawImage(fruitImg, fruit.x, fruit.y, fruit.width, fruit.height);

    context.drawImage(cloudImg, cloud.x, cloud.y, cloud.width, cloud.height);

    context.drawImage(scoreImg, scoreLeaf.x, scoreLeaf.y, scoreLeaf.width, scoreLeaf.height);

    context.font = '30px arial';

    context.fillStyle = 'ORANGE';

    context.fillText(`Score: ${score}`, 700, 140);

    context.drawImage(toucanImg, toucan.x, toucan.y, toucan.width, toucan.height);

    //SCORE AND ALERTS//

    if (fruit.y === 0) {
        score--
    };







}

const drawLoop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);


    // fruit.drawComponent();
    fruit.y += 12;
    if (fruit.y > canvas.height) {
        fruit.y = 0;
        fruit.x = Math.random() * (canvas.width - 250);
    }

    if (score === 0) {

        gameOver();
    };


    if (score > 0) {

        window.requestAnimationFrame(drawLoop);

    }

    if (score === 20){
        youWin();
    }

    drawEverything();

};

// GAME OVER //////////////////////////////////
//////////////////////////////////

const gameOver = () => {
    const greenOver = {
        x: 300,
        y: 250,
        width: 350,
        height: 350,
    }

    const greenOverImg = new Image();

    greenOverImg.src = './images/gameover.png';


    context.drawImage(greenOverImg, greenOver.x, greenOver.y, greenOver.width, greenOver.height);

    window.requestAnimationFrame(gameOver);


}

const youWin = () => {
    
}







//=========>//Player Mouse Click Event <===========//

// document.querySelector("fruitImg").onclick = () => {
//     if( fruit.x + fruit.width || fruit.y + fruit.height){
//           score++;
// }
// }


document.addEventListener("click", event => {



    if (event.x > fruit.x &&
        event.y > fruit.y &&
        event.x < fruit.x + fruit.width &&
        event.y < fruit.y + fruit.height) {
        score++;
    }

});

drawLoop();






























// =====> CREATING BACKGROUND IMAGE <=========== //

// const backgroundImg = new Image();

// backgroundImg.src = './images/background.jpg'

// //  console.log(backgroundImg)

// backgroundImg.addEventListener('load', () => 
// context.drawImage(backgroundImg, 0, 0, 1000, 800));




// ======> ANIMATION FOR FALLING OBJECTS <======= //

// let speed1 = 1;
// let speed2 = 2;
// let speed3 = 3;

// const makeSquare = (x, y, w, h, color) => {

//     context.fillStyle = color;

//     context.fillRect(x, y, w, h);
// };

// const updateCanvas = () => {
//     speed1 += 1;
//     speed2 += 2;
//     speed3 += 3;

//     context.clearRect(0, 0, canvas.width, canvas.height);

//     makeSquare(10, speed1, 50, 50, "blue")
//     makeSquare(70, speed2, 50, 50, "red")
//     makeSquare(150, speed3, 50, 50, "green")



//=======> COULD BE ANY OF THE THREE METHODS BELOW <======= //

//      setTimeout(updateCanvas, 30);
//     // requestAnimationFrame(updateCanvas)
//     setInterval(updateCanvas, 1000 / 60)
// };

// updateCanvas();
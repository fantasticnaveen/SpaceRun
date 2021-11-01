var gamestate = 'play'
var score = 0
function preload(){
    player = createSprite(windowWidth/6, windowHeight/2, 40, 40)
    ground = createSprite(windowWidth/2, windowHeight, windowWidth*2, 150)
    obstacle = createSprite(windowWidth, windowHeight-125, 100, 100)
    obstacle.y = random(0, windowHeight-125) 
    obstacle2 = createSprite(windowWidth, windowHeight-125, 100, 100)
    obstacle2.y = random(0, windowHeight-125)
    playerimg = loadAnimation('player run1.png', 'player run2.png', 'player run3.png')    
    obstacleimg = loadAnimation('obstacle.png')
    obstacle.scale = 2
    obstacle2img = loadAnimation('obstacle.png')
    obstacle2.scale = 2
    groundimg = loadImage('ground.png')


}

function setup() {
 player.addAnimation('playerRunning', playerimg)
 obstacle.addAnimation('obstacle', obstacleimg)
 obstacle2.addAnimation('obstacle', obstacleimg)
 ground.addImage('ground', groundimg)
}

function draw() {
    createCanvas(windowWidth, windowHeight)
    background('black')
    obstacle.velocityX = -5
    obstacle2.velocityX = -5
    if (gamestate === 'play'){
        score = score + Math.round(getFrameRate()/60);
        text('score: '+ score, windowWidth/2, windowHeight/2)
         player.velocityY = player.velocityY + 0.5
         obstacle.velocityX = -5
         obstacle2.velocityX = -4

        if (player.collide(ground) && keyDown('space')){
            player.velocityY = -20
        }
        if (player.collide(obstacle) || player.collide(obstacle2)){
            gamestate = 'end'
        }
        if (obstacle.x === 0){
            obstacle.x = windowWidth
            obstacle.y = random(0, windowHeight - 125)
        }
        if (obstacle2.x === 0){
            obstacle2.x = windowWidth
            obstacle2.y = random(0, windowHeight - 125)
        }
        ground.velocityX = -5
        if (ground.x < windowWidth/2){
            ground.x = windowWidth/2
        }
    }
    if (gamestate === 'end'){
        player.VelocityX = 0
        obstacle.velocityX = 0
        obstacle2.velocityX = 0

        
    }
   

    player.collide(ground)
    drawSprites()
 
}
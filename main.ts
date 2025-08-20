// Space Dog Rescue – MakeCode Arcade

let playerSprite: Sprite = null
let Bone: Sprite = null
let Asteroid: Sprite = null

// On start
scene.setBackgroundColor(1) // black
playerSprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . f f f f f f f f f . . . .
    . . f f f f f f f f f f f . . .
    . f f f f f f f f f f f f f . .
    . f f f f f f f f f f f f f . .
    . f f f f f f f f f f f f f . .
    . f f f f f f f f f f f f f . .
    . . f f f f f f f f f f f . . .
    . . . f f f f f f f f f . . . .
`, SpriteKind.Player)
controller.moveSprite(playerSprite)
info.setScore(0)
info.setLife(3)

// Forever loop to spawn Bone and Asteroid
game.onUpdateInterval(1000, function () {
    Bone = sprites.create(img`
        . . . . . 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Food)
    Bone.setPosition(randint(0, 160), 0)
    Bone.vy = 50
})

game.onUpdateInterval(1500, function () {
    Asteroid = sprites.create(img`
        . . 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 . . 
    `, SpriteKind.Enemy)
    Asteroid.setPosition(randint(0, 160), 0)
    Asteroid.vy = 80
})

// Player collects Bone
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})

// Player hits Asteroid
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})

// Increase difficulty
game.onUpdate(function () {
    if (info.score() > 10) {
        Bone.vy = 70
        Asteroid.vy = 100
    }
})

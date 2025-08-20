scene.set_background_color(15)
mySprite = sprites.create(img("""
        . . f f f . . . . f f f . . . .
        . f 5 5 5 f . . f 5 5 5 f . . .
        f 5 5 5 5 5 f f 5 5 5 5 5 f . .
        f 5 5 f f 5 5 5 5 f f 5 5 f . .
        f 5 f f 5 5 5 5 5 5 f f 5 f . .
        . f f 5 5 5 5 5 5 5 5 f f . . .
        . . f 5 f 5 5 5 5 f 5 f . . . .
        . . f 5 5 5 4 4 5 5 5 f . . f f
        . . f 4 5 5 f f 5 5 6 f . f 5 f
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f
        . . . f 4 5 5 5 5 5 5 4 4 5 f .
        . . . f 5 5 5 5 5 4 5 5 f f . .
        . . . f 5 f f f 5 f f 5 f . . .
        . . . f f . . f f . . f f . . .
        """),
    SpriteKind.player)
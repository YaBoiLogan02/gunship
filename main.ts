namespace SpriteKind {
    export const Dead = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy6 = SpriteKind.create()
    export const ShipTarget = SpriteKind.create()
    export const ShipTarget2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    MyEnemy4.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ShipTarget, function (sprite, otherSprite) {
    projectile.destroy()
    TargettingShip.destroy(effects.fire, 200)
    info.changeScoreBy(300)
    music.bigCrash.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`PlayerBlast`, mySprite, 0, -100)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy5, function (sprite, otherSprite) {
    MyEnemy5.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    MyEnemy3.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
    music.bigCrash.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    MyEnemy2.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy6, function (sprite, otherSprite) {
    MyEnemy6.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Enemy6, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    MyEnemy6.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    myEnemy.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Enemy4, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    MyEnemy4.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Enemy3, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    MyEnemy3.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    MyEnemy2.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ShipTarget2, function (sprite, otherSprite) {
    projectile.destroy()
    TargettingShip2.destroy(effects.fire, 200)
    info.changeScoreBy(300)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.ShipTarget2, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 2000)
    TargettingShip2.destroy(effects.fire, 2000)
    pause(1000)
    game.over(false, effects.slash)
    music.siren.play()
})
sprites.onOverlap(SpriteKind.ShipTarget, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 2000)
    TargettingShip.destroy(effects.fire, 2000)
    pause(1000)
    game.over(false, effects.slash)
    music.siren.play()
})
sprites.onOverlap(SpriteKind.Enemy5, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 200)
    MyEnemy5.destroy(effects.fire, 200)
    pause(1000)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy(effects.confetti, 10)
    projectile.destroy()
    info.changeScoreBy(100)
})
let TargettingShip2: Sprite = null
let myEnemy: Sprite = null
let MyEnemy6: Sprite = null
let MyEnemy2: Sprite = null
let MyEnemy3: Sprite = null
let MyEnemy5: Sprite = null
let TargettingShip: Sprite = null
let projectile: Sprite = null
let MyEnemy4: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Ship`, SpriteKind.Player)
mySprite.setPosition(82, 105)
mySprite.setStayInScreen(true)
effects.starField.startScreenEffect()
info.startCountdown(65)
info.setScore(0)
forever(function () {
    pause(500)
    pause(2000)
    pause(5000)
    MyEnemy4 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy4)
    MyEnemy4.setPosition(randint(5, 155), randint(0, -40))
    MyEnemy4.setVelocity(0, 25)
})
forever(function () {
    pause(500)
    pause(2000)
    pause(5000)
    MyEnemy6 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy6)
    MyEnemy6.setPosition(randint(5, 155), randint(0, -40))
    MyEnemy6.setVelocity(0, 25)
})
forever(function () {
    pause(500)
    pause(2000)
    pause(5000)
    MyEnemy5 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy5)
    MyEnemy5.setPosition(randint(5, 155), randint(0, -40))
    MyEnemy5.setVelocity(0, 25)
})
forever(function () {
    pause(5000)
    MyEnemy2 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy2)
    MyEnemy2.setPosition(randint(5, 155), randint(0, -40))
    MyEnemy2.setVelocity(0, 25)
})
forever(function () {
    pause(5000)
    myEnemy = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
    myEnemy.setPosition(randint(5, 155), randint(0, -40))
    myEnemy.setVelocity(0, 25)
})
forever(function () {
    pause(5000)
    MyEnemy3 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy3)
    MyEnemy3.setPosition(randint(5, 155), randint(0, -40))
    MyEnemy3.setVelocity(0, 25)
})
forever(function () {
    pause(5000)
    TargettingShip = sprites.create(assets.image`TargetShip`, SpriteKind.ShipTarget)
    TargettingShip.setPosition(randint(5, 80), 0)
    TargettingShip.setVelocity(randint(-20, 20), 75)
    pause(5000)
})
forever(function () {
    pause(5000)
    pause(5000)
    TargettingShip2 = sprites.create(assets.image`TargetShip`, SpriteKind.ShipTarget2)
    TargettingShip2.setPosition(randint(80, 155), 0)
    TargettingShip2.setVelocity(randint(-20, 20), 75)
})

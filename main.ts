input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    wuKong.setAllMotor(100, -100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    wuKong.setAllMotor(100, 100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    wuKong.setAllMotor(-100, 100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(500)
    wuKong.setAllMotor(-100, -100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
basic.forever(function () {
    basic.showIcon(IconNames.Surprised)
})

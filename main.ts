input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 50) {
        led.setBrightness(255)
    } else {
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(23)
    radio.setGroup(23)
    People += -1
    basic.showNumber(People)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(23)
    radio.setGroup(23)
    People += 1
    basic.showNumber(People)
})
let People = 0
People = 0
basic.showNumber(People)

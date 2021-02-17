Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
basic.forever(function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    basic.pause(2000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.pause(2000)
})

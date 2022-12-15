
// let pocet_hodu = 0
// let sestky = 0
// let kostka = 0 

// input.onGesture(Gesture.Shake, function() {
//     kostka = Math.round((Math.random() * 5) + 1)
//     whaleysans.showNumber(kostka)
//     pocet_hodu += 1
//     if (kostka === 6) {
//         sestky += 1
//     }else {
//         sestky = 0
//     }
//     if (sestky === 3) {

//         music.playTone(Note.C, music.beat(BeatFraction.Whole))
//         whaleysans.showNumber(pocet_hodu)
//         basic.pause(2000)
//         pocet_hodu = 0
//         sestky = 0
//     }
// })

let kostka = 0
let zamek = false
let tip = 0
let zamek_tipovy = false
let vysledek = 0
let zamek_zamkovy = false

input.onButtonPressed(Button.AB, function () {
    if (zamek_zamkovy){
    zamek = false  
    zamek_zamkovy = false}
})
input.onButtonPressed(Button.A, function () {
    if (zamek_tipovy) {
        tip += -1
        if (tip === 0) {
            tip = 6
        }
    }
    
})
input.onButtonPressed(Button.B, function () {
    if (zamek_tipovy) {
        tip += 1
        if (tip === 7){
            tip = 1
        }
    }
    
})



input.onGesture(Gesture.Shake, function () {
    if (zamek === false){ 
    kostka = Math.round((Math.random() * 5) + 1)
   
    zamek = true
    zamek_tipovy = true
        
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    vysledek = tip - kostka
    
        vysledek = Math.abs(vysledek)
    if (vysledek === 0){
        basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
    basic.pause(1000)
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
        zamek_zamkovy = true
    }else{
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        whaleysans.showNumber(vysledek)
        zamek_zamkovy = true
    }

})

basic.forever(function () {

    
if (zamek_tipovy) {
if (tip === 1) {
    
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
}else if (tip === 2){
    basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . . . .
    . . . . .
    `)
} else if (tip === 3) {
    basic.showLeds(`
    . . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . .
    `)
} else if (tip === 4) {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
} else if (tip === 5) {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
} else if (tip === 6) {
    basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `)
}

}

    
})
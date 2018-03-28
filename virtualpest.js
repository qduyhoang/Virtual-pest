var countdown =  /* global $ */$("#countdown").countdown360({
    fillStyle: "#8ac575", 
    radius      : 50,
    seconds     : 10,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete  : function () {}
});
//start countdown
countdown.start();

//define CSS animations to use later
var supportedFlag = $.keyframe.isSupported();
$.keyframe.debug = true;

$.keyframe.define([{
        name: 'changeColor',
        '99%': {
            'background-color': 'red'
        }
    },

    {
        name: 'shake',
        '10%': {
            'transform': 'translate(0.5px, -1.5px) rotate(-0.5deg)'
        },
        '20%': {
            'transform': 'translate(0.5px, 1.5px) rotate(1.5deg)'
        },
        '30%': {
            'transform': 'translate(1.5px, 1.5px) rotate(1.5deg)'
        },
        '40%': {
            'transform': 'translate(2.5px, 1.5px) rotate(0.5deg)'
        },
        '50%': {
            'transform': 'translate(0.5px, 2.5px) rotate(0.5deg)'
        },
        '60%': {
            'transform': 'translate(1.5px, 1.5px) rotate(0.5deg)'
        },
        '70%': {
            'transform': 'translate(0.5px, 0.5px) rotate(0.5deg)'
        },
        '80%': {
            'transform': 'translate(-1.5px, -0.5px) rotate(1.5deg)'
        },
        '90%': {
            'transform': 'translate(0.5px, 0.5px) rotate(1.5deg)'
        },
        '98%': {
            'transform': 'translate(2.5px, 2.5px) rotate(1.5deg)'
        },

        '0%, 100%': {
            'transform': 'translate(0, 0) rotate(0)',
        }
    },

    {
        name: 'electrified',
        '10%': {
            'transform': 'translate(2px, 3px) rotate(-9deg)',
            'opacity': '1'
        },
        '20%': {
            'transform': 'translate(3px, 3px) rotate(-7deg)',
            'opacity': '0.71'
        },
        '30%': {
            'transform': 'translate(2px, 18px) rotate(5deg)',
            'opacity': '0.83'
        },
        '40%': {
            'transform': 'translate(7px, 18px) rotate(-7deg)',
            'opacity': "0.2"
        },
        '50%': {
            'transform': 'translate(13x, -14px) rotate(10deg)',
            'opacity': '0.71'
        },
        '60%': {
            'transform': 'translate(-14px, 20px) rotate(3deg)'
        },
        '70%': {
            'transform': 'translate(-15px, 17px) rotate(5deg)'
        },
        '80%': {
            'transform': 'translate(-17px, -1px) rotate(-3deg)',
            'opacity': '0.62'
        },
        '90%': {
            'transform': 'translate(-4px, 2px) rotate(8deg)',
            'opacity': '0.15'
        },

        '0%, 100%': {
            'transform': 'translate(0, 0) rotate(0)',
        }
    }

]);


//set time incrementer
var time = 0;
setInterval(function() {
    if (countdown.getTimeRemaining() > 0) {
        time++;
    }
    //reset time if tree dies
    else if (countdown.getTimeRemaining() <= 0) {
        time = 0;
        if ($("#message").text() == "Your pet ran away because it is mistreated") {
            $("#petState").text("RAN AWAY AND NEVER COME BACK");
            $("#petState").css("color", "grey");
        } else {
            $("#petState").text("DIED FOREVER");
            $("#petState").css("color", "grey");
        }
        clearInterval(interval);
        $(".circular.image").resetKeyframe(function() {
            $(".circular.image").pauseKeyframe();
        });
    }
    $("#time").text(time);
}, 1000);





var overwateringCounter = 0;
//button water
function feed() {
    if ($("#petState").text() == "HAPPY") {
        countdown.extendTimer(1);
    } else if ($("#petState").text() == "GOT STRUCK BY LIGHTNING" || $("#petState").text() == "UNDER DISEASE") {
        countdown.extendTimer(5);
    } else {
        countdown.extendTimer(2);
    }
    /////////////////////////////////check if overwatered
    if (time > 0 && time < 10) {
        if (countdown.getTimeRemaining() >= 10) {
            overwateringCounter++
            $("#message").text("You overwatered you pet :" + "" + overwateringCounter + "" + " time" + "(maxmimum : 2 times)")
            if (overwateringCounter >= 1 && overwateringCounter < 2) {
                countdown.extendTimer(-6)
                $("#petState").text("OVERWATERED");
                $("#petState").css("color", "red");
            } else if (overwateringCounter >= 2) {
                countdown.extendTimer(-11);
            }

            $("#petState").text("OVERWATERED");
            $("#petState").css("color", "red");
            //start flashing red background color during desease
            $(".circular.image").playKeyframe({
                name: 'changeColor', // name of the keyframe you want to bind to the selected element
                duration: '1.5s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
                iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
                direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
                fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
            });
        }
    }
    /////////////////////////////////check if overwatered
    if (time >= 10 && time < 20) {
        if (countdown.getTimeRemaining() >= 30) {
            overwateringCounter++
            $("#message").text("You overwatered you pet :" + "" + overwateringCounter + "" + " time" + "(maxmimum : 2 times)")
            if (overwateringCounter >= 1 && overwateringCounter < 2) {
                countdown.extendTimer(-18)
                $("#petState").text("OVERWATERED");
                $("#petState").css("color", "red");
            } else if (overwateringCounter >= 2) {
                countdown.extendTimer(-35);
            }
            //start flashing red background color during desease
            $(".circular.image").playKeyframe({
                name: 'changeColor', // name of the keyframe you want to bind to the selected element
                duration: '1.5s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
                iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
                direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
                fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
            });
        }
    }

}


//leveling up depending on time
var level0, level1, level2, level3;

function levelup() {
    //////////////////////////////////////////////level 0
    level0 = setInterval(function() {
        if (time > 0 && time < 10) {
            $("#petLevel").text('SEED');
            $("#tree").attr("src", "trees/animated-tree-image-0131.gif");
            //collect pet's image every 6 secs depending on pet's level
            if (countdown.getTimeRemaining() >= 5) {
                $("#petState").text("GROWING");
                $("#petState").css("color", "green");
            }
            if (countdown.getTimeRemaining() <= 0) {
                $("#tree").attr("src", "trees/animated-tree-image-0131.gif");
                $("#petState").text("STOP GROWING");
                $("#petState").css("color", "red");
            }

        }
    }, 1000)
    ///////////////////////////////////////////////level 1
    setTimeout(function() {
        if (time >= 10 && time < 25) {
            $("#petLevel").text('BABY TREE');
            $("#tree").attr("src", "trees/oie_26175529p94GnXxa.gif");
            countdown.start();
            countdown.addSeconds(20);
            clearInterval(level0);
            overwateringCounter = 0
            //change pet's image depending on pet's level
            level1 = setInterval(function() {
                if (countdown.getTimeRemaining() > 15 && $("#petState").text() != "UNDER DISEASE") {
                    $("#petState").text("HAPPY");
                    $("#petState").css("color", "green");
                } else if (countdown.getTimeRemaining() <= 15 && countdown.getTimeRemaining() >= 1 && $("#petState").text() != "UNDER DISEASE") {
                    $("#petState").text("THIRSTY");
                    $("#petState").css("color", "red");
                } else if (countdown.getTimeRemaining() <= 0) {
                    $("#tree").attr("src", "trees/treeblow.gif");
                }
            }, 3000)
        }
    }, 11000)

    ////////////////////////////////////////////////level 2
    setTimeout(function() {
        if (time >= 25 && time < 100) {
            countdown.start();
            countdown.addSeconds(50);
            $("#tree").attr("src", "trees/13-hot-tree-animated.gif");
            $("petLevel").text('YOUNG TREE');

            clearInterval(level1);
        }
        level2 = setInterval(function() {
            if (countdown.getTimeRemaining() >= 30 && $("#petState").text() !== "UNDER DISEASE" && $("#petState").text() !== "CONSUSMING THE BUGS") {
                $("#petState").text("HAPPY");
                $("#petState").css("color", "green");
                $("#tree").attr("src", "trees/13-hot-tree-animated.gif");
            } else if (countdown.getTimeRemaining() < 20 && countdown.getTimeRemaining() >= 1 && $("#petState").text() != "UNDER DISEASE") {
                $("#petState").text("THIRSTY");
                $("#petState").css("color", "red");
            } else if (countdown.getTimeRemaining() <= 0 && $("#message").text() !== "Your pet ran away because it is mistreated") {
                $("#tree").attr("src", "trees/treeblow.gif");
            }

        }, 4000)

    }, 26000)



    /////////////////////////////////////////////////level 3
    setTimeout(function() {
        if (time >= 100) {
            $("#tree").attr("src", "trees/treegrow.gif");
            countdown.start();
            countdown.addSeconds(20);
            $("petLevel").text('MATURE TREE');
            clearInterval(level2);
        }
        level3 = setInterval(function() {
            if (countdown.getTimeRemaining() >= 50 && $("#petState").text() != "UNDER DISEASE" && $("#petState").text() !== "CONSUSMING THE BUGS") {
                $("#petState").text("HAPPY");
                $("#petState").css("color", "green");
                $("#tree").attr("src", "trees/treegrow.gif");

            } else if (countdown.getTimeRemaining() < 50 && countdown.getTimeRemaining() >= 1 && $("#petState").text() != "UNDER DISEASE") {
                $("#petState").text("THIRSTY");
                $("#petState").css("color", "red");

            } else if (countdown.getTimeRemaining() <= 0 && $("#message").text() !== "Your pet ran away because it is mistreated") {
                $("#tree").attr("src", "trees/treeblow.gif");

            }
        }, 4000)


    }, 101000);
}

levelup();


//define disease interval in order to clear it later
var interval;

function diseaseInterval() {
    if (Math.random() > 0.2) {
        countdown.extendTimer(-1);
    }
}

//cures the disease
function cure() {
    clearInterval(interval);
    $("#petState").text("CURED");
    $("#petState").css("color", "orange");
    //stop flashing red background color
    $(".circular.image").resetKeyframe(function() {
        $(".circular.image").pauseKeyframe();
    });

}

////////THROW BUGs
function bug() {
    if ($("#petState").text() == "HAPPY" || $("#petState").text() == "PHOTOSYNTHESIS" && $("#petState").text() != "GOT STRUCK BY LIGHTNING") {
        $("#message").text("You throw bugs at your pet. It makes him sick. Cure or strike him with lightning to kill the bugs")
        interval = setInterval(diseaseInterval, 60);
        $("#petState").text("UNDER DISEASE");
        $("#petState").css("color", "red");

        //start flashing red background color during desease
        $(".circular.image").playKeyframe({
            name: 'changeColor', // name of the keyframe you want to bind to the selected element
            duration: '2s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
            timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
            delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
            iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
            direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
            fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
            complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
        });
    } else if ($("#petState").text() == "THIRSTY") {
        $("#message").text("You throw bugs at your pet. He is consuming the bugs")
        $("#tree").attr("src", "trees/eatbug.jpg");
        var bugEating = setInterval(function() {
            //increase health
            countdown.extendTimer(1);
        }, 100)
        setTimeout(function() {
            clearInterval(bugEating);
        }, 1500);
    } else if ($("#petState").text() == "GROWING") {
        $("#message").text("Your pet doesn't need bugs yet")
    }
}


/////////////////////////reset game
function reset() {
    /*global location*/
    location.reload();
}
/////////EXPOSE TO THE SUN
function sun() {
    if ($("#petState").text() == "HAPPY") {
        $("#petState").text("PHOTOSYNTHESIS");
        $("#petState").css("color", "orange");
        $("#tree").attr("src", "trees/giphy.gif")
        $("#message").text("Your pet is performing photosynthesis")
        //increase health
        var photosynthesis = setInterval(function() {
            countdown.extendTimer(1);
        }, 100)
        setTimeout(function() {
            clearInterval(photosynthesis);
        }, 1500);
    } else if ($("#petState").text() == "THIRSTY") {
        $("#message").text("You leave your pet out in the sun when he's thirsty, and now he is withering!! ")
        $("#tree").attr("src", "https://media.giphy.com/media/TI8S2OGkDs31C/giphy.gif");
        var withering = setInterval(function() {
            //increase health
            countdown.extendTimer(-1);
        }, 100)
        setTimeout(function() {
            clearInterval(withering);
        }, 1500);
    } else if ($("#petState").text() == "GOT STRUCK BY LIGHTNING") {
        $("#message").text("Your pet cannot perform photosynthesis because he has just been struck with lightning. ");
    } else if ($("#petState").text() == "UNDER DISEASE") {
        bug();
        $("#message").text("The weather makes the bugs reproduce real quick..")
    } else if ($("#petState").text() == "GROWING") {
        $("#message").text("Too young to perform photosynthesis")
    }
}

function hit() {
    if ($("#petState").text() == "PHOTOSYNTHESIS") {
        $("#tree").attr("src", "trees/funnytree.jpg");
        $("#message").text("Your pet is not affected by lightning because it is currently in photosynthesis process")
    } else if ($("#petState").text() == "THIRSTY" || $("#petState").text() == "GOT STRUCK BY LIGHTNING") {
        $("#tree").attr("src", "");
        $("#message").text("Your pet ran away because it is mistreated")
        countdown.extendTimer(-countdown.getTimeRemaining());
    } else if ($("#petState").text() == "UNDER DISEASE") {
        clearInterval(interval);
        //-30% current health
        countdown.extendTimer(-countdown.getTimeRemaining() * 30 / 100);
        //shaking animation
        $("#petState").text("GOT STRUCK BY LIGHTNING");
        $("#petState").css("color", "red");
        $("#message").text("You strike your pet with lightning. The bugs died.")
        //shakes image
        $(".circular.image").playKeyframe({
            name: 'electrified', // name of the keyframe you want to bind to the selected element
            duration: '100ms', // [optional, default: 0, in ms] how long you want it to last in milliseconds
            timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
            delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
            iterationCount: '10', //[optional, default:1]  how many times you want the animation to repeat
            direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
            fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
            complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
        })

    } else {
        $("#message").text("You strike your pet with lightning.")
        //-30% current health
        countdown.extendTimer(-countdown.getTimeRemaining() * 30 / 100);
        //shaking animation
        $("#petState").text("GOT STRUCK BY LIGHTNING");
        $("#petState").css("color", "red");
        //shakes image
        $(".circular.image").playKeyframe({
            name: 'electrified', // name of the keyframe you want to bind to the selected element
            duration: '100ms', // [optional, default: 0, in ms] how long you want it to last in milliseconds
            timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
            delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
            iterationCount: '10', //[optional, default:1]  how many times you want the animation to repeat
            direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
            fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
            complete: function() { //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
            }
        })
    }
}


//random disease and catastrophy
setTimeout(function() {
    setInterval(function() {
        if (Math.random() > 0.7 && countdown.getTimeRemaining()>10)
            if ($("#petState").text() !== "GOT STRUCK BY LIGHTNING" && $("#petState").text() !== "PHOTOSYNTHESIS" && $("#petState").text() !== "UNDER DISEASE") {
                 $("#message").text("Your pet got random disease. It's not your fault.")
                 interval = setInterval(diseaseInterval, 60);
                 $("#petState").text("UNDER DISEASE");
                 $("#petState").css("color", "red");

                //start flashing red background color during desease
                $(".circular.image").playKeyframe({
                name: 'changeColor', // name of the keyframe you want to bind to the selected element
                 duration: '2s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
                 timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                 delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
                  iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
                 direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
                  fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                   complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
                 });
            }
    }, 8000)
    setInterval(function() {
        if (Math.random() > 0.7 && countdown.getTimeRemaining()>10) {
            if ($("#petState").text() !== "GOT STRUCK BY LIGHTNING" && $("#petState").text() !== "PHOTOSYNTHESIS" && $("#petState").text() !== "UNDER DISEASE") {
                $("#message").text("Your pet got struck by random lightning. It's not your fault.")
                //-30% current health
                countdown.extendTimer(-countdown.getTimeRemaining() * 30 / 100);
                //shaking animation
                $("#petState").text("GOT STRUCK BY LIGHTNING");
                $("#petState").css("color", "red");
                $("#message").text("You strike your pet with lightning")
                //shakes image
                $(".circular.image").playKeyframe({
                    name: 'electrified', // name of the keyframe you want to bind to the selected element
                    duration: '100ms', // [optional, default: 0, in ms] how long you want it to last in milliseconds
                    timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                    delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
                    iterationCount: '10', //[optional, default:1]  how many times you want the animation to repeat
                    direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
                    fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                    complete: function() {} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
                })
            }
        }
    }, 11000)
}, 20000)
window.onload = function () {

    document.getElementById("start").onclick = startAnimation;
    var initialText = "";
    let intervalID = 0;
    let speed = 250;
    let animtyp;
    let frame = [];

    function startAnimation() {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        var txtVal = document.getElementById("text");
        let frameNo = 0;
        frame = ANIMATIONS[animtyp].split("=====");
        txtVal.value = frame[frameNo];
        intervalID = setInterval(function () {
            if (frameNo < frame.length) {
                txtVal.value = frame[frameNo];
            } else {
                frameNo = 0;
                txtVal.value = frame[frameNo];
            }
            frameNo++;
        }, speed);
    }

    document.getElementById("turbo").onchange = function speederTurbo() {

        if (this.checked === true) {
            clearInterval(intervalID);
            speed = 50;
            startAnimation();
        } else {
            clearInterval(intervalID);
            speed = 250;
            startAnimation();
        }
    }

    document.getElementById("stop").onclick = function stopAnimation() {
        $("#text").val(initialText);
        document.getElementById("animation").disabled = false;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        clearInterval(intervalID);
    }

    document.getElementById("animation").onchange = function selectAnimation() {

        initialText = document.getElementById("text").value;
        document.getElementById("start").disabled = false;
        var select = document.getElementById('animation');
        animtyp = select.options[select.selectedIndex].text;
        switch (animtyp) {
            case 'Blank':
                document.getElementById("stop").disabled = true;
                document.getElementById("start").disabled = true;
                break;
            case 'Exercise':
                $("#text").val(EXERCISE);
                break;
            case 'Juggler':
                $("#text").val(JUGGLER);
                break;
            case 'Bike':
                $("#text").val(BIKE);
                break;
            case 'Dive':
                $("#text").val(DIVE);
                break;
            default:
                $("#text").val("select AnimationType to start....");
        }
    }

    document.getElementById("fontOps").onchange = function changeFont() {
        var select = document.getElementById('fontOps');
        var animtyp = select.options[select.selectedIndex].text;
        switch (animtyp) {

            case 'Tiny':
                $("#text").css("font-size", "7pt");
                //document.getElementById("text").style.fontSize = "7pt";
                break;
            case 'Small':
                $("#text").css("font-size", "10pt");
                break;
            case 'Medium':
                $("#text").css("font-size", "12pt");
                break;
            case 'Large':
                $("#text").css("font-size", "16pt");
                break;
            case 'Extra Large':
                $("#text").css("font-size", "24pt");
                break;
            case 'XXL':
                $("#text").css("font-size", "32pt");
                break;
            default:
                $("#text").val("No font is style is selected");
        }
    }
}
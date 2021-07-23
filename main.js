document.addEventListener("keydown", function (event) {
    let audio;
    switch (event.code) {
        // white keys
        case "KeyA":
            audio = new Audio("media\\A.mp3");
            audio.play().then();
            break;
        case "KeyS":
            audio = new Audio("media\\S.mp3");
            audio.play();
            break;
        case "KeyD":
            audio = new Audio("media\\D.mp3");
            audio.play();
            break;
        case "KeyF":
            audio = new Audio("media\\F.mp3");
            audio.play();
            break;
        case "KeyG":
            audio = new Audio("media\\G.mp3");
            audio.play();
            break;
        case "KeyH":
            audio = new Audio("media\\H.mp3");
            audio.play();
            break;
        case "KeyJ":
            audio = new Audio("media\\J.mp3");
            audio.play();
            break;

        // black keys
        case "KeyW":
            audio = new Audio("media\\W.mp3");
            audio.play();
            break;
        case "KeyE":
            audio = new Audio("media\\E.mp3");
            audio.play();
            break;
        case "KeyT":
            audio = new Audio("media\\T.mp3");
            audio.play();
            break;
        case "KeyY":
            audio = new Audio("media\\Y.mp3");
            audio.play();
            break;
        case "KeyU":
            audio = new Audio("media\\U.mp3");
            audio.play();
            break;
        default:
            console.log("Error pressing!");
            return;
    }
});
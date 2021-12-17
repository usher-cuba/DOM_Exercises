const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const $limitsBall = $ball.getBoundingClientRect();
    const $limitsStage = $stage.getBoundingClientRect();

    /* console.log(e.keyCode);
    console.log($limitsBall);
    console.log($limitsStage); */

    switch (e.keyCode) {
        //left
        case 37:            
            if(($limitsBall.left -10)> $limitsStage.left){
                e.preventDefault();
                x--;
            }
            break;
        //up    
        case 38:            
            if(($limitsBall.top -10) > $limitsStage.top){
                e.preventDefault();
                y--;
            }
            break;
        //right
        case 39:
            if(($limitsBall.right + 10)< $limitsStage.right){
                e.preventDefault();
                x++;
            }
            break;
        //down
        case 40:
            if(($limitsBall.bottom + 10) < $limitsStage.bottom){
                e.preventDefault();
                y++;
            }
            break;    
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shorcuts(e){
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`crtl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e); */

    if(e.key === "a" && e.altKey){
        alert("You have lunched a keyboard alert");
    }

    if(e.key === "c" && e.altKey){
        confirm("You have lunched a confirm with the keyboard");
    }

    if(e.key === "p" && e.altKey){
        prompt("You have lunched a propmt with the keyboard");
    }
}
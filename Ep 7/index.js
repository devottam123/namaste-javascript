// The Scope Chain, Scope & Lexical Environment

function a(){
    // console.log(b);
    c();
    function c() {
        console.log(b);  
    }
}

var b = 10;
a()

// lexical enivronment means local memory along with lexical memory of the parent (also known as lexical parent)
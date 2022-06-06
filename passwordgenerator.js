
let pass=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
'r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9']

password=document.getElementById("p1")

function compute(){
    for(i=0; i<8; i++){
        let x=Math.floor(Math.random()*pass.length)
        let y=pass[x]
        password.textContent+=y
    }
}

//my "password generator" keeps on clubbing generated passwords together 
//instead of erasing the previous one and generating a new one. 
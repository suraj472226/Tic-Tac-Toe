let boxes=document.querySelectorAll(".box")


let turnx=true;

const pattern=[0,1,2,3,4,5,6,7,8];

boxes.forEach((box)=>{
  
    box.addEventListener("click",()=>{
        if(turnx==true){
            box.innerText="X"
            turnx=false;
        }
        else{
            box.innerText="O"
            turnx=true;
        }
        box.disabled=true

        checkwin();
        
    })

    
})


const disabledBoxes=()=>{

    for(let box of boxes){
        box.disabled = true;
    }
}

const checkwin=()=>{

        
     if((boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText) && (boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!="") ||
     (boxes[pattern[3]].innerText==boxes[pattern[4]].innerText && boxes[pattern[4]].innerText==boxes[pattern[5]].innerText) && (boxes[pattern[3]].innerText!="" && boxes[pattern[4]].innerText!="" && boxes[pattern[5]].innerText!="") ||
     (boxes[pattern[6]].innerText==boxes[pattern[7]].innerText && boxes[pattern[7]].innerText==boxes[pattern[8]].innerText) && (boxes[pattern[6]].innerText!="" && boxes[pattern[7]].innerText!="" && boxes[pattern[8]].innerText!="") ||
     (boxes[pattern[0]].innerText==boxes[pattern[3]].innerText && boxes[pattern[3]].innerText==boxes[pattern[6]].innerText) && (boxes[pattern[0]].innerText!="" && boxes[pattern[3]].innerText!="" && boxes[pattern[6]].innerText!="") ||
     (boxes[pattern[1]].innerText==boxes[pattern[4]].innerText && boxes[pattern[4]].innerText==boxes[pattern[7]].innerText) && (boxes[pattern[1]].innerText!="" && boxes[pattern[4]].innerText!="" && boxes[pattern[7]].innerText!="") ||
     (boxes[pattern[2]].innerText==boxes[pattern[5]].innerText && boxes[pattern[5]].innerText==boxes[pattern[8]].innerText) && (boxes[pattern[2]].innerText!="" && boxes[pattern[5]].innerText!="" && boxes[pattern[8]].innerText!="") ||
     (boxes[pattern[0]].innerText==boxes[pattern[4]].innerText && boxes[pattern[4]].innerText==boxes[pattern[8]].innerText) && (boxes[pattern[0]].innerText!="" && boxes[pattern[4]].innerText!="" && boxes[pattern[8]].innerText!="") ||
     (boxes[pattern[2]].innerText==boxes[pattern[4]].innerText && boxes[pattern[4]].innerText==boxes[pattern[6]].innerText) && (boxes[pattern[2]].innerText!="" && boxes[pattern[4]].innerText!="" && boxes[pattern[6]].innerText!="")
     )
    {

        let winner=document.querySelector(".winner")
        winner.innerText= "Congratulations Winner is " + ((turnx==true) ?'O':'X');
        disabledBoxes();
    }
    
}

document.querySelector(".newGame").addEventListener("click",function(){
    location.reload();
});




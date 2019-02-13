    var head=document.querySelectorAll("h1");
	var head1=document.querySelector("span");
	var btn=document.querySelectorAll("button");
	var inp=document.querySelector("input");
	var span=document.querySelector("span");
    var gameover=false;
    var p1=0;
    var p2=0;
    var winner=function(){
    	return span.innerText;
        reset();
    }
    var t;
    var p=document.createElement("p");

    inp.addEventListener("change",function(){
    span.innerText=Number(inp.value);
    if(head[0].innerText>span.innerText||head[2].innerText>span.innerText){
        head[0].innerText=0;
        head[2].innerText=0;
    }
    });
	/*Playerone and PLayer two Button*/
     btn[0].addEventListener("click",function(){
     	
     	if(!gameover){
            p1++;
            if(p1==winner()){
                
                
             head[0].classList.add("winner");
                gameover=true;
            }
     		head[0].innerText=p1;
     	}
     	
     });
     btn[1].addEventListener("click",function(){
        
        if(!gameover){
            p2++;
            if(p2==winner()){
                gameover=true;
                head[2].classList.add("winner");

            }
            head[2].innerText=p2;
        }
        
     });
/* THe reset Button*/
btn[2].addEventListener("click",function(){
    p1=0;
    p2=0;

    head[0].innerText=p1;
    head[2].innerText=p2;
    head[0].classList.remove("winner");
    head[2].classList.remove("winner");
    gameover=false;
    
});

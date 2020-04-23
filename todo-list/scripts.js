var inpText=document.getElementById("input");
    var btnAdd=document.getElementById("add");
    var container=document.getElementById("container");
    
    btnAdd.onclick=function() {
        let todo = document.getElementById("input").value;
        const check = document.createElement("input");
        check.className="todocheck";
        check.type = "checkbox";

        const button = document.createElement("button");
        button.className="todobutton";
        button.innerHTML="x";
        
        let span=document.createElement("span");
        span.className="todocap";
        span.innerHTML=todo;
        
        let div=document.createElement("div");
        div.className="todo";
        div.appendChild(span);
        div.appendChild(check);
        div.appendChild(button);
        
        check.onclick=function() {
            this.parentNode.style=this.checked?'color:#c0c0c0; text-decoration: line-through;':'color:black';
        };        
        button.onclick=function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };        
        
        container.appendChild(div);
        inpText.value="";
        inpText.focus();
    }
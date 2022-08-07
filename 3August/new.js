for(let i = 0; i<document.getElementsByClassName("btn").length; i++){
    document.getElementsByClassName("btn")[i].addEventListener("click", function(){
        document.getElementById("mydisplay").innerText = this.innerText;
    }
    )
}

document.getElementById("acBtn").addEventListener("click", function(){
    document.getElementById("mydisplay").innerText = "0";
}
)

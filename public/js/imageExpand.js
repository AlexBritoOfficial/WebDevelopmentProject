window.onload=function(){

    var modal=document.getElementById('modal');
    var imgs=document.querySelectorAll(".cards");

    for(var i=0;i<imgs.length;i++){
        var img=imgs[i];

        var modImg=document.getElementById('bigImg');

        img.onclick=function(e){
            modal.style.display="block";
            // var elPos = this.getBoundingClientRect();
            // var top=elPos.top + "px";

            // modal.style.top=top;

        
            modImg.src=this.src;

        };
        var exit=document.getElementsByClassName('close')[0];

        exit.onclick=function(){
            modal.style.display="none";
        }
    }




};
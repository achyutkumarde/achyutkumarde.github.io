progressbar = document.getElementsByClassName("progress");
progressbarhtml = progressbar[0].innerHTML;
skill = [5,5,4,2]
toatlskills = skill.length;
for(j=0;j<=toatlskills;j++){
    for(i=1;i<skill[j];i++){
        progressbar[j].innerHTML += progressbarhtml;
    }
}


goingdown=true;
sec1 = document.getElementById("skillsection");
sec2 = document.getElementById("projectsection");
// if section 2 is way below and user scrolls 20px it goes down untill projectsection is reached and vice versa
window.addEventListener("scroll",function(e){
    if(scrollY>20 && sec2.getBoundingClientRect().top>10 && goingdown==true){
        window.scrollBy(0,50);
        setTimeout('',0.01);
    }
    if(scrollY>20 && sec2.getBoundingClientRect().top>0 && goingdown==false){
        window.scrollBy(0,-50);
        setTimeout('',0.01);
    }
    if(sec2.getBoundingClientRect().top<0){
        goingdown=false;
    }
    if(this.window.scrollY<20){
        goingdown=true;
    }    
})
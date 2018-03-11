$(function() {
    $.ajax({
    url: 'https://www.codeschool.com/users/AchyutDe.json',
    dataType: 'jsonp',
    success: function(response) {
        let totalBadges = response["courses"]["completed"].length;
        
        for (let i = 0; i < totalBadges; i++) {
            courseName = response["courses"]["completed"][i]["title"];  
            imgUrl = response["courses"]["completed"][i]["badge"];  
            finalHtml = '<li><img class="imgsizing" src=' + imgUrl +' alt=' 
                + courseName + '><div class="hoveranimation imgsizing">'
                +'<a target="_blank" href="https://www.codeschool.com/users/AchyutDe">'
                +courseName+'</a></div></li>';
            $("#codeschool").append(finalHtml); 
        }
        $(".loading").addClass("selfhidden");

        
    //alert(i);
    
    }
    });

    $(".heading").on("click",function(){
        
        $(this).toggleClass("hidden");
    });
        
    
    

});


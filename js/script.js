$(function(){

    $("body").get(0).style.setProperty("--wxx",$(window).width()+"px");
    $("body").get(0).style.setProperty("--wyy",$(window).height()+"px");

    viewx = 0;
    
    $("#mywork").on("click",function(){
        $("#me").removeClass("active");
        $("#mywork").addClass("active");
        viewx = -100;
        $("body").get(0).style.setProperty("--viewx",viewx+"%");
    });

    $("#me").on("click",function(){
        $("#me").addClass("active");
        $("#mywork").removeClass("active");
        viewx=0;
        $("body").get(0).style.setProperty("--viewx",viewx+"%");
    })
    
    // remove animation and fix appearence
    setTimeout(function(){ $("#page1 div").addClass("animated");},2000);
    setTimeout(function(){ $("#contact").addClass("animated");},2000);

    $("#contact").on("click",function(){
        $("#connectform").addClass("show");
        $("#modal").addClass("show");
    });
    $("#modal").on("click",function(){
        $("#connectform").removeClass("show");
        $("#modal").removeClass("show");
    });

    $("#sendMessage").on("click",function(){

        data={
            "name":$("#name").val(),
            "email":$("#email").val(),
            "message":$("#message").val()
        }
        $.ajax({
            type: "POST",
            url: "todatabase.php",
            data: data,
            success: function(){
                alert("Thank you,"+$("#name").val()+" I will get back to you as soon as possible");
                $("#connectform").removeClass("show");
                $("#modal").removeClass("show");
            }
        });
    });

});
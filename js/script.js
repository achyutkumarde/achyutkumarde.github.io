$(function(){
    function appearButton(){
        setTimeout(function(){
            $("#contactButton").addClass("scaleUp");
            $("#footer ul").addClass("fixup");
        },2000);
    }
    function flyIn(pageNum,i,timer){
        setTimeout(function(){
            $(pageNum).find(".seq0"+i).addClass("animate");
        },(i-1)*timer);
    }
    function flyOut(pageNum,i,timer){
        setTimeout(function(){
            $(pageNum).find(".seq0"+i).removeClass("animate");
        },(i-1)*timer);
    }

    function fixButton(){
        $("#contactButton").addClass("fixup");
        $("#connectform").removeClass("active");
    }

    function showoffColorsFooter(timings,cls){
        setTimeout(function(){
            $("#footer #me").toggleClass(cls);
        },timings[0]);
        setTimeout(function(){
            $("#footer #work").toggleClass(cls);
        },timings[01]);
        setTimeout(function(){
            $("#footer #languages").toggleClass(cls);
        },timings[2]);
        
    }
    //sequence of events

    // intro flies in
    for(i=1;i<4;i++){
        flyIn(".page01",i,500);
    }
    // "say hi!" button appears & menu apears
    appearButton();
    showoffColorsFooter([5000,5200,5400],"showoffblue");
    showoffColorsFooter([5400,5600,5800],"showoffblue");
    showoffColorsFooter([6000,6200,6400],"showoffred");
    showoffColorsFooter([6400,6600,6800],"showoffred");

    $("#me").on("click",function(){
        for(i=1;i<4;i++){
            flyIn(".page01",i,500);
        }
        for(i=1;i<5;i++){
            flyOut(".page02",i,100);
        }
        flyOut(".page03",1,100);

        $("#footer #me").addClass("light");
        $("#footer #work").removeClass("light");
        $("#footer #languages").removeClass("light");

        fixButton();
    });

    $("#work").on("click",function(){
        for(i=1;i<5;i++){
            flyIn(".page02",i,500);
        }
        for(i=1;i<4;i++){
            flyOut(".page01",i,100);
        }
        flyOut(".page03",1,100);

        $("#footer #me").removeClass("light");
        $("#footer #work").addClass("light");
        $("#footer #languages").removeClass("light");
        fixButton();
    });

    $("#languages").on("click",function(){

        flyIn(".page03",1,100);

        for(i=1;i<4;i++){
            flyOut(".page01",i,100);
        }
        for(i=1;i<5;i++){
            flyOut(".page02",i,100);
        }
        
        $("#footer #me").removeClass("light");
        $("#footer #work").removeClass("light");
        $("#footer #languages").addClass("light");
        
        fixButton();
        
    });
    $("#contactButton").on("click",function(){
        $("#connectform").addClass("active");
        $("#contactButton").removeClass("fixup");
        $(".modal").addClass("active");
    });

    $(".modal").on("click",function(){
        $("#connectform").removeClass("active");
        $("#contactButton").addClass("fixup");
        $(".modal").removeClass("active");
    });

    $("#sendMessage").on("click",function(){

        data={
            "name":$("#name").val(),
            "email":$("#email").val(),
            "message":$("#message").val()
        }
        $.ajax({
            type: "POST",
            url: "http://achyut.xyz/todatabase.php",
            data: data,
            success: function(){
                alert("Thank you,"+$("#name").val()+" I will get back to you as soon as possible");
                $("#connectform").removeClass("active");
                $(".modal").removeClass("active");
            }
        });
    })

});
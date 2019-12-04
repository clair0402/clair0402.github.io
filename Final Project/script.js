

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>1100 && $(this).scrollTop()<1400){
            $(".info1").css({"opacity":"1"})
        }else if ($(this).scrollTop()>1400 && $(this).scrollTop()<1700){
            $(".info1").css({"opacity":"0"});
            $(".info2").css({"opacity":"1"})
        }else if ($(this).scrollTop()>1700 && $(this).scrollTop()<2000){
            $(".info1").css({"opacity":"0"});
            $(".info2").css({"opacity":"0"});
            $(".info3").css({"opacity":"1"});
        }else if ($(this).scrollTop()>2000 && $(this).scrollTop()<2300){
            $(".info1").css({"opacity":"0"});
            $(".info2").css({"opacity":"0"});
            $(".info3").css({"opacity":"0"});
            $(".info4").css({"opacity":"1"});
            $(".info5").css({"opacity":"0"});
            $(".info6").css({"opacity":"0"});
            $(".info7").css({"opacity":"0"});
        }
        else if ($(this).scrollTop()>2800 && $(this).scrollTop()<3200){
            $(".info5").css({"opacity":"1"});
        }else if ($(this).scrollTop()>3200 && $(this).scrollTop()<3600){
            $(".info5").css({"opacity":"0"});
            $(".info6").css({"opacity":"1"});
        }else if ($(this).scrollTop()>3600 && $(this).scrollTop()<4000){
            $(".info5").css({"opacity":"0"});
            $(".info6").css({"opacity":"0"});
            $(".info7").css({"opacity":"1"});
        }else if ($(this).scrollTop()>4000 && $(this).scrollTop()<4800){
            $(".info5").css({"opacity":"0"});
            $(".info6").css({"opacity":"0"});
            $(".info7").css({"opacity":"0"});
            $(".info8").css({"opacity":"1"});
        }
        else{
            $(".info1").css({"opacity":"0"});
            $(".info2").css({"opacity":"0"});
            $(".info3").css({"opacity":"0"});
            $(".info4").css({"opacity":"0"});
            $(".info5").css({"opacity":"0"});
            $(".info6").css({"opacity":"0"});
            $(".info7").css({"opacity":"0"});
            $(".info8").css({"opacity":"0"});
        }
    })
    var sticky = document.getElementById("laptop").offsetTop;

    $(window).scroll(function(){
        if (window.pageYOffset > sticky) {
            laptop.classList.add("sticky");
        } else {
            laptop.classList.remove("sticky");
        }
    })

})



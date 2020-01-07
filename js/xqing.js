$(function () {
    // $("#banner").on("mouseover","#caitan",function(){
    //     $(this).css("display","block")
    // })
    let timer;
    $("#caitan").on("mouseover", function () {
        $("#banner").css("display", "block").css("background","#ffffff")
    })
    $("#caitan").on("mouseout", function () {
        timer = setTimeout(function () {
            $("#banner").css("display", "none")
        }, 100)
    })
    $("#banner").on("mouseover", function () {
        clearTimeout(timer);
    });
    $("#banner").on("mouseout", function () {
        timer = setTimeout(function () {
            $("#banner").css("display", "none")
        }, 100)
    })
})







$(".banner1").banner({
    img:["img/a3.jpg","img/a4.jpg","img/a5.jpg","img/a6.jpg",],
})

$(function(){
    $.ajax({
        type:"get",
        url:"js/mian.json",
        async:true,
        success:function(d){
            var str =""
            for(var i=0;i<d.img.length;i++){
                str+=`
                <li>
                <div>
                    <div>
                        <a href="xqing.html" target="_blank">
                            <img src="${d.img[i]}" alt="卡内奇经典赤霞珠干红葡萄酒" title="卡内奇经典赤霞珠干红葡萄酒">
                        </a>
                    </div>
                    <div>
                        <a class="xiangjie" href="xqing.html">
                            干露酒厂传奇力作,明星系列产品之一
                            <img src="img/car.gif" alt="" class="tecar">
                        </a> 
                    </div>               
                </div>                    
                <div class="bt_wine"><a href="xqing.html" title="卡内奇经典赤霞珠干红葡萄酒" target="_blank"> 卡内奇经典赤霞珠干红葡萄酒 </a></div>
                <div class="fubiao_wine"><a href="xqing.html" title="CANEPA CLASSICO CABERNET SAUVIGNON" target="_blank">CANEPA CLASSICO CABERNET SAUVIGNON</a></div>
                <div class="jiage">
                    <div class="lt"><em>￥</em>${d.money[i]}</div>
                </div>
            </li>
                `
                
            }
            $(".cont").html(str)  
            
        }
    })
})


$(window).on("scroll",function(){
        console.log(1)
            $("<a></a>").addClass(".fudaa").prependTo($("body")).css({
                width:125,
                height:30,
                position:"fixed",
                right:10,
                top:50,
                background:"red",
                zIndex:111
            })
                
})
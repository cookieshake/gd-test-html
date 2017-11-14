var goodocURL = "https://www.goodoc.co.kr"

// 페이지 로딩 시 바인딩
$(document).ready(function () {
    $("#search-hospital-button").click(function() {
        location.href = goodocURL;
    });
    
    $("#search-phar-button").click(function() {
        location.href = goodocURL + "/pharmacies";
    });

    $("#sit-hospital-button").click(function() {
        location.href = goodocURL + "/themes?category_id=225&list_open=1&selected=0";
    })

    $("#hospital-event-button").click(function() {
        alert("병원 이벤트가 클릭됨!");
    })

    $("#goodoc-cast-button").click(function(event) {
        console.log("goodoc cast clicked: (" + event.pageX + "," + event.pageY + ")");
    }).mouseover(function() {
        console.log("goodoc cast mouseover: (" + event.pageX + "," + event.pageY + ")");
    });
});
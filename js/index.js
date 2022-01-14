var sidePanel = null; //? 객체를 담기 위해 aside , btnOpen , btnClose 에 null 을 대입.
var btnOpen = null;
var btnClose = null;

$(document).ready(function(){
    init();
    gnbControl(sidePanel, btnOpen, btnClose); //? 매개변수로 넣은 함수 실행.
    countUpDown();
    allSelect();
    tabMenu();
    tabMenu2();
    about();
    about2();
    $('.slider').bxSlider({
        auto: true,
        mode:'fade',
        speed: 1000, 
        pause: 4000,  
        pager: true,
        controls: true,
        prevText: 'arrow_back_ios',
        nextText: 'arrow_forward_ios',
        prevSelector: '.btnBack',
        nextSelector: '.btnForward',
        infiniteLoop : true,
        hideControlOnEnd : false,
    });
    $('.pslider').bxSlider({
        speed: 1000,
        pager: false, 
        controls: true, 
        autoControls: false,
        prevText: 'arrow_back_ios',
        nextText: 'arrow_forward_ios',
        prevSelector: '.btnPrev',
        nextSelector: '.btnNext',
        minSlides: 5, 
        maxSlides: 5, 
        moveSlides: 1, 
        slideWidth: 1205, 
        slideMargin: 20, 
        autoHover:true,
    });
});
function init(){
    sidePanel = $("header > div aside");
    btnOpen = $(".btnOpen");
    btnClose = $(".btnClose");
}
function gnbControl(sidePanel,btnOpen,btnClose){ // ? 매개변수 선언
    btnOpen.click(function(){
        sidePanel.addClass('active'); // ? 사용자가 btnOpen 을 클릭했을때 sidePanel에 active class가 붙는다.
    });
    btnClose.click(function(){
        sidePanel.removeClass('active'); // ? 사용자가 btnClose를 클릭했을때 sidePanel에 있던 active class가 제거된다.
    });
}
function countUpDown(){
    var count = 1;
    var countContainer, countField, priceBase;

    $(".plus").click(function(){ // ? class plus 를 click 했을때
        countContainer = $("section"); // ? countContainer = class etc_cart
        countField = countContainer.find(".count"); // ? class etc_cart 에서 class count를 찾아
        priceBase = countContainer.find(".price").attr("value"); // ? class etc_cart 에서 class price 를 찾고 class price 에 value 라는 attr 를 넣는다.
        if(count < 99){ //? count 의 최대값은 99
            ++count; //? class + 를 누르면 count가 1씩 증산된다
        }else if(count == 99){ //? count 가 99와 같을때
            alert('최대수량 99'); // ? alert(팝업)을 띄운다.
            count = 99;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".minus").click(function(){ //? class plus 와 같은 흐름
        countContainer = $("section");
        countField = countContainer.find(".count");
        priceBase = countContainer.find(".price").attr("value");
        if(count > 1){
            count--;
        }else if(count == 1){
            alert('최소수량 1');
            count = 1;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".btn_Reset").click(function(){
        count = 1;
        countField.val(count);
        countContainer.find(".price").val(priceBase);
    });
}
function countOutput(count, countField){
    $(countField).val(count);
}
function price(count, countContainer, priceBase){
    priceField = countContainer.find(".price");
    $(priceField).val(priceBase * count);
}
function allSelect(){
    $("#check_all").click(function(){
        $("#check").prop("checked", this.checked);
    });
}
function about(){
    $(".history").click(function(){
        $(".about_history").addClass("active");
    });
    $(".about").click(function(){
        $(".about_history").removeClass("active");
    });
}
function about2(){
    $(".about").click(function(){
        $(".about_us").addClass("active");
    });
    $(".history").click(function(){
        $(".about_us").removeClass("active");
    });
}
function tabMenu(){
    $(".about").click(function(){
        $(".about").addClass("active");
    });
    $(".history").click(function(){
        $(".about").removeClass("active");
    });
}
function tabMenu2(){
    $(".history").click(function(){
        $(".history").addClass("active");
    });
    $(".about").click(function(){
        $(".history").removeClass("active");
    });
}
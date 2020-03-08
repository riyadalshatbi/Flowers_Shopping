// Start Aninmition Fly Add To Cart

$('.add-to-cart').on('click',function(){
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if(imgtodrag){
        var imgclone = imgtodrag.clone()
        .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
        
        .css({
            'opacity': '0.5',
            'position': 'obsolute',
            'height': '150px',
            'width': '150px',
            'z-index': '100'
        })
        
        .appendTo($('span i'))
        .animate({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 75,
            'height': 75
        },1000,'easeInOutExpo');
        
        setTimeout(function(){
            cart.effect("shake",{
                times: 3
            },200);
        },1500);
        
        imgclone.animate({
            'width': 0,
            'height': 0
        },function(){
            $(this).detach()
        });
    }
    
    // Start Selected Product Successfull
    
    var imgSelected = $(this).parent('.item').find("img").eq(1);

        setTimeout(function () {
            imgSelected.addClass('image_selected_active');
            }, 1000);
    
    // End Selected Product Successfull
});


// End Aninimation Fly Add To Cart



var clicks = 0; // Variable To Store Number Of Selected From Products




// Start Add Product To chart

function select1() {
    "use strict"

    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower1').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower1').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower1').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    
    document.getElementById("myBtn1").removeAttribute("onclick");
    
}

// End Add Product To chart



function select2() {
    "use strict"
    
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower2').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower2').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower2').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    document.getElementById("myBtn2").removeAttribute("onclick");
}



function select3() {
    "use strict"
    
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower3').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower3').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower3').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    document.getElementById("myBtn3").removeAttribute("onclick");
}



function select4() {
    "use strict"
    
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower4').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower4').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower4').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    document.getElementById("myBtn4").removeAttribute("onclick");
}




function select5() {
    "use strict"
    
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower5').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower5').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower5').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    document.getElementById("myBtn5").removeAttribute("onclick");
}




function select6() {
    "use strict"
    
    
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
    
    var newTr = document.createElement('tr');
    document.getElementById('addToCart').appendChild(newTr);

    var nameFlower = document.createElement("td");
    nameFlower.appendChild(document.createTextNode(document.getElementById('nameFlower6').textContent));
    newTr.appendChild(nameFlower);
    
    var priceFlower = document.createElement("td");
    priceFlower.appendChild(document.createTextNode(document.getElementById('priceFlower6').textContent));
    newTr.appendChild(priceFlower);
    
    var numberFlower = document.createElement("td"),
        theInput = document.createElement('input');
    theInput.setAttribute('type','number');
    theInput.setAttribute('value','0');
    theInput.setAttribute('class','col-xs-2');
    numberFlower.appendChild(theInput);
    newTr.appendChild(numberFlower);
    
    var total = document.createElement("td");
    theInput.onchange = function()
    {
        total.textContent = this.value*document.getElementById('priceFlower6').textContent;
        newTr.appendChild(total);
    }
    
    // For Remove Attribute After Onclick Event
    document.getElementById("myBtn6").removeAttribute("onclick");
}

// End Add Product To chart




// Start Load More

    document.getElementById("loadMore").onclick = function(){
        
        "use strict"
        document.getElementById("loadMore").setAttribute("class","hideLoadMore");
        
        document.getElementById("showMore").setAttribute("class","forshowMore");
    }
    
// End Load More


    // For Empty Of Cart
    
    function emptyCart(){
        "use strict"
      
        // number Of Product in Cart = 0 (empty)
        clicks = 0;
        document.getElementById("clicks").innerHTML = 0;
        
        
        // number Of Product in Cart = "" (empty)
        document.querySelector("tbody").innerHTML = "" ;
        
        // Enable Select Any Product After Cart Empty
        document.getElementById("myBtn1").setAttribute("onclick","select1()");
        document.getElementById("myBtn2").setAttribute("onclick","select2()");
        document.getElementById("myBtn3").setAttribute("onclick","select3()");
        document.getElementById("myBtn4").setAttribute("onclick","select4()");
        document.getElementById("myBtn5").setAttribute("onclick","select5()");
        document.getElementById("myBtn6").setAttribute("onclick","select6()");
        
        
        // For Send Attribute After cart Empty Event
        document.getElementById("noSelect1").setAttribute("class","image_selected");
        document.getElementById("noSelect2").setAttribute("class","image_selected");
        document.getElementById("noSelect3").setAttribute("class","image_selected");
        document.getElementById("noSelect4").setAttribute("class","image_selected");
        document.getElementById("noSelect5").setAttribute("class","image_selected");
        document.getElementById("noSelect6").setAttribute("class","image_selected");
        
        
    }
    

    





    
    
    
    

// Blus Mouns input number of flower

$(document).ready(function(){
            $('.count').prop('disabled', true);
            $(document).on('click','.plus',function(){
                $('.count').val(parseInt($('.count').val()) + 1 );
            });
            $(document).on('click','.minus',function(){
                $('.count').val(parseInt($('.count').val()) - 1 );
                if ($('.count').val() == 0) {
                    $('.count').val(1);
                }
            });
        });

//End Blus Mouns input number of flower



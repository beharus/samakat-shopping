




//navbar-tagi-card-active
            var elements = document.getElementsByClassName("items");
            for(var i = 0; i < elements.length; i++)
            {
                elements[i].onclick = function(){
                    
                    // remove class from sibling
                    
                    var el = elements[0];
                    while(el)
                    {
                        if(el.tagName === "DIV"){
                            //remove class
                            el.classList.remove("active");
                            
                        }
                        // pass to the new sibling
                        el = el.nextSibling;
                    }
                    
                  this.classList.add("active");  
                };
            }





 // draggable carousel code
    $('.cards').owlCarousel({
    items:2,
    loop:false,
    margin:0,
    responsive:{
        700:{
            items:5
        },
        600:{
            items:4
        },
        400:{
            items:3
        },
        0:{
            items:3
        }
    }
});
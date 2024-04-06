$(document).ready(function(){

    var newItem =$(".addItem");
    $(".inputForm").on('submit',function(e){
        e.preventDefault();
        if(newItem.val() != ''){
            $('<li>'+newItem.val()+'</li>').appendTo(".TodoItmes");
            newItem.val("");
        }
    })
    $(".TodoItmes").on('click','li',function(){
        $(this).css('text-decoration','line-through').delay(200).fadeOut(400,function(){
            this.remove()
        })
        
    })
});
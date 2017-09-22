function feedback(){
    document.getElementById('feedbackArea').innerHTML=
        '<textarea rows="3" autofocus style="color:black;width:100%;margin-top:30px;"> </textarea>'+
        '<button class="btn btn-danger btn-block">Submit</button>';
}
function calc(){
    var prices =""
    var inputs = document.getElementsByClassName( 'priceArray' ),

     prices = [].map.call(inputs, function( input ) {
       if(input.value!="")
        return input.value;
        else
        return 0;
    }).join(',');
    var data = new Array();
    data = prices.split(',');
    console.log(data)
   var totalPrice = 0;
    /* price calculation */
    for(var i=0;i<data.length;i++){
        if(parseInt(data[i])!=null)
        totalPrice += parseInt(data[i]);
        else
        alert("Null not accepted")
    }
    console.log(totalPrice);
    var stateTax = totalPrice * 0.08;
    var Tax = totalPrice * 0.05;
    totalPrice += stateTax + Tax
    document.getElementById('STax').innerText = stateTax;
    document.getElementById('Tax').innerText = Tax;
    document.getElementById('Final').innerText = totalPrice;
}

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('').addClass('priceArray');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});

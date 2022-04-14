$(document).ready(function(){
    $('#submit').click(function(e){
        e.preventDefault();
        
        var starter_cost = 0;
        var finisher_cost = 0;
        var vaccination_cost = 0;
        var chicks_purchase_cost = 0;
        var miscellaneous = 0;
        var chicken_sale_cost = 0;

        starter_cost = $('#starter_price').val()*$('#starter_bags').val();
        finisher_cost = $('#finisher_price').val()*$('#finisher_bags').val();
        vaccination_cost = $('#no_of_doses').val()*$('#price_per_dose').val();
        chicks_purchase_cost = $('#price_per_chick').val()*$('#no_of_chicks').val();
        miscellaneous = $('#cost').val();
        chicken_sale_cost = $('#price_per_chicken').val()*$('#no_of_chicken').val();

        var production_cost = starter_cost+finisher_cost+vaccination_cost+chicks_purchase_cost+parseInt(miscellaneous);
        var chicks_number = $('#no_of_chicks').val();
        var chicks_price = $('#price_per_chick').val();
        var chicken_price = $('#price_per_chicken').val();

        localStorage.setItem("production_cost", production_cost);
        localStorage.setItem("sales_cost", chicken_sale_cost);
        localStorage.setItem("chicks_number", chicks_number);
        localStorage.setItem("chicks_price", chicks_price);
        localStorage.setItem("chicken_price", chicken_price);

        window.location.href = "result.html";
    });
});
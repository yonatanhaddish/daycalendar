var button= $('.saveBtn');

button.on("click", function(event) {
    event.preventDefault();
    var text= $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent= $(this).parent().attr('id');
    console.log(text);
    console.log(parent);
    localStorage.setItem(parent, JSON.stringify(text));
})

$('#9 textarea').val(localStorage.getItem('9').replace(/["']+/g, ''));
$('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g,''));
$('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
$('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
$('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
$('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
$('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
$('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
$('#17 textarea').val(localStorage.getItem('17').replace(/['"]+/g, ''));


button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })


var date= moment().format('dddd, MMMM Do');

$('#currentDay').text(date);
















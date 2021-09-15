var button= $('.saveBtn');

$(document).ready(function() {
    var date= moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);

    function currentTime() {
        var current= moment().hours();
        var time= $('.time-block');

        time.each(function() {
        var hour= parseInt($(this).attr('id'));

            if (hour === current) {
                $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
            }
            else if (current > hour) {
                $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
            }
            else {
                $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
            }
        });

    }
    currentTime();

    button.on("click", function(event) {
        event.preventDefault();
        var text= $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
        var parent= $(this).parent().attr('id');
        console.log(text);
        console.log(parent);
        localStorage.setItem(parent, JSON.stringify(text));
    })
    
     $('#9 textarea').val(localStorage.getItem('9').replace(/["']+/g, ''));
     $('#10 textarea').val(localStorage.getItem('10').replace(/["']+/g, ''));
     $('#11 textarea').val(localStorage.getItem('11').replace(/["']+/g, ''));
     $('#12 textarea').val(localStorage.getItem('12').replace(/["']+/g, ''));
     $('#13 textarea').val(localStorage.getItem('13').replace(/["']+/g, ''));
    //  $('#14 textarea').val(localStorage.getItem('14').replace(/["']+/g, ''));
    //  $('#15 textarea').val(localStorage.getItem('15').replace(/["']+/g, ''));
     $('#16 textarea').val(localStorage.getItem('16').replace(/["']+/g, ''));
     $('#17 textarea').val(localStorage.getItem('17').replace(/["']+/g, ''));
    
    
    button.on('click', function (event) {
        $('selector').css('cursor', 'i')
    })
    
});

///////////////////////////////////////////////////////////////////
// favStored= [];

// function toggleCheckbox(el) {

//   if (el.children[1].checked) {
//   console.log(el.children[2].textContent);
  
//   favStored.push(el.children[2].textContent); 
//   localStorage.setItem("Fav", favStored);
  
// }

// else {
  
// }



// console.log(favStored);

  
// };
//////////////////////////////////////////////////////////////////
// $('input[type="checkbox"]').change(function() {

//     if ($(this).prop("checked") == true) {
//       console.log("checked")
//     }
//     else if ($(this).prop("checked") == false) {
//       console.log("unchecked");
//     }
//   })



//   document.getElementById(symbol).onclick= function faV() {
//     console.log(name);
//   };

/////////////////////////////////////////////////////////////////////////
//   ???????????????????????????????
// $('.star').on("click", function() {
//     // if ($(this).checked) {
//       // remove the checked stated because we no longer want it to be checked
//       // $('.star').toggle($(this).checked);
//       // REMOVE the symobl of what was clicked $( this ).data("symbol") FROM local storage
//     //}
//     // else {
//       // toggle the state to checked
//       // $('.star').toggle($(this).checked);
//       // ADD the symbol of what was clicked $( this ).data("symbol") TO local storage
//     //}
//     $('.star').toggle($(this).checked);
//     console.log("clicked on a star", $( this ).data("symbol"));
//   });

  ////////////////////////////////////////////////////////////////////////////



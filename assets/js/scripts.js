$(document).on('ready', function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").on('click', function(){

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });

    $(".previous").on('click', function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });

    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }

    $(".submit").on('click', function(){
    return true;
    })

});


//SCRIPT Signature

let sig = $('#sig').signature({syncField: '#signature64', syncFormat: 'PNG'});
$('#clear').on('click', function(e) {
    e.preventDefault();
    sig.signature('clear');
    $("#signature64").val('');
});

let sigT1 = $('#sigT1').signature({syncField: '#signature64T1', syncFormat: 'PNG'});
$('#clearT1').on('click', function(e) {
    e.preventDefault();
    sigT1.signature('clear');
    $("#signature64T1").val('');
});

let sigT2 = $('#sigT2').signature({syncField: '#signature64T2', syncFormat: 'PNG'});
$('#clearT2').on('click', function(e) {
    e.preventDefault();
    sigT2.signature('clear');
    $("#signature64T2").val('');
});



function sendData(){
    //example
    const data = new FormData();
    data.append('key', value)
    axios({
      url: 'http://example.com.br',
      method: 'post',
      data: dadosTratados
    })
    .then(function (response) {
        // your action after success
        console.log(response);
    })
    .catch(function (error) {
       // your action on error success
        console.log(error);
    });

}

//CPF mask
$("#cpf").mask('000.000.000-00');

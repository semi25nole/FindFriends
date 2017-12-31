"use strict";

$(document).ready(function() {

    $("#submit").on("click", function() {
        validate();
        info();
        window.location.reload(true);

    });

});


function validate() {

    var name = $('#name').val();
    var photo = $('#photo').val();

    if(name == '') {
        alert('Please input your name!');
    } else if(photo == '') {
        alert('Please input your photo!');
    } else {
        sessionStorage.name = name;
        sessionStorage.photo = photo;
    }

    $("#name").val('');
    $("#photo").val('');

};

function info() {

    var results = [];

    $('.chosen-select').each(function () {

        results.push($(this).val());

    });

    function picked(val) {

        return val <= 5;
    }

    var pickedNum = results.filter(picked);

    if(pickedNum.length < 10) {
        alert("Please select a value for all 10 questions");
    } else {
        sessionStorage.num = pickedNum;
    }

}





/**
 * Created by akbar on 11/25/2015.
 */

//Mouseover event - subscriber form
$(function() {
    $("#first-name").attr('title', 'Please enter valid first name.');
    $("#last-name").attr('title', 'Please enter valid last name.');
    $("#street-address1").attr('title', 'Please enter valid street.');
    $("#city").attr('title', 'Please enter valid city.');
    $("#zip").attr('title', 'Please enter valid zip code.');
    $("#state").attr('title', 'Please select your resident state.');
    $("#country").attr('title', 'Please select your country.');
});

$(document).ready(function() {
    $("#first-name").mouseover(function(){
        $("#first-name").css("background-color", "yellow");
        $("#last-name").css("background-color", "yellow");
        $("#street-address1").css("background-color", "yellow");
        $("#city").css("background-color", "yellow");
        $("#zip").css("background-color", "yellow");
        $("#state").css("background-color", "yellow");
        $("#country").css("background-color", "yellow");
    });
    $("#first-name").mouseout(function(){
        $("#first-name").css("background-color", "lightyellow");
        $("#last-name").css("background-color", "lightyellow");
        $("#street-address1").css("background-color", "lightyellow");
        $("#city").css("background-color", "lightyellow");
        $("#zip").css("background-color", "lightyellow");
        $("#state").css("background-color", "lightyellow");
        $("#country").css("background-color", "lightyellow");
    });

});
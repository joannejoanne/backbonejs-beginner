var app = app || {};
var ENTER_KEY = 13; 

$(function() {
    $( '#releaseDate' ).datepicker();
    new app.LibraryView();
});
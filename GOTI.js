$(document).ready(function () {

    $.get("https://www.anapioficeandfire.com/api/houses/362", function (data) {
        document.getElementById("Stark").addEventListener("click", function_t);
        function function_t() {
            var target = document.getElementById("info");
            target.innerHTML ="<h4>" + data.name + ", " + data.coatOfArms + ", " + data.seats + ", " + data.words + "</h4>"
        }
    }, "json");

    $.get("https://www.anapioficeandfire.com/api/houses/378", function (data) {
        document.getElementById("Targaryen").addEventListener("click", function_t);
        function function_t() {
            var target = document.getElementById("info");
            target.innerHTML = "<h4>" + data.name + ",   " + data.coatOfArms + ", " + data.seats + ", " + data.words + "</h4>"
        }
    }, "json");
    $.get("https://www.anapioficeandfire.com/api/houses/231", function (data) {
        document.getElementById("Lannister").addEventListener("click", function_t);
        function function_t() {
            var target = document.getElementById("info");
            target.innerHTML = "<h4>" + data.name + ", " + "a Golden Lion" + ", " + data.seats + ", " + "Hear Me Roar" + "</h4>"
        }
    }, "json");

    $.get("https://www.anapioficeandfire.com/api/houses/15", function (data) {
        document.getElementById("Baratheon").addEventListener("click", function_t);
        function function_t() {
            var target = document.getElementById("info");
            target.innerHTML = "<h4>" + data.name + ", " + data.coatOfArms + ", " + "Storms End" + ", " + "Ours is the Fury" + "</h4>"
        }
    }, "json");
});

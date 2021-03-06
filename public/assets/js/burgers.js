// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newEatenState = {
            eaten: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("Devoured");
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".destroy").on("click", function (event) {
        event.preventDefault();
        console.log("button clicked")
        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(
            function () {
                console.log("Destroyed the evidence");
                location.reload();
            }
        );
    });
    function eatenButton() {
        $(".destroy").hide();
        var eatenburgers = $(".burgers-eaten");
        console.log(eatenburgers);
        if (eatenburgers.length > 0) {
            $(".destroy").show();
        }
    }
    eatenButton();
});
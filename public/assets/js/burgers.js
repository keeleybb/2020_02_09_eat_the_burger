// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newEatenState = {
            eaten: true
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("Devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
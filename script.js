//your JS code here. If required.

    function activateSearch() {
        var searchComponent = document.getElementById("searchComponent");

        // Add the "active" class to the search component
        searchComponent.classList.add("active");

        // Focus on the input field
        searchComponent.querySelector(".input").focus();
    }
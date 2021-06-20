window.onload = function () {

    /**
     *  Dark mode toggler.
     *
     *  Original code by Kevin Powell from tutorial. (https://codepen.io/kevinpowell/pen/EMdjOV)
     */

    // check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode');

    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    const enableDarkMode = () => {
        // 1. Add the class to the body
        document.body.classList.add('darkmode');
        // 2. Update darkMode in localStorage
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        // 1. Remove the class from the body
        document.body.classList.remove('darkmode');
        // 2. Update darkMode in localStorage
        localStorage.setItem('darkMode', null);
    }

    // If the user already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // When someone clicks the button
    darkModeToggle.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode');

        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off
        } else {
            disableDarkMode();
        }
    });

}

function toggleFilters() {
    document.getElementById("filter-dropdown").classList.toggle("show");
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("filter-dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
            }
        }
    }
}


$(document).ready(function () {
    // This is the script that manage all the filters. It's quite messy and it
    // doesn't persistent save the setting because that introduced a bunch of
    // bugs in it self I couldn't fix myself without help.

    let currentPage = location.href.split('#')[0];
    setInterval(function () {
        if (currentPage != location.href.split('#')[0]) {
            currentPage = location.href.split('#')[0];
            //window.location.reload(true);
            $("#filter_paid").prop("checked", false);
            $("#filter_paid_inapp").prop("checked", false);
            $("#filter_freemium").prop("checked", false);
            $("#filter_subscription").prop("checked", false);
            $("#filter_advertising").prop("checked", false);
            $("#filter_free").prop("checked", false);
            $("#filter_open_source").prop("checked", false);
            $("#filter_closed_source").prop("checked", false);
            document.getElementById("filter-dropdown").classList.remove("show");
        }
    }, 1);

    $(document.body).on('change', "#filter_paid", function () {
        $("table tr img[alt='Paid']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_paid_inapp", function () {
        $("table tr img[alt='Paid In-app']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_freemium", function () {
        $("table tr img[alt='Freemium']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_subscription", function () {
        $("table tr img[alt='Subscription']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_advertising", function () {
        $("table tr img[alt='Advertising']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_free", function () {
        $("table tr img[alt='Free']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_open_source", function () {
        $("table tr img[alt='Open-Source']").closest("tr").toggle();
    });
    $(document.body).on('change', "#filter_closed_source", function () {
        $("table tr img[alt='Closed-Source']").closest("tr").toggle();
    });

});

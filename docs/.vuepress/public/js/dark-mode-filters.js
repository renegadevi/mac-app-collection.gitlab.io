
// Because Vue updates pages dynamically, it messes things up with not reloading
// the filter function. So the solution I found was to force reload the page when
// the url changes. Kinda ruins the seamless non-loading experience between
// pages, but filters is what some users wanted and it should be persistent
// between pages else it becomes annoying for the user having to fill it in every
// time.

let currentPage = location.href.split('#')[0];
console.log('currentPage: ' + currentPage)
setInterval(function () {
    if (currentPage != location.href.split('#')[0]) {
        console.log('-> currentPage: ' + currentPage)
        console.log('-> newPage: ' + location.href.split('#')[0])
        currentPage = location.href.split('#')[0];
        window.location.reload(true);
    }
}, 1);



function toggleFilters() {
    document.getElementById("filter-dropdown").classList.toggle("show");
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("filter-dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
            }
/*
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }*/

        }
    }

}

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


$(document).ready(function () {
// This is the script that manage all the filters. It's quite messy, but it does
// "work"... as in I predict it may have a bug or two I've yet not experienced.
$(document.body).on('change', "#filter_paid", function () {
    $("table tr img[alt='Paid']").closest("tr").toggle();
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

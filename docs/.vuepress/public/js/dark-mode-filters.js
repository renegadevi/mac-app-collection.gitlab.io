
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





    // This is the script that manage all the filters. It's quite messy, but it does
    // "work"... as in I predict it may have a bug or two I've yet not experienced.

    // Paid
    //--------------------------------------------------------------------------
    let filter_paid = localStorage.getItem('filter_paid');
    if (filter_paid === 'disabled') {
        $("table tr img[alt='Paid']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Paid']").closest("tr").css("display", "table-row");
        document.getElementById("filter_paid").checked = true;
    }
    document.querySelector('#filter_paid').addEventListener('click', () => {
        filter_paid = localStorage.getItem('filter_paid');
        if (filter_paid === 'enabled' || filter_paid === null) {
            $("table tr img[alt='Paid']").closest("tr").css("display", "none");
            localStorage.setItem('filter_paid', 'disabled');
        } else {
            $("table tr img[alt='Paid']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_paid', 'enabled');
        }
    });





    // Freemium
    //--------------------------------------------------------------------------
    let filter_freemium = localStorage.getItem('filter_freemium');
    if (filter_freemium === 'disabled') {
        $("table tr img[alt='Freemium']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Freemium']").closest("tr").css("display", "table-row");
        document.getElementById("filter_freemium").checked = true;
    }
    document.querySelector('#filter_freemium').addEventListener('click', () => {
        filter_freemium = localStorage.getItem('filter_freemium');
        if (filter_freemium === 'enabled' || filter_freemium === null) {
            $("table tr img[alt='Freemium']").closest("tr").css("display", "none");
            localStorage.setItem('filter_freemium', 'disabled');
        } else {
            $("table tr img[alt='Freemium']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_freemium', 'enabled');
        }
    });



    // Subscription
    //--------------------------------------------------------------------------
    let filter_subscription = localStorage.getItem('filter_subscription');
    if (filter_subscription === 'disabled') {
        $("table tr img[alt='Subscription']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Subscription']").closest("tr").css("display", "table-row");
        document.getElementById("filter_subscription").checked = true;
    }
    document.querySelector('#filter_subscription').addEventListener('click', () => {
        filter_subscription = localStorage.getItem('filter_subscription');
        if (filter_subscription === 'enabled' || filter_subscription === null) {
            $("table tr img[alt='Subscription']").closest("tr").css("display", "none");
            localStorage.setItem('filter_subscription', 'disabled');
        } else {
            $("table tr img[alt='Subscription']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_subscription', 'enabled');
        }
    });

    // Advertising
    //--------------------------------------------------------------------------
    let filter_advertising = localStorage.getItem('filter_advertising');
    if (filter_advertising === 'disabled') {
        $("table tr img[alt='Advertising']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Advertising']").closest("tr").css("display", "table-row");
        document.getElementById("filter_advertising").checked = true;
    }
    document.querySelector('#filter_advertising').addEventListener('click', () => {
        filter_advertising = localStorage.getItem('filter_advertising');
        if (filter_advertising === 'enabled' || filter_advertising === null) {
            $("table tr img[alt='Advertising']").closest("tr").css("display", "none");
            localStorage.setItem('filter_advertising', 'disabled');
        } else {
            $("table tr img[alt='Advertising']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_advertising', 'enabled');
        }
    });

    // Free
    //--------------------------------------------------------------------------
    let filter_free = localStorage.getItem('filter_free');
    if (filter_free === 'disabled') {
        $("table tr img[alt='Free']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Free']").closest("tr").css("display", "table-row");
        document.getElementById("filter_free").checked = true;
    }
    document.querySelector('#filter_free').addEventListener('click', () => {
        filter_free = localStorage.getItem('filter_free');
        if (filter_free === 'enabled' || filter_free === null) {
            $("table tr img[alt='Free']").closest("tr").css("display", "none");
            localStorage.setItem('filter_free', 'disabled');
        } else {
            $("table tr img[alt='Free']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_free', 'enabled');
        }
    });


    // Open-Source
    //--------------------------------------------------------------------------
    let filter_open_source = localStorage.getItem('filter_open_source');
    if (filter_open_source === 'disabled') {
        $("table tr img[alt='Open-Source']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Open-Source']").closest("tr").css("display", "table-row");
        document.getElementById("filter_open_source").checked = true;
    }
    document.querySelector('#filter_open_source').addEventListener('click', () => {
        filter_open_source = localStorage.getItem('filter_open_source');
        if (filter_open_source === 'enabled' || filter_open_source === null) {
            $("table tr img[alt='Open-Source']").closest("tr").css("display", "none");
            localStorage.setItem('filter_open_source', 'disabled');
        } else {
            $("table tr img[alt='Open-Source']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_open_source', 'enabled');
        }
    });

    // Closed-Source
    //--------------------------------------------------------------------------
    let filter_closed_source = localStorage.getItem('filter_closed_source');
    if (filter_closed_source === 'disabled') {
        $("table tr img[alt='Closed-Source']").closest("tr").css("display", "none");
    } else {
        $("table tr img[alt='Closed-Source']").closest("tr").css("display", "table-row");
        document.getElementById("filter_closed_source").checked = true;
    }
    document.querySelector('#filter_closed_source').addEventListener('click', () => {
        filter_closed_source = localStorage.getItem('filter_closed_source');
        if (filter_closed_source === 'enabled' || filter_closed_source === null) {
            $("table tr img[alt='Closed-Source']").closest("tr").css("display", "none");
            localStorage.setItem('filter_closed_source', 'disabled');
        } else {
            $("table tr img[alt='Closed-Source']").closest("tr").css("display", "table-row");
            localStorage.setItem('filter_closed_source', 'enabled');
        }
    });




}


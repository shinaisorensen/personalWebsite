/*
    Author: Shinai Sorensen
    Date: June 12, 2020
*/

$(document).ready(function() {

    // Enables smooth scrolling when a nav link is clicked
    $('nav ul li a').click(function(event) {

        // If there is an href='#'
        if (this.hash !== '') {

            // Prevent default behaviour when clicking anchors - safety
            event.preventDefault();

            // Create a variable to store the #
            var hash = this.hash;

            // Ensure the entire page is enabled to smooth scroll
            $('html, body').animate({
                // Set how long it takes for the page to move to the clicked #
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            }); // end function
        } // end if
    }); // end function

    // The nav bar
    var nav = $('.collapse');
    
    // Toggles the nav bar on mobile when clicked (smooth)
    $('.toggle').click(function() {
        nav.slideToggle();
    }); // end function

    // When the window resizes, check if the nav bar is displayed or not and toggle appropriately
    $(window).resize(function() {

        // Get the width every time the window resizes
        var width = $(window).width();

        // If on desktop and the nav bar is hidden, toggle so that the nav bar is always visible when switching to desktop
        if (width > 1024 && nav.css('display') == 'none') {
            nav.toggle();
        } // end if

        // If on mobile and the nav bar is visible, toggle so that the nav bar is always hidden when switching to mobile
        if (width <= 1024 && nav.css('display') != 'none') {
            nav.toggle();
        } // end if
    }); // end function

    // When the browser refreshes, get the width of the screen
    var width = $(window).width();

    // If the width when refreshed is in mobile, toggle so that the nav bar is always hidden
    if (width <= 1024 && nav.css('display') != 'none') {
        nav.toggle();
    } // end if

    // Hide the nav links when a link is clicked
    $('.navLink').click(function() {

        // Get the width every time the window resizes
        var width = $(window).width();

        // Check if in mobile and toggle nav so that the links only hide when in mobile
        if (width < 1024 && nav.css('display') != 'none') {
            nav.toggle();
        }

        // Don't hide the links if the view is in desktop
        else {
            return;
        }

    }); // end function

    // Hide the nav links when the main content is clicked
    $('main').click(function() {

        // Get the width every time the window resizes
        var width = $(window).width();

        // Check if in mobile and toggle nav so that the links only hide when in mobile
        if (width < 1024 && nav.css('display') != 'none') {
            nav.toggle();
        }

        // Don't hide the links if the view is in desktop
        else {
            return;
        }

    }); // end function

});
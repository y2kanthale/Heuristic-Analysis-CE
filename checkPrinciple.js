function checkPrinciple(principle) {
    switch(principle.name){
        case "Visibility of system status":
            // Check if website has a clear indication of its current state (e.g. loading indicators, progress bars)
            // For example you can use Jquery to check if a specific class or element exists on the page
            let visibility = false;
            if ($(".loading-indicator").length > 0) visibility = true;
            return visibility;
            break;
        case "Match between system and the real world":
            // Check if website uses language and terminology that is familiar to the user
            // For example you can use Jquery to check if the text on the page contains certain words
            let match = false;
            if ($("body:contains('User-friendly')")) match = true;
            return match;
            break;
        case "User control and freedom":
            // Check if website provides clear and obvious ways for the user to undo or redo actions
            // For example you can use Jquery to check if certain buttons or elements exist on the page
            let control = false;
            if ($(".undo-btn").length > 0 && $(".redo-btn").length > 0) control = true;
            return control;
            break;
        case "Consistency and standards":
            // Check if website follows consistent design patterns and standards
            // For example you can use Jquery to check if certain elements have consistent classes or attributes
            let consistency = false;
            if ($("button").length > 0 && $("button").attr('type') == "submit") consistency = true;
            return consistency;
            break;
        case "Error prevention":
            // Check if website has mechanisms to prevent errors and provides clear error messages
            // For example you can use Jquery to check if certain elements have specific classes or attributes that indicate error prevention
            let prevention = false;
            if ($("form").hasClass("prevent-error")) prevention = true;
            return prevention;
            break;
    }
}
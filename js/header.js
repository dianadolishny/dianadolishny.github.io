// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#header-template').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = {
};

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
$("#header").append(html);

// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#projects-template').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = {
    project: [{
        name: 'Ravenclaw Tower',
        link: 'projects/ravenclaw-tower.html',
        projectImg: 'images/ravenclaw-tower/smaller/ravenclaw-tower-high-render-color-06.jpg'
        // smallerImg: 'images/ravenclaw-tower/smaller/ravenclaw-tower-high-render-color-06.jpg'
    }, {
        name: 'Morocan Baazar',
        link: 'projects/moroccan-bazaar.html',
        projectImg: 'images/moroccan-bazaar/smaller/moroccan-bazaar-high-render-color-07.jpg'
    }, {
        name: 'Brighton Library',
        link: 'projects/brighton-library.html',
        projectImg: 'images/brighton-library/smaller/brighton-library-high-render-01.jpg'
    }, {
        name: 'Circus Bear',
        link: 'projects/circus-bear.html',
        projectImg: 'images/circus-bear/circus-bear-turnaround.jpg'
    }, {
        name: 'Rus Warrior',
        link: 'projects/rus-warrior.html',
        projectImg: 'images/rus-warrior/smaller/rus-warrior-concept-01.jpg'
    }, {
        name: 'Royal Albert Hall',
        link: 'projects/royalalbert.html',
        projectImg: 'images/royal-albert/smaller/royal-albert-low-render-01.jpg'
    }, {
        name: 'Rolls Royca',
        link: 'projects/rollsroyce.html',
        projectImg: 'images/rolls-royce/smaller/rolls-royce-high-render-color-01.jpg'
    }, {
        name: 'Inside The Tardis',
        link: 'projects/tardis.html',
        projectImg: 'images/tardis/smaller/tardis-high-render-color-01.jpg'
    }, {
        name: 'Harry Potter: Diagon Alley',
        link: 'projects/harrypotter.html',
        projectImg: 'images/harry-potter/smaller/harry-potter-high-render-01.jpg'
    }, {
        name: 'London Buildings Chess',
        link: 'projects/london-chess.html',
        projectImg: 'images/london-chess/smaller/RenderCam05_01.jpg'
    }, ]
};

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
$("#project-grid").append(html);

var articles = [];

function generateMostRecentArticles() {
    // builds out most recent 5 sections for display in the dom

    articles = [{
            "id": "hello-world",
            "title": "Hello World.",
            "paragraphs": [
                "My name is Todd and I've been a Software Engineer and Front End Developer for over 10 years now, with experience in both public and private sectors.",
                "I've been lucky enough to experience the fantastic work/ life balance that universities allow their workforce, and also how it is to live the cutting edge in start up land - seeing what it takes to be competitive in the market.",
                "My main intentions for this website is to hopefully collate things that I have learnt over my career, and hopefully you might find something helpful. There will be quick tips and tricks, longer more boring essays into \"<em>developerland</em>\" and all sorts of things in between.",
                "As you can see I'm currently undertaking the 100 days of code and have the above number of days remaining. So why not click through and see what I've been working on each day."
            ],
            "dateCreated": "01/25/2021",
            "dayNumber": 0,
            "tags": ['Hello World', 'Front End Developer', '#100daysofcode']
        },
        {
            "id": "days-of-code",
            "title": "#100daysofcode",
            "paragraphs": [
                "So you've seen this floating around the internet perhaps on instagram, plenty of developers posting code projects with the hashtag. But what does it actually mean?",
                "Head on over to <a href=\"https://www.100daysofcode.com\" target=\"_blank\">https://www.100daysofcode.com</a> the official website for the challenge.",
                "If you are reading this it means that I've taken up the challenge too (this signifying Day One), having built this site to track and showcase my individual progress. Enjoy."
            ],
            "dateCreated": "01/26/2021",
            "dayNumber": 1,
            "tags": ['#100daysofcode', 'Challenge', "Start", "Website", "countdown"]
        },
        {
            "id": "days-of-code",
            "title": "<span id=\"linear-gradient-heading\">Linear Gradients on Text?</span>",
            "paragraphs": [
                "So most people would know that you can apply linear-gradient() to the background of an element. It's treated similar to background image.",
                "One caveat to this is that you cannot apply linear gradients to text. Well what if I told you, that you can?",
                "With a little background linear gradient, background clip text and text fill transparent... bing, bang, boom!<br>You've got yourself a header like the one above... Text with a gradient."
            ],
            "dateCreated": "01/27/2021",
            "dayNumber": 2,
            "tags": ["linear gradient", "background", "text colour"]
        },
        {
            "id": "checkbox-menu",
            "title": "Use a checkbox to toggle a menu.",
            "paragraphs": [
                "A menu on any normal website has two states, open and closed. So naturally you write up a simple javascript function - true or false with a display none and you've got a menu.",
                "What if you have a site that doesn't allow for JavaScript? You need a checkbox.",
                "Checkboxes have the ability to store a checked and unchecked (or true/ false) state. Then have this accompanied with a css selector based on checked state and boom! Menu open and closed. This idea can really be taken and run with, anything that requires two states can be tracked with a checkbox, and you can even leverage the for label as a button to check/ uncheck your box."
            ],
            "dateCreated": "01/28/2021",
            "dayNumber": 3,
            "tags": ["checkbox", "menu", "toggle"]
        },
        {
            "id": "single-page-website",
            "title": "Single or Multi-page Website?",
            "paragraphs": [
                "Most websites in now days are single page. Why? Because why bother having the user need to navigate away from a page that shows everything you need.",
                "So then if thats the case why would you ever want to make a multi-page site ever again? Well, what about performance? Do you load a whole bunch of stuff onto your page and it takes forever to load?",
                "Another item may be that each page of your site has a different type of content - or different subject to address.",
                "I would love to hear why you have made your site either single or multi-page. Head on over to <a href=\"https://bit.ly/toddsmyth-IG\" target=\"_blank\">Instagram</a> and DM me as to your selection. I'd love to know."
            ],
            "dateCreated": "01/29/2021",
            "dayNumber": 4,
            "tags": ["single page", "multi page", "website", "instagram"]
        },
        {
            "id": "javascript-build-sections",
            "title": "Using code to write code?",
            "paragraphs": [
                "Yes you are reading that title right. And if you are reading this, it means that its working",
                "Each of the sections shown on this page are rendered via JavaScript and read from JSON objects because we need to work smarter not harder.",
                "Just don't forget if you are going to do something like this, you need to make sure your accessibility correctly identifies to users that the DOM has changed.",
                "Oh! And definitely don't forget to escape any characters with a backslash '\'"
            ],
            "dateCreated": "01/30/2021",
            "dayNumber": 5,
            "tags": ["javascript", "dom", "inner html", "accessibility", "json", "automation"]
        },
        {
            "id": "datalists-investigation",
            "title": "Dropdown with an input field?",
            "paragraphs": [
                "So in travelling down the road of autocomplete and a search input style field to add onto my article list I discovered there is such a thing as datalists.",
                "And they do exactly what I would need one to do, syntax is the same as a select element - providing options, just that it allows you to search the options from the select's input field.",
                "So awesome! I've put a link for myself to the mozilla doco right <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist\" target=\"_blank\">here</a>.",
                "Even better is that all browsers have basically full support! Winning!"
            ],
            "dateCreated": "01/31/2021",
            "dayNumber": 6,
            "tags": ["autocomplete", "dropdown", "select", "datalist", "input", "search"]
        },
        {
            "id": "parallax-effect",
            "title": "What is the Parallax Effect?",
            "paragraphs": [
                "So I originally thought I knew what the parallax effect was. You just set a background that is fixed and then have containers stacked on top that scroll over the fixed backhground.",
                "However, then I watched the <a href=\"https://www.youtube.com/watch?v=6CQ7DYni7Bg\" target=\"_blank\">YouTube tutorial by CodeGrid</a> and saw that their solution is far more complicated than I had originally planned.",
                "So naturally my day today has been spent falling down the parallax wormhole and building my own parallax effect which can be checked out <a href=\"./pages/parallax-effect.html\">here</a>.",
                "With my brain all kinds of scattered I headed over to <a href=\"https://www.w3schools.com/howto/howto_css_parallax.asp\" target=\"_blank\">W3Schools</a> to see how they do parallax and it's exactly as I'd expected. I was making this just too complicated for my own good."
            ],
            "dateCreated": "02/01/2021",
            "dayNumber": 7,
            "tags": ["parallax", "effect", "how to", "scroll"]
        },
        {
            "id": "filter-by-tag",
            "title": "Search by article tags",
            "paragraphs": [
                "What you may have noticed at the top of your screen is what appears to be a simple search bar. But what it's actually doing is populating a list of metadata tags for every article I have written to date and returning them for search.",
                "Then based on whichever item you select the list of articles will return only the items that contain the tag that you specified.",
                "The goal here is to reduce the amount of articles that are initially presented to any user that hits this home page which allows for a faster load time and snappier experience.",
                "I have plans to enhance this functionality in the coming days to filter by all kinds of items so stay tuned for that..."
            ],
            "dateCreated": "02/02/2021",
            "dayNumber": 8,
            "tags": ["search", "datalist", "how to", "top 5"]
        },
        {
            "id": "filter-by-tag",
            "title": "Search by article tags",
            "paragraphs": [
                "What you may have noticed at the top of your screen is what appears to be a simple search bar. But what it's actually doing is populating a list of metadata tags for every article I have written to date and returning them for search.",
                "Then based on whichever item you select the list of articles will return only the items that contain the tag that you specified.",
                "The goal here is to reduce the amount of articles that are initially presented to any user that hits this home page which allows for a faster load time and snappier experience.",
                "I have plans to enhance this functionality in the coming days to filter by all kinds of items so stay tuned for that..."
            ],
            "dateCreated": "02/03/2021",
            "dayNumber": 9,
            "tags": ["parallax", "effect", "how to", "scroll"]
        },
        {
            "id": "media-queries",
            "title": "Is your site responsive?",
            "paragraphs": [
                "These days there are so many different devices out there that every users experience of your website is probably going to be different. So how do you handle that? Enter media queries.",
                "Media queries allow you to set breakpoints or conditions for your page/ site and execute particular css when those conditions are satisfied.",
                "Say you want your background to be red on desktop, but for people on mobile it should be blue...",
                "Setup @media(max-width: 768px) to specify your condition so that on any device with less than 768px view width (mobiles and tablets) and then put in your background-color code."
            ],
            "dateCreated": "02/04/2021",
            "dayNumber": 10,
            "tags": ["mobile", "background-color", "responsive", "media"]
        },
        {
            "id": "ng-start-angular",
            "title": "Time to get Angular!",
            "paragraphs": [
                "Before I started my current job as manager, I spent all of my time writing in angular2+, with the magic of typescript and a little bit of node at my finger tips.",
                "In my new role we only use vanilla js, with some jQuery thrown in so I don't get to use frameworks much anymore",
                "Therefore today I downloaded all the things to get me started with angular again, and got the default application up and running. More to come in the following days."
            ],
            "dateCreated": "02/05/2021",
            "dayNumber": 11,
            "tags": ["angular", "jquery", "framework", "ng-app"]
        },
        {
            "id": "useless-facts-generator",
            "title": "Are useless facts really that useless?",
            "paragraphs": [
                "Load performance is a real consideration for developers these days. And usually the answer is displaying some kind of loading indicator to a user while they wait for the page to build and all assets to render.",
                "But that can be super boring and really highlights that you are waiting - which always makes things take even longer again.",
                "So I thought what about making a useless facts generator that will show to users while my pages load, so that they can be entertained?",
                "After falling down a rabbit hole or two I got this working on a separate page <b><a href=\"../pages/useless-facts-loader.html\">here</a></b>, and then tried to implement it onto my hopepage. Still battling some bugs with it."
            ],
            "dateCreated": "02/06/2021",
            "dayNumber": 12,
            "tags": ["useless facts", "loading", "spinner", "wip"]
        },
        {
            "id": "restful-pokemon-api",
            "title": "A RESTFul Pokemon API?",
            "paragraphs": [
                "So when you start out coding there is always the suggestion that you should make a weather app as your one of your first web dev projects.",
                "This is so that you grasp the fundamentals of page building, but also interact with an API to practice getting data. But everyone does a weather app, how can you do something more exciting?",
                "I was on Instagram the other day (come follow me <b><a href=\"https://www.instagram.com/todd_writes_code\">@Todd_Writes_Code</a></b>) and saw that there is such a thing as a <b>Restful Pokemon API</b>.",
                "So naturally today was spend reading through the doco and learning how to include it on a site for a future project... Stay tuned for that!"
            ],
            "dateCreated": "02/07/2021",
            "dayNumber": 13,
            "tags": ["pokemon", "restful", "api", "new project"]
        }, {
            "id": "blurred-focus",
            "title": "Find the hidden code?",
            "paragraphs": [
                "This little experiment was to explore a few things. First was to track the mouse as it scrolls across the page which is easily enough done with a bit of JavaScript.",
                "Then it was creating an image (circle) which tracked around the mouse position to highlight where the mouse was.",
                "But then via some layering of background images, blur and an svg you get the finished product which is the code, which you can discover by moving the magnifying glass over it.",
                "<b><a href=\"../pages/blurred-focus.html\">Click to the code yourself.</a></b>"
            ],
            "dateCreated": "02/08/2021",
            "dayNumber": 14,
            "tags": ["blur", "mousePosition", "magnify"]
        }, {
            "id": "blurred-focus",
            "title": "Find the hidden code?",
            "paragraphs": [
                "This little experiment was to explore a few things. First was to track the mouse as it scrolls across the page which is easily enough done with a bit of JavaScript.",
                "Then it was creating an image (circle) which tracked around the mouse position to highlight where the mouse was.",
                "But then via some layering of background images, blur and an svg you get the finished product which is the code, which you can discover by moving the magnifying glass over it.",
                "<b><a href=\"../pages/blurred-focus.html\">Click to the code yourself.</a></b>"
            ],
            "dateCreated": "02/09/2021",
            "dayNumber": 15,
            "tags": ["blur", "mousePosition", "magnify"]
        }, {
            "id": "dynamic-css-grid",
            "title": "Have you heard of CSS Grid?",
            "paragraphs": [
                "If you are reading this and have no idea what CSS Grid is, stop reading and go find out.",
                "Being a front end developer you should know all about different ways to manage the layout of pages.",
                "CSS Grid is certainly a useful one. If you have heard of things like bootstrap and materialise then this operates like the columns and rows portion. Helping you to draw out a grid super quickly and easily.",
                "Check out my dynamic grid generator <a href='../pages/dynamic-grid.html'>here</a>."
            ],
            "dateCreated": "02/10/2021",
            "dayNumber": 16,
            "tags": ["css-grid", "dynamic", "layout", "basics"]
        }, {
            "id": "hidden-words",
            "title": "Hidden Words in a Grid?",
            "paragraphs": [
                ""
            ],
            "dateCreated": "02/11/2021",
            "dayNumber": 17,
            "tags": ["blur", "mousePosition", "magnify"]
        }
    ];

    var sections = "";
    var mostRecentArticles = articles.reverse().slice(0, 5);
    for (var i = 0; i < mostRecentArticles.length; i++) {
        sections += generateArticleSection(mostRecentArticles[i], i == 0);
    }
    document.getElementsByTagName("BODY")[0].innerHTML += sections;
    populateArticleTagDataList();
};

function generateArticleSection(article, isFirstSection) {
    var returnString = "<section class='hide " + (isFirstSection ? "first-section'" : "'");
    returnString += "id=\"" + article.id + "\" data-date-created=\"" + article.dateCreated;
    returnString += "\" data-day-of-code=\"" + article.dayNumber + "\">";
    returnString += "<div class=\"section-heading\"><span class=\"section-day-count\">#" + article.dayNumber;
    returnString += "</span><h1>" + article.title;
    returnString += "</h1></div>";
    // paragraphs
    for (i = 0; i < article.paragraphs.length; i++) {
        returnString += "<p>" + article.paragraphs[i];
        returnString += "</p>";
    }
    returnString += "</section>"
    return returnString;
}

function getAllArticleTags() {
    // populate array of tags from all articles
    var tags = [];
    for (a = 0; a < articles.length; a++) {
        for (t = 0; t < articles[a].tags.length; t++) {
            var tag = articles[a].tags[t].toLowerCase();
            if (tags.indexOf(tag) == -1) {
                // need to ensure we remove duplicates
                tags.push(tag);
            }
        }
    }
    return tags.sort();
}

function populateArticleTagDataList() {
    // populate datalist with article tags
    var metadataTags = getAllArticleTags();
    var metadataList = document.getElementById('article-metadata');
    for (var i = 0; i < metadataTags.length; i++) {
        var option = document.createElement('option');
        option.value = metadataTags[i];
        metadataList.appendChild(option);
    }
}
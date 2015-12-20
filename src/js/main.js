var app = app || {};
app.events = {
    init: function() {
        this.projectsItems();
    },
    projectsItems: function () {
        var $item = $('.project-item');
        if ($item.length > 0) {
            $item.css('height', $item.width());
        }
    }
};
var App = (function($, app){
    function init () {
        app.events.init();
    }
    return {
        init: init
    };
})(jQuery, app);
$(function () {
    App.init();
});

$(window).resize(function () {
    app.events.projectsItems();
});
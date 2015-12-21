var app = app || {};
app.events = {
    init: function() {
        this.projectsItems();
        this.projectDescrip();
    },
    projectsItems: function () {
        var $item = $('.project-item');
        if ($item.length > 0) {
            $item.css('height', $item.width());
        }
    },
    projectDescrip: function () {
        var $projDescrip = $('.project-descrip');
        if ($projDescrip.length > 0) {
            $projDescrip.scrollToFixed({
                marginTop: 5,
                limit: function () {
                    return $('footer').offset().top - $(this).height();
                }
            });
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
var app = app || {};
app.events = {
    init: function() {
        this.events();
    },
    events: function () {
        console.log('test');
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
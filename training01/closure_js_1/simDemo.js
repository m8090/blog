/**
 * Created by user on 2016/6/2.
 */

(function($){
    $.pluginName = function(element,options){
        var defaults = {
            title:'',
            content:'',
            showOKBtn: 1,
            showCCBtn: 1,
            onFoo:function(){}

        };
        var plugin = this;
        plugin.settings = {};

        var $element = $(element);
        plugin.init = function (options) {
            this.settings = $.extend({},defaults,options);
            this.initNode(options);
        };

        plugin.show = function () {

        };

        plugin.hide = function () {

        };

        plugin.initNode = function (options) {
            var $okBtn = $element.find('');
            var $content = $element.find('');

            $content.text(plugin.settings.content);
            $okBtn.on('click', $.proxy(this.onOK,this));
        };

        plugin.onOK  = function(){
            this.hide();
            plugin.settings.onFoo();
        };

        plugin.init();
    };
    $.fn.pluginName = function(options){
        return this.each(function(){
            if ( undefined == $(this).data('pluginName')){
                var plugin = new $.pluginName(this,options);
                $(this).data('pluginName',plugin);
            }
        });
    }
})(jQuery);
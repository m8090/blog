/**
 * Created by user on 2016/6/2.
 */
(function(){
    var BaseWindon = Kclass.extend({
        init:function(options){
            $titleElm.text(options.title);
            $closeElm.on('click', $.proxy(this.close,this));
        },
        destroy:function(){},
        close: function () {

        }
    });

    return BaseWindon;
})();
require('baseWindon');

/**
 * Created by user on 2016/6/2.
 */
(function () {
    var win = new BaseWindon();
    win.on('ok', function () {
        console.log("ON ok")
    });
    win.emit('ok');
})()
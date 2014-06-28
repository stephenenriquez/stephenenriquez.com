$(function() {

    var GammaSettings = {
            // order is important!
            viewport : [ {
                width : 1200,
                columns : 4
            }, {
                width : 900,
                columns : 4
            }, {
                width : 500,
                columns : 3
            }, { 
                width : 320,
                columns : 2
            }, { 
                width : 0,
                columns : 2
            } ]
    };

    Gamma.init( GammaSettings, function(){ /* callback */} );
  
  
    //hack to reload window since Gamma Gallery breaks on page resize
    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
        if($(window).width() >= 900){
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            location.reload();
        }               
    }

});

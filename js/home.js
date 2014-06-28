$(function() {
	 var DELAY = 3000;
     var TRANS_TIME = 500;

     var j = 0;
	 function cycle(){
	         var jmax = $("#featured img").length -1;
	         $("#featured img:eq(" + j + ")")
                     .css({"opacity": 0})
                     .addClass('active')
	                 .animate({"opacity" : "1"} ,TRANS_TIME)
	                 .animate({"opacity" : "1"}, DELAY)
	                 .animate({"opacity" : "0"}, TRANS_TIME, function(){
	                         (j == jmax) ? j=0 : j++;
                             $("#featured img.active").removeClass('active');
	                         cycle();
	                 });
	         };

	 cycle();

});

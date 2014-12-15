$(function() {

  var DELAY = 3000;
  var TRANS_TIME = 500;
  var TUMBLR_KEY = "FZy6mbRiQOf3S6cHNBo9JbnXgw0P2NDCX9vyLODD06ENfnuk7e";
  
  var url = "http://api.tumblr.com/v2/blog/portfolio.stephenenriquez.com/posts/photo?api_key="+TUMBLR_KEY;
  
  $.ajax({
    dataType: "jsonp",
    url: url,
    success: function(data){
        console.log(data);
        var $a = $('<a href="http://portfolio.stephenenriquez.com/" class="featured"></a>').prependTo('#featured li p');
        $.each(data.response.posts,function(i,v){
          var src = v.photos[0].alt_sizes[2].url;
          $('<img src="'+src+'" alt="Stephen Enriquez" />').appendTo($a);
        });
        cycle();
    }
  });
  
  
  
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

});

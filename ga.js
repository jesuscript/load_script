//some google analytics code

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-X3343-10']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); 

  ga.type = 'text/javascript'; 
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleanalytics.com/ga.js';

  var s = document.getElementsByTagName('script')[0]; 
  console.log(s.parentNode);
  s.parentNode.insertBefore(ga, s);

})();
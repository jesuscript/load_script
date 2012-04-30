function loadScript(url,callback,attrs_for_script){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  //setting additional attributes
  if(attrs_for_script){
    for(var attr_name in attrs_for_script){
      script.setAttribute(attr_name,attrs_for_script[attr_name]);
    }
  }


  script.onload = callback;
  //for IE compatibility
  script.onreadystatechange = function(){
    if(this.readyState == 'complete')
      callback;
  }

  //inject the script we want to load into the document
  head.appendChild(script);
}

//load jQuery, and do some animation with it:
loadScript(
  "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",
  function(){
    (function($){
      $(document).ready(function(){
        $jquery = $("#jquery")
        $jquery.text("jQuery loaded").css({position:"absolute"});
        $jquery.animate({
          top:100, 
          left:(($(window).width() - $jquery.width()) / 2)
        },2000);
      });
    }(jQuery));
  }
);

//load our local google analytics code
loadScript("ga.js");

//load external 4quinvite code
loadScript("http://4qinvite.4q.iperceptions.com/1.aspx?sdfc=635baa10-27120-0a53e04a-083f-402c-8ba7-175eba003bd6&lID=1&loc=4Q-WEB2",
           null,
           {defer:"defer"}
          );

//load external facebook code with some extra html
loadScript(
  "http://connect.facebook.net/en_US/all.js",
  function(){
    FB.init({ 
      appId : 'YOUR APP ID', 
      status : true, // check login status 
      cookie : true, // enable cookies to allow the server 
                     // to access the session
      xfbml : true // parse XFBML 
    });

  }
  
);

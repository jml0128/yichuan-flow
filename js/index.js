$(document).ready(function(){
//初始化美洽客服
(function(m, ei, q, i, a, j, s) {
	m[i] = m[i] || function() {
		(m[i].a = m[i].a || []).push(arguments)
	};
	j = ei.createElement(q),
		s = ei.getElementsByTagName(q)[0];
	j.async = true;
	j.charset = 'UTF-8';
	j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
	s.parentNode.insertBefore(j, s);
})
(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', '44676');
_MEIQIA('fallback', 1);
 _MEIQIA('withoutBtn');
 
 
 
  $(".news-list-nav li").click(function(){
	$(".news-list-nav .active").removeClass("active");
    $(this).addClass("active");
  });
  
  function isWx(){
		var ua = window.navigator.userAgent.toLowerCase();
		//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}
	
	if(isWx()){
		$(".header-box").css('display','none');
	}
});
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<HTML b:css='false' b:responsive='true' b:version='2' class='v2' expr:dir='data:blog.languageDirection'>
<head>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<b:include data='blog' name='all-head-content'/>
<meta content='#5c1d94' name='theme-color'/>
<meta content='#5c1d94' name='msapplication-navbutton-color'/>
<meta content='yes' name='apple-mobile-web-app-capable'/>
<meta content='#5c1d94' name='apple-mobile-web-app-status-bar-style'/>

<!-- Title -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<title><data:blog.pageTitle/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
	<title><data:blog.pageName/> - <data:blog.title/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.pageName == &quot;&quot;'>
	<title>All Posts - <data:blog.title/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;error_page&quot;}'>
	<title>Page Not Found - <data:blog.title/></title>
<b:else/>
	<title><data:blog.pageName/></title>
</b:if>
</b:if>
</b:if>
</b:if>

<!-- Meta keywords otomatis homepage, static page, dan post -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<meta expr:content='data:blog.title' name='keywords'/>
</b:if>    
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
	<meta expr:content='data:blog.pageName' name='keywords'/>
</b:if>

<!-- Noindex search page, label, dan arsip -->
<b:if cond='data:blog.pageType in {&quot;archive&quot;} or data:blog.searchLabel or data:blog.searchQuery'>
	<meta content='noindex,nofollow' name='robots'/>
</b:if>

<!-- Facebook Open Graph Tag -->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <meta expr:content='data:blog.pageName' property='og:title'/>
  <meta content='article' property='og:type'/>
<b:else/>
  <meta expr:content='data:blog.pageTitle' property='og:title'/>
  <meta content='website' property='og:type'/>
</b:if>
<b:if cond='data:blog.metaDescription'>
  <meta expr:content='data:blog.metaDescription' property='og:description'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>
&lt;style type=&quot;text/css&quot;&gt;
&lt;!-- /*<b:skin><![CDATA[
#header,.main-wrapper{float:left;overflow:hidden}
#header,.main-wrapper,.sidebar-wrapper{overflow:hidden}
.header-wrap{position:relative;width:1000px}
#header{width:330px!important;padding:0}
.outerpic-wrapper{width:1000px;padding:0;margin:0 auto;overflow:hidden}
.content-wrapper{position:relative;max-width:1000px;display: inline-block;margin:0 auto}
.outer-wrapper{position:relative;width:1000px;padding:0}
.main-wrapper{width:680px;margin:-15px 0 0}
.sidebar-wrapper{width:310px;float:right;word-wrap:break-word}
.footer{float:left;width:290px!important;}
.footer{margin:10px}#whatsapp,.box1,.box2,.box3,.box4,.box5,.box6,.box7,.box8,.box9,.box9,.box10,.box11,.box12{display:none}
#layout ul,li,ol{list-style:none}
*/]]></b:skin>

<style>
/* =============================== 
Theme Name: APP BUSINESS v2.00
Author: Basri Matindas
Design: https://www.goomsite.net
Publisher: https://www.Psdly.com
 =============================== */
 
/* http://meyerweb.com/eric/tools/css/reset/ */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-decoration:none}

/* HTML5 display-role reset for older browsers */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:&#39;&#39;;content:none}
table{border-collapse:collapse;border-spacing:0}
@font-face {
  font-family: &#39;Quicksand&#39;;
  font-style: normal;
  font-weight: 300;
  src: local(&#39;Quicksand Light&#39;), local(&#39;Quicksand-Light&#39;), url(https://fonts.gstatic.com/s/quicksand/v9/6xKodSZaM9iE8KbpRA_pgHYYT8L5.woff) format(&#39;woff&#39;);
}
@font-face {
  font-family: &#39;Quicksand&#39;;
  font-style: normal;
  font-weight: 400;
  src: local(&#39;Quicksand Regular&#39;), local(&#39;Quicksand-Regular&#39;), url(https://fonts.gstatic.com/s/quicksand/v9/6xKtdSZaM9iE8KbpRA_hK1QL.woff) format(&#39;woff&#39;);
}
@font-face {
  font-family: &#39;Quicksand&#39;;
  font-style: normal;
  font-weight: 500;
  src: local(&#39;Quicksand Medium&#39;), local(&#39;Quicksand-Medium&#39;), url(https://fonts.gstatic.com/s/quicksand/v9/6xKodSZaM9iE8KbpRA_p2HcYT8L5.woff) format(&#39;woff&#39;);
}
@font-face {
  font-family: &#39;Quicksand&#39;;
  font-style: normal;
  font-weight: 700;
  src: local(&#39;Quicksand Bold&#39;), local(&#39;Quicksand-Bold&#39;), url(https://fonts.gstatic.com/s/quicksand/v9/6xKodSZaM9iE8KbpRA_pkHEYT8L5.woff) format(&#39;woff&#39;);
}

/* Reset and More */
a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{padding:0;border:none;outline:none;vertical-align:baseline;background:none;text-decoration:none}
ins{text-decoration:underline}
del{text-decoration:line-through}
blockquote{font-style:italic;color:#888}
caption,th{text-align:center}
img{border:none;position:relative}
a,a:visited{text-decoration:none}
.section,.widget,.widget ul,#PopularPosts1 ul,.ready-box ul,ul.custom-widget,.related-magz ul,h3.title-video,h3.list-title-wp,p.list-summary,.related li h3{margin:0;padding:0}
:focus{outline:none}
a img{border:none}
brc{color:#444}
.ready-box ul,ul.custom-widget{margin:0!important;padding:0!important}
.CSS_LIGHTBOX{z-index:999999!important}
.separator a{clear:none!important;float:none!important;margin-left:0!important;margin-right:0!important}
span.item-control,a.quickedit{display:none!important}
.archive .home-link,.index .home-link,.home-link{display:none!important}
*{outline:none;transition:all .3s ease;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease}
:after,:before{transition:all .0s ease;-webkit-transition:all .0s ease;-moz-transition:all .0s ease;-o-transition:all .0s ease}
.status-msg-wrap{margin:0 auto 25px}.status-msg-border{border:#eee solid 1px;opacity:0.699999988079071044921875;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}
.status-msg-bg{background-color:#f8f8f8;opacity:1;filter:none}
.icon:before,.postags a:before{font-family:FontAwesome;font-weight:400;font-style:normal;line-height:1;padding-right:4px}
.feed-links{clear:both;display:none;line-height:2.5em}
::selection {background:#fb1e8b;color:#fff;}
::-moz-selection {background:#fb1e8b;color:#fff}
::-webkit-selection {background:#fb1e8b;color:#fff}
::-o-selection {background:#fb1e8b;color:#fff}
:after, :before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
svg{vertical-align: middle;}
h1{font-size:1.8rem}
h2{font-size:1.6rem}
h3{font-size:1.4rem}
h4{font-size:1.2rem}
h5{font-size:1rem}
h6{font-size:0.9rem}
.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:Quicksand,sans-serif;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}
p{margin: 0 0 10px;}
#navbar-iframe,a.quickedit,.blog-pager,#blog-pager{height:0;visibility:hidden;display:none}
body{background:#fff;color:#444;height:100%;font-family: Quicksand,sans-serif;font-weight:400;line-height:22px;text-decoration:none;margin:0;padding:0}
a,a:link,a:visited{color:#fb1e8b;text-decoration:none}
a:hover,a:active{color:#444;text-decoration:none}
h2.date-header{display:none}
#cssmenu ul,#cssmenu ul li,#cssmenu ul li a,#cssmenu #head-mobile{border:0;list-style:none;line-height:1;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
#cssmenu ul li a{position:relative}
#cssmenu #head-mobile{position:relative}
#cssmenu{width:auto;line-height:1;float:right}#cssmenu ul{margin:0;display:block;height:48px}#cssmenu #head-mobile{display:none;position:relative}#cssmenu&gt;ul&gt;li{float:left;margin:0}#cssmenu&gt;ul&gt;li&gt;a{padding:15px 15px 22px 15px;font-size:13px;font-weight:700;text-decoration:none;text-transform:uppercase;color:#fff;-webkit-transition:color .2s ease;-moz-transition:color .2s ease;-ms-transition:color .2s ease;-o-transition:color .2s ease;transition:color .2s ease}
#cssmenu ul li.active a{color:#fff}
#cssmenu ul li.active:hover,#cssmenu ul li.active,#cssmenu ul li.has-sub.active:hover{background:rgba(64,64,64,0.1);-webkit-transition:background .2s ease;-ms-transition:background .2s ease;transition:background .2s ease}
#cssmenu ul ul li.has-sub&gt;a:after{content:&quot;+&quot;;font-style:normal;font-weight:normal;text-decoration:inherit;margin-left:10px}
#cssmenu ul ul li.has-sub&gt;a:after{content:&quot;-&quot;}
#cssmenu&gt;ul&gt;li.has-sub:hover&gt;a:after{content:&quot;&quot;}
#cssmenu ul ul{width:240px;height:auto;position:absolute;left:-9999px;z-index:1;-webkit-box-shadow:0 8px 15px rgba(0,0,0,.2);-moz-box-shadow:0 8px 15px rgba(0,0,0,.2);-ms-box-shadow:0 8px 15px rgba(0,0,0,.2);-o-box-shadow:0 8px 15px rgba(0,0,0,.2);box-shadow:0 8px 15px rgba(0,0,0,.2);opacity:0;transform: translateY(-2em);transition: all 0.3s ease-in-out 0s;border-top:3px solid #ff728c}
#cssmenu ul ul:before{border-color:transparent transparent #ff728c transparent;content:&#39;&#39;;position:absolute;width:0;height:0;left:-68%;border-style:solid;border-width:0 8px 8px;right:0;margin:-8px auto 0}
#cssmenu li:hover&gt;ul{left:auto;opacity:1;transform: translateY(0%);transition-delay: 0s, 0s, 0.3s;}
#cssmenu ul ul li{background:#fff;margin:0}
#cssmenu ul ul li:hover{background:#ff728c;}
#cssmenu ul ul li a:hover{color:#fff}
#cssmenu ul ul ul{margin-left:100%;top:0}
#cssmenu ul ul li a{font-size:13px;padding:0 15px;line-height:45px;max-width:100%;text-decoration:none;color:#555;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
#cssmenu ul ul li:last-child&gt;a,#cssmenu ul ul li.last-item&gt;a{border-bottom:0}
#cssmenu ul ul li.has-sub:hover,#cssmenu ul li.has-sub ul li.has-sub ul li:hover{background:#efefef}
.colum-left,.colum-right{z-index:30;height:auto;position:relative}
#particle-canvas:after,span.wa-x::before{content:&quot;&quot;}
.colum-left a,.inner a,a.submit{text-transform:uppercase}
.jadwal,.mfp-container:before,.mfp-content,a.btn-wa{vertical-align:middle}
.mfp-arrow,.slick-slider{-webkit-tap-highlight-color:transparent}
.comment-content,.main-wrapper,.mfp-title,.sidebar-wrapper{word-wrap:break-word}
.hero-center{padding:10rem 0}
.colum-left{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;margin:0;padding-top:5%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}
.colum-left h1{font-size:85px;color:#fff;font-weight:600;letter-spacing:-2px;padding:0;margin:0}
.colum-left p{color:#fff;font-family:inherit;font-size:15px;font-weight:600;line-height:2;margin:1.875em 0;}
.colum-left a{display:inline-block;padding:10px 20px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;font-weight:800;font-size:13px;color:#fff;margin:0 10px 0 0;box-shadow:0 10px 35px 2px rgba(61,61,61,.3);background:#ff65a5;background:-moz-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:-webkit-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=&#39;#ff65a5&#39;,endColorstr=&#39;#ff866a&#39;,GradientType=1)}
.colum-left a.slide-button{color:#fff;box-shadow:0 10px 15px 0 rgba(102,204,150,.3);background:#6c9;background:-moz-linear-gradient(45deg,rgba(102,204,153,1) 0,rgba(108,205,148,1) 19%,rgba(136,209,125,1) 72%,rgba(146,211,117,1) 100%);background:-webkit-linear-gradient(45deg,rgba(102,204,153,1) 0,rgba(108,205,148,1) 19%,rgba(136,209,125,1) 72%,rgba(146,211,117,1) 100%);background:linear-gradient(45deg,rgba(102,204,153,1) 0,rgba(108,205,148,1) 19%,rgba(136,209,125,1) 72%,rgba(146,211,117,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=&#39;#6c9&#39;,endColorstr=&#39;#92d375&#39;,GradientType=1)}
#particle-canvas:after,.header-wrap{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.colum-left a svg{width:22px;fill:#fff}
.colum-right{float:right;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;margin:0;padding-right:5%;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}
.mfp-container,.team-box,.team-details,.wa-body,img.mfp-img{box-sizing:border-box}
.colum-right img {
    width: 350px;
    height: 500px;
    visibility: visible;
    animation-duration: .8s;
    animation-name: fadeInRight;
}
.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{0%,20%,53%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.pulse{animation-name:pulse}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada{animation-name:tada}@keyframes wobble{0%{transform:none}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:none}}.wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{0%{transform:perspective(400px) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}to{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}
#particle-canvas{position:relative;display:block;overflow:hidden;width:auto;z-index:10;height:300px}
#particle-canvas:after{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}
.header-wrap{position:fixed;width:100%;padding-top:5px;z-index:999;transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out}
.header-wrap.fixed{z-index:9999;padding:10px 0 0;box-shadow:0 .25rem .375rem -.375rem rgba(76,76,76,.6901960784313725)}
.circles,.section-shape{left:0;z-index:20;position:absolute;right:0}
.section-shape{bottom:-8px}
.section-shape img{width:100%;height:auto}
.circles{top:0;bottom:0;overflow:hidden;margin:0}
.circles li{position:absolute;display:block;list-style:none;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(255,255,255,.13);animation:animate 45s linear infinite;bottom:-150px;z-index:0}
.circles li:nth-child(1){left:25%;width:60px;height:60px;animation-delay:0}
.circles li:nth-child(2){left:10%;width:10px;height:10px;animation-delay:2s;animation-duration:12s}
.circles li:nth-child(3){left:70%;width:10px;height:10px;animation-delay:4s}
.circles li:nth-child(4){left:40%;width:40px;height:40px;animation-delay:0;animation-duration:18s}
.circles li:nth-child(5){left:65%;width:10px;height:10px;animation-delay:0}
.circles li:nth-child(6){left:75%;width:90px;height:90px;animation-delay:3s}
.circles li:nth-child(7){left:35%;width:130px;height:130px;animation-delay:7s}
.circles li:nth-child(8){left:50%;width:15px;height:15px;animation-delay:15s;animation-duration:45s}
.circles li:nth-child(9){left:20%;width:5px;height:5px;animation-delay:2s;animation-duration:35s}
.circles li:nth-child(10){left:85%;width:130px;height:130px;animation-delay:0;animation-duration:11s}
@keyframes animate{0{transform:translateY(0) rotate(0);opacity:1;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;}
100%{transform:translateY(-1000px) rotate(720deg);opacity:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;}}
.header-wrapper{width:1100px;color:#777;min-height:50px;position:relative;z-index:999;margin:0 auto}
div#pelajar,div#whatsapp{position:fixed;transition:.5s}
#header{float:left;width:auto;overflow:hidden;margin:0;padding:0}
#header-inner{margin:5px 0;padding:0}
#header h1,#header p{font-size:26px;line-height:38px;color:#fff;margin:-3px 0 0;font-weight:700}
#header h1 a,#header h1.title a:hover,#header p a{color:#fff;text-decoration:none}
#header img{border:0;background:none;width:auto;height:35px;margin:0 auto}
#header .description{display:none}
div#pelajar{top:0;left:0;right:0;bottom:0;z-index:-99;opacity:0;background:rgba(0,0,0,.74)}
div#whatsapp,span.wa-x::before{left:50%;transform:translate(-50%,-50%)}
div#pelajar.active{z-index:9999;opacity:1}
div#whatsapp{top:50%;max-width:600px;width:100%;background:#fff;border-radius:5px;box-shadow:0 2px 5px rgba(0,0,0,.5);z-index:-1;opacity:0}
div#whatsapp.active{z-index:999999;opacity:1}
p.wa-title{margin:0;padding:15px;font-size:14px;text-transform:uppercase;text-align:center;font-weight:700;background:#067f97;color:#fff}.link-sk{color:#fff!important;text-decoration:underline!important}.wa-body{padding:20px;display:block;width:100%;border:10px solid #fff;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:radial-gradient(farthest-corner at 40px 40px,#285fb1,#116ca0,#008793,#00bf72,#a8eb12);color:#fff}
.wa-input,.wa-option{padding:10px;outline:0}
.wa-input{border:none;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;line-height:1.2em}
.wa-option{border:none;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;line-height:32px;width:100%}
.wa-input.bagi{width:92%;margin:0;outline:0}
.wa-option.kolom{width:68%;margin:1% 1% 10px}
.jadwal{margin-right:5px;display:inline}
.mr-10{margin-right:10px!important;font-size:14px}
.wa-label.bagi,.wa-label.full{padding:0;font-size:15px;font-weight:700}
.wa-label.bagi{line-height:1.2em;display:block;margin-bottom:10px}
.bagil{display:block;font-weight:700}
.wa-label.full{width:100%;line-height:32px;display:inline}
.p-info,a.submit{font-size:13px;text-align:center}
.form-whatsapp{display:inline-block;width:100%;margin-bottom:18px}
.left,.right{width:48%}
.right{float:right}
.box-tanggal{width:100%;text-align:center;margin:15px;line-height:1.6em}
.wa-input.full{width:96%;resize:none;min-height:70px;margin:0}
a.submit{line-height:24px;padding:10px 15px;width:100%;max-width:100px;font-weight:700;background:#fff;margin:14px auto 0;display:block;color:#20a94b!important;border-radius:3px;cursor:pointer}
span.wa-x{position:absolute;top:5px;right:5px;height:30px;width:30px;border:2px solid #fff;border-radius:50px;cursor:pointer}
span.wa-x::before{position:absolute;top:50%;height:3px;width:50%;background:#fff}
.p-info{color:#fff}
.about-content p{
    margin-bottom: 20px;
}
@media screen and (max-width:768px){.wa-input.bagi{width:100%;margin:0 0 10px}
.wa-body{overflow-y:scroll;max-height:500px}
.wa-input.full{width:100%;margin:0}}
.box-list,.box1,.box10,.box11,.box12,.box2,.box3,.box4,.box5,.box6,.box7,.box8,.box9,.mfp-bg,.team-details,.team-img img{overflow:hidden}
@media screen and (max-width:640px){.left,.right{width:100%}}
a.btn-wa{border-radius:35px;letter-spacing:0;line-height:35px;display:block;font-size:13px;font-weight:700;text-transform:uppercase;color:#fff;float:right;position:relative;transition:.3s ease-out;-moz-transition:.3s ease-out;-webkit-transition:.3s ease-out;border:1px solid #ff66a3;padding:1px 15px!important;margin-top:0;margin-left:0;box-shadow:0 5px 5px 0 rgba(107,66,83,.16);background:#ff65a5;background:-moz-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:-webkit-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%)}
a.btn-wa span{display:block}
a.btn-wa i{display:none}
.about-content h6,.box1 .right .about-content ul li i{-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-color:transparent}
.box1{margin:0 auto;padding:3rem 0 1rem}
.box1 .left,.box1 .right{width:50%}
.left{float:left}
.box1 .right{float:right}
.box1 .right .about-content ul li i{font-size:15px;color:#74e5a5;padding-right:2px;background-image:-webkit-gradient(linear,right top,left top,from(#75e9a0),to(#75bae4));background-image:linear-gradient(-90deg,#75e9a0 0,#75bae4 100%)}
#about-area{padding:110px 0 50px}
.about-content h6{font-weight:600;background-image:-webkit-gradient(linear,right top,left top,from(#0985f9),to(#6809dc));background-image:linear-gradient(-90deg,#0985f9 0,#6809dc 100%);margin:0 0 5px}
.about-content h2{font-weight:700;margin-bottom:25px}
.about-content ul li{font-size:14px;display:block;padding:5px 0;font-weight:600}
.about-content a{display:inline-block;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);background-size:100% auto;padding:12px 30px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;color:#fff;margin-top:30px;font-weight:500;box-shadow:0 18px 32px rgba(0,0,0,.28)}
.about-content a:hover{background-size:200% auto}
.video-content{margin:0 auto;background:url(https://3.bp.blogspot.com/-uhsU5kSbRbY/XL7M9C6qVQI/AAAAAAAAANY/c6OHApmuiIw8RhOiVChDDPjWAnvAHsgDwCLcBGAs/s1600/over.jpg) center no-repeat;background-origin:initial;background-clip:initial;background-size:cover;z-index:1;padding:0;height:380px;max-width:738px;width:100%}
.video-content .bg-opacity{background-color:rgba(21,21,21,.79);height:100%}
.video-content a{display:inline-block;width:80px;height:80px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-size:30px;text-align:center;line-height:80px;padding:0;background-color:#fb1e8b;color:#fff;position:relative}
.video-content a:after,.video-content a:before{content:&quot;&quot;;position:absolute;left:-5px;top:-5px;height:90px;width:90px}
.video-content a:after{border:3px solid #fb1e8b;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:icon-bubble 1s infinite forwards linear;animation:icon-bubble 1s infinite forwards linear}
.video-content a:before{border:3px solid #fb1e8b;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:icon-bubble 1s infinite forwards linear .5s;animation:icon-bubble 1s infinite forwards linear .5s}
.mfp-arrow:after,.mfp-arrow:before,.mfp-container:before,.mfp-figure:after{content:&#39;&#39;}
.box-list li i,.box5,.box8{position:relative}
.d-table-cell{padding:150px 0}
@-webkit-keyframes icon-bubble{0{-webkit-transform:scale(.85);transform:scale(.85);opacity:1}
25%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:.8}
50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.55}
75%{-webkit-transform:scale(1.32);transform:scale(1.32);opacity:.3}
100%{-webkit-transform:scale(1.4);transform:scale(1.4);opacity:0}}
@keyframes icon-bubble{0{-webkit-transform:scale(.85);transform:scale(.85);opacity:1}
25%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:.8}
50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.55}
75%{-webkit-transform:scale(1.32);transform:scale(1.32);opacity:.3}
100%{-webkit-transform:scale(1.4);transform:scale(1.4);opacity:0}}
#footer h2,#footer h6,#footer p,.box12 .section-heading h2,.box12 .section-heading h6,.box12 .section-heading p,.box3 .section-heading h2,.box3 .section-heading h6,.box3 .section-heading p.text-light,.box5 .section-heading h2,.box5 .section-heading h6,.box5 .section-heading p.text-light,.box8 .section-heading h2,.box8 .section-heading h6,.box8 .section-heading p{color:#fff}
.section-heading h6{font-weight:500;color:#555;margin:0 0 5px;font-size:20px}
.section-heading h2,.section-heading1 h2{font-weight:700;font-size:45px;color:#555;margin:10px 0}
.section-heading p, .section-heading1 p {
    color: #333;
    font-size: 16px;
    line-height: 1.5em;
    font-weight: 500;
}
.section-heading{-ms-flex:0 0 50%;flex:0 0 50%;max-width:70%;margin:0 auto 60px}
.section-heading1{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;margin:40px auto 20px}
.box12 .section-heading{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;margin:0 auto 20px}
#footer .section-heading{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;margin:0 auto}
.text-center{text-align:center}
.box2{background:#f9f9f9;margin:0 auto;padding:3rem 0 1rem}
.box-list {
    list-style: none;
    margin: 15px 0 30px;
    padding: 0 0 30px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    display: block;
    line-height: 18px;
    text-align: center;
}
.box-list li{float:left;display:block;background:#fff;width:25.15%;padding:40px 30px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;box-shadow:0 1px 15px 1px rgba(0,0,0,.04),0 1px 6px rgba(0,0,0,.04);border:0;margin:15px;-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}
.box-list li i,.box3{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.box-list li span{font-size:16px;color:#000;font-weight:600;line-height:1.2em}
.box-list li p{padding:0;margin:5px 0 0}
.box-list h3 {
    font-size: 18px;
    padding: 15px 0;
    font-weight: 700;
}
.box-list li i{font-size:35px;color:#fcfcfc;padding:0;width:75px;height:75px;margin:0 auto 20px;line-height:75px;border-radius:100%;box-shadow:0 18px 32px rgba(0,0,0,.28);display:block;-webkit-transition:all .5s;-o-transition:all .5s;transition:all .5s}
.box10,.box11,.box3,.box4,.box5,.box6,.box7,.box8,.box9{padding:3rem 0}
.about-wrap,.box10,.box11,.box3,.box4,.box5,.box6,.box7,.box8,.box9{margin:0 auto}
.box4{background:url(https://3.bp.blogspot.com/-PRpLC63zKvQ/XL681YeStZI/AAAAAAAAALg/4IyT3zWJKf0kYdh0RMSdCOn6KZ3doEaxACLcBGAs/s1600/bg.png) left bottom no-repeat #fff}
.box5{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.box7{background:#fbfbfb}
.box8{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.box9{background-image:url(https://2.bp.blogspot.com/-R2so0uzhLM4/XL68_uNxbtI/AAAAAAAAALk/C20G-Znm7PY9Aoea-bfvzUEYu68uBnWMgCLcBGAs/s1600/bg2.png);background-repeat:no-repeat;background-position:left bottom}
.team-img,.team-member{position:relative;overflow:hidden}
.about-title{margin-bottom:35px}
.about-title h4{font-size:35px;line-height:45px;color:#303030}
.socials a,.team-details p{color:#fff}
.team-box{width:23.1%;float:left;padding:0;margin:10px;height:324px}
.overlay,.team-img img{width:100%;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}
.team-img img{height:100%}
.team-img{height:246px}
.overlay,.socials,.team-details{position:absolute}
.team-title{padding:11px 0 11px 51px;margin:0;font-size:16px}
.overlay{background-color:rgba(20,20,20,.7);top:0;height:100%;opacity:0}
.team-details{opacity:0;top:40%;left:0;padding:5%;z-index:2;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}
.team-box:hover .socials{opacity:1}
.socials{top:0;bottom:0;right:0;opacity:0;background:rgba(56,44,54,.45);z-index:2;height:246px;-webkit-transition:all .5s ease-in-out 0;-moz-transition:all .5s ease-in-out 0;-o-transition:all .5s ease-in-out 0;transition:all .5s ease-in-out 0}
.socials a,.socials i{height:34px;text-align:center}
.mfp-bg,.mfp-container,.mfp-wrap{height:100%;width:100%}
.socials a{display:block;width:36px;padding:7px}
.socials i{line-height:34px;color:rgba(243,41,151,.61);font-size:14px;width:34px;background-color:#fff;border-radius:50%;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-o-transition:all .2s linear;-ms-transition:all .2s linear;transition:all .2s linear}
.team-details .socials i{color:#fff}
.phone_trigger{border-left:1px solid #f2f2f2;font-size:25px;display:block;float:right;color:#505050;width:49px;cursor:pointer;-webkit-transition:all .3s ease-in-out 0;transition:all .3s ease-in-out 0}
.inner{background:#f1f1f1;padding:12px 0;text-align:center}
.inner a {
    color: #000;
    font-size: 18px;
    font-weight: 700;
}
.subscribe-wrapper,h2,h3.date-header{text-transform:none}
.inner p {
    font-weight: 500;
    color: #000;
    font-size: 14px;
}
.box12{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);margin:0 auto;padding:3rem 0}
.mfp-bg{top:0;left:0;z-index:1042;position:fixed!important;background:#000;opacity:.8}
.mfp-wrap{top:0;left:0;z-index:1043;position:fixed;outline:0!important;-webkit-backface-visibility:hidden}
.mfp-container{text-align:center;position:absolute;left:0;top:0;padding:0 8px}
.mfp-container:before{display:inline-block;height:100%}
.mfp-align-top .mfp-container:before{display:none}
.mfp-content{position:relative;display:inline-block;margin:0 auto;text-align:left;z-index:1045}
.mfp-ajax-holder .mfp-content,.mfp-inline-holder .mfp-content{width:100%;cursor:auto}
.mfp-ajax-cur{cursor:progress}
.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close{cursor:-moz-zoom-out;cursor:-webkit-zoom-out;cursor:zoom-out}
.mfp-zoom{cursor:pointer;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}
.mfp-auto-cursor .mfp-content{cursor:auto}
.mfp-arrow,.mfp-close,.mfp-counter,.mfp-preloader{-webkit-user-select:none;-moz-user-select:none;user-select:none}
.mfp-loading.mfp-figure{display:none}
.mfp-hide{display:none!important}
.mfp-preloader{color:#ccc;position:absolute;top:50%;width:auto;text-align:center;margin-top:-.8em;left:8px;right:8px;z-index:1044}
.mfp-preloader a{color:#ccc}
.mfp-close,.mfp-preloader a:hover{color:#fff}
.mfp-s-error .mfp-content,.mfp-s-ready .mfp-preloader{display:none}
button.mfp-arrow,button.mfp-close{overflow:visible;cursor:pointer;background:none;border:0;-webkit-appearance:none;display:block;outline:0;padding:0;z-index:1046;box-shadow:none;touch-action:manipulation}
button::-moz-focus-inner{padding:0;border:0}
.mfp-close{width:44px;height:44px;line-height:44px;position:absolute;right:0;top:0;text-decoration:none;text-align:center;opacity:.65;padding:0 0 18px 10px;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace}
.mfp-close:focus,.mfp-close:hover{opacity:1}
.mfp-close:active{top:1px}
.mfp-close-btn-in .mfp-close{color:#333}
.mfp-iframe-holder .mfp-close,.mfp-image-holder .mfp-close{color:#fff;right:-6px;text-align:right;padding-right:6px;width:100%}
.mfp-counter{position:absolute;top:0;right:0;color:#ccc;font-size:12px;line-height:18px;white-space:nowrap}
.mfp-figure,img.mfp-img{line-height:0}
.mfp-arrow{position:absolute;opacity:.65;margin:-55px 0 0;top:50%;padding:0;width:90px;height:110px}
.mfp-arrow:active{margin-top:-54px}
.mfp-arrow:focus,.mfp-arrow:hover{opacity:1}
.mfp-arrow:after,.mfp-arrow:before{display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:inset transparent}
.mfp-arrow:after{border-top-width:13px;border-bottom-width:13px;top:8px}
.mfp-arrow:before{border-top-width:21px;border-bottom-width:21px;opacity:.7}
.mfp-arrow-left{left:0}
.mfp-arrow-left:after{border-right:17px solid #fff;margin-left:31px}
.mfp-arrow-left:before{margin-left:25px;border-right:27px solid #3f3f3f}
.mfp-arrow-right{right:0}
.mfp-arrow-right:after{border-left:17px solid #fff;margin-left:39px}
.mfp-arrow-right:before{border-left:27px solid #3f3f3f}
.mfp-iframe-holder{padding-top:40px;padding-bottom:40px}
.mfp-iframe-holder .mfp-content{line-height:0;width:100%;max-width:900px}
.mfp-image-holder .mfp-content,img.mfp-img{max-width:100%}
.mfp-iframe-holder .mfp-close{top:-40px}
.mfp-iframe-scaler{width:100%;height:0;overflow:hidden;padding-top:56.25%}
.mfp-iframe-scaler iframe{position:absolute;display:block;top:0;left:0;width:100%;height:100%;box-shadow:0 0 8px rgba(0,0,0,.6);background:#000}
.mfp-figure:after,img.mfp-img{width:auto;height:auto;display:block}
img.mfp-img{padding:40px 0;margin:0 auto}
.mfp-figure:after{position:absolute;left:0;top:40px;bottom:40px;right:0;z-index:-1;box-shadow:0 0 8px rgba(0,0,0,.6);background:#444}
.mfp-figure small{color:#bdbdbd;display:block;font-size:12px;line-height:14px}
.mfp-figure figure{margin:0}
.mfp-bottom-bar{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto}
.mfp-title{text-align:left;line-height:18px;color:#f3f3f3;padding-right:36px}
.mfp-gallery .mfp-image-holder .mfp-figure{cursor:pointer}
@media screen and (max-width:800px){
.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0}
.mfp-img-mobile img.mfp-img{padding:0}
.mfp-img-mobile .mfp-figure:after{top:0;bottom:0}
.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px}
.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}
.mfp-img-mobile .mfp-bottom-bar:empty{padding:0}
.mfp-img-mobile .mfp-counter{right:5px;top:3px}
.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}
}
@media screen and (max-width:300px){
.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0}
.mfp-img-mobile img.mfp-img{padding:0}
.mfp-img-mobile .mfp-figure:after{top:0;bottom:0}
.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px}
.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}
.mfp-img-mobile .mfp-bottom-bar:empty{padding:0}
.mfp-img-mobile .mfp-counter{right:5px;top:3px}
.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}
}
@media all and (max-width:900px){.mfp-arrow{-webkit-transform:scale(.75);transform:scale(.75)}
.mfp-arrow-left{-webkit-transform-origin:0;transform-origin:0}
.mfp-arrow-right{-webkit-transform-origin:100%;transform-origin:100%}
.mfp-container{padding-left:6px;padding-right:6px}}
#subscribe-css{position:relative;padding:0;overflow:hidden;display:block;margin:0 auto;width:100%;max-width:607px}
.subscribe-wrapper{color:#444;font-size:16px;line-height:normal;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;margin:0;text-align:center;font-weight:400}
.contact-form-button-submit,.subscribe-css-email-button{text-transform:uppercase;text-align:center;cursor:pointer}
.subscribe-form{clear:both;display:block;overflow:hidden}
form.subscribe-form{clear:both;display:block;margin:0;width:auto;overflow:hidden}
.subscribe-css-email-field {
    min-width: 560px;
    max-width: 100%;
    margin: 0;
    padding: 23px;
    border: none;
    font-size: 17px;
    color: #000;
    background: #fff;
    outline: 0;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    line-height: 1;
}
.subscribe-css-email-button{padding:18px 30px;border:0;color:#fff;right:8px;top:9px;position:absolute;line-height:1;font-weight:900;background-color:#f92792;outline:0;-webkit-border-radius:27px;-moz-border-radius:27px;border-radius:27px;}
div#landing_form{padding:50px 0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;color:#1d1d1d;font-size:15px;font-weight:700;position:relative;margin:0 auto;overflow:hidden}
div#landing_form .wrap-me{margin:0;display:block;max-width:500px;width:100%;float:left;box-sizing:border-box;background:rgba(0,0,0,.24);padding:40px 40px 5px}
.contact-title{text-align:center;margin:25px 0}
.contact-title h4{font-size:35px;line-height:45px;color:#303030}
.contact-title span{color:#606060}
.contact_list_wrapper{text-align:center}
.contact-list-info{list-style:none;padding:0;margin:0;text-align:center}
.contact_list_wrapper .contact-list-info li{padding:0 15px;display:inline-block;line-height:25px;color:#606060}
.contact_list_wrapper .contact-list-info li i{display:inline;margin-right:5px;font-size:15px;vertical-align:-2px;color:#303030}
.contact_list_wrapper .contact-list-info li p{display:inline}
#ContactForm1_contact-form-email,#ContactForm1_contact-form-email:active,#ContactForm1_contact-form-email:hover,input#ContactForm1_contact-form-name{padding:5px;margin-top:4px!important;box-shadow:none!important;width:100%;max-width:100%;background:none!important;color:#fff;border-color:rgba(238, 238, 238, 0.3411764705882353);border-width:0 0 1px;line-height:1em;min-height:31px;margin-bottom:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;}
.contact-form-email-message,.contact-form-email-message:active,.contact-form-email-message:hover{padding:5px;margin-top:4px!important;box-shadow:none!important;width:100%;max-width:100%;line-height:1em;min-height:80px;background:none!important;color:#fff;border-color:rgba(238, 238, 238, 0.3411764705882353);border-width:0 0 1px;margin-bottom:10px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;}
#ContactForm1_contact-form-email-message:focus,#ContactForm1_contact-form-email:focus,#ContactForm1_contact-form-name:focus{outline:0;background:none!important;color:#fff;border-color:#ffbd2f!important;border-width:0 0 1px;box-shadow:none!important;transition:all .3s ease-in-out!important}
.contact-form-button-submit{border:none;display:table;font-size:12px;margin:0!important;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;max-width:100%;width:100%;min-width:100%;line-height:.2em;letter-spacing:.5px;font-weight:700;position:relative;outline:0!important;color:#fff;box-shadow:0 10px 15px 0 rgba(255,101,165,.3);background:#ff65a5;background:-moz-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:-webkit-linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);background:linear-gradient(45deg,rgba(255,101,165,1) 0,rgba(255,101,165,1) 13%,rgba(255,107,154,1) 35%,rgba(255,134,106,1) 100%);padding:18px 47px;transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out}
.contact-form-success-message,.contact-form-success-message-with-border{color:#fff!important;margin-top:55px!important}
.contact-form-button-submit.disabled,.contact-form-button-submit.disabled:active,.contact-form-button-submit.disabled:hover{opacity:.9}
.contact-form-error-message-with-border{background:#000;border:none;bottom:0;box-shadow:none;color:#fdfdfd;font-size:15px;font-weight:400;line-height:35px;margin-left:0;opacity:1;position:static;text-align:center;height:35px;margin-top:60px}
.contact-form-cross{height:14px;margin:5px;vertical-align:-8.5%;float:right;width:14px;border-radius:50px;border:0!important;cursor:pointer}
.contact-form-widget{max-width:100%}
.contact-form-success-message-with-border{font-weight:400;background-color:#52ad48;border:none;color:#fff;line-height:35px;margin-left:0;font-size:13px;opacity:1;position:static;text-align:center;height:35px;margin-top:60px}
div#landing_form span.email-bg,div#landing_form span.message-bg,div#landing_form span.name-bg{line-height:21px;padding:3px 0;height:30px;margin:0 0 4px;letter-spacing:0;font-weight:400;display:inline-block;width:100%;box-sizing:border-box}
div#landing_form span.email-bg, div#landing_form span.name-bg,div#landing_form span.message-bg {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}
div#landing_form span.send-bg{height:32px;display:inline-block;float:left;transition:all .4s ease-in-out!important}
div#landing_form .clear-button,div#landing_form span.clear-bg{display:none}
input.contact-form-button.contact-form-button-submit.clear-button:hover{background-color:#e83434!important}
.map-me{margin:0;display:block;max-width:500px;width:100%;float:left;padding:40px;box-sizing:border-box}
.map-me .con-title{font-weight:700;letter-spacing:-1px;line-height:48px;color:#fff;margin:0;text-transform:capitalize}
.map-me .con-text{font-weight:500;line-height:24px;color:#555;margin:0 0 10px}
.map-me .con-list{list-style-type:none;padding:0}
.map-me .con-list li{list-style-type:none;color:#fff;line-height:45px;margin-bottom:15px;font-weight:400}
.map-me .con-list li i{font-size:2em;margin-right:20px;padding:0;vertical-align:middle;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:rgba(255,255,255,.93)}
#search-wrapper{padding:20px 0 25px;margin:0 auto;width:100%;display:block;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);border-radius:5px;overflow:hidden}
#search-wrapper h4{color:#fff;font-weight:700;font-size:14px;text-transform:uppercase;line-height:1.3em;text-align:center;padding:0 0 10px;margin:auto}
#search-box{width:80%;height:50px;padding:0;margin:0 auto;text-align:center;position:relative}
#search-box form{border:1px solid #fff;line-height:40px;background:#fff;border-radius:5px}
.search-button,.search-form{line-height:25px;margin:0;border:none}
.search-form{color:#272727;width:100%;padding:0 30px 0 10px;height:25px;font-size:12px;font-weight:400;-moz-box-sizing:border-box;box-sizing:border-box}
.search-button{background:none;width:40px;height:30px;padding:10px 0;text-align:center;top:0;right:0;font-size:19px;color:#f22a9b;position:absolute;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;text-shadow:none;box-shadow:none;cursor:pointer}
.search-button:focus,.search-button:hover,.search-form:focus,.search-form:hover{border:none;outline:0;color:#1f253d}
.container{position:relative;max-width:1100px;margin:0 auto}
.outer-wrapper{position:relative;width:100%;padding:0}
.main-wrapper{width:780px;margin:0;float:left;overflow:hidden}
.clr{clear:both;float:none}
h2{line-height:1.4em;color:#333;margin:.5em 0 .25em}
h3.date-header{color:#666;line-height:1.2em;margin:.1em 0}
.post{margin:0;padding:0}
.post h1{font-size:200%;line-height:1.2em;color:#333;margin:0;padding:4px 0;font-weight:400;text-transform:uppercase}
.post h1 a,.post h1 a:visited,.post h1 strong{display:block;text-decoration:none;color:#333}
.post-body{margin:0;line-height:1.8em}
.post-body blockquote{line-height:1.5em;margin:15px 0;font-size:15px;background:#f1f1f1;padding:10px 20px;border-left:5px solid #f42997}
.post ol,.post ul{margin:5px 0 5px 10px;padding:0 0 0 20px}
#header2 img,.post img,.sidebar img{max-width:100%;width:auto;border:0}
.post ul{list-style-type:inherit}
.post ol{list-style-type:decimal}
.line-left,.line-right{width:50%}
.line-left{float:left}
.line-right{float:right}
.timeline-item{padding:2.8125rem 3rem 3rem;position:relative;color:rgba(0,0,0,.7);border-left:.125rem solid #f92892}
.timeline-item::before{content:attr(date-time);display:block;position:absolute;top:.75rem;font-size:.8125rem}
.timeline-item::after{content:&#39;&#39;;display:block;width:1rem;height:1rem;position:absolute;top:1em;left:-.5rem;border-radius:1rem;margin-left:-.0625rem}
.timeline__section .timeline-item:first-child:before{top:0}
.timeline__section .timeline-item:first-child:before,.timeline__section .timeline-item:last-child:before{content:&quot;&quot;;width:.5rem;height:.5rem;background:#8315d6;display:block;position:absolute;left:-.3125rem;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;}
.timeline-centered{display:flex;flex-wrap:wrap}
.timeline-centered .timeline-item{max-width:50%;flex:0 0 50%}
.timeline-centered .timeline-item:not(:nth-child(even)){border-left:0;border-right:.125rem solid #f92892;text-align:right}
.timeline-centered .timeline-item:not(:nth-child(even))::before{right:3rem}
.timeline-centered .timeline-item:not(:nth-child(even))::after{left:auto;right:-.5rem;margin-left:auto;margin-right:-.0625rem}
.timeline-centered .timeline-item:nth-child(even){margin-left:calc(50% - .125rem)}
.timeline-horizontal{display:flex}
.timeline-horizontal .timeline-item{border-left:0;border-top:.125rem solid #f92892;padding-top:3.3125rem}
.timeline-horizontal .timeline-item::before{top:1.25rem}
.timeline-horizontal .timeline-item::after{left:3rem;top:-.5rem;margin-top:-.0625rem}
.timeline-vertical-x .timeline-item{border-left:0;border-left:.125rem solid #f92892;border-bottom:.125rem solid #f92892;padding-top:2.8125rem}
.timeline-vertical-x .timeline-item h5{
    font-size: 22px;
    margin-bottom: 10px;
}
.timeline-vertical-x .timeline-item p {
    font-weight: 500;
    font-size: 15px;
}
.timeline-vertical-x .timeline-item::before{top:2.3125rem}
.timeline-vertical-x .timeline-item::after{top:2.8125rem}
.timeline-vertical-x .timeline-item:not(:nth-child(even)){margin-right:2rem;border-bottom-left-radius:2rem;padding-right:0}
.timeline-vertical-x .timeline-item:not(:nth-child(even)):not(:first-child){border-top-left-radius:2rem;border-top:.125rem solid #f92892;margin-top:-.125rem}
.timeline-vertical-x .timeline-item:nth-child(even){border-left:0;border-top-right-radius:30px;border-bottom-right-radius:30px;border-top:.125rem solid #f92892;border-right:.125rem solid #f92892;margin-top:-.125rem;padding-left:0;margin-left:2rem;text-align:right}
.timeline-vertical-x .timeline-item:nth-child(even):before{right:3rem}
.timeline-vertical-x .timeline-item:nth-child(even):after{left:auto;margin-left:0;right:-.5rem;margin-right:-.0625rem}
.timeline-vertical-x .timeline-item:last-child:not(:nth-child(even)){border-bottom:0;border-bottom-left-radius:0}
 [data-step].timeline-item::after{content:attr(data-step);display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;left:-1.5rem;border-radius:3rem;font-weight:500;background:#ce33c1;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);color:#fff}
.future-timeline-right:after,.future-timeline:after,.timeline-right:before,.timeline:before{content:&quot;&quot;}
.timeline p,.timeline-right p{line-height:1.8em;font-weight:300}
 [data-step].timeline-item:nth-child(even)::after{left:auto;right:-1.5rem}
.timeline-horizontal [data-step].timeline-item::after{top:-1.5rem;left:1.875rem}
.animation-circle-inverse i{top:50%;left:0;margin:0 auto;background:#eee;right:0;box-shadow:0 15px 30px 0 rgba(0,0,0,.11);position:absolute;height:100px;width:100px;border-radius:100%;opacity:.3;transform:scale(1.3);-webkit-animation:ripple1 3s linear infinite;animation:ripple1 3s linear infinite}
.animation-circle-inverse i:nth-child(2){-webkit-animation:ripple2 3s linear infinite;animation:ripple2 3s linear infinite}
.animation-circle-inverse i:nth-child(3){-webkit-animation:ripple3 3s linear infinite;animation:ripple3 3s linear infinite}
@keyframes ripple1{0{transform:scale(5.5);opacity:.3}
to{transform:scale(8.5);opacity:0}}
@-webkit-keyframes ripple1{0{-ms-transform:scale(5.5);-webkit-transform:scale(5.5);transform:scale(5.5);opacity:.3}
to{-ms-transform:scale(8.5);-webkit-transform:scale(8.5);transform:scale(8.5);opacity:0}}
@keyframes ripple2{0{-ms-transform:scale(3.5);-webkit-transform:scale(3.5);transform:scale(3.5)}
to{-ms-transform:scale(5.5);-webkit-transform:scale(5.5);transform:scale(5.5)}}
@-webkit-keyframes ripple2{0{-ms-transform:scale(3.5);-webkit-transform:scale(3.5);transform:scale(3.5)}
to{-ms-transform:scale(5.5);-webkit-transform:scale(5.5);transform:scale(5.5)}}
@keyframes ripple3{0{-ms-transform:scale(1.5);-webkit-transform:scale(1.5);transform:scale(1.5)}
to{-ms-transform:scale(3.5);-webkit-transform:scale(3.5);transform:scale(3.5)}}
@-webkit-keyframes ripple3{0{-ms-transform:scale(1.5);-webkit-transform:scale(1.5);transform:scale(1.5)}
to{-ms-transform:scale(3.5);-webkit-transform:scale(3.5);transform:scale(3.5)}}
.timelist-left,.timelist-right{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}
.timelist-left{float:left;position:relative}
.timelist-right{float:right;position:relative}
.future-mobile{margin:0 auto 0 6.5%;float:left;text-align:center;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;display:block;max-width:33.333333%}
.future-mobile img{width:80%;margin:20px auto}
.future-box{padding:60px 0}
.img-fluid{max-width:100%;height:auto}
.future-timeline-right:after{background-color:rgba(238, 238, 238, 0.27058823529411763);position:absolute;height:100%;width:1px;left:-15px;background-size:cover;border-radius:12px;top:0}
.future-timeline{text-align:right}
.text-left{text-align:left!important}
.timeline h4{color:#fff!important;margin-top:0}
.timeline p{color:#fff;margin-bottom:55px;margin-left:12px;margin-right:15px}
.sub-title{font-size:20px;margin-bottom:0;font-weight: 700;}
ul{list-style-type:none;padding:0;margin:0}
.timeline:before{background:#9647db;position:relative;height:12px;width:12px;right:-21px;background-size:cover;top:15px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:2;float:right;padding:0;border:3px solid rgba(238, 238, 238, 0.7294117647058823);}
.future-timeline:after{background-color:rgba(238, 238, 238, 0.27058823529411763);position:absolute;height:100%;width:1px;right:-15px;background-size:cover;border-radius:12px;top:0}
.timeline-right:before{background:#9647db;position:relative;height:12px;width:12px;left:-21px;top:15px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:2;float:left;padding:0;border:3px solid rgba(238, 238, 238, 0.7294117647058823);}
.timeline-right h4{color:#fff!important;margin-top:0}
.timeline-right p{color:#fff;margin-bottom:55px;margin-left:12px}
.ac-left{float:left;padding:10px;border:1px solid #e6f0fa;-webkit-box-shadow:0 0 30px #ddd;box-shadow:0 0 30px #ddd;border-radius:6px}
.ac-right{text-align:center;float:right}
.ac-left,.ac-right{width:48%}
.ac-right img{max-width:260px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:5px solid #f1f1f1;-webkit-box-shadow:0 10px 30px #ccc;box-shadow:0 10px 30px #ccc}
.accordion{font-size:1rem;margin:0 auto}
.accordion-header{padding:10px 20px;background:#6410f7;color:#fff;cursor:pointer;font-size:16px;font-weight:700;transition:all .3s}
.accordion-body{background:#fcfcfc;color:#3f3c3c;display:none}
.accordion-body__contents {
    padding: 1.5em;
    font-size: 15px;
    color: #000;
    font-weight: 500;
}
.accordion__item.active:last-child .accordion-header{border-radius:none}
.accordion:first-child&gt;.accordion__item&gt;.accordion-header{border-bottom:1px solid transparent}
.accordion__item&gt;.accordion-header:after{content:&quot;\f107&quot;;font-family:FontAwesome;font-size:1.2em;float:right;position:relative;top:-2px;transition:.3s all;transform:rotate(0)}
.accordion__item.active&gt;.accordion-header:after{transform:rotate(-180deg)}
.accordion__item.active .accordion-header{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.accordion__item .accordion__item .accordion-header{background:#f1f1f1;color:#000}
@media screen and (max-width:1000px){.accordion{width:100%}}
.col_fourth{width:23.5%;position:relative;display:inline;display:inline-block;float:left;margin-right:1.7585%;margin-bottom:20px}
.count-text, .count-title {
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 0;
    text-align: center;
}
.end{margin-right:0!important}
.counter{background-color:#fff;padding:20px 0;text-align:center;border-radius:5px;border:1px solid #ffd8fe;-webkit-box-shadow:0 0 10px #e6f0f1;box-shadow:0 0 10px #e6f0f1}
.count-title{font-size:40px}
.count-text {
    font-size: 14px;
    color: #000;
}
.fa-2x{margin:0 auto;float:none;display:table;color:#fb2790}
.phone,.slider .slick-dots{position:absolute;display:block}
.phone{background-image:url(https://1.bp.blogspot.com/-ha5dccte93w/XL2SiyWdn5I/AAAAAAAAALU/w6UKg2xyUf0BEGg7-HCV_IOatEiSVZzKACLcBGAs/s1600/bgm.png);background-repeat:no-repeat;background-size:100% 100%;height:616px;width:400px;left:calc(50% + 8.5px);top:-12%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:1}
 [dir=rtl] .slick-slide{float:right}
.slick-slide img{height:100%;width:100%}
.slick-slidedd:after{content:&#39;&#39;;position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);transition:transform .4s}
.slider .slick-dots{width:100%;padding:0;z-index:1;bottom:-22%;margin:40px 0 0;list-style:none;text-align:center}
.slider .slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 2px;padding:0;cursor:pointer}
.slider .slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:#999;border:none;outline:0;background:none}
.slider .slick-dots li button:focus,.slider .slick-dots li button:hover{color:#f9d000;outline:0}
.slider .slick-dots li button:focus:before,.slider .slick-dots li button:hover:before{font-size:18px;color:#f9d000;opacity:1}
.slider .slick-dots li button:before{font-family:FontAwesome;font-size:10px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:&#39;\f111&#39;;text-align:center;opacity:1;color:#e0dfe0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.slider .slick-dots li.slick-active button:before{opacity:.75;font-size:18px;color:#f9d000}
.slider .NextArrow,.slider .PrevArrow{position:absolute;top:10%;min-width:0;bottom:11%;margin:0;font-size:2.5em;cursor:pointer;text-align:center}
.slider .NextArrow{outline:0;right:0;background:rgba(17,17,17,.82);border:none;z-index:5;width:47px;height:auto;-webkit-transform:none;transform:none;border-radius:initial;visibility:visible}
.slider .NextArrow:before,.slider .PrevArrow:before{content:&quot;&quot;;height:40px;display:block}
.slider .NextArrow:hover,.slider .PrevArrow:hover{opacity:.6}
.slider .NextArrow:before{background:url(https://4.bp.blogspot.com/-5n7BID6V3kg/XI8wpCyShlI/AAAAAAAAIFc/eqqHp7qGQF8qZmDcnTEnrVps5cfZmcrBACPcBGAYYCw/s1600/arrow-right.png) 100% no-repeat;width:34px}
.slider .PrevArrow:before{background:url(https://3.bp.blogspot.com/-GFaiej_1hfk/XI8wpH2lHVI/AAAAAAAAIFg/gO1yk2CnIwA3deeWLTelOzYPAoPgwqmtwCPcBGAYYCw/s1600/arrow-left.png)-1% no-repeat;width:40px}
.slider .PrevArrow{outline:0;left:0;background:rgba(17,17,17,.82);border:none;z-index:5;width:47px;height:auto;-webkit-transform:none;transform:none;border-radius:initial;visibility:visible}
.item.slick-slide,.item.slick-slide.slick-center:after,.slick-list,.slick-slider,.slick-track,.slider,.pricing_table .plan,.pricing_table header,.testimonial{position:relative}
.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}
.slider{padding:0;margin:5rem auto;width:100%}
.item.slick-slide{width:265px;margin:0 15px;height:443px!important;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}
.item.slick-slide img{width:100%;height:100%}
.item.slick-slide.slick-center{-webkit-transform:scale(1);transform:scale(1);z-index:10;opacity:.9;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);background:rgba(0,0,0,.8)}
.slick-center:after{opacity:0}
.slick-slider{display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}
.slick-list{display:block;overflow:hidden;margin:0;padding:0}
.slick-list:focus{outline:0}
.slick-list.dragging{cursor:pointer;cursor:hand}
.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
.slick-track{top:0;left:0;display:block;margin-left:auto;margin-right:auto}
.slick-track:after,.slick-track:before{display:table;content:&#39;&#39;}
.slick-track:after{clear:both}
.slick-slide{display:none;float:left;height:100%;min-height:1px}
 [dir=rtl] .slick-slide{float:right}
.slick-slide img{display:block}
.slick-slide.slick-loading img{display:none}
.slick-slide.dragging img{pointer-events:none}
.slick-initialized .slick-slide{display:block}
.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
.slick-arrow.slick-hidden{display:none}
.pricing_table{color:#000;text-align:center;font-size:16px;width:100%;margin:0}
.pricing_table .plan{margin:8px;width:23.546%;float:left;background-color:#fff;box-shadow:0 1px 15px 1px rgba(0,0,0,.04),0 1px 6px rgba(0,0,0,.04)}
.pricing_table .plan-cost,.pricing_table .plan-select a{background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%)}
.pricing_table .plan.hover .plan-cost,.pricing_table .plan:hover .plan-cost{-webkit-transform:scale(1.1);transform:scale(1.1)}
.pricing_table *{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease-out;transition:all .25s ease-out}
.pricing_table header{color:#616161;font-weight:700;padding:20px}
.pricing_table .plan-title{font-size:1.4em;font-weight:500;padding:10px 0;margin:0;text-transform:uppercase}
.pricing_table .plan-cost{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;text-align:center;line-height:90px;width:90px;height:90px;margin:15px auto 0}
.pricing_table .plan-price{font-weight:800;font-size:1.3em;color:#fff}
.pricing_table .plan-type{opacity:.8;color:#fff;font-size:.7em}
.pricing_table .plan-features{padding:0;margin:0;text-align:center;list-style:none;font-size:.8em}
.pricing_table .plan-features li {
    padding: 10px 5%;
    font-size: 15px;
    font-weight: 500;
}
.pricing_table .plan-features i{margin-right:8px;opacity:.4}
.pricing_table .plan-select{padding:20px}
.pricing_table .plan-select a{color:#fff;text-decoration:none;padding:10px 30px;font-size:12px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;font-weight:500;text-transform:uppercase;display:inline-block}
.pricing_table .featured{margin-top:-10px;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);color:#fff;box-shadow:0 0 20px rgba(0,0,0,.4);z-index:1}
.pricing_table .featured .plan-cost{background:#fff}
.pricing_table .featured .plan-select{padding:20px;margin:20px 0}
.pricing_table .featured .plan-price,.pricing_table .featured .plan-type{color:#555}
.pricing_table .featured .plan-select a{background:#fff;color:#555}
.pricing_table .featured header{color:#fff}
@media screen and (max-width:767px){.pricing_table .plan{width:50%}
.pricing_table .featured .plan-select a,.pricing_table .plan-select a{padding:20px}
.pricing_table .featured{margin-top:0}}
@media screen and (max-width:440px){.pricing_table .plan{width:100%}}
.testimonial{outline:0;background-color:#ac43e9;text-align:center;padding:30px 30px 50px;margin:0 15px 160px}
.testimonial::after,.testimonial::before{content:&quot;&quot;;border-top:40px solid #a13cdc;border-right:125px solid transparent;position:absolute;bottom:-40px;left:0}
.testimonial::after{border-right:none;border-left:125px solid transparent;left:auto;right:0}
.testimonial .icon{display:inline-block;font-size:28px;color:#fff;margin-bottom:20px}
.testimonial .description {
    font-size: 15px;
    color: #fff;
    text-align: justify;
    margin-bottom: 30px;
    font-weight: 500;
}
.testimonial .testimonial-content{width:100%;left:0;position:absolute}
.testimonial .pic{display:inline-block;border:4px solid #fff;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;box-shadow:0 0 4px 4px rgba(84,84,84,.12156862745098039);overflow:hidden;z-index:1;position:relative}
.testimonial .pic img{width:100%;height:auto}
.testimonial .name{font-size:20px;font-weight:700;color:#333;text-transform:capitalize;margin:10px 0 5px}
.footer h2,.sidebar h2{text-transform:uppercase}
.testimonial .title {
    display: block;
    font-weight: 500;
    font-size: 15px;
    color: #212121;
}
#testimonial-slider .slick-dots{position:absolute;display:block;width:100%;padding:0;z-index:1;bottom:-10%;margin:40px 0 0;list-style:none;text-align:center}
#testimonial-slider .slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 2px;padding:0;cursor:pointer}
#testimonial-slider .slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:#999;border:none;outline:0;background:none}
#testimonial-slider .slick-dots li button:focus,#testimonial-slider .slick-dots li button:hover{color:#fb1e8b;outline:0}
#testimonial-slider .slick-dots li button:focus:before,#testimonial-slider .slick-dots li button:hover:before{font-size:18px;color:#fb1e8b;opacity:1}
#testimonial-slider .slick-dots li button:before{font-family:FontAwesome;font-size:10px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:&#39;\f111&#39;;text-align:center;opacity:1;color:#e4e4e4;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.slick-dots li.slick-active button:before{opacity:.75;font-size:18px;color:#f9d000}
.sidebar-wrapper{width:280px;float:right;top:10%;position:sticky;overflow:hidden}
.sidebar h2{font-size:20px;margin:0;padding:5px 0}
.sidebar{color:#999;line-height:1em;margin:5px 0}
.sidebar li{line-height:1.3em;margin:0;padding:5px 0 4px}
.sidebar .widget{margin:0 0 30px;padding:0}
.sidebar .widget-content{margin:0 auto;padding:0}
.sidebar a:link,.sidebar a:visited{color:#00a0a;text-decoration:none;font-weight:500;font-size:14px}
.sidebar li a:hover{color:#fb1e8b}
.sidebar ul{list-style:none;margin:0;padding:5px 0}
.PopularPosts li,.PopularPosts li a,.PopularPosts li a img,.PopularPosts li img,.PopularPosts ul{margin:0;padding:0;list-style:none;border:none;background:none;outline:0}
.PopularPosts ul{margin:10px 0 0;list-style:none;color:#333}
.PopularPosts ul li img{display:block;width:100%;height:auto}
.PopularPosts .item-snippet,.PopularPosts ul li:nth-child(n+6){display:none}
.PopularPosts ul li{margin:0 2px;position:relative;line-height:1.4em!important}
.PopularPosts ul li:first-child{border-top:none}
.PopularPosts ul li:last-child{border-bottom:none}
.PopularPosts ul li a:hover{color:#ef2929!important}
.PopularPosts ul li .item-title a,.PopularPosts ul li a{color:#333;transition:all .3s}
.PopularPosts ul li .item-title a:hover,.PopularPosts ul li a:hover{color:#ef2929}
.PopularPosts .item-thumbnail{margin:0 10px 0 0;width:72px;height:72px;float:left}
.PopularPosts .item-title{padding:0 5px}
#share_btnper{margin:15px auto;padding:0}
.share_btn{position:relative;margin:0;padding:0;text-align:center;display:block;overflow:hidden}
.share_btn ul{position:relative;margin:0;padding:0;font-size:12px}
.share_btn ul li{margin:8px;display:inline-block;overflow:hidden;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,.04),0 12px 28px rgb(248,249,250)}
.share_btn li a{color:#fff;padding:0;width:55px;display:block;text-align:center;height:55px;line-height:55px;overflow:hidden}
.share_btn li a svg{height:25px;text-align:center;width:auto}
#Label1{padding-bottom:10px}
#Label1 ul{margin:10px 0 20px 0}
#Label1 li{float:left;display:inline;margin:0 5px 5px 0;padding:0 5px;height:24px;line-height:24px;color:#aaa;background-color:#e2e2e2;-webkit-transition:background-color .5s linear;-moz-transition:background-color .5s linear;-o-transition:background-color .5s linear;transition:background-color .5s linear}
#Label1 li a{padding:0 8px;color:#333;-webkit-transition:color .5s linear;-moz-transition:color .5s linear;-o-transition:color .5s linear;transition:color .5s linear;text-shadow:0 1px 0 #fff}
#Label1 a:hover{color:#f95759}
#footer{width:100%;margin:30px 0 0;position:relative;overflow:hidden;display:block;padding:110px 0 55px}
#footer:before{border-radius:750px;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);content:&quot;&quot;;height:1250px;left:-360px;position:absolute;top:40px;-webkit-transform:rotate(-184deg);transform:rotate(-184deg);width:2250px}
.footer-wrapper{color:#fff;height:100%;line-height:2em;overflow:hidden;padding:0;font-size:13.3px}
.footer{float:left;width:31%;margin:10px}
.footer .widget{margin-bottom:30px}
.footer h2{border-bottom:3px solid #333;padding-bottom:8px;margin-top:15px;margin-bottom:8px;line-height:1.3em;color:#fff}
.footer .widget-content{line-height:21px}
.footer ul{list-style:none;color:#777;margin:0;padding:0}
.footer li{color:#777;line-height:1.2em;margin:0;padding:12px 0 12px 18px;border-bottom:1px solid #2c2c2c}
.footer a:link,.footer li a:visited{color:#999;text-decoration:none;font-weight:600;position:relative;text-indent:-18px}
.footer li a:hover{color:#ccc}
#credit{background:#fff;font-size:13px;color:#f61e90;width:100%;overflow:hidden;clear:both;padding:20px 0;font-weight:500;line-height:18px;text-align:center;text-transform:capitalize;position:relative}
#credit a,#credit a:hover{color:#555;text-decoration:none}
.comments{clear:both;padding-top:40px;border-top:1px solid #eee;margin-bottom:0}
.comment-thread .user a{font-weight:700;color:#000;padding:0;font-size:13px;text-decoration:none}
.comment-thread .user a:hover{color:inherit}
.comment-thread .datetime{font-weight:400}
.comment-thread .user{text-decoration:none;padding:0;font-size:13px;font-weight:700;position:relative}
.comment-thread .datetime{color:#a9a9a9;font-size:12px!important;margin-top:-3px}
.comment-thread .datetime a{text-decoration:none;color:#a9a9a9;font-size:12px!important;font-weight:400}
.comment-thread .datetime a:hover{color:#000}
.comment-content{line-height:1.5em;margin:4px 0 5px;color:#444;font-weight:400;font-size:13px;padding:0}
.item-control a,a.comment-reply{color:#aaa!important;font-size:12px!important;font-weight:400!important}
.item-control a:hover,a:hover.comment-reply{color:#000!important}
.item-control{margin-left:0}
.thread-chrome a.comment-reply{color:#fff!important;display:block;margin-top:20px!important;border:none;text-align:center;background:linear-gradient(to right,rgba(251,30,139,.96) 0,#ab44ec 50%,#6410f7 100%);margin:0 auto;width:23%;font-weight:500!important;border-radius:5px}
.thread-chrome a:hover.comment-reply{border-color:#bbb}
.comment-block{margin-left:65px;background:#f4f4f4;padding:10px;text-align:left;border:1px solid #f5f5f5;border-radius:5px;position:relative;display:block}
#comments .comments-content .icon.blog-author{width:16px;height:16px;margin-left:5px;vertical-align:2px;display:inline-block;background:url(data:image/svg+xml,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z' fill='%23118ff9'/></svg>) center center no-repeat}
a.allbtn{background-color:#9534ef;font-size:13px;font-weight:600;text-transform:uppercase;color:#fff;text-align:center;box-shadow:0 4px 5px 0 rgba(153,55,239,.32);padding:10px;width:160px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;display:block;transition:all .2s ease-in-out;margin:18px auto}

#toTop{position:absolute;right:0;top:0;background:#a33eee;padding:17px 20px;cursor:pointer}
#toTop i{color:#fff;font-size:22px;line-height:32px}

@media screen and (max-width: 1100px){
.header-wrapper {width:100%;}
#header-inner {margin:5px 10px;}
.container {max-width:98%;}
.box-list li {width:24.8%;}
.col_fourth {width:23.4%;}
.pricing_table .plan {width:23.4%;}
.main-wrapper {width:71.5%;}
}
@media screen and (max-width: 1024px){
.box-list li {width:24.2%;}
.line-left, .line-right {width:42%;}
.timeline-vertical-x .timeline-step{margin-right:30px}
.future-mobile {margin:0 auto 0 4%;}
.pricing_table .plan {width:23.3%;}
div#landing_form .wrap-me {max-width:460px;}
.team-box {width:22.9%;}
.main-wrapper {width:69%;}
}
@media screen and (max-width: 960px){
.box-list li {width:23.5%;}
.colum-left h1 {font-size: 60px;}
.future-mobile {margin:0 auto 0 3%;}
.pricing_table .plan {width:23.2%;}
.team-box {width:22.8%;}
.team-img {height:205px;}
.socials {display:none}
.map-me {max-width:40%;}
.main-wrapper {width:68%;}
}
@media screen and (max-width: 800px){
.container{position:relative;margin:0 auto}
.headerpic-wrapper{width:100%;margin:0 auto}
.header-wrapper{margin-right:0;min-height:0;width:100%}
#header img {top:-5px;}
#header{text-align:center;width:100%;max-width:none}
#header-inner{margin:10px}
#cssmenu{float:none;margin:0;width:100%;}
#cssmenu ul{background:#f8f8f8;width:100%;display:none;height:auto;margin-top:43px;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);box-shadow:0 2px 8px 0 rgba(0,0,0,0.15)}
#cssmenu&gt;ul{max-height:calc(100vh - 48px);overflow-y:auto}
#cssmenu ul ul{-webkit-box-shadow:none;box-shadow:none;display:none;opacity:1;transform:translateY(0);transition:unset}
#cssmenu li:hover&gt;ul{transition-delay:0,0,0}
#cssmenu ul li{border-top:1px solid rgba(150,150,150,0.15);background:#f8f8f8}
#cssmenu&gt;ul&gt;li:hover,#cssmenu ul li.active:hover,#cssmenu ul li.active,#cssmenu ul li.has-sub.active:hover{background:#efefef}
#cssmenu&gt;ul&gt;li:hover&gt;a,#cssmenu ul li.active a{color:#777}
#cssmenu ul ul li a{padding:0 25px}
#cssmenu ul li a {width:100%;border-bottom:0;color:#777;line-height:1;padding:13px;}
#cssmenu ul ul li a{width:100%;border-bottom:0;color:#333;line-height:50px}
#cssmenu&gt;ul&gt;li{float:none;position:relative}
#cssmenu ul ul ul li a{padding-left:35px}
#cssmenu ul ul,#cssmenu ul ul ul{position:relative;left:0;width:100%;margin:0;text-align:left}
#cssmenu&gt;ul&gt;li.has-sub&gt;a:after,#cssmenu ul ul&gt;li.has-sub&gt;a:after{display:none}
#cssmenu #head-mobile{display:block;padding:8px;color:#f8f6f6;font-size:0;font-weight:500}
#cssmenu ul ul:before{left:-76%}
#cssmenu .button{width:25px;height:20px;position:absolute;left:15px;top:14px;cursor:pointer;z-index:2;outline:none}
.mline1,.mline2,.mline3{position:absolute;left:0;display:block;height:3px;width:22px;background:#fff;content:&quot;&quot;;border-radius:5px;transition:all .2s}
.mline1{top:0}
.mline2{top:7px}
.mline3{top:14px}
.button.menu-opened .mline1{top:8px;border:0;height:3px;width:22px;background:#fff;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}
.button.menu-opened .mline2{top:8px;background:#fff;width:22px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}
.button.menu-opened .mline3{display:none;height:0}
#cssmenu .submenu-button{position:absolute;z-index:99;right:0;top:0;cursor:pointer}
#cssmenu .submenu-button:after{content:&quot;+&quot;;font-style:normal;font-weight:normal;text-decoration:inherit;margin:0 20px;font-size:20px;color:#777;line-height:50px}
#cssmenu .submenu-opened:after{content:&quot;-&quot;}
#cssmenu ul ul .submenu-button:after{line-height:36px}
#cssmenu ul ul ul li.active a{border-left:none}
#cssmenu&gt;ul&gt;li.has-sub&gt;ul&gt;li.active&gt;a,#cssmenu&gt;ul ul&gt;li.has-sub&gt;ul&gt;li.active&gt;a{border-top:none}
a.btn-wa {text-align:center;position:absolute;right:15px;top:0px;padding:0!important;}
a.btn-wa span{display:none}
a.btn-wa i {display: block;height:30px;padding:5px;line-height:30px;width:30px;font-size:24px;}
.main-wrapper{margin-left:0;width:100%;}
.post {margin:0;padding:15px;}
.sidebar-wrapper{width:100%;margin:0 auto;}
.box1 .left, .box1 .right {width:100%;margin-bottom:30px;}
.box1 .right, .box1 .left {float: none;text-align: center;}
.box-list li {width:23.9%;padding:20px;}
.line-left, .line-right {width:87%;}
.line-right {float:none;clear:both;margin:0 auto;}
.line-left {float: none;text-align: center;}
.ac-left, .ac-right {width: 90%;float: none;margin: 0 auto 550px;}
.pricing_table .plan {width: 47.9%;}
.pricing_table .featured {margin-top:10px}
.pricing_table .featured .plan-select {padding:19px;margin:0;}
.team-box {width: 47.3%;}
.team-box,.team-img {height: auto;}
div#landing_form .wrap-me {max-width:initial;margin:0 auto;display:block;width:100%;float:none;}
.map-me {max-width:100%;}
.colum-left h1 {font-size:55px;}
.colum-left p {margin-top:2em;font-family:inherit;font-size:15px;font-weight:600;line-height:1.4;margin-bottom:2em;}
.timelist-left,.timelist-right{float:none;text-align:center;position:relative;max-width:90%;margin:0 auto}.future-timeline,.timelist-left .text-left,.timelist-right .text-left,.text-left{text-align:center!important}.future-mobile{margin:0 auto;float:none;text-align:center;display:block;max-width:51%}.timeline:before,.future-timeline:after,.timeline-right:before,.future-timeline-right:after{display:none}.text-left{text-align:center}.future-box{padding:0}.timeline p,.timeline-right p{color:#fff;margin-bottom:30px;margin-left:0;margin-right:0}
}
@media screen and (max-width: 768px){
.box-list li {padding: 19px;}
.line-left{width:100%!important;}
.line-left,.line-right {width:80%;}
.pricing_table .plan {width: 47.8%;}
.team-box {width:47.2%;}
}
@media screen and (max-width: 760px){
}
@media screen and (max-width: 680px){
.box-list li {width:39.5%;}
.col_fourth {margin:10px;width:46.6%;}
.pricing_table .plan {width:47.5%;}
.team-box {width:46.8%;}
}
@media screen and (max-width: 640px){
.colum-right{display:none}
#particle-canvas {height: initial;}
.hero-center {padding: 6rem 2rem;}
.colum-left {float:none;text-align:center;max-width:100%;}
.colum-left h1 {font-size:45px;}
.box-list li {width:38.7%;}
.section-heading,.box12 .section-heading,.section-heading1,#footer .section-heading{max-width:98%;}
.col_fourth {width:46.3%;}
.pricing_table .plan {width:47.3%;}
.team-box {width:46.7%;}
.map-me {padding:40px 40px 0;}
.box1 .left img,.line-left img,.ac-right img{width:48%;height:auto}
}
@media screen and (max-width: 515px){
.box-list li {width:36%;}
.col_fourth {width:45%;}
.pricing_table .plan {width:97%;}
.team-box {width:45.7%;}
.subscribe-css-email-field {min-width:90%;}
.about-content{
    padding: 0 20px;}
}
@media screen and (max-width: 480px){
.box-list li {width:35%;}
.team-box {width:95%;}
.subscribe-css-email-field {min-width:89%;}
}
@media screen and (max-width: 414px){
.box-list li {width:83%;}
.col_fourth {width:44%;}
.count-title {font-size:30px;}
.subscribe-css-email-field {min-width:80%;}
.subscribe-css-email-button {padding:18px 20px;right:23px;font-size:12px;}
}
@media screen and (max-width: 384px){
.colum-left h1 {font-size:40px;}
.colum-left p {font-size:14px;}
.col_fourth {width:43.5%;}
}
@media screen and (max-width: 360px){
.colum-left h1 {font-size:38px;}
.box-list li {width:80%;}
.col_fourth {width:43.4%;}
.team-box {width:94%;}
.map-me {padding:40px 20px 0;}
.map-me .con-list li {line-height:23px;}
.map-me .con-list li i {float:left;}
.subscribe-css-email-field {min-width:77%;}
}
@media screen and (max-width: 320px){
#header img {height:27px;}
.colum-left a {margin:0;}
.about-content h2 {line-height:1;font-size:20px;margin-bottom:15px}
.section-heading h2,.section-heading1 h2{font-size:25px;}
.box-list li {width:78%;}
.col_fourth {width:93%;}
.pricing_table .plan {width:95%;}
.subscribe-css-email-button {padding:19px 10px;right:18px;font-size:10px;}
#credit {padding:20px 0;text-align:left;}
}
</style>

<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<style>
#particle-canvas{height:100vh}
.header-wrap{padding-top:30px}.main-wrapper{float:none;width:100%;margin:0 auto}.post{margin:11px;-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 31.333333%;max-width:31.333333%;border:0 0;padding:0 0 20px 0;float:left;box-shadow:0 1px 15px 1px rgba(0,0,0,.04),0 1px 6px rgba(0,0,0,.04);height:490px}.post h2 {
    font-size: 125%;
    line-height: 1.2em;
    margin: 15px 0 3px;
    padding: 0;
    font-weight: 500;
    margin-bottom: 15px;
}.post h2 a{color:#000}.post-body,.post-snippet{font-size:14px;line-height:1.5em;color:#000;font-weight:400}.post-body{padding:30px 25px}.img-home{height:250px;margin:0;padding:0;position:relative;width:100%}.img-home img{height:100%;width:100%;margin:0}.postmeta{text-align:center;position:absolute;left:0;bottom:-20px;width:100%;height:auto}.postmeta div{background:linear-gradient(-45deg,#e035a0 50%,#714ac7 100%);box-shadow:0 5px 10px 0 rgba(0,0,0,.1);padding:5px 15px 10px;display:inline-block;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;}.postmeta a{font-size:10px;font-weight:600;text-transform:uppercase;color:#fff;margin:5px}.button-wrap a{background-color:#fb1e8b;font-size:10px;font-weight:600;text-transform:uppercase;color:#fff;text-align:center;padding:5px 20px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;display:inline-block;transition:all .2s ease-in-out;margin:18px 0}.sidebar-wrapper{display:none}

@media screen and (max-width:1100px){
.post {max-width:31.2%;}
}
@media screen and (max-width: 1024px){
.post {max-width:31.1%;}
}
@media screen and (max-width: 960px){
.post {max-width:30.9%;height:433px;}
.img-home {height: auto;}
}
@media screen and (max-width: 800px){
.post {max-width: 30.4%;height: 315px;}
#footer {padding: 110px 0 0;}
}
@media screen and (max-width: 768px){
.post {max-width: 30.3%;}
}
@media screen and (max-width: 680px){
.post {max-width: 100%;height: auto;}
}
@media screen and (max-width: 640px){
.post-body {padding:30px 25px 0;text-align:center;}
}
@media screen and (max-width: 515px){
.post-snippet{display:none}
}
</style>
</b:if>
<script>
//<![CDATA[
function loadCSS(e,t,o){"use strict";var i=window.document.createElement("link"),s=t||window.document.getElementsByTagName("script")[0];i.rel="stylesheet",i.href=e,i.media="only x",s.parentNode.insertBefore(i,s),setTimeout(function(){i.media=o||"all"})}loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");;

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,a,s="Close",l="BeforeClose",c="AfterClose",d="BeforeAppend",u="MarkupParse",p="Open",f="Change",m="mfp",g="."+m,v="mfp-ready",h="mfp-removing",y="mfp-prevent-close",C=function(){},w=!!window.jQuery,b=e(window),I=function(e,n){t.ev.on(m+e+g,n)},x=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},k=function(n,i){t.ev.triggerHandler(m+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},T=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new C,t.init(),e.magnificPopup.instance=t)},P=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};C.prototype={constructor:C,init:function(){var n=navigator.appVersion;t.isLowIE=t.isI=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=P(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(o=0;o<s.length;o++)if(a=s[o],a.parsed&&(a=a.el[0]),a===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=x("bg").on("click"+g,function(){t.close()}),t.wrap=x("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=x("container",t.wrap)),t.contentContainer=x("content"),t.st.preloader&&(t.preloader=x("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var c=l[o];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}k("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(I(u,function(e,t,n,i){n.close_replaceWith=T(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(T())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:b.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),b.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=b.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(f.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var h=t.st.mainClass;return t.isIE7&&(h+=" mfp-ie7"),h&&t._addClassToMFP(h),t.updateItemHTML(),k("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),i.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),k(p),n},close:function(){t.isOpen&&(k(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(h),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){k(s);var n=h+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,k(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||b.height();t.fixedContentPos||t.wrap.css("height",t.wH),k("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(k("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=t.st[i]?t.st[i].markup:!1;k("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,k(f,n),o=n.type,t.container.prepend(t.contentContainer),k("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(T()):t.content=e:t.content="",k(d),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,k("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(b.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};k("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),k(u,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0;if(o=n.split("_"),o.length>1){var r=t.find(g+"-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==i[0]&&r.replaceWith(i):"img"===a?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(g+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:C.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=w?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),w?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var S,E,z,O="inline",M=function(){z&&(E.after(z.addClass(S)).detach(),z=null)};e.magnificPopup.registerModule(O,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(O),I(s+"."+O,function(){M()})},getInline:function(n,i){if(M(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(E||(S=o.hiddenClass,E=x(S),S="mfp-"+S),z=r.after(E).detach().removeClass(S)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var B,L="ajax",H=function(){B&&e(document.body).removeClass(B)},A=function(){H(),t.req&&t.req.abort()};e.magnificPopup.registerModule(L,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(L),B=t.st.ajax.cursor,I(s+"."+L,A),I("BeforeChange."+L,A)},getAjax:function(n){B&&e(document.body).addClass(B),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};k("ParseAjax",a),t.appendContent(e(a.data),L),n.finished=!0,H(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),k("AjaxContentAdded")},error:function(){H(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var F,j=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),I(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),I(s+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),b.off("resize"+g)}),I("Resize"+i,t.resizeImage),t.isLowIE&&I("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,F&&clearInterval(F),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){F&&clearInterval(F),F=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(F),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,k("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:j(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(F&&clearInterval(F),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var N,W=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};I("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void d();r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,k("ZoomAnimationEnded")},16)},a)},16)}}),I(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),I(s+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(w?i.innerHeight():i[0].offsetHeight)-a-r};return W()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",R=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),I("BeforeChange",function(e,t,n){t!==n&&(t===Z?R():n===Z&&R(!0))}),I(s+"."+Z,function(){R()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},D=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";return t.direction=!0,n&&n.enabled?(r+=" mfp-gallery",I(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),I("UpdateStatus"+o,function(e,n){n.text&&(n.text=D(n.text,t.currItem.index,t.items.length))}),I(u+o,function(e,i,o,r){var a=t.items.length;o.counter=a>1?D(n.tCounter,r.index,a):""}),I("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y);o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),I(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void I(s+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null})):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),k("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,k("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(I("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),I("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),_()});

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
//]]>
</script>
<b:if cond='data:blog.searchLabel || data:view.isArchive || data:view.isSearch and !data:view.isLabelSearch'>
<style>
.box1,.box2,.box3,.box4,.box5,.box6,.box7,.box8,.box9,.box9,.box10,.box11,.box12,a.allbtn{display:none}
</style>
</b:if>
<b:if cond='data:view.isError'>
<style type='text/css'>
body {
  width:100%;
  height:100%;
  background:#48A9E6;
  font-family: &#39;Raleway&#39;, sans-serif;
  font-weight:300;
  margin:0;
  padding:0;
}
#title {
    text-align: center;
    font-size: 28px;
    padding: 20px 0 9px;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    color: #fff;
}

.circles:after {
  content:&#39;&#39;;
  display:inline-block;
  width:100%;
  height:100px;
  background:#fff;
  position:absolute;
  top:-50px;
  left:0;
  transform:skewY(-4deg);
  -webkit-transform:skewY(-4deg);
}

.circles { 
	background:#fff;
	text-align: center;
	position: relative;
  margin-top:-60px;
  box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);
}

.circles p {
	font-size: 240px;
	color: #fff;
	padding-top: 60px;
	position: relative;
  z-index: 9;
  line-height: 100%;
}

.circles p small { 
  font-size: 40px; 
  line-height: 100%; 
  vertical-align: top;   
}

.circles .circle.small {
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 80px;
	left: 50%;
	animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);	
	-webkit-animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);
	animation-delay: 1.2s;
	-webkit-animation-delay: 1.2s;
}

.circles .circle.med {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 10%;
	animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);	
	-webkit-animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}

.circles .circle.big {
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 200px;
	right: 0;
	animation: 8s bigmove infinite;	
	-webkit-animation: 8s bigmove infinite;
	animation-delay: 3s;
	-webkit-animation-delay: 1s;
}

@-webkit-keyframes smallmove {
	0% { top: 10px; left: 45%; opacity: 1; }
	25% { top: 300px; left: 40%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 10px; left: 45%; opacity: 1; }
}
@keyframes smallmove {
	0% { top: 10px; left: 45%; opacity: 1; }
	25% { top: 300px; left: 40%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 10px; left: 45%; opacity: 1; }
}

@-webkit-keyframes medmove {
	0% { top: 0px; left: 20%; opacity: 1; }
	25% { top: 300px; left: 80%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 0px; left: 20%; opacity: 1; }
}

@keyframes medmove {
	0% { top: 0px; left: 20%; opacity: 1; }
	25% { top: 300px; left: 80%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 0px; left: 20%; opacity: 1; }
}

@-webkit-keyframes bigmove {
	0% { top: 0px; right: 4%; opacity: 0.5; }
	25% { top: 100px; right: 40%; opacity:0.4; }
	50% { top: 240px; right: 45%; opacity:0.8; }
	75% { top: 100px; right: 35%;  opacity:0.6; }
	100% { top: 0px; right: 4%; opacity: 0.5; }
}
@keyframes bigmove {
	0% { top: 0px; right: 4%; opacity: 0.5; }
	25% { top: 100px; right: 40%; opacity:0.4; }
	50% { top: 240px; right: 45%; opacity:0.8; }
	75% { top: 100px; right: 35%;  opacity:0.6; }
	100% { top: 0px; right: 4%; opacity: 0.5; }
}

</style>
  </b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<style type='text/css'>
/* STATIS */
.comments,.blog-pager,#blog-pager,.sidebar-wrapper{display:none}
.post h2{text-align:center}
.post h2 a {color: #555;}
.outer-wrapper, .main-wrapper {width:100%;margin-top:4%;}
</style>
</b:if>
</head>
<body itemscope='itemscope' itemtype='http://schema.org/WebPage'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<header class='header-wrap'>
            <div class='header-wrapper'>
                 <b:section class='header' id='header' maxwidgets='1' showaddelement='yes'>
                   <b:widget id='Header1' locked='true' title='Aztech Games (Üstbilgi)' type='Header' version='1'>
                     <b:widget-settings>
                       <b:widget-setting name='displayUrl'>https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYmEcz1Maa5evd2ZyXlhBYAGcVonvG0Kf4dEzRtzjJeN6eK3rgdee8H7D-I_Bp4pg49-EDWFmYBWYHLGQGm382jAx2dDC8Tm1SFeAKkN8oNYpVvHQwj4YAX6NBL1oPjZPtyuWuDJkFeBf0ri4BVkBQr-E2g9QNEHp_NG_S1lIgbGopVtTGpXR12pmg/w280-h47/aaa.jpg</b:widget-setting>
                       <b:widget-setting name='displayHeight'>47</b:widget-setting>
                       <b:widget-setting name='sectionWidth'>600</b:widget-setting>
                       <b:widget-setting name='useImage'>true</b:widget-setting>
                       <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                       <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
                       <b:widget-setting name='displayWidth'>280</b:widget-setting>
                     </b:widget-settings>
                     <b:includable id='main'>
  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
          <div id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
          <b:if cond='data:blog.pageType != &quot;item&quot;'>
          <h1 class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </h1>
<b:else/>
          <p class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </p>
</b:if>
            </div>
            <b:include name='description'/>
          </div>
        <b:else/>
          <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                        + &quot;background-position: &quot;                        + data:backgroundPositionStyleStr + &quot;; &quot;                        + data:widthStyleStr                        + &quot;min-height: &quot; + data:height                        + &quot;_height: &quot; + data:height                        + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
          <b:if cond='data:blog.pageType != &quot;item&quot;'>
          <h1 class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </h1>
<b:else/>
          <p class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </p>
</b:if>
            </div>
            <b:include name='description'/>
          </div>
        </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <b:if cond='data:blog.pageType != &quot;item&quot;'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
<b:else/>
        <p class='title'>
          <b:include name='title'/>
        </p>
</b:if>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
                     <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
                     <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
                   </b:widget>
                 </b:section>
<a class='btn-wa' href='javascript:void(0)' onclick='openModal()'><i aria-hidden='true' class='fa fa-whatsapp'/><span>Başvur</span></a>
<nav id='cssmenu'>
<div id='head-mobile'/>
<div class='button' id='menu-button'>
<span class='mline1'/>
<span class='mline2'/>
<span class='mline3'/>
</div>
<ul>
<li><a href='#about'>Hakkında</a></li>
<li><a href='#games'>Oyunlar</a></li>
<li><a href='#asset'>Asset Store</a></li>
<li><a href='#video'>Youtube</a></li>
<li><a href='#education'>Eğitim Detayları</a></li>
<li><a href='#contact'>İletişim</a></li>
</ul>
</nav>
</div><!-- /header-wrapper -->
</header>
<div class='clr'/>
<div id='particle-canvas'>
<div class='container'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<div class='hero-center'>
<div class='colum-left wow fadeInLeft' data-wow-delay='0.4s' style='visibility: visible;'>
<h1>Aztech Games</h1>
<p>
Aztech Gamese Dair Herşey
</p>
<a class='slide-button' href='https://play.google.com/store/apps/developer?id=Aztech+Games&amp;=TR' target='https://play.google.com/store/apps/developer?id=Aztech+Games&amp;=TR'><svg viewBox='0 0 505.145 505.145'>
<path d='M68.541,164.715h-1.294c-16.588,0-30.113,13.568-30.113,30.113v131.107     c0,16.61,13.525,30.134,30.113,30.134h1.316c16.588,0,30.113-13.568,30.113-30.134V194.827     C98.654,178.283,85.108,164.715,68.541,164.715z'/>
<path d='M113.085,376.54c0,15.229,12.446,27.632,27.675,27.632h29.574v70.817     c0,16.631,13.568,30.156,30.113,30.156h1.294c16.61,0,30.156-13.546,30.156-30.156v-70.817h41.33v70.817     c0,16.631,13.611,30.156,30.156,30.156h1.273c16.609,0,30.134-13.546,30.134-30.156v-70.817h29.595     c15.207,0,27.654-12.403,27.654-27.632V169.525H113.085V376.54z'/>
<path d='M322.041,43.983l23.491-36.26c1.51-2.287,0.841-5.414-1.467-6.903     c-2.286-1.51-5.414-0.884-6.903,1.467l-24.353,37.512c-18.27-7.485-38.676-11.691-60.226-11.691     c-21.571,0-41.934,4.206-60.247,11.691l-24.31-37.512c-1.488-2.351-4.638-2.977-6.946-1.467     c-2.308,1.488-2.977,4.616-1.467,6.903l23.512,36.26c-42.387,20.773-70.968,59.924-70.968,104.834     c0,2.761,0.173,5.479,0.41,8.175h280.053c0.237-2.696,0.388-5.414,0.388-8.175C393.009,103.907,364.406,64.756,322.041,43.983z      M187.655,108.911c-7.442,0-13.482-5.997-13.482-13.46c0-7.463,6.04-13.439,13.482-13.439c7.485,0,13.482,5.975,13.482,13.439     S195.097,108.911,187.655,108.911z M317.49,108.911c-7.442,0-13.482-5.997-13.482-13.46c0-7.463,6.04-13.439,13.482-13.439     c7.463,0,13.46,5.975,13.46,13.439C330.95,102.914,324.953,108.911,317.49,108.911z'/>
<path d='M437.876,164.715h-1.251c-16.588,0-30.156,13.568-30.156,30.113v131.107     c0,16.61,13.59,30.134,30.156,30.134h1.273c16.609,0,30.113-13.568,30.113-30.134V194.827     C468.011,178.283,454.464,164.715,437.876,164.715z'/>
</svg> Google Play Store</a>
<a href='https://apps.apple.com/us/developer/atakan-cakir/id1598734806HMwWG7WV48GTeE2BZUUObLjPDk' target='https://apps.apple.com/us/developer/atakan-cakir/id1598734806HMwWG7WV48GTeE2BZUUObLjPDk'>
<svg viewBox='0 0 512 512'>
<path d='M395.748,272.046c-0.646-64.841,52.88-95.938,55.271-97.483c-30.075-44.01-76.925-50.039-93.62-50.736   c-39.871-4.037-77.798,23.474-98.033,23.474c-20.184,0-51.409-22.877-84.476-22.276c-43.458,0.646-83.529,25.269-105.906,64.19   c-45.152,78.35-11.563,194.42,32.445,257.963c21.504,31.104,47.146,66.038,80.813,64.79c32.421-1.294,44.681-20.979,83.878-20.979   c39.196,0,50.215,20.979,84.524,20.335c34.888-0.648,56.991-31.699,78.347-62.898c24.694-36.084,34.862-71.019,35.462-72.812   C463.678,375.26,396.422,349.495,395.748,272.046z M331.28,81.761C349.149,60.082,361.21,30.005,357.92,0   c-25.739,1.048-56.938,17.145-75.405,38.775c-16.57,19.188-31.075,49.813-27.188,79.218   C284.061,120.235,313.392,103.391,331.28,81.761z'/>
</svg> App Store</a>
</div>
<div class='colum-right wow fadeInRight' data-wow-delay='0.7s' style='visibility: visible;'>
<img alt='' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_ZIWnDzkzk6_euKt52B4oCq42b-CaU3aIu8-lPW_gRVQlyQHJ6FVAV9Zge8f-brYPLKFYrekMRJ79BokJhhagY3BjpHX21gxLXbcETImWnxRtSM4vgiGxyHh0YgBEBUYfEddb6KLCoLDWy4GQvo0Qky0ITlDrvfbZrPKkU1rfeKBL5NlvMly3A9jT/w450-h692/Blender.png'/>
</div>
</div>
</b:if>
</b:if>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<style>
.hero-box{height:280px;position:relative}.bred{display:none}#bread-crumbs{z-index:100;bottom:45%;right:0;position:absolute}.breadcrumbs span{background:#fff;padding:5px 8px 8px;border-radius:3px;text-align:center;box-shadow:0 .25rem .375rem -.375rem rgba(76,76,76,0.6901960784313725)}.breadcrumbs span a{color:#f12499;font-size:11px;text-transform:uppercase;font-weight:700;line-height:1}.post-upper{text-align:left;margin:0;position:absolute;width:50%;z-index:100;left:0;bottom:38%}.post-upper p.title{font-size:35px;font-weight:500;line-height:1;color:#fff;margin:0;padding:0}.post h1,.post h1 a,.post-header,h3.post-title{margin:0!important;padding:0!important;height:0!important;font-size:0!important;line-height:0!important}p.att-javascript{font-size:150%;text-align:center}

@media screen and (max-width:800px){
.post-upper {width:70%;}
.post-upper p.title {font-size:32px;}
}
@media screen and (max-width:600px){
.post-upper p.title {font-size:28px;}
}
@media screen and (max-width:515px){
#bread-crumbs {display:none;}
.post-upper {width:100%;}
.post-upper p.title {text-align:center;}
}
</style>
<div class='hero-box'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='post-upper'><p class='title'><data:blog.pageName/></p></div>
<div id='bread-crumbs'/>
</b:if>
</div>
</b:if>
</div>
<div class='section-shape'>
<img alt='shape image' src='https://1.bp.blogspot.com/-Ug6BCJ09eSw/XL7YzygzSXI/AAAAAAAAANk/bKOcIuqrHbU83KuFUhfL_gQvdp0-0-FgACLcBGAs/s1600/shap.png'/>
</div>
<ul class='circles'><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/></ul>
</div>
<div class='clr'/>

<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<div class='box1 wow' id='about'>
<div class='container'>
<div class='left wow fadeInLeft' data-wow-delay='0.2s' style='visibility: visible;'>
<img alt='' src='https://4.bp.blogspot.com/-cn5YLf-aJ0w/XMFjDzyXd9I/AAAAAAAAAQk/J-rtn2TB2aMEAWDi9ajEBaBX7HNmRJETwCLcBGAs/s1600/mobile2.png'/>
</div>

<div class='right wow fadeInRight' data-wow-delay='0.2s' style='visibility: visible;'>
<div class='about-content'>
<h6>About Our App</h6>
<h2>Omexer will make your life easier and comfortable</h2>
<p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.</p>
<ul>
<li><i aria-hidden='true' class='fa fa-battery-three-quarters'/> Attractive Features</li>
<li><i aria-hidden='true' class='fa fa-camera'/> User Friendly Interface</li>
<li><i aria-hidden='true' class='fa fa-bell-o'/> Free Dedicated Support</li>
</ul>
<a href='#'>Download Now</a>
</div>
</div>
</div>
</div>
<div class='clr'/>

<div class='box2 wow' id='games'>
<div class='section-heading text-center'>
<h6>Screen Interface</h6>
<h2>App Screenshot</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
</div>
<div class='container'>
<div class='phone'>
<div class='glass'/>
<div class='home-btn'>
<div class='home-btn-inner'/>
</div>
</div>
<div class='slider wow slideInUp'>
<div class='item'>
<img alt='' src='https://2.bp.blogspot.com/-c21tflfc7UI/XMFjA999fHI/AAAAAAAAAQQ/iYShaYcmkUUEE8l6ZJrhFRwgZ8kXu3U4QCLcBGAs/s1600/m1.png'/>
</div>
<div class='item'>
<img alt='' src='https://3.bp.blogspot.com/-4JW8PMLuG3s/XMFjAxEFIGI/AAAAAAAAAQU/ad32z2dOlvwwvAllyQTR1PLmVurSGM0DgCLcBGAs/s1600/m2.png'/>
</div>
<div class='item'>
<img alt='' src='https://1.bp.blogspot.com/-3eJRL7xtsI8/XMFjAzWit6I/AAAAAAAAAQM/Pw6EDPFABqUebTYnDclVAhenXB28iN-1wCLcBGAs/s1600/m3.png'/>
</div>
<div class='item'>
<img alt='' src='https://2.bp.blogspot.com/-KqJIx-eug_4/XMFjCHfv8bI/AAAAAAAAAQY/5xFIjoQueQ03jBOVmXTOCc4oZfsGQMhhACLcBGAs/s1600/m4.png'/>
</div>
<div class='item'>
<img alt='' src='https://3.bp.blogspot.com/-cwDqtDgvbOw/XMFjCXEvUqI/AAAAAAAAAQc/3XAs1_OpI3YSwN1icEf438WpWbAvaqCMACLcBGAs/s1600/m5.png'/>
</div>
</div>
</div>
</div>
<div class='clr'/>

<div class='box3 wow' id='asset'>
<div class='section-heading text-center'>
<h6>App Features</h6>
<h2>Awesome Features</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
</div>
<div class='container'>
<div class='box-list'>
<li>
<i aria-hidden='true' class='fa fa-code'/>
<h3>Clean Code</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
<li>
<i aria-hidden='true' class='fa fa-pie-chart'/>
<h3>Color Changer</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
<li>
<i aria-hidden='true' class='fa fa-wpexplorer'/>
<h3>Creative Design</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
<li>
<i aria-hidden='true' class='fa fa-television'/>
<h3>Responsive Design</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
<li>
<i aria-hidden='true' class='fa fa-grav'/>
<h3>Fast Update</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
<li>
<i aria-hidden='true' class='fa fa-hourglass-start'/>
<h3>Quick Start</h3>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda hic inventore itaque</li>
</div>
</div>
</div>
<div class='clr'/>

<div class='box4 wow' id='video'>
<div class='container'>
<div class='section-heading text-center'>
<h6 class='text-white'>Demo Video</h6>
<h2 class='text-white'>Watch A Quick Demo</h2>
<p class='text-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p></div>

<div class='video-content d-table text-center wow slideInUp'>
<div class='bg-opacity'>
<div class='d-table-cell align-middle'>
<a class='popup-youtube' href='https://www.youtube.com/watch?v=9dkne6Jr_18'><i aria-hidden='true' class='fa fa-play'/></a>
</div>
</div>
</div>
</div>
</div>
<div class='clr'/>

<div class='box5 wow' id='education'>
<div class='section-heading text-center'>
<h6>Our Pricing</h6>
<h2>Choose Our Best Plan</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
</div>
<div class='container'>
<div class='pricing_table'>
<div class='plan wow fadeInUp animated' data-wow-delay='.2s' style='visibility:visible;animation-delay:.4s;animation-name:fadeInUp'>
<header>
<h3 class='plan-title'>Starter</h3>
<div class='plan-cost'><span class='plan-price'>$19</span><span class='plan-type'>/mo</span></div>
</header>
<ul class='plan-features'>
<li>5GB Linux Web Space</li>
<li>5 MySQL Databases</li>
<li>Unlimited Email</li>
<li>250Gb mo Transfer</li>
<li>24/7 Tech Support</li>
<li>Daily Backups</li>
</ul>
<div class='plan-select'><a href=''>Select Plan</a></div>
</div>

<div class='plan wow fadeInUp animated' data-wow-delay='.4s' style='visibility:visible;animation-delay:.4s;animation-name:fadeInUp'>
<header>
<h3 class='plan-title'>Basic</h3>
<div class='plan-cost'><span class='plan-price'>$29</span><span class='plan-type'>/mo</span></div>
</header>
<ul class='plan-features'>
<li>10GB Linux Web Space</li>
<li>10 MySQL Databases</li>
<li>Unlimited Email</li>
<li>500Gb mo Transfer</li>
<li>24/7 Tech Support</li>
<li>Daily Backups</li>
</ul>
<div class='plan-select'><a href=''>Select Plan</a></div>
</div>

<div class='plan featured wow fadeInUp animated' data-wow-delay='.8s' style='visibility:visible;animation-delay:.8s;animation-name:fadeInUp'>
<header>
<h3 class='plan-title'>Professional</h3>
<div class='plan-cost'><span class='plan-price'>$49</span><span class='plan-type'>/mo</span></div>
</header>
<ul class='plan-features'>
<li>25GB Linux Web Space</li>
<li>25 MySQL Databases</li>
<li>Unlimited Email</li>
<li>2000Gb mo Transfer</li>
<li>24/7 Tech Support</li>
<li>Daily Backups</li>
</ul>
<div class='plan-select'><a href=''>Select Plan</a></div>
</div>

<div class='plan wow fadeInUp animated' data-wow-delay='.6s' style='visibility:visible;animation-delay:.6s;animation-name:fadeInUp'>
<header>
<h3 class='plan-title'>Ultra</h3>
<div class='plan-cost'><span class='plan-price'>$99</span><span class='plan-type'>/mo</span></div>
</header>
<ul class='plan-features'>
<li>100GB Linux Web Space</li>
<li>Unlimited MySQL Databases</li>
<li>Unlimited Email</li>
<li>10000Gb mo Transfer</li>
<li>24/7 Tech Support</li>
<li>Daily Backups</li>
</ul>
<div class='plan-select'><a href=''>Select Plan</a></div>
</div>
</div>
</div>
</div>
<div class='clr'/>
  
<div class='container'>
<div class='outer-wrapper'>
<div class='main-wrapper' id='education'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<div class='section-heading1 text-center'>
<h2>Lates News</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
</div>
</b:if>
</b:if>
</b:if>
                    <b:section class='main' id='main' showaddelement='no'>
                      <b:widget id='Blog1' locked='true' title='Blog Kayıtları' type='Blog' version='1'>
                        <b:widget-settings>
                          <b:widget-setting name='showDateHeader'>true</b:widget-setting>
                          <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showShareButtons'>false</b:widget-setting>
                          <b:widget-setting name='authorLabel'>By</b:widget-setting>
                          <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                          <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showAuthor'>true</b:widget-setting>
                          <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                          <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='reactionsLabel'/>
                          <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                          <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                          <b:widget-setting name='showLabels'>true</b:widget-setting>
                          <b:widget-setting name='showLocation'>false</b:widget-setting>
                          <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                          <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                          <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                          <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                          <b:widget-setting name='showReactions'>false</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main' var='top'>
  <b:if cond='data:mobileindex'>
    <!-- mobile index -->
    <div class='blog-posts hfeed'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
          &lt;/div&gt;
        </b:if>
        &lt;div class=&quot;mobile-date-outer date-outer&quot;&gt;
        <div expr:onclick='data:post.indexOnclick'>
          <b:include data='post' name='mobile-index-post'/>
        </div>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;
      </b:if>
    </div>
  <b:else/>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>

        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
        <b:include data='post' name='post'/>
        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <b:if cond='data:mobile == &quot;false&quot;'>
            <div class='inline-ad'>
              <data:adCode/>
            </div>
          </b:if>
          <data:adStart/>
        </b:if>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>
  </b:if>

  <!-- navigation -->
  <b:if cond='data:mobile'>
    <b:include name='mobile-nextprev'/>
  <b:else/>
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>
  </b:if>

  <b:if cond='data:top.showStars'>
    <script src='//www.google.com/jsapi' type='text/javascript'/>
    <script type='text/javascript'>
      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
      function initialize() {
        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
        google.annotations.createAll();
        google.annotations.fetch();
      }
      google.setOnLoadCallback(initialize);
    </script>
  </b:if>
  </b:includable>
                        <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='//www.blogger.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
                        <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
                        <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='http://2.bp.blogspot.com/-d-5BS0YCkho/UOKe2UIw0rI/AAAAAAAAC4w/md_iYNVHaHk/s1600/delete4.png'/>
      </a>
    </b:if>
  </span>
</b:includable>
                        <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.forceIframeComments'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
    </span>
  <b:else/>
    <b:if cond='data:post.commentSource == 1'>
      <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
      </span>
    <b:else/>
      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
        <data:post.commentLabelFull/>:
      </a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:else/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='threaded_comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
        <a name='comments'/>
        <b:if cond='data:post.allowComments'>          
          
         <b:if cond='data:post.numComments != 0'>
          <h4>
           <b:if cond='data:post.numComments == 1'>
            1 <data:commentLabel/>:
           <b:else/>
            <data:post.numComments/> <data:commentLabelPlural/>
           </b:if>
          </h4>
         </b:if>
                
         <b:if cond='data:post.commentPagingRequired'>
          <span class='paging-control-container'>
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
           &#160;
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
           &#160;
           <data:post.commentRangeText/>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </span>
         </b:if>
                        
         <div class='clear'/>
         <div id='comment_block'>
          <b:loop values='data:post.comments' var='comment'>
           <div class='comment_wrap' expr:auclass='data:comment.adminClass' expr:id='data:comment.anchorName' level='0'>
                                                                                       
            <a expr:name='data:comment.anchorName'/>
            <b:if cond='data:post.adminClass == data:comment.adminClass'>
             &lt;div class=&#39;comment_inner comment_admin&#39;&gt;
            <b:else/>
             &lt;div class=&#39;comment_inner&#39;&gt;
            </b:if>
             <div class='comment_header'>
              <div class='comment_avatar'>
               <data:comment.authorAvatarImage/>
              </div>
              <div class='comment_name'>
               <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow' target='_blank'><data:comment.author/></a>
               <b:else/>
                <data:comment.author/>
               </b:if> <span class='comment_author_flag'>mod</span>  
              </div>             
              <div class='comment_service'>
               <a expr:href='data:comment.url' rel='nofollow' title='permalink'><span class='comment_date'><data:comment.timestamp/></span></a>              
               <b:include data='comment' name='commentDeleteIcon'/>
              </div>
              <div class='clear'/>
             </div> 
             <div class='comment_body'>
              <b:if cond='data:comment.isDeleted'>
               <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
               <p><data:comment.body/></p>
<a class='comment_reply' expr:href='&quot;#r_&quot;+data:comment.anchorName' expr:id='&quot;r&quot;+data:comment.anchorName' onclick='javascript:Display_Reply_Form(this)'>Reply</a>                                                            <div class='clear'/>
                                                           
              </b:if>
                                                       
             </div>
             
             
              <div class='clear'/>
            &lt;/div&gt;
            <div class='clear'/>
            
            <div class='comment_child'/>
            <a expr:name='&quot;r_&quot;+data:comment.anchorName'/>
            <div class='comment_reply_form' expr:id='&quot;r_f_&quot;+data:comment.anchorName'/>               
           </div>
          </b:loop>               
         </div>     
         <div class='clear'/>
         <b:if cond='data:post.commentPagingRequired'>
          <span class='paging-control-container'>
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
           &#160;
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
           &#160;
           <data:post.commentRangeText/>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </span>
         </b:if>
         <div class='clear'/>
         <div class='comment_form'>          
          
          <b:if cond='data:post.embedCommentForm'>
           <b:if cond='data:post.allowNewComments'>
            <h4 id='comment-post-message'><data:postCommentMsg/></h4>
                                                           
            <b:include data='post' name='threaded-comment-form'/>
           <b:else/>
            <data:post.noNewCommentsText/>
           </b:if>
          <b:else/>
           <b:if cond='data:post.allowComments'>
            <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
           </b:if>
          </b:if>
         </div>
        </b:if>
       </div>
</b:includable>
                        <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

    <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.allowComments'>
          <b:if cond='data:post.feedLinks'>
            <b:include data='post.feedLinks' name='feedLinksBody'/>
          </b:if>
        </b:if>
      </b:loop>
    </div>
  </b:if>
</b:includable>
                        <b:includable id='feedLinksBody' var='links'>
</b:includable>
                        <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='mobile-index-post' var='post'>
  <b:if cond='data:post.dateHeader'>
    <div class='mobile-index-date'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </div>
  </b:if>

  <div class='mobile-post-outer'>
    <div class='mobile-index-title-outer'>
      <h3 class='mobile-index-title entry-title'>
        <a href='javascript:void(0)'><data:post.title/></a>
      </h3>
    </div>

    <div>
      <div class='mobile-index-arrow'>
        <a href='javascript:void(0)'>&amp;rsaquo;</a>
      </div>

      <div class='mobile-post-contents'>
        <b:if cond='data:post.thumbnailUrl'>
          <div class='mobile-index-thumbnail'>
            <div class='Image'>
              <img expr:src='data:post.thumbnailUrl'/>
            </div>
          </div>
        </b:if>

        <div class='post-body'>
          <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
        </div>
      </div>
      <div class='clr'/>
    </div>

    <div class='mobile-index-comment'>
      <b:if cond='data:blog.pageType != &quot;item&quot;'>
        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
          <b:if cond='data:post.allowComments'>
            <b:if cond='data:post.numComments != 0'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </b:if>
    </div>
  </div>
</b:includable>
                        <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
                        <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clr'/>
</b:includable>
                        <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:else/>
                <b:if cond='data:post.url'>
                  <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                  <b:else/>
                    <data:post.title/>
                  </b:if>
                <b:else/>
                  <data:post.title/>
                </b:if>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
            <div class='clr'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn'>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <data:post.author/>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn'><data:post.author/></span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
                        <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>
    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clr'/>
</b:includable>
                        <b:includable id='post' var='post'>
<article class='post hentry' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<div itemType='http://schema.org/WebPage' itemprop='mainEntityOfPage' itemscope='itemscope'/>
<span class='post-author vcard' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person' style='display:none'> 
               <b:if cond='data:post.authorProfileUrl'> 
                    <b:if cond='data:post.authorPhoto.url'>
<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<img alt='author' expr:src='data:post.authorPhoto.url' height='36' title='Author' width='36'/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot; or data:blog.pageType == &quot;static_page&quot;'>
<img alt='author' expr:src='data:post.authorPhoto.url' height='36' title='Author' width='36'/>
</b:if>
</b:if>
                    <span class='fn author'>
                  <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'> 
                        <span itemprop='name'><data:post.author/></span> 
                      </a> 
                    </span> 
                  <b:else/> 
                    <span class='fn author'><span itemprop='name'><data:post.author/></span></span> 
                  </b:if> 
<meta expr:content='data:post.authorPhoto.url' itemprop='image'/>
                </span>
<meta expr:content='data:post.snippet' property='twitter:description'/>
<b:if cond='data:post.firstImageUrl'>
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
  <meta expr:content='data:post.firstImageUrl' itemprop='url'/>
  <meta content='auto' itemprop='width'/>
  <meta content='auto' itemprop='height'/>
  </div>
<b:else/>
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
  <meta content='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png' itemprop='url'/>
  <meta content='auto' itemprop='width'/>
  <meta content='auto' itemprop='height'/>
  </div>
    </b:if>
  <div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
    <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
      <meta content='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png' itemprop='url'/>
      <meta content='auto' itemprop='width'/>
      <meta content='auto' itemprop='height'/>
    </div>
    <meta expr:content='data:blog.title' itemprop='name'/>
 </div>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'> 
  <div class='img-home'>
<b:if cond='data:post.firstImageUrl'>
  <a expr:href='data:post.url'>
<img expr:src='data:post.firstImageUrl' expr:title='data:post.title'/></a>
<b:else>
  <a expr:href='data:post.url'>
<img expr:title='data:post.title' src='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png'/></a>
  </b:else>
</b:if>

<div class='postmeta'>
<div>
<h3>
<span class='post-author vcard' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'> 
               <b:if cond='data:post.authorProfileUrl'> 
                    <span class='fn author'>
                  <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'> 
                        <span itemprop='name'><i class='fa fa-user'/> Admin</span> 
                      </a> 
                    </span> 
                  <b:else/> 
                    <span class='fn author'><span itemprop='name'><data:post.author/></span></span> 
                  </b:if> 
<meta expr:content='data:post.authorPhoto.url' itemprop='image'/>
                </span>
<span itemprop='dateModified'>
<a class='updated' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='updated' expr:title='data:post.timestampISO8601' itemprop='datePublished'><i class='fa fa-calendar'/> <data:post.timestamp/></abbr></a>
</span>
</h3>
</div>
</div>
</div>
</b:if>
</b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>
<meta expr:content='data:post.snippet' itemprop='description'/>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
<b:if cond='data:blog.homepageUrl != data:blog.url and data:blog.pageType == &quot;item&quot;'>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<div class='breadcrumbs' id='breadcrumbs'>
<span itemscope='itemscope' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:blog.homepageUrl' itemprop='url' title='Home'><span itemprop='title'>Home</span></a></span><b:loop values='data:post.labels' var='label'>
<span itemscope='itemscope' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:label.url + &quot;?max-results=6&quot;' expr:title='data:label.name' itemprop='url'><span itemprop='title'><data:label.name/></span></a><b:if cond='data:label.isLast != &quot;true&quot;'/></span>
</b:loop> <span class='bred'><data:post.title/></span>
</div>
</b:if>
</b:loop>
</b:if>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:post.title'>
      <h2 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link' expr:title='data:post.title' itemprop='url mainEntityOfPage'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url mainEntityOfPage'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h2>
</b:if>
<b:else/>
      <h1 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a itemprop='url mainEntityOfPage'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a itemprop='url mainEntityOfPage'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h1>
</b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<div class='post-snippet'>
      <data:post.snippet/>
    </div>
<div class='button-wrap'>
<a expr:href='data:post.url'>Readmore</a>
</div>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<data:post.body/>
</b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<data:post.body/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='share-wrapper' id='share_btnper'>
<b:include data='post' name='sharethis'/>
  </div>
</b:if>
<div style='clear:both'/> <!-- clear for photos floats -->
</div>
</article>
</b:includable>
                        <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
                        <b:includable id='shareButtons' var='post'>
<b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=620\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
                        <b:includable id='sharethis' var='post'>
<div class='share_btn'>
<ul>
<li><a class='fb' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:blog.url' target='_blank'>
<svg viewBox='0 0 512 512'>
<path d='M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159  c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44  c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0  c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0  c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258  v83.975C126.683,268.993,130.379,272.691,134.941,272.691z' style='fill:#457dca;'/>
</svg>
</a></li>

<li><a class='tw' expr:href='&quot;http://www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=twitter&quot;' target='_blank'>
<svg viewBox='0 0 512 512'>
<path d='M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016  c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992  c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056  c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152  c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792  c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44  C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568  C480.224,136.96,497.728,118.496,512,97.248z' style='fill:#03A9F4;'/>
</svg></a></li>

<li><a expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;media=&quot; + data:blog.postImageUrl + &quot;&amp;description=&quot; + data:blog.pageName' rel='nofollow' target='_blank'>
<svg viewBox='0 0 511.977 511.977'>
<path d='M262.948,0C122.628,0,48.004,89.92,48.004,187.968c0,45.472,25.408,102.176,66.08,120.16    c6.176,2.784,9.536,1.6,10.912-4.128c1.216-4.352,6.56-25.312,9.152-35.2c0.8-3.168,0.384-5.92-2.176-8.896    c-13.504-15.616-24.224-44.064-24.224-70.752c0-68.384,54.368-134.784,146.88-134.784c80,0,135.968,51.968,135.968,126.304    c0,84-44.448,142.112-102.208,142.112c-31.968,0-55.776-25.088-48.224-56.128c9.12-36.96,27.008-76.704,27.008-103.36    c0-23.904-13.504-43.68-41.088-43.68c-32.544,0-58.944,32.224-58.944,75.488c0,27.488,9.728,46.048,9.728,46.048    S144.676,371.2,138.692,395.488c-10.112,41.12,1.376,107.712,2.368,113.44c0.608,3.168,4.16,4.16,6.144,1.568    c3.168-4.16,42.08-59.68,52.992-99.808c3.968-14.624,20.256-73.92,20.256-73.92c10.72,19.36,41.664,35.584,74.624,35.584    c98.048,0,168.896-86.176,168.896-193.12C463.62,76.704,375.876,0,262.948,0z' style='fill:#f33021;'/>
</svg>
</a></li>

<li><a class='wa' data-action='share/whatsapp/share' expr:href='&quot;whatsapp://send?text=&quot; + data:post.title + &quot;%20%2D%20&quot; + data:post.url' rel='nofollow noopener' target='_blank'><svg viewBox='0 0 418.135 418.135'>
	<path d='M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536   L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631   c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197   c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607   l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819   c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817   C371.446,250.361,354.281,291.803,323.886,322.197z' style='fill:#7AD06D;'/>
	<path d='M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008   c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218   l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356   c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057   c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z' style='fill:#7AD06D;'/>
</svg>
</a></li>

<li><a expr:href='&quot;https://telegram.me/share/url?url=&quot; + data:post.url + &quot;&amp;text=Ada%20yang%20keren%20lho,%20nyesel%20kalo%20ga%20buka...%20kunjungi:&quot;' target='_blank'>
<svg viewBox='0 -31 512 512'><path d='m211 270-40.917969 43.675781 10.917969 76.324219 120-90zm0 0' fill='#00c0f1'/><path d='m0 180 121 60 90 30 210 180 91-450zm0 0' fill='#76e2f8'/><path d='m121 240 60 150 30-120 210-180zm0 0' fill='#25d9f8'/></svg>
</a></li>

<li><a expr:href='&quot;mailto:?subject=&quot; + data:post.title + &quot;&amp;body=&quot; + data:post.url' rel='nofollow' target='_blank'>
<svg viewBox='0 0 58 58' x='0px'>
		<polygon points='0,5.5 0,44.5 28,44.5 56,44.5 56,5.5   ' style='fill:#DCD6CD;'/>
		<path d='M30.965,27.607c-1.637,1.462-4.292,1.462-5.93,0l-2.087-1.843C16.419,31.591,0,44.5,0,44.5h21.607    h12.787H56c0,0-16.419-12.909-22.948-18.736L30.965,27.607z' style='fill:#E8E3D9;'/>
		<path d='M0,5.5l25.035,22.107c1.637,1.462,4.292,1.462,5.93,0L56,5.5H0z' style='fill:#EFEBDE;'/>
		<rect height='22' style='fill:#48A0DC;' width='22' x='36' y='30.5'/>
		<rect height='16' style='fill:#FFFFFF;' width='2' x='46' y='36.5'/>
		<polygon points='52.293,43.207 47,37.914 41.707,43.207 40.293,41.793 47,35.086 53.707,41.793   ' style='fill:#FFFFFF;'/>
</svg>
</a>
</li>
 
</ul>
</div>
</b:includable>
                        <b:includable id='status-message'>
<b:if cond='data:navMessage'>
<div>
</div>
<div class='clr'/>
</b:if>
</b:includable>
                        <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='threaded_comment_css'>   
</b:includable>
                        <b:includable id='threaded_comment_js' var='post'>
  <script defer='defer' expr:src='data:post.commentSrc' type='text/javascript'/>
  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var postId = &#39;<data:post.id/>&#39;;
      var feed = &#39;<data:post.commentFeed/>&#39;;
      var authorName = &#39;<data:post.author/>&#39;;
      var authorUrl = &#39;<data:post.authorUrl/>&#39;;
      var blogId = &#39;<data:top.id/>&#39;;
      var baseUri = &#39;<data:post.commentBase/>&#39;;
// <![CDATA[
      feed += '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }
      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }
      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                console.log(entry.gd$extendedProperty[k].name + ' - ' + entry.gd$extendedProperty[k].value);
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };
      var paginator = function(callback) {
        if (hasMore()) {
          var url = feed;
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == authorName
              && comment.author.profileUrl == authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return baseUri + '/delete-comment.g?blogID=' + blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };
      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;
      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };
      var tok = 'comment-form_';
      var hash = window.location.hash || '';
      var startThread = hash.indexOf(tok) == 1 ? hash.substring(tok.length + 1) : undefined;
      // Configure commenting API:
      var configJso = {
        'maxDepth': 2
      };
      var provider = {
        'id': postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };
      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };
      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
                        <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
   <h3>
  <b:if cond='data:post.numComments == 1'>1 <data:commentLabel/>:
     <b:else/>
      <span class='embel'/> <data:post.numComments/> <data:commentLabelPlural/>
    </b:if>
   </h3>
    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>
    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>
    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
                      </b:widget>
                    </b:section>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<a class='allbtn' href='/search/label'>All Post</a>
</b:if>
</div></div>  
<div class='sidebar-wrapper'>
 <b:section class='sidebar' id='sidebar' showaddelement='yes'>
   <b:widget id='HTML1' locked='true' title='' type='HTML' version='1'>
     <b:widget-settings>
       <b:widget-setting name='content'>&lt;div id=&#39;search-wrapper&#39;&gt;
&lt;h4 class=&#39;tetle&#39;&gt;Search This Site&lt;/h4&gt;
&lt;div id=&#39;search-box&#39;&gt;
&lt;div itemprop=&#39;mainEntity&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/WebSite&#39;&gt;

&lt;form action=&#39;https://landingthebusiness.blogspot.com/search&#39; itemprop=&#39;potentialAction&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/SearchAction&#39; method=&#39;get&#39; target=&#39;_blank&#39;&gt;

&lt;input class=&#39;search-form&#39; id=&#39;feed-q-input&#39; itemprop=&#39;query-input&#39; name=&#39;q&#39; placeholder=&#39;Search&#39; required=&#39;required&#39; type=&#39;text&#39;/&gt;
&lt;button class=&#39;search-button&#39; title=&#39;Search&#39; type=&#39;submit&#39;&gt;&lt;i class=&quot;fa fa-search&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/form&gt;&lt;/div&gt;
&lt;/div&gt;&lt;/div&gt;</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
   </b:widget>
   <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts'>
     <b:widget-settings>
       <b:widget-setting name='numItemsToShow'>7</b:widget-setting>
       <b:widget-setting name='showThumbnails'>true</b:widget-setting>
       <b:widget-setting name='showSnippets'>true</b:widget-setting>
       <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)                                  : data:post.thumbnail' var='image'>
                    <img alt='' border='0' expr:src='data:image'/>
                  </b:with>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
 </b:section>
</div>
<div class='clr'/>
</div>
<div class='box5 wow' id='education'>
<div class='container'>
<div class='section-heading text-center'>
<h6>Have Any Question?</h6>
<h2>Fequently Asked Question</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
</div>
<div class='ac-left wow fadeInLeft' data-wow-delay='0.2s' style='visibility:visible'>
<div class='accordion js-accordion'>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>How can I download the app ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>How can I install the app ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item active'>
<div class='accordion-header js-accordion-header'>How can I upgrade my current plan ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
<div class='accordion js-accordion'>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 1</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 2</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>How can I active the app&#39;s features ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
<div class='accordion js-accordion'>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 1</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 2</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>How can I active all the features ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
<div class='accordion js-accordion'>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 1</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 2</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>How can I download the app ?</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
<div class='accordion js-accordion'>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 1</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
<div class='accordion__item js-accordion-item'>
<div class='accordion-header js-accordion-header'>Sub Panel 2</div>
<div class='accordion-body js-accordion-body'>
<div class='accordion-body__contents'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='ac-right wow fadeInRight' data-wow-delay='0.2s' style='visibility:visible'>
<img alt='Timeline' src='https://3.bp.blogspot.com/-NZ0Y_QwFx8k/XMFlUHx7sNI/AAAAAAAAARM/vIGWthpIiX43Tyi5NTlnLw0AcgC1fBA2wCLcBGAs/s1600/m12.png'/>
</div>
</div>
</div>
<div class='clr'/>

</b:if>
</b:if>
</b:if>
<div id='footer'>
<div class='container'>
<div class='section-heading text-center'>
<h6 class='text-white'>Contact</h6>
<h2 class='text-white'>Contact &amp; Maps</h2>
</div>
<div class='footer-wrapper' id='contact'>
<div id='landing_form'>
<div class='wrap-me wow fadeInLeft' data-wow-delay='0.2s' style='visibility: visible;'>
<b:section class='landing-widget' id='Contact Widget' maxwidgets='1' name='Contact Form Widget' showaddelement='no'>
  <b:widget id='ContactForm1' locked='false' title='Formulir Contact' type='ContactForm' version='1'>
    <b:includable id='main'>
  <div class='contact-form-widget'>
    <div class='form'>
      <form name='contact-form'>
        <p/>
        <span class='name-bg'>Name*</span>
        <br/>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
        <p/>
        <span class='email-bg'>Email*</span>
        <br/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
        <p/>
        <span class='message-bg'>Message*</span>
        <br/>
        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
        <p/>
<span class='send-bg'>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/></span>
<span class='clear-bg'><input class='contact-form-button contact-form-button-submit clear-button' type='reset' value='Clear'/></span>
        <p/>
    <div style='max-width: 100%; text-align: center; width: 100%;'>
<div class='contact-form-error-message' id='ContactForm1_contact-form-error-message'>
</div>
<div class='contact-form-success-message' id='ContactForm1_contact-form-success-message'>
</div>
</div>
      </form>
    </div>
  </div>
  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section>
<br/>
</div><div class='map-me wow fadeInRight' data-wow-delay='0s' style='visibility: visible;'>
 <div class='contact-other'>
<h1 class='con-title'>Maps</h1>
<p class='con-text'>Quasi unde quisquam facilis at ullam aperiam similique dicta voluptatibus!</p>
<ul class='con-list'>
<li><i aria-hidden='true' class='fa fa-map-o'/>3066 Sulawesi Utara, BolTim, Tutuyan.</li>
<li><i aria-hidden='true' class='fa fa-phone'/>+628-124-1111, +628-111-2222</li>
<li><i aria-hidden='true' class='fa fa-envelope-o'/>admin@mail.com</li>
<li><i aria-hidden='true' class='fa fa-globe'/>www.yourdomain.com</li>
</ul>
</div>
  </div>
</div>
<div class='clr'/>
</div></div>
</div>
<div id='credit'>
<div id='toTop'><i aria-hidden='true' class='fa fa-angle-up'/></div>
<div class='container'>
 &#169; Copyright 2019 <a class='site_name' expr:href='data:blog.homepageUrl' expr:title='data:blog.title'><data:blog.title/></a></div>
</div>   
<div class='pelajar' id='pelajar'/>
<div id='whatsapp'>
<span class='wa-x' onclick='closeModal()'/>
<p class='wa-title'>Form WhatsApp</p>
<div class='wa-body'>
<input class='tujuan' type='hidden' value='081241105658'/>
<div class='left'>
<div class='form-whatsapp'>
<label class='wa-label bagi'>Name</label>
<input class='nama wa-input bagi' name='nama' placeholder='Name' type='text'/>
</div>
</div>

<div class='right'>
<div class='form-whatsapp'>
<label class='wa-label bagi'>Mobile Phone Number</label>
<input aria-labelledby='number-00000014-acc number-00000014-error-acc number-00000014-instr-acc' class='hp wa-input bagi' data-role='i123-input' data-size='full' name='hp' placeholder='Your cellphone number' step='any' type='tel'/>
</div>
</div>

<div class='form-whatsapp'>
<label class='wa-label bagi'>Item Choices</label>
<select class='asal wa-option bagi' placeholder='Barang' required=''>
<option data-index='0' name='asal' value='Samsung'>Samsung</option>
<option data-index='1' name='asal' value='Xiomi'>Xiomi</option>
<option data-index='2' name='asal' value='Oppo'>Oppo</option>
<option data-index='3' name='asal' value='Vivo'>Vivo</option>
<option data-index='4' name='asal' value='Nokia'>Nokia</option>
<option data-index='5' name='asal' value='LG'>LG</option>
<option data-index='6' name='asal' value='Soni Ericson'>Soni Ericson</option>
<option data-index='7' name='asal' value='Mito'>Mito</option>
</select>
</div>

<div class='left'>
<div class='form-whatsapp'>
<label class='wa-label bagi'>Total</label>
<input class='jumlah wa-input bagi' max='10' min='1' name='jumlah' placeholder='The amount of goods' type='number'/>
</div>
</div>

<div class='right'>
<div class='form-whatsapp'>
<label class='wa-label bagi'>Date</label>
<input class='tanggal wa-input bagi' name='tanggal' placeholder='Message Date' required='' type='date'/>
</div>
</div>

<div class='form-whatsapp'>
<label class='wa-label full'>Comment</label>
<textarea class='jemput wa-input full' name='jemput' placeholder='Comment'/>
</div>

<div class='form-whatsapp'>
<p class='p-info'>This order requires the WhatsApp application.</p>
<a class='submit' target='_blank'>Order now</a>
</div>
</div>
</div>
<script>
/*<![CDATA[*/
// head
$(function(){$(window).scroll(function(){$(this).scrollTop()>80?$(".header-wrap").addClass("fixed"):$(".header-wrap").removeClass("fixed")})});

// timer
!function(t){function e(t,e){return t.toFixed(e.decimals)}t.fn.countTo=function(e){return e=e||{},t(this).each(function(){function n(){u+=l,f++,o(u),"function"==typeof a.onUpdate&&a.onUpdate.call(i,u),f>=r&&(c.removeData("countTo"),clearInterval(d.interval),u=a.to,"function"==typeof a.onComplete&&a.onComplete.call(i,u))}function o(t){var e=a.formatter.call(i,t,a);c.html(e)}var a=t.extend({},t.fn.countTo.defaults,{from:t(this).data("from"),to:t(this).data("to"),speed:t(this).data("speed"),refreshInterval:t(this).data("refresh-interval"),decimals:t(this).data("decimals")},e),r=Math.ceil(a.speed/a.refreshInterval),l=(a.to-a.from)/r,i=this,c=t(this),f=0,u=a.from,d=c.data("countTo")||{};c.data("countTo",d),d.interval&&clearInterval(d.interval),d.interval=setInterval(n,a.refreshInterval),o(u)})},t.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:e,onUpdate:null,onComplete:null}}(jQuery),jQuery(function(t){function e(e){var n=t(this);e=t.extend({},e||{},n.data("countToOptions")||{}),n.countTo(e)}t(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),t(".timer").each(e)});

// nav 
$(function() {
  var navHeight = $("nav").outerHeight();
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navHeight
        }, 1000);
        return false;
      }
    }
  });
});

// whatsapp  
function closeModal(){document.getElementById("pelajar").classList.remove("active"),document.getElementById("whatsapp").classList.remove("active")}function openModal(){document.getElementById("pelajar").classList.add("active"),document.getElementById("whatsapp").classList.add("active")}

// Onclick Whatsapp Sent!
function WhatsApp(){var a="";if(""==$("#whatsapp .asal").val())return a=$("#whatsapp .asal").attr("name"),alert("Please select the city of origin "+a),$("#whatsapp .nama").focus(),!1;if(""==$("#whatsapp .ke").val())return a=$("#whatsapp .ke").attr("name"),alert("Please select the destination city "+a),$("#whatsapp .ke").focus(),!1;if(""==$("#whatsapp .tanggal").val())return a=$("#whatsapp .tanggal").attr("name"),alert("Please Specify Order Date "),$("#whatsapp .tanggal").focus(),!1;if(""==$("#whatsapp .jadwal").val())return a=$("#whatsapp .jadwal").attr("name"),alert("Please select a departure schedule "+a),$("#whatsapp .jadwal").focus(),!1;if(""==$("#whatsapp .nama").val())return a=$("#whatsapp .nama").attr("name"),alert("Please write name"),$("#whatsapp .nama").focus(),!1;if(""==$("#whatsapp .hp").val())return a=$("#whatsapp .hp").attr("name"),alert("Please write the active mobile number "+a),$("#whatsapp .hp").focus(),!1;if(""==$("#whatsapp .jumlah").val())return a=$("#whatsapp .jumlah").attr("name"),alert("Please specify the number of items "),$("#whatsapp .jumlah").focus(),!1;if(""==$("#whatsapp .jemput").val())return a=$("#whatsapp .jemput").attr("name"),alert("Please write the message "),$("#whatsapp .jemput").focus(),!1;if(""==$("#whatsapp .antar").val())return a=$("#whatsapp .antar").attr("name"),alert("Please write the complete destination address "+a),$("#whatsapp .antar").focus(),!1;if(confirm("Already installed WhatsApp?")){var t="https://wa.me/";/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t="whatsapp://send/");var e=$("#whatsapp .tujuan").val(),p=(location.href,$("#whatsapp .asal").val()),s=($("#whatsapp .ke").val(),$("#whatsapp .tanggal").val()),r=($("#whatsapp .jadwal").val(),$("#whatsapp .nama").val()),h=$("#whatsapp .hp").val(),l=$("#whatsapp .jumlah").val(),n=$("#whatsapp .jemput").val();$("#whatsapp .antar").val();$(this).attr("href",t+"?phone=62 "+e+"&text=*Message: "+p+" "+s+" %0A "+r+" %0A "+h+" %0A "+l+" %0A%0A "+n);var w=960,i=540,o=Number(screen.width/2-w/2),u=Number(screen.height/2-i/2),m=window.open(this.href,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width="+w+", height="+i+", top="+u+", left="+o);return m.focus(),!1}window.open("https://www.whatsapp.com/download/")}$("#whatsapp .submit").click(WhatsApp);var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// youvideo
function toggleVideo(e){var o=document.getElementById("youvideo"),i=o.getElementsByTagName("iframe")[0].contentWindow;o.style.display="hide"==e?"none":"",func="hide"==e?"pauseVideo":"playVideo",i.postMessage('{"event":"command","func":"'+func+'","args":""}',"*")}$(document).ready(function(){$(".play-trailer").click(function(){toggleVideo("show"),$(".moviecard").addClass("movie-view-trailer")}),$(".back-btn").click(function(){$(".moviecard").removeClass("movie-view-trailer"),toggleVideo("hide")})}),$(function(){$(".popup-youtube, .popup-vimeo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})});

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
new WOW().init();

// features
var containerHeight=$(window).height()/2;$(".spacer").css("height",containerHeight);var x=$(".features").prev().height()/4;$(window).scroll(function(){$(window).scrollTop()>=x&&$(".skill-percent").each(function(){$(this).animate({width:$(this).data("percent")+"%"},1e3)})});

// slider
$(document).ready(function(){$(".slider").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,centerMode:!0,variableWidth:!0,autoplaySpeed:1500,arrows:!1,dots:!0,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:4}},{breakpoint:520,settings:{slidesToShow:3}}]})});

// testimonial
$(document).ready(function(){$("#testimonial-slider").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!0,pauseOnHover:!1,responsive:[{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:520,settings:{slidesToShow:1}}]})});

// accordion
var accordion=function(){var o=$(".js-accordion"),c=o.find(".js-accordion-header"),e=($(".js-accordion-item"),{speed:400,oneOpen:!1});return{init:function(o){c.on("click",function(){accordion.toggle($(this))}),$.extend(e,o),e.oneOpen&&$(".js-accordion-item.active").length>1&&$(".js-accordion-item.active:not(:first)").removeClass("active"),$(".js-accordion-item.active").find("> .js-accordion-body").show()},toggle:function(o){e.oneOpen&&o[0]!=o.closest(".js-accordion").find("> .js-accordion-item.active > .js-accordion-header")[0]&&o.closest(".js-accordion").find("> .js-accordion-item").removeClass("active").find(".js-accordion-body").slideUp(),o.closest(".js-accordion-item").toggleClass("active"),o.next().stop().slideToggle(e.speed)}}}();$(document).ready(function(){accordion.init({speed:300,oneOpen:!0})});$("#toTop").click(function () {$("html,body").animate({scrollTop: 0}, 500);});

// menu
!function(s){s.fn.menumaker=function(n){var e=s(this),o=s.extend({format:"dropdown",sticky:!1},n);return this.each(function(){s(this).find(".button").on("click",function(){s(this).toggleClass("menu-opened");var n=s(this).next("ul");n.hasClass("open")?n.slideToggle(150).removeClass("open"):(n.slideToggle(150).addClass("open"),"dropdown"===o.format&&n.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){s(this).toggleClass("submenu-opened"),s(this).siblings("ul").hasClass("open")?s(this).siblings("ul").removeClass("open").slideToggle(150):s(this).siblings("ul").addClass("open").slideToggle(150)})},"multitoggle"===o.format?multiTg():e.addClass("dropdown"),!0===o.sticky&&e.css("position","fixed")})}}(jQuery),function(s){s(document).ready(function(){s("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);

// breadcrumbs
document.getElementById("bread-crumbs").appendChild(document.getElementById("breadcrumbs"));
/*]]>*/
</script>

</b:if><b:if cond='data:view.isError'>
 <section id='not-found'>
    <div id='title'>404 Error Page</div>
    <div class='circles'>
      <p>404<br/>
       <small>PAGE NOT FOUND</small>
      </p>
      <span class='circle big'/>
      <span class='circle med'/>
      <span class='circle small'/>
    </div>
  </section>
  </b:if>
</body>
</HTML>

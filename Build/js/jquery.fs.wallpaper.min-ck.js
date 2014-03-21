/* 
 * Wallpaper v3.0.5 - 2014-02-17 
 * A jQuery plugin for smooth-scaling image and video backgrounds. Part of the Formstone Library. 
 * http://formstone.it/wallpaper/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */!function(e,t){"use strict";function n(t){for(var n=e.extend({},v,t),i=e(this),s=0,o=i.length;o>s;s++)r.apply(i.eq(s),[e.extend({},n)]);return h.hasClass("wallpaper-inititalized")||(h.addClass("wallpaper-inititalized"),c.on("resize.wallpaper",n,f)),i}function r(t){var n=e(this);if(!n.hasClass("wallpaper")){e.extend(t,n.data("wallpaper-options")),n.addClass("wallpaper loading").append('<div class="wallpaper-container"></div>'),t.isAnimating=!1,t.$target=n,t.$container=t.$target.find(".wallpaper-container"),t.$target.data("wallpaper",t).on("resize.wallpaper",t,a);var r=t.source;t.source=null,i(r,t),t.onReady.call()}}function i(e,t){t.isAnimating||(t.source!==e?(t.$target.addClass("loading"),t.source=e,t.isAnimating=!0,"object"==typeof e?o(e,t):s(e,t)):t.$target.trigger("wallpaper.loaded"))}function s(t,n,r){var i=e('<div class="wallpaper-media wallpaper-image"><img /></div>'),s=i.find("img");s.one("load.wallpaper",function(){p&&i.addClass("native").css({backgroundImage:"url("+t+")"}),i.animate({opacity:1},n.speed,function(){r||u(n)}),n.isAnimating=!1,n.$target.removeClass("loading").trigger("wallpaper.loaded"),a({data:n}),r||n.onLoad.call()}).attr("src",t),i.appendTo(n.$container),(s[0].complete||4===s[0].readyState)&&s.trigger("load")}function o(t,n){if(n.source.poster&&s(n.source.poster,n,!0),!d){var r=e('<div class="wallpaper-media wallpaper-video"></div>'),i="<video";n.loop&&(i+=" loop"),i+=">",n.source.webm&&(i+='<source src="'+n.source.webm+'" type="video/webm" />'),n.source.mp4&&(i+='<source src="'+n.source.mp4+'" type="video/mp4" />'),n.source.ogg&&(i+='<source src="'+n.source.ogg+'" type="video/ogg" />'),i+="</video>",r.append(i).find("video").one("loadedmetadata",function(){r.appendTo(n.$container).animate({opacity:1},n.speed,function(){u(n)}),n.isAnimating=!1,n.$target.removeClass("loading").trigger("wallpaper.loaded"),a({data:n}),n.onLoad.call(),n.hoverPlay?n.$target.on("mouseover.boxer",m.play).on("mouseout.boxer",m.stop):n.autoPlay&&this.play()})}}function u(e){var t=e.$container.find(".wallpaper-media");t.length>=1&&t.not(":last").remove()}function a(e){e.preventDefault&&(e.preventDefault(),e.stopPropagation());for(var t=e.data,n=t.$container.find(".wallpaper-media"),r=0,i=n.length;i>r;r++){var s=n.eq(r),o=s.find("video").length?"video":"image",u=s.find(o);if(u.length&&("image"!==o||!t.nativeSupport)){var a=t.$target.outerWidth(),f=t.$target.outerHeight(),c=l(u);t.width=c.naturalWidth,t.height=c.naturalHeight,t.left=0,t.top=0;var h=t.width/t.height;t.height=f,t.width=t.height*h,t.width<a&&(t.width=a,t.height=t.width/h),t.left=-(t.width-a)/2,t.top=-(t.height-f)/2,s.css({height:t.height,width:t.width,left:t.left,top:t.top})}}}function f(){e(".wallpaper").each(function(){var t=e(this).data("wallpaper");a({data:t})})}function l(e){if(e.is("img")){var t=e[0];if("undefined"!=typeof t.naturalHeight)return{naturalHeight:t.naturalHeight,naturalWidth:t.naturalWidth};var n=new Image;return n.src=t.src,{naturalHeight:n.height,naturalWidth:n.width}}return{naturalHeight:e[0].videoHeight,naturalWidth:e[0].videoWidth}}var c=e(t),h=e("body"),p="backgroundSize"in document.documentElement.style,d=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(t.navigator.userAgent||t.navigator.vendor||t.opera),v={autoPlay:!0,hoverPlay:!1,loop:!0,onLoad:e.noop,onReady:e.noop,source:null,speed:500},m={defaults:function(t){return v=e.extend(v,t||{}),e(this)},destroy:function(){var t=e(this).each(function(){var t=e(this).data("wallpaper");t.$target.removeClass("wallpaper").off(".boxer"),t.$container.remove()});return e(".wallpaper").length<1&&(h.removeClass("wallpaper-inititalized"),c.off(".wallpaper")),t},load:function(t){return e(this).each(function(){var n=e(this).data("wallpaper");n&&i(t,n)})},play:function(){return e(this).each(function(){var t=e(this).data("wallpaper");if(t){var n=t.$container.find("video");n.length&&n[0].play()}})},stop:function(){return e(this).each(function(){var t=e(this).data("wallpaper");if(t){var n=t.$container.find("video");n.length&&n[0].pause()}})}};e.fn.wallpaper=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?this:n.apply(this,arguments)},e.wallpaper=function(e){"defaults"===e&&m.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);
function goToAssetsCenter(){ajaxPostJson(basePath()+"/assets/getAssetsCenter.jspx",function(e,t){window.open(e.URL,"_blank")})}function ajaxPostJson(e,t,o){ajax(e,t,o,"POST")}function basePath(){var e=window.document.location.href;return e.indexOf("lingtou/")>=0?"http://"+window.location.host+"/lingtou":e.indexOf("lingtouweb/")>=0?"http://"+window.location.host+"/lingtouweb":""}function ajax(e,t,o,n){$.ajax({url:e,data:o,type:n,async:!0,cache:!1,success:function(e,o){if(e.authorized){if(e.invalidLogin)return void(location.href=basePath()+"/index.shtml");location.href=basePath()+"/login.shtml"}else t&&t(e,o)}})}function realizationList(e,t){var o="";"LIST"==t?o="https://www.itoumi.com/bxt/index.html":"DAYDAYGOLDENINDEX"==t?o="https://www.itoumi.com/sxb/index.html":"SHOW"==t?o="https://www.itoumi.com/bxt/showAssets.html":"DAYDAYGOLDEN"==t&&(o="https://www.itoumi.com/sxb/showAssets.html");var n=window.open(o,"_blank");ajaxPostJson(basePath()+"/realization/revenueList.jspx",function(e,t){n.location.href=e.URL},{userId:e,type:t})}function sxbList(e){var t="https://www.itoumi.com/sxb/index.html",o=window.open(t,"_blank");o.location.href=e?t+"?userId="+e:t}function setCurPage(e){e&&""!=e&&($.cookie("pc_curpage")&&$.cookie("pc_curpage")!=e&&$.cookie("pc_lastpage",$.cookie("pc_curpage"),{path:"/"}),e&&""!=e?$.cookie("pc_curpage",e,{path:"/"}):$.cookie("pc_curpage",null,{expires:-1,path:"/"}))}!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function o(e){return s.raw?e:decodeURIComponent(e)}function n(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(r," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function a(t,o){var n=s.raw?t:i(t);return e.isFunction(o)?o(n):n}var r=/\+/g,s=e.cookie=function(i,r,c){if(void 0!==r&&!e.isFunction(r)){if(c=e.extend({},s.defaults,c),"number"==typeof c.expires){var u=c.expires,p=c.expires=new Date;p.setDate(p.getDate()+u)}return document.cookie=[t(i),"=",n(r),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],h=0,l=f.length;l>h;h++){var w=f[h].split("="),x=o(w.shift()),m=w.join("=");if(i&&i===x){d=a(m,r);break}i||void 0===(m=a(m))||(d[x]=m)}return d};s.defaults={},e.removeCookie=function(t,o){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},o,{expires:-1})),!0):!1}}),setCurPage("/index.shtml");
!function(e){var o={};function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)t.d(n,i,function(o){return e[o]}.bind(null,i));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";var n=this&&this.__awaiter||function(e,o,t,n){return new(t||(t=Promise))((function(i,r){function a(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var o;e.done?i(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(a,l)}d((n=n.apply(e,o||[])).next())}))},i=this&&this.__generator||function(e,o){var t,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=o.call(e,a)}catch(e){r=[6,e],n=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};o.__esModule=!0;var r=t(1);$(document).ready((function(){if(-1!=window.location.href.indexOf("localhost"))var e="http://localhost:8080";else e="https://cryptic-basin-95763.herokuapp.com";console.log("url set to "+window.location.href);var o=$(window).width(),t=$(window).height();console.log("windowWidth: "+o+", windowHeight:"+t);var a,l=.9*o,d=.6*l,s=.85*l,c=.5*s,u=(new r.default(1),1);function v(){console.log(a);a.videoData[0].videos,a.videoData[1].videos}function b(e){for(var o=1;o<2;o++)f(e,o)}function f(e,o){var t="#video-"+e+"-time-"+o,n=$(t).val(),i="#video-"+e+"-link-"+o;console.log("----"+t+": "+n);var r=h(n);console.log("--result seconds: "+r),_(e,i,r),$(t).change((function(){var o=h($(t).val());console.log("Bookmark val changed: "+o),_(e,i,o)}))}function g(e){$("#video-"+e+"-add-bookmark").click((function(){m(e,2)}))}function m(e,o){f(e,o),o++;var t="#video-"+e+"-insert-before-me";console.log("add video bookmarkCnt: "+o),function(e,o,t){var n="video-"+t+"-time-"+o,i="video-"+t+"-bm-"+o,r='<button id="video-'+t+"-link-"+o+'" \n                        class="timestampBtn">hh:mm:ss</button>',a="#video-"+t+"-add-bookmark";$(a).remove(),$(e).before("\n            <div>\n                "+r+'\n                <input id="'+n+'" type=\'time\' class="without_ampm" step="1" value="00:00:00">   \n                <div>\n                    <textarea id="'+i+'" cols="35" placeholder="Bookmark notes"></textarea>\n                </div>  \n                <button type="button" id="video-'+t+'-add-bookmark" class="add-bookmark btn btn-primary">Add New</button>\n            </div>\n        '),$(a).click((function(){m(t,o)}))}(t,o,e)}function p(e){$("#video-"+e+"-submit-book").click((function(){alert("Book updating..."),T(e)}))}function h(e){var o=parseInt(e.substring(0,2));12==o&&(o=0);var t=parseInt(e.substring(3,5)),n=parseInt(e.substring(6,8));return n||(n=0),console.log(o+","+t+","+n),n+=60*t+3600*o,console.log("seconds: "+n),n}function y(){$("#dialog-add-bookmark").click((function(){var e,o,t,n;u++,console.log("add dialog bookmarkCnt: "+u),e="#dialog-insert-before-me",t="dialog-time-"+(o=u),n="dialog-bm-"+o,$("#dialog-add-bookmark").remove(),$(e).before('\n            <div>\n                <label for="dialog-Bookmarks">hh:mm:ss </label> \n                <input id="'+t+'" type=\'time\' class="without_ampm" step="1" value="00:00:00">   \n                <div>\n                    <textarea id="'+n+'" cols="35" placeholder="Bookmark notes"></textarea>\n                </div>  \n                <button type="button" id="dialog-add-bookmark" class="add-bookmark btn btn-primary">Add New</button>\n            </div>\n        '),y()}))}function k(e,o){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(o)})];case 1:return[2,t.sent()]}}))}))}function w(o){n(this,void 0,void 0,(function(){var t,n;return i(this,(function(i){switch(i.label){case 0:return console.log("readAll called"),t=e+"/video/eric/readAll",console.log("readAll: fetching all videos"),[4,fetch(t)];case 1:return[4,i.sent().json()];case 2:return"error"!==(n=i.sent()).result?(console.log("Label videos read. Data: "+JSON.stringify(n)),a=n,o()):console.log("Error; video not read."),[2]}}))}))}function T(o){n(this,void 0,void 0,(function(){var t,n,r,a,l,d,s;return i(this,(function(i){switch(i.label){case 0:return t=document.getElementsByClassName("video-"+o+"-category")[0].id.substring(9),n=document.getElementsByClassName("video-"+o+"-label")[0].id.substring(6),r=e+"/video/eric/update?category="+t+"&label="+n,a=$("#video-"+o+"-notes").val(),l=D("#video-"+o+"-time-","#video-"+o+"-bm-",2),d={videoObj:{category:t,label:n,bookmarks:l,notes:a}},console.log(d),[4,k(r,d)];case 1:return[4,i.sent().json()];case 2:return"error"!==(s=i.sent()).result?(console.log("Video updated. Data: "+JSON.stringify(s)),document.getElementById("outputText").innerHTML="Success; video updated. Data: "+JSON.stringify(s)):document.getElementById("outputText").innerHTML="Error; video not updated.",[2]}}))}))}function x(){var e=$("#dialog-title").val();return console.log("-- getDialogTitle: "+e),e||(alert("Please enter a Title"),!1)}function N(){var e=$("#dialog-select-category").find(":selected").text();return"Choose Category"===e?(alert("Please select a Category. Sorry we are unable to process new categories currently."),!1):e}function B(){var e=$("#dialog-select-label").find(":selected").text();return"Choose Label"===e?(alert("Please select a Label. Sorry we are unable to process new labels currently."),!1):e}function D(e,o,t){for(var n=[],i=0;i<t;i++){var r=i+1,a=e+r,l=o+r;console.log("timestampdiv:"+a+"\ntimestampNotesDiv: "+l);var d=$(a).val(),s=$(l).val();"00:00:00"!=d?n[i]={timestamp:d,timestampNotes:s}:console.log(r+") Did not add timestamp.\nTimestampVal: "+d+", timestampNotesVal: "+s)}return n}function E(e){if(function(e){if(!e.match(/v=([^&]+)/))return!1;return!0}(e)){var o=function(e){var o=e.match(/v=([^&]+)/);return console.log(o),o[1]}(e);console.log(o),L(void 0,0,"player1",o,!1),$(".dialog-other").show()}else alert("Please enter a valid YouTube Video URL")}w(v),function e(){"undefined"!=typeof YT&&YT&&YT.Player?function(){for(var e=1;e<4;e++){var o="video-"+e;console.log(o);var t=!1;3==e&&(t=!0),L(null,e,o,S,t)}!function(){for(var e=1;e<4;e++)console.log("------initvideodata for video "+e),b(e),g(e),p(e)}()}():setTimeout(e,100)}(),$("#dialog-submit-book").click((function(){(function(){if(!N()||!B()||!x())return!1;return!0})()&&(alert("Book submitted"),$("#dialog-add-video").dialog("close"),function(){var o=this;n(o,void 0,void 0,(function(){var o,t,n,r,a,l,d,s,c;return i(this,(function(i){switch(i.label){case 0:return console.log("----- In videoCreate -------"),o=$("#dialog-url").val(),t=x(),n=N(),r=B(),a=$("#dialog-Notes").val(),l=D("#dialog-time-","#dialog-bm-",u),console.log("url: "+o+"\n title: "+t+"\n category: "+n+"\n label: "+r+"\n notes: "+a+"\n bookmarks:"),d=e+"/video/eric/create",console.log(d),s={videoObj:{category:n,label:r,title:t,videoUrl:o,bookmarks:l,notes:a}},console.log("in videoCreate video obj: "),console.log(s),[4,k(d,s)];case 1:return[4,i.sent().json()];case 2:return"error"!==(c=i.sent()).result?(console.log("Video created. Data: "+JSON.stringify(c)),document.getElementById("outputText").innerHTML="Success; video created. Data: "+JSON.stringify(c)):document.getElementById("outputText").innerHTML="Error; video not created.",[2]}}))}))}(),window.location.reload())})),$("#readTestBtn").click((function(){alert("Book read"),function(){var o=this;n(o,void 0,void 0,(function(){var o,t;return i(this,(function(n){switch(n.label){case 0:return console.log("videoRead called"),o=e+"/video/eric/read?category=someCategory&label=someLabel",console.log("videoRead: fetching "+o),[4,fetch(o)];case 1:return[4,n.sent().json()];case 2:return"error"!==(t=n.sent()).result?(console.log("Video read. Data: "+JSON.stringify(t)),document.getElementById("outputText").innerHTML="Success; video read. Data: "+JSON.stringify(t)):document.getElementById("outputText").innerHTML="Error; video not read.",[2]}}))}))}()})),$("#readAllTestBtn").click((function(){alert("All books read"),w(v)})),$(".dialog-other").hide(),$("#dialog-url").bind("paste",(function(){var e;e=E,navigator.clipboard.readText().then(e)})),$("#delete-video").button({icons:{primary:"ui-icon-trash"},text:!1}),$("#delete-video").click((function(o){confirm("Are you sure you want to delete this book?"),$("#video-"+o+"-submit-book").click((function(){alert("Deleting book."),T(o)})),function(o){var t=this;n(t,void 0,void 0,(function(){var t,n,r,a;return i(this,(function(i){switch(i.label){case 0:return console.log("---- in videoDelete ----"),t=document.getElementsByClassName("video-"+o+"-category")[0].id.substring(9),n=document.getElementsByClassName("video-"+o+"-label")[0].id.substring(6),r=e+"/video/eric/delete?category="+t+"&label="+n+"&videoId="+S,console.log("videoDelete: fetching "+t,NaN+n+", "+S),[4,fetch(r)];case 1:return[4,i.sent().json()];case 2:return"error"!==(a=i.sent()).result?(console.log("Video deleted. Data: "+JSON.stringify(a)),document.getElementById("outputText").innerHTML="Success; video deleted. Data: "+JSON.stringify(a)):document.getElementById("outputText").innerHTML="Error; video not deleted.",[2]}}))}))}(o)})),y();var O=[],S="XlvsJLer_No";function L(e,o,t,n,i){console.log("trigger youtube player"),null==e?(O[o]=new YT.Player(t,{width:s,height:c,videoId:n,events:{onReady:C(event,i)}}),console.log(O[o])):e=new YT.Player(t,{width:s,height:c,videoId:n,events:{onReady:C(event,i)}})}function C(e,o){o&&(console.log("trigger lastVideo onPlayerReady. Now can call accordion"),console.log("trigger initAccordion"),console.log("---- Video players ---"),console.log(O),$(".Label-Body").accordion({header:"> div > h3",active:!1,collapsible:!0,heightStyle:"content"}).sortable({axis:"y",handle:"h3",stop:function(e,o){o.item.children("h3").triggerHandler("focusout"),$(this).accordion("refresh")},update:function(){var e;e=$(".Label-Body").sortable("toArray"),console.log("new sortedIds: "+e)}}))}function _(e,o,t){$(o).click((function(){O[e].seekTo(t,!0)}))}$("#dialog-add-video").dialog({autoOpen:!1,width:l,height:d,resizable:!0}),$("#addVideoBtn").click((function(){$("#dialog-add-video").dialog("open")})),$("#dialog-edit-order").dialog({autoOpen:!1,width:800,height:600,resizable:!1}),$("#image-icon").click((function(){$("#dialog-edit-order").dialog("open")}))}))},function(e,o,t){"use strict";o.__esModule=!0;var n=function(){function e(e){this.categories=[],this.videoNum=e}return e.prototype.insertCategoryDiv=function(e){var o=this;e.forEach((function(e){$("#category-insert-before-me").before('\n            <button class="category-btn" id="Category-'+e+'" >'+e+'</button>\n            <div class="'+e+'" id="Category-'+e+"\">     \n              <div id = 'label-insert-before-me'></div>\n            </div>\n        "),o.insertLabelDiv(e)}))},e.prototype.insertLabelDiv=function(e){var o=this;e.forEach((function(e){$("#label-insert-before-me").before('  \n              <button class="label-btn" id="Label-'+e+'">'+e+'</button>  \n                <div class="Label-Body" id="Label-Body-'+e+"\">\n                    <div id = 'video-insert-before-me'></div>\n                </div>\n        "),e.forEach((function(e){o.insertVideoDiv(e.videoNum)}))}))},e.prototype.insertVideoDiv=function(e){var o=document.getElementsByClassName("video-"+e+"-category")[0].id.substring(9),t=document.getElementsByClassName("video-"+e+"-label")[0].id.substring(6);$("#video-"+e+"-notes").val();$("#video-insert-before-me").before('\n            <div class="panel-body">\n                <div class = "video-section" id="video-'+e+'"></div>\n                <div class="video-text">\n                    <p class = "video-'+e+'-category" id = "Category-'+o+'"></p>\n                    <p class = "video-'+e+'-label" id = "Label-'+t+'"></p>\n                    <p id = "videoNum-'+e+'"></p>\n                    <div class="dialog-notes">\n                    <label for="dialog-Notes" class="boxTitle">Notes</label> \n                    <div>\n                        <textarea id="video-'+e+'-notes" cols="35"></textarea>\n                    </div>           \n                    </div>\n\n                    <div class="boxTitle"><b>Bookmarks</b></div>\n\n                    <div class="all-bookmarks">\n                    <div class="video-bookmarks">\n                        \x3c!-- TODO TRENT UPDATE get data from fields on submit when edited--\x3e\n                        \n                        <button id="video-'+e+'-link-1" class="timestampBtn" >hh:mm:ss</button>  \n\n                        <input id="video-'+e+'-time-1" type=\'time\' class="without_ampm" step="1" required value="00:01:10"> \n                        <div>\n                        <textarea class="bookmark-notes" id="video-'+e+'-bm-1" cols="35"></textarea>\n                        </div>\n                    </div>\n\n\n                    <div class="dialog-bookmarks">\n                        \x3c!-- TODO TRENT UPDATE get data from fields on submit when edited--\x3e  \n                        <div class="boxTitle"><b>Add New Bookmarks</b></div>\n                        <button id="video-'+e+'-link-2" class="timestampBtn" >hh:mm:ss</button>  \n                        <input id="video-'+e+'-time-2" type=\'time\' class="without_ampm" value="00:00:00" step="1" required>  \n                        <div>\n                        <textarea class="bookmark-notes" id="video-'+e+'-bm-2" cols="35"></textarea>\n                        </div>\n                        <button type="button" id="video-'+e+'-add-bookmark" class="add-bookmark btn btn-primary">Add New</button>\n                        <div id="video-'+e+'-insert-before-me"></div>\n                    </div> \n\n                    \n                    <div class="dialog-footer">\n                        <button type="button" id="video-'+e+'-submit-book" class="submitBtn btn btn-success">Submit</button>\n                    </div>\n                    </div>\n\n                    <button onClick="deleteVideo()" id ="delete-video">Delete</button>\n                </div>\n            </div>\n        ')},e}();o.default=n}]);
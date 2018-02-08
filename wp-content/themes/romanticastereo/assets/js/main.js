;(function($){

  

  function isHome(){
      return $('body').hasClass('home');
    }
    
  
    $('.contact-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {

                this.st.mainClass = 'mfp-zoom-out';
                $('body').addClass('mfp-open');
            },
            beforeClose: function () {


                $('body').removeClass('mfp-open');
            }

        }


    });

    //initPlayer();
// function initPlayer() {
//     window.onloadRetry = 0;
//     window.soundManager = new SoundManager();
//     window.volume = 100;

//     // Setup SoundManager

//     soundManager.setup({
//         debugMode: false, flashLoadTimeout: 1000, flashVersion: 9, preferFlash: false, url: $("#sm-button-container").data("url-static") + "img/swf/",
//         useHighPerformance: true, useHTML5Audio: true, waitForWindowLoad: false, onready: function () {
//             soundManager.createSound({
//                 id: "webradio",
//                 url: [{
//                     type: "audio/aac",
//                     url: "http://144.217.76.188:8193/;"// http://majestic.wavestreamer.com:7893/;"
//                 }],
//                 autoLoad: true, autoPlay: true, multiShot: false, volume: volume,
//                 onconnect: function (bConnect) {

//                     setButtonStop();

//                 },
//                 onfailure: function () {
//                     setButtonError();
//                 },
//                 onload: function (bSuccess) {
//                     if (bSuccess == true) {



//                         setButtonStop();



//                     } else {
//                         if (window.onloadRetry != 2) {
//                             window.onloadRetry++;
//                             soundManager.reboot();
//                         } else {
//                             setButtonError();
//                         }
//                     }

//                 },
//                 onplay: function () {
//                     setButtonPreloader();
//                 }
//             });
//         },
//         ontimeout: function () {
//             setButtonError();
//         }
//     });

//     // Set the audio controls
//     $("#sm-audio-icon").unbind("click").on("click", function (e) {
//         e.preventDefault();
//         e.stopPropagation();

//         if ($(this).attr("data-state") == "On" && $("input[type=range]").val() > 0) {
//             document.cookie = "volume_unmute=" + volume + "; path=/"; setButtonMute(); $("input[type=range]").val(0).change(); soundManager.mute("webradio");
//         } else if ($(this).attr("data-state") == "Off" || $("input[type=range]").val() === 0) {
//             volume = getCookieValue("volume_unmute"); volume = ($.isNumeric(volume) && volume > 0 && volume <= 100) ? volume : 50; setButtonUnMute(); $("input[type='range']").val(volume).change(); soundManager.unmute("webradio");
//         }
//     });

//     // Set the play controls
//     $(".sm-button").bind("click", function () {
//         if ($(this).attr("alt") == "Flash") {
//             window.open("https://get.adobe.com/flashplayer/");
//         } else if ($(this).attr("alt") == $("#sm-button-container").data("play")) {
//             setButtonStop();
//             ($("#sm-button-container").data("device-category") != "desktop") ? soundManager.play("webradio") : soundManager.play("webradio");
//         } else if ($(this).attr("alt") == $("#sm-button-container").data("start")) {
//             setButtonPreloader();
//             ($("#sm-button-container").data("device-category") != "desktop") ? soundManager.play("webradio") : "";
//         } else if ($(this).attr("alt") == $("#sm-button-container").data("stop")) {
//             setButtonPlay();
//             ($("#sm-button-container").data("device-category") != "desktop") ? soundManager.unload("webradio") : soundManager.unload("webradio");
//         }
//     });

//     // Kick-start the SoundManager init process?
//     if ($("#sm-button-container").data("flash-mode") == "1" && typeof (detectFlash) === "function" && !detectFlash()) {
//         setButtonFlash();
//     } else {
//         $("#sm-button-container").data("device-category") == "desktop" ? addVolumeSider() : ""; soundManager.beginDelayedInit();
//     }


//     function getCookieValue(t, i) {
//         return i = document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]+)"), i ? i.pop() : ""
//     }

//     function detectFlash() {
//         if (null !== navigator.plugins && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) return navigator.plugins["Shockwave Flash"] && !0;
//         if (~navigator.userAgent.toLowerCase().indexOf("webtv")) return !0;
//         if (~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")) try {
//             return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && !0
//         } catch (t) { }
//         return !1
//     }

//     function addVolumeSider() {
//         volume = parseInt(getCookieValue("volume")), volume = $.isNumeric(volume) && volume >= 0 && volume <= 100 ? volume : 100, $("input[type=range]").attr("value", volume).val(volume).change(), $("input[type=range]").rangeslider({
//             polyfill: !1,
//             onInit: function () {
//                 (0 === volume ? setButtonMute : setButtonUnMute)()
//             }
//         }).on("input", function () {
//             volume = parseInt(this.value), document.cookie = "volume=" + volume + "; path=/", (0 === volume ? setButtonMute : setButtonUnMute)(), soundManager.setVolume(volume)
//         })
//     }

//     function setButtonMute() {
//         $("#sm-audio-icon").attr("data-state", "Off").attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-off.png")
//     }

//     function setButtonUnMute() {
//         $("#sm-audio-icon").attr("data-state", "On").attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-on.png")
//     }

//     function setButtonError() {
//         $(".sm-button").hide().attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-fail.png").attr("alt", $("#sm-button-container").data("error")).attr("id", "sm-button-fail").css({
//             padding: "22% 24%"
//         }).show()/*, ga("send", "event", {
//             eventCategory: "Player",
//             eventAction: "Error"
//         })*/
//     }

//     function setButtonPreloader() {
//         $(".sm-button").hide().attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-loading.gif").attr("alt", $("#sm-button-container").data("loading")).attr("id", "sm-button-preloader").css({
//             padding: "25% 26%"
//         }).show()
//     }

//     function setButtonPlay() {
//         $(".sm-button").hide().attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-play.png").delay(200).attr("alt", $("#sm-button-container").data("play")).attr("id", "sm-button-play").css({
//             padding: "25% 29%"
//         }).show()
//     }

//     function setButtonStop() {
//         $(".sm-button").hide().attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/audio-stop.png").delay(200).attr("alt", $("#sm-button-container").data("stop")).attr("id", "sm-button-stop").css({
//             padding: "26%"
//         }).show()
//     }

//     function setButtonFlash() {
//         $(".sm-button").attr("src", $("#sm-button-container").data("url-static") + "img/player-icons/button-get-flash-player.png").attr("alt", "Flash").attr("id", "sm-button-flash")
//     }
// }
 



$(window).load(function() {
      
      resize();
     

});


$(window).resize(resize);

function resize () {
   responsive();
}

function responsive() {
           
               

               
            
}


    
})(jQuery);


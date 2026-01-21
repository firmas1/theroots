// JavaScript Document

//detect OS and BROWSER ====================================
var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = 'mac';
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = 'ios';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = 'windows';
} else if (/Android/.test(userAgent)) {
  os = 'android';
} else if (!os && /Linux/.test(platform)) {
  os = 'linux';
}

function getBrowserName() {
  var browserName = (function (agent) {
    switch (true) {
      case agent.indexOf("edge") > -1:
        return "MS";
      case agent.indexOf("edg/") > -1:
        return "Chrome";
      case agent.indexOf("opr") > -1 && !!window.opr:
        return "Chrome";
      case agent.indexOf("chrome") > -1 && !!window.chrome:
        return "Chrome";
      case agent.indexOf("trident") > -1:
        return "MS";
      case agent.indexOf("firefox") > -1:
        return "Firefox";
      case agent.indexOf("safari") > -1:
        return "Safari";
      default:
        return "other";
    }
  })(window.navigator.userAgent.toLowerCase());
  return browserName;
}

browser = getBrowserName();
//os = "ios";

console.log(os);
console.log(browser)
// END DETECTION


// STEP 2 -- SHOW OPTIONS ====================================
//hide first
function hideDivs() {
  var divs = document.getElementsByClassName("div_hidden");
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

}

function showOptions() {
  hideDivs();

  //show
  document.getElementById("showOptions").style.display = "block";


  switch (os) {
    case 'mac':
      document.getElementById("mac-mail").style.display = "inline-block";
      document.getElementById("gmail").style.display = "inline-block";
      break;

    case 'windows':
      document.getElementById("win-outlook").style.display = "inline-block";
      document.getElementById("gmail").style.display = "inline-block";
      break;

    default:
      document.getElementById("mac-mail").style.display = "block";
      break;
  }
}

if (os == "mac" || os == "windows") {
  showOptions();
} else {
  showSignature('other')
}

//END STEP2

// STEP3 ONCLICK SHOW SIGNATURE OR NOSUPPORT    ============================

function showSignature(clicOption) {
  hideDivs();

  document.getElementById("goback").style.display = "block";

  switch (clicOption) {
    case 'mail-mac':
        document.getElementById("webSignature").style.display = "block";
        document.getElementById("instructions-html").style.display = "block";
        document.getElementById("stepsMail").style.display = "block";
      break;
    case 'gmail':
        document.getElementById("webSignature").style.display = "block";
        document.getElementById("instructions-html").style.display = "block";
        document.getElementById("stepsGmail").style.display = "block";
      break;

    default: 
          document.getElementById("bakedSignature").style.display = "block";
          document.getElementById("instructions-baked").style.display = "block";
        
          switch(os){
              case 'windows':
                    document.getElementById("stepsOutlook").style.display = "block";
                    break;
                  
              case 'android':
                    document.getElementById("stepsAndroid").style.display = "block";
                    break;
              case 'ios':
                    document.getElementById("stepsIos").style.display = "block";
                    break;

          }

        break;
      }
    
    
  }


//showAll()

  // SKIP ALL  =========================================

  function showAll() {
    hideDivs();
    document.getElementById("webSignature").style.display = "block";
    document.getElementById("bakedSignature").style.display = "block";
    document.getElementById("goback").style.display = "block";
  }

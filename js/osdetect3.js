// ==============================
// OS & BROWSER DETECTION
// ==============================


  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform;

  let os = null;

  // -------- URL FORCE (?android, ?iphone, etc)
  const params = window.location.search.toLowerCase();

  if (params.includes('android')) {
    os = 'android';
  } else if (params.includes('iphone') || params.includes('ios')) {
    os = 'ios';
  } else if (params.includes('windows')) {
    os = 'windows';
  } else if (params.includes('mac')) {
    os = 'mac';
  }
function getForcedOSFromURL() {
  var query = window.location.search.replace('?', '').toLowerCase();

  if (!query) return null;

  // Permitir ?android o ?os=android
  if (query === 'android' || query.indexOf('android') !== -1) return 'android';
  if (query === 'windows' || query.indexOf('windows') !== -1) return 'windows';
  if (query === 'mac' || query.indexOf('mac') !== -1) return 'mac';
  if (query === 'iphone' || query.indexOf('iphone') !== -1 || query.indexOf('ios') !== -1) return 'ios';

  return null;
}
	os = getForcedOSFromURL();
  console.log('Detected OS:', os);
  // -------- AUTO DETECTION (only if no URL override)
  if (!os) {
    if (/mac/.test(platform.toLowerCase())) {
      os = 'mac';
    } else if (/iphone|ipad|ipod/.test(ua)) {
      os = 'ios';
    } else if (/win/.test(platform.toLowerCase())) {
      os = 'windows';
    } else if (/android/.test(ua)) {
      os = 'android';
    } else {
      os = 'other';
    }
  }

  console.log('Detected OS:', os);

  // ==============================
  // UI HELPERS
  // ==============================

  function hideDivs() {
    document.querySelectorAll('.div_hidden').forEach(div => {
      div.style.display = 'none';
    });
  }

  function show(id, display = 'block') {
    const el = document.getElementById(id);
    if (el) el.style.display = display;
  }

  // ==============================
  // STEP 2 – SHOW OPTIONS
  // ==============================
	
  function showOptions() {
    hideDivs();

    show('showOptions');

    switch (os) {
      case 'mac':
        show('mac-mail', 'inline-block');
        show('gmail', 'inline-block');
        break;

      case 'windows':
        show('win-outlook', 'inline-block');
        show('gmail', 'inline-block');
        break;

      default:
        //show('win-outlook', 'inline-block');
		    document.getElementById("bakedSignature").style.display = "block";

        break;
    }
  }

  if (os === 'mac' || os === 'windows') {
    showOptions();
  } else {
        document.getElementById("bakedSignature").style.display = "block";

  }

  // ==============================
  // STEP 3 – SHOW SIGNATURE
  // ==============================

  window.showSignature = function (clicOption) {

    hideDivs();
    show('goback');

    switch (clicOption) {

      case 'mail-mac':
        show('webSignature');
        show('instructions-html');
        show('stepsMail');
        break;

      case 'gmail':
        show('webSignature');
        show('instructions-html');
        show('stepsGmail');
        break;

      default:
        show('bakedSignature');
        show('instructions-baked');

        switch (os) {
          case 'windows':
            show('stepsOutlook');
            break;
          case 'android':
            //show('stepsAndroid');
            break;
          case 'ios':
            //show('stepsIos');
            break;
        }
        break;
    }
  };





//showAll()

  // SKIP ALL  =========================================

  function showAll() {
    hideDivs();
    document.getElementById("webSignature").style.display = "block";
    document.getElementById("bakedSignature").style.display = "block";
    document.getElementById("goback").style.display = "block";
  }

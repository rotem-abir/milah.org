import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		$w("#navigationRTL").hide();
		$w("#navigationLTR").show();
	}
	else if (myLang === "he") {
		$w("#navigationLTR").hide();
		$w("#navigationRTL").show();
	}
});
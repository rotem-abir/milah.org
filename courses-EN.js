import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}
	else if (myLang === "he") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
		let url = wixLocation.url;
		url = url.slice(0, -8);
		url += '-rtl?lang=he';
		wixLocation.to(url);
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
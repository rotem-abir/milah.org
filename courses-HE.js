import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
		let url = wixLocation.url;
		url = url.slice(0, -4);
		wixLocation.to(url);
	}
	else if (myLang === "he") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
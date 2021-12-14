import wixWindow from 'wix-window';

let myLang;

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}
	else if (myLang === "he") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
	}
});
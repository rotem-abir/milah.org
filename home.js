import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
	}
	else if (myLang === "he") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
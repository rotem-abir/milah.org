import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
        toggleLang ( $w("#stripeRTL"), $w("#stripeLTR") );
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}
	else if (myLang === "he") {
        toggleLang ( $w("#stripeLTR"), $w("#stripeRTL") );
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
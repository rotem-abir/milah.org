import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
        toggleLang ( $w("#stripeRTL"), $w("#stripeLTR") );
	}
	else if (myLang === "he") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
        toggleLang ( $w("#stripeLTR"), $w("#stripeRTL") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
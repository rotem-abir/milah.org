import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
	
	$w('#contactButton').link += '?lang=he';

	myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === "en") {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}
	else if (myLang === "he") {
        toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
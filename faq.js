import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {
    myLang = wixWindow.multilingual.currentLanguage;
	if (myLang === 'en') {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
		toggleLang ( $w("#faqHE"), $w("#faqEN") );
	}
	else if (myLang === 'he') {
		toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
		toggleLang ( $w("#faqEN"), $w("#faqHE") );
	}
});

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
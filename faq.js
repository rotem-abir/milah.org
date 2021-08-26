import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {

    myLang = wixWindow.multilingual.currentLanguage;
        if (myLang === 'en') {
			$w('#faqEN').show();
			$w('#faqHE').hide();
		}
        else if (myLang === 'he') {
            $w('#faqHE').show();
			$w('#faqEN').hide();
		}
});
import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {

    myLang = wixWindow.multilingual.currentLanguage;
        if (myLang === 'en') {
			changePosition( $w('#staffRepeater'), "Executive Director")
		}
        else if (myLang === 'he') {
			changePosition( $w('#staffRepeater'), 'מנכ"לית')
		}
});

function changePosition (repeater, position) {
	repeater.onItemReady(($item, itemData, index) => {
		if (itemData.title === "Dr. Clila Gerassi-Tishby") {
			$item('#staffPosition').text = position;
		}
	 });
}
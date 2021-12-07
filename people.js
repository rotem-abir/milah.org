import wixWindow from 'wix-window';
import wixData from 'wix-data';

let device;
let myLang;

$w.onReady(function () {
	device = wixWindow.formFactor;
    myLang = wixWindow.multilingual.currentLanguage;
	
	changePosition( $w('#staffRepeater') )

	if (device !== 'Desktop') {
		$w("#datasetStaff").setSort( wixData.sort()
			.descending("_createdDate") //.ascending("_createdDate")
		);
	}

	if (myLang === 'en') {
		toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
	}

    else if (myLang === 'he') {
		toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
		$w('#datasetStaff').onReady( () => {
			$w('#staffRepeater').onItemReady( ($w, itemData) => {
				$w('#staffTitle').text = itemData.nameHe;
				$w('#staffBio').text = itemData.infoHe;
			});
		});
		$w('#datasetTeachers').onReady(function() {
			$w('#teachersRepeater').onItemReady( ($w, itemData) => {
				$w('#teachersTitle').text = itemData.nameHe;
				$w('#teachersBio').text = itemData.infoHe;
			});
		});
	}
});

function changePosition (repeater) {
	repeater.onItemReady(($item, itemData, index) => {
		switch(myLang) {
			case 'en':
				if (itemData.title === "Dr. Clila Gerassi-Tishby") {
					$item('#staffPosition').text = "Executive Director";
				}
				else {
					$item('#staffPosition').text = "Office Manager";
				}
				break;
			case 'he':
				if (itemData.title === "Dr. Clila Gerassi-Tishby") {
					$item('#staffPosition').text = 'מנכ"לית';
				}
				else {
					$item('#staffPosition').text = "מנהלת משרד";
				}
				break;
		}
	 });
}

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}
import wixWindow from 'wix-window';
import wixData from 'wix-data';

let myLang;

$w.onReady(function () {
    myLang = wixWindow.multilingual.currentLanguage;
    if (myLang === 'en') {
		changePosition( $w('#staffRepeater'), )
	}
    else if (myLang === 'he') {
		$w('#datasetStaff').onReady( () => {
			$w('#staffRepeater').onItemReady( ($w, itemData) => {
				$w('#staffTitle').text = itemData.nameHe;
				$w('#staffBio').text = itemData.infoHe;
				changePosition( $w('#staffRepeater') )
			});
		});
		$w('#datasetTeachers').onReady(function() {
			$w('#teachersRepeater').onItemReady( ($w, itemData) => {
				$w('#teachersTitle').text = itemData.nameHe;
				$w('#teachersBio').text = itemData.infoHe;
			});
		});
	}

	if(wixWindow.formFactor === "Mobile"){
		$w("#datasetStaff").setSort( wixData.sort()
			.ascending("_createdDate")
			//.descending("order")
		);
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
import wixData from 'wix-data';
import wixWindow from 'wix-window';

let myLang;

$w.onReady(function () {

	myLang = wixWindow.multilingual.currentLanguage;
	$w("#datasetCourses").onReady(function () {
		let textMaxLength = 260;
		let fullText;
		let shortText;
		$w("#repeater").onItemReady(($w, itemData, index)=> {
			if (myLang === "en") {
  				fullText = itemData.infoEn;
			}
			else if (myLang === "he") {
				$w('#courseLevel').text = itemData.courseLevelHe;
				$w('#courseType').text = itemData.courseTypeHe;
  				fullText = itemData.infoHe;
				textMaxLength = 225;
			}
			if (fullText.length <= textMaxLength) {
				$w('#courseInfo').text = fullText;
			}
			else {
				shortText = fullText.substr(0, textMaxLength) + " ...";
				$w('#courseInfo').text = shortText;
			}
		});
	});

});

export function typeTags_change(event) {
	let selectedTags = $w("#typeTags").value;
	let results;
	if(selectedTags.length > 0) {
		results = wixData.filter().hasAll("tags", selectedTags);
		$w('#datasetCourses').setFilter(results);
	}
	else {
		results = wixData.filter().isNotEmpty("tags");
		$w('#datasetCourses').setFilter(results);
	}
}

/*
courseType
courseLevel
hoursXX
daysEn
infoEn
pauseEn
*/
import wixData from 'wix-data';
import wixWindow from 'wix-window';

let myLang;

function toggleLang (hideMe, showMe) {
	hideMe.hide();
	showMe.show();
}

$w.onReady(function () {

	myLang = wixWindow.multilingual.currentLanguage;

	$w("#datasetCourses").onReady(function () {
		let textMaxLength = 260;
		let fullText;
		let shortText;
		$w("#repeaterRTL").onItemReady(($w, itemData, index)=> {
			if (myLang === "en") {
				toggleLang ( $w("#navigationLTR"), $w("#navigationRTL") );
  				fullText = itemData.infoEn;
			}
			else if (myLang === "he") {
				toggleLang ( $w("#navigationRTL"), $w("#navigationLTR") );
				toggleLang ( $w("#typeTagsLTR"), $w("#typeTagsRTL") );
				$w('#courseLevel').text = itemData.courseLevelHe;
				$w('#courseType').text = itemData.courseTypeHe;
				$w('#infoButton').link += '-rtl?lang=he';
				$w('#bookCover').link += '-rtl?lang=he';
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

export function typeTagsLTR_change(event) {
	let selectedTags = $w("#typeTagsLTR").value;
	filterCoursesNow(selectedTags);
}

export function typeTagsRTL_change(event) {
	let selectedTags = $w("#typeTagsRTL").value;
	filterCoursesNow(selectedTags);
}

function filterCoursesNow(tagsSelected) {
	let result;
	if(tagsSelected.length > 0) {
		wixData.query("CoursesData")
			.hasAll("tags", tagsSelected)
			.find()
			.then( (results) => {
				if (results.items.length === 0) {
					$w("#noResaults").show();
				}
				else {
					$w("#noResaults").hide();
				}
			});
		result = wixData.filter().hasAll("tags", tagsSelected);
		$w('#datasetCourses').setFilter(result);
	}
	else {
		result = wixData.filter().isNotEmpty("tags");
		$w('#datasetCourses').setFilter(result);
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
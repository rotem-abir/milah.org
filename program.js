import wixData from 'wix-data';

$w.onReady(function () {

	$w("#datasetCourses").onReady(function () {

		const  textMaxLength = 260;
		let fullText;
		let shortText;
		$w("#repeater").onItemReady(($w, itemData, index)=> {
  			fullText = itemData.infoEn;
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
		results = wixData.filter().hasSome("tags", selectedTags);
		$w('#datasetCourses').setFilter(results);
	}
	else {
		results = wixData.filter().isNotEmpty("tags");
		$w('#datasetCourses').setFilter(results);
	}
}
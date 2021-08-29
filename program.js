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
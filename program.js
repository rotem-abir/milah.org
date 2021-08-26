$w.onReady(function () {

	$w("#dataset1").onReady(function () {

		const  textMaxLength = 240;
		let fullText;
		let shortText;

		$w('#repeater').forEachItem(($w, item) => {
			fullText = $w('#dataset1').getCurrentItem().infoEn;
			if (fullText <= textMaxLength) {
				$w('#courseInfo').text = fullText;
			}
			else {
				shortText = fullText.substr(0, textMaxLength) + "...";
				$w('#courseInfo').text = shortText;
			}
		})
	});
});
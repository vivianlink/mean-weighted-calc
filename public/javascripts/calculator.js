$('.student-mark').on('input', function(e) {
	// only numeric input
	$(e.currentTarget).val($(e.currentTarget).val().replace(/[^0-9\.]/g,''))

	var totalMarkEl = $(e.currentTarget).parent().find('.total-mark');

	if (totalMarkEl.val() != "") {
		var percent = ($(e.currentTarget).val() / totalMarkEl.val()) * 100;

		$(e.currentTarget).parent().parent().find('.percentage').html(percent.toFixed(2) + "%");
	}
});

$('.total-mark').on('input', function(e) {
	var studentMarkEl = $(e.currentTarget).parent().find('.student-mark');

	if (studentMarkEl.val() != "") {
		var percent = (studentMarkEl.val() / $(e.currentTarget).val()) * 100;

		$(e.currentTarget).parent().parent().find('.percentage').html(percent.toFixed(2) + "%");
	}
});

$('.mean-button').click(function(){
	var totalPoints = 0;
	var amount = 0;

	$('tr:has(td)').each(function(){
		var studentMark = $(this).find('.student-mark').val();
		var totalMark = $(this).find('.total-mark').val();

		if (studentMark != "" && totalMark != "") {
			totalPoints += (studentMark / totalMark);
			amount++;
		}
	});

	var meanGrade = totalPoints / amount;

	$('.result').html((meanGrade *100).toFixed(2) + "/100");
});

$('.weight-button').click(function(){
	var totalPoints = 0;
	var totalWeight = 0;

	$('tr:has(td)').each(function(){
		var weight = $(this).find('.weight').val();
		var studentMark = $(this).find('.student-mark').val();
		var totalMark = $(this).find('.total-mark').val();

		if (studentMark != "" && totalMark != "" && weight != "") {
			totalPoints += ((studentMark / totalMark) * weight);
			totalWeight += parseInt(weight);
		}
		/*alert(totalWeight);*/
		var weightedGrade = totalPoints/ totalWeight;

		$('.result').html((weightedGrade*100).toFixed(2) + "/100");
	})
});

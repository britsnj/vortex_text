var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	ctx.moveTo(centerX,centerY);

	
		var gap =2;
		var steps = 60;

		var increment = 2*Math.PI/steps;
		var theta = increment;

	while(theta < 20*Math.PI) {
		var newX = centerX + theta * Math.cos(theta) * gap;
		var newY = centerY + theta * Math.sin(theta) * gap;
		ctx.lineTo(newX,newY);
		theta = theta + increment;
	}
    ctx.strokeStyle = 'red';
	ctx.stroke();

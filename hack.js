if (location['protocol'] == 'chrome-extension:')
{
	var element = document.getElementById('grid-snap')
	var x = 0; var y = 0
	app.player.kill = function (){}
	document.addEventListener("keydown", function (event) {
		if (event.keyCode == 32) {
			app.player.allowJump = true
		}	
		if (event.keyCode == 38) {
			app.player.allowJump = true
		}
		if (event.keyCode == 13) {
			app.player.allowJump = true
		}
		if (event.keyCode == 72) {
			app.player.finish();
		}
		if (event.keyCode == 71) {
			let a = prompt("Enter max speed", "4");
			app.player.maxSpeed = a
		}
		if (event.keyCode == 78) {
			app.player.mode = 'jump'
		}
		if (event.keyCode == 79) {
			app.player.mode = 'grapple'
		}
	});
	document.addEventListener("click", function () {
		app.player.allowJump = true
	});
	
	const comment = document.createComment("Modded by Julianツ#1446");
	document.body.appendChild(comment);
	
	alert("BOXEL 3D HACK v0.5.1\n\nMade by Julianツ#1446\nDiscord: https://discord.gg/PQggYBCDSM \n\nFeatures:\n- Infinite Jump\n- Godmode\n- Instant win (press H)\n- Max speed bypass (press G)");
}
else
{
	alert("Not in Boxel3D!");
}

exports.run = async (bot, msg, args) => {
	// Public command.

	// Random number in [1, 10]:
	let n = Math.floor(Math.random() * 10);

	if (n < 6) {
		// I'm sure there's a better way to do this lol.
		msg.channel.send("<@109638609555984384> es el mejor");
		setTimeout(function() { msg.channel.send("<@109638609555984384> es lo más."); }, 2500);
		setTimeout(function() { msg.channel.send("<@109638609555984384> es vida."); }, 5000);
		setTimeout(function() { msg.channel.send("<@109638609555984384> es amor."); }, 6250);
		setTimeout(function() { msg.channel.send("All hail <@109638609555984384>."); }, 7500);
		setTimeout(function() { msg.channel.send("Gracias por tanto, perdón por tan poco <@109638609555984384>."); }, 10000);
		setTimeout(function() { msg.channel.send("¿He dicho ya que <@109638609555984384> mola?"); }, 60000);
	}
	else if (n < 9) {
		let people = msg.channel.members.array();
		msg.channel.send(`En realidad ${people[Math.floor(Math.random() * people.length)]} es el mejor.`);
	}

	else msg.channel.send(`¡Tú sí que eres el mejor! <@${msg.author.id}>.`);
}

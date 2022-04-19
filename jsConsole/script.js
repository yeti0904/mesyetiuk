document.getElementById("runButton").onclick = () => {
	let input = document.getElementById("input").value;

	switch (input) {
		case ".clear": {
			document.getElementById("output").innerHTML = "";
			break;
		}
		default: {
			try {
				let output = `${eval(input)}`;
			}
			catch (e) {
				let output = `${e}`;
			}

			document.getElementById("output").innerHTML += output;

			break;
		}
	}
}
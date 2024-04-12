// ansiUtils.js
export const ansiColorCodeToCss = (code) => {
	const colors = {
		// Standard text colors
		30: "black",
		31: "red",
		32: "green",
		33: "yellow",
		34: "blue",
		35: "magenta",
		36: "cyan",
		37: "lightgrey",
		// Bright text colors
		90: "grey",
		91: "lightcoral",
		92: "lightgreen",
		93: "lightyellow",
		94: "lightsteelblue",
		95: "violet",
		96: "paleturquoise",
		97: "white",
		// Reset code - may not be used directly for CSS but included for completeness
		0: "inherit", // This might be changed based on your default color or omitted if unnecessary
	};
	return colors[code] || "inherit";
};

export const parseAnsiToHtml = (ansiString) => {
	const spanArray = [];
	let currentColor = "inherit";
	let sequence = "";

	for (let i = 0; i < ansiString.length; i++) {
		if (ansiString[i] === "\u001b" && ansiString[i + 1] === "[") {
			if (sequence) {
				spanArray.push({ text: sequence, color: currentColor });
				sequence = "";
			}
			const endOfCode = ansiString.indexOf("m", i);
			if (endOfCode !== -1) {
				const code = ansiString.substring(i + 2, endOfCode);
				currentColor = ansiColorCodeToCss(code);
				i = endOfCode;
			}
		} else {
			sequence += ansiString[i];
		}
	}
	if (sequence) {
		spanArray.push({ text: sequence, color: currentColor });
	}

	return spanArray;
};

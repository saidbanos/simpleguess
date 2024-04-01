import React, { useState } from "react";
import Grid from "../Grid/Grid";
import ThemesGrid from "../../ThemesGrid";

export default function BodySection() {
	const [selectedTheme, setSelectedTheme] = useState("");
	const [asciiArtFromApi, setasciiArtFromApi] = useState([]);
	const handleStartGame = async (theme) => {
		setSelectedTheme(theme);

		try {
			const response = await fetch("http://localhost:4000/api/ascii/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ theme: theme }),
			});
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			console.log(data);
		} catch (error) {
			setasciiArtFromApi([]);
		}
	};

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<ThemesGrid onStart={handleStartGame} />
					<Grid asciiArtFromApi={asciiArtFromApi} />
				</div>
			</div>
		</div>
	);
}

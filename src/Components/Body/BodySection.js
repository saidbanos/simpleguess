import React, { useState } from "react";
import Grid from "../Grid/Grid";
import ThemesGrid from "../../ThemesGrid";

export default function BodySection() {
	const [selectedTheme, setSelectedTheme] = useState("");
	const [asciiArtFromApi, setAsciiArtFromApi] = useState({});
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
			setAsciiArtFromApi(data);
			//console.log(data);
		} catch (error) {
			setAsciiArtFromApi({});
		}
	};

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex justify-center items-start flex-wrap -mx-4">
					<div className="px-4">
						{" "}
						{/* Adjust padding as needed */}
						<ThemesGrid onStart={handleStartGame} />
					</div>
					<div className="px-4">
						{" "}
						{/* Adjust padding as needed */}
						<Grid asciiArtFromApi={asciiArtFromApi} />
					</div>
				</div>
			</div>
		</div>
	);
}

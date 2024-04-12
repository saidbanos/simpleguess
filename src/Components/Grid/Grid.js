import React, { useState, useEffect } from "react";
import styles from "./Grid.module.css";
import { ansiColorCodeToCss, parseAnsiToHtml } from "./ansiUtils";

const Grid = ({ asciiArtFromApi }) => {
	const [grid, setGrid] = useState([]);

	useEffect(() => {
		if (!asciiArtFromApi || !asciiArtFromApi.asciiArt) {
			setGrid([]);
			return;
		}

		// Use the parseAnsiToHtml function to get an array of text fragments with colors
		const parsedArt = parseAnsiToHtml(asciiArtFromApi.asciiArt);
		let cellId = 0; // Sequential cell ID

		// Convert each text fragment into grid cells, preserving the structure and applying colors
		const newGrid = parsedArt.flatMap((fragment) =>
			fragment.text.split("\n").flatMap((line, rowIndex) =>
				line.split("").map((char, colIndex) => ({
					char,
					color: fragment.color, // Add color property
					visible: false,
					id: `${cellId++}`, // Use sequential ID
				}))
			)
		);

		setGrid(newGrid);
	}, [asciiArtFromApi]);

	const numCols = 80;

	const revealArea = (id) => {
		const targetCell = grid.find((cell) => cell.id === id);
		if (!targetCell) return; // Guard in case the cell isn't found

		const targetIndex = grid.indexOf(targetCell);
		const rowClicked = Math.floor(targetIndex / numCols);
		const colClicked = targetIndex % numCols;

		const revealRadius = 3;

		const newGrid = grid.map((cell, index) => {
			const rowCurrent = Math.floor(index / numCols);
			const colCurrent = index % numCols;
			const distance = Math.max(
				Math.abs(rowCurrent - rowClicked),
				Math.abs(colCurrent - colClicked)
			);

			if (distance <= revealRadius) {
				return { ...cell, visible: true };
			}
			return cell;
		});

		setGrid(newGrid);
	};

	const revealAllCharacters = () => {
		setGrid(grid.map((cell) => ({ ...cell, visible: true })));
	};

	const clearAllCharacters = () => {
		setGrid(grid.map((cell) => ({ ...cell, visible: false })));
	};

	const handleCellClick = (id) => {
		revealArea(id);
	};

	return (
		<div className="gridContainer">
			<div
				className={styles.grid}
				style={{ gridTemplateColumns: `repeat(${numCols}, 10px)` }}
			>
				{grid.map((cell) => (
					<div
						key={cell.id}
						id={`cell-${cell.id}`}
						className={styles.gridCell}
						onClick={() => handleCellClick(cell.id)}
						style={{ color: cell.color }} // Apply color style here
					>
						{cell.visible ? cell.char : ""}
					</div>
				))}
			</div>
			<div className="buttonContainer mt-4 flex justify-center space-x-2">
				<button
					onClick={revealAllCharacters}
					className="py-2 px-6 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75 whitespace-nowrap"
				>
					Reveal All
				</button>
				<button
					onClick={clearAllCharacters}
					className="py-2 px-6 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 whitespace-nowrap"
				>
					Clear All
				</button>
			</div>
		</div>
	);
};

export default Grid;

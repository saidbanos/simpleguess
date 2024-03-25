import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styles from './Grid.module.css';

const Grid = () => {
  const gridSize = 50;
  const [grid, setGrid] = useState(Array.from({ length: gridSize * gridSize }, (_, index) => ({
    char: ' ',
    visible: false,
    id: index,
  })));

  useEffect(() => {
    const asciiArt = [
      "....................................................................................................",
      "....................................................................................................",
      "....................................................................................................",
      "....................................................................................................",
      "....................................................................................................",
      "................................:+++:...............................................................",
      "...............................:xxxxx+:.............................................................",
      "..............................:xxxxxxx+;............................................................",
      "..............................+xxx++++x++...........................................................",
      ".............................:xxxx++++++++..........................................................",
      ".............................+xxxx+++;;+++;.........................................................",
      "............................:+xxxxxx+;;++++;...................................;x++++:..............",
      "............................:xxxxx+++;;+++++;..............................:;++++++++;..............",
      "............................XxXxx+++++++x+x++;:..........................;++++;;;+++x+..............",
      "...........................;Xxxxxxx+++xxxxxXXx+XXXXxXXXXx;:...........:++++++;;;+++xx:..............",
      "...........................:X++xXXxxxXxxXX$$XXXx$X$$X$$$$$$$X+;:.:;+;+++++;;;;;;+++x+...............",
      "...........................x+xX$$$X$XXXXXXXXXXXXXXx$xxX$$$$$$$$$$X++xx++++;;;+;;+xxx+...............",
      "...........................++xX$$$$XXXxxx+xxxXXXxx$&$$$$$$XX$Xx$$xxXXx+++++;;;;;++x+:...............",
      "..........................:xxX$$$XxxxxxxXXXXXXXXxX$&$$$$$$$X&XX$XXx+xxx++++;;;+++++:................",
      "..........................;XX$&Xx+xXxxxXXXXXxXXXX$&XXX$$$$XX&&xxXxxx++x+xxxx++++xx+:................",
      ".........................:xX$&$xXXXxXXX$XXXXXXXXX&$x$X$$X$$x&&XxXXxxx+++xxx++x++++x:................",
      "........................+X$$$$$XxX$XXXXxXXXXX$$$$$XXxX$$XX++X&XxxXXxXxx++xxXXxx+;x:.................",
      "........................+XXX$$XXXXXxXXXX$$$$xX&&$xX$xX$$XxxXX&XXXxxXXxxxx++X$$x+;;..................",
      ".......................:xXXX$XXxXXxXxXXXX$&XxX&&$+X$xX$&Xx$Xx$$XXXXxxXx+x+++xX+;;...................",
      "......................:xXX$$$XXXXXXXXx+xxxxXxX&&xxXXX$&$Xx$+x&&$xxXXXxxxx+++xXx;....................",
      ".....................:xXX$$$$&&&&&&$$&&$X$$xxxXXxXXxXX$XXXXxx&&x+x&&$Xxxxx++xXx;....................",
      "....................:+XXXX$$&&$$$XX+x&xxxXXx$$x+xXXXxXXXxXx++$x++xxxxxxxxxx+XXXx....................",
      "....................:xXXX&&&&XXXXxx++$XxxXx+x&X++XXxXxxxxx++;++xxxxx+++xXxx+xxXX:...................",
      "...................:+X$&&&&&XxxXXXXX++x$Xxxx$&&++xXXxxx++;;;xx+x+++X&XXXXx++xXxx....................",
      "...................:xXXXXXXXXxxx$$X$$$XxxX$$$&&X+xxxxxx++;;X+++x+;;x$xX$&&Xxxxx+....................",
      "..................:xX$XXxx++xxx++X$&$$$&$$x+x$$&xxxxxxx+;+$&X++xxxX$+;+++$$$XXx;....................",
      "..................;X$X$$$XxxX$$$XXX$XX$$XXXXX&&XXXxxXxx+x&$x+xXXXx+++xxx++x$XXx+....................",
      "................:x$XXXX$$$$$$$XXXXXXXXxxxxxX$$$$XXXXxxxxx$$xxX$$&&$$$XXx+;x$Xxx;....................",
      "..............:x$XXXXXXxX$$$XXXXXxxxx++xxXXXXX$&$XXXXXXXXX$xxxX$XXX$XXX++;x$$$x:....................",
      "............;X$$$XXXXXXXXX$XXXxxxxxxx+xX$$$XX$&&$$XXXXX$Xxxxx+;+xXx++;;;;;+++x:.....................",
      ".........:+X$$$XxXXXXXxXxxX$XXXxx+++++x+xXX$XX$$XXXXXXX$Xxxx++++;+XxX$$x+;;;+;......................",
      ".......:+XXX$$$xxXXXXXXXxxXxXX$$Xxx+++xXX$XXx++x$$xxXXxXxxxXXx+;;;++++xXx;+;+:......................",
      ";;;;;xXX$XX$$X$x+xXXXXXXX$XXxxXXxx+++++XXXx++++++$$$X;;;;+x+++;;+xxx++xxXXx+:.......................",
      "&$$$$$$$$$$X$XXxxxXxxxxX$$XXx+xxXXXx+;++x++++++++x$+;;;;;+xxxx;;;;;;+++xxx+;........................",
      "xxX$$$$$$XXX$$XXxxX$xxxXXXXX$XXX++xxX+;++++xxxxxxXX+;;;;;;+++;:;:;++++x+x+;:........................",
      "xXXXXXXXX$$$X$XXxxX$Xxx++X$&&XxXXXXXxxx++++++++++++++;+;;;;::;;;++++++++;:..........................",
      "xx$$$$$XX$$XXXXXx+xXXxxxxxXX$$$X$$$Xxxxxx++;+;;;;;;;:::::::;;+++xxxx+;;;:...........................",
      "X$XXX$$$X$XXXXXxx++x$$XxxxxxX$$&$XxXXXXXxxx++;;;;;:::::;;+++;+;;;++;;;::............................",
      "XXXXXX$$X$XXXXXXXx++xX$$xxxXxxX$X$X$$XXXXXxxxx++++++++;;+;+;;;;;;;;;;:..............................",
      "$XXXXXXXX$$XXXXXX$x+xxXXXXx++xxxX$$&$XXXXxxxxxxxxxxx++++++++++;;;;;;................................",
      "$$$$XXXXxXXXXXXxxXxxx+xxX&$XxxXxX$$$$$$$$XxxXxx+xx++x+++++++++;;;;;.................................",
      "$$$$$$$XxxXXXXXXxxXXxxx+xX$$$xxxxxxXXX$$XXXxxxxxxx++++++;;+;;;;;;;:.................................",
      "XXXXXXXXxXXxxxxxxXXXXx+++xX$$$XXxXXXXXXXXXXXxxx++x++++++;;+++;;;+;:.................................",
      "XxxxxxxXXXxXXXxxxxxXXXx+x++xX$&XXXX$XXXXXxXxxxxxx++x+++++++++++;+;:.................................",
      "XXxXXxxxXXxxxxXXxxxxxxxxx+xxxX&&$XxXXXxxXXxx++++xXxxx++++x+x+++;;;:.................................",
      "$$$X$$XxxxxxxxXXXxxxxxXXx+x+xxX&&$XXXxxxxxxXxxx++++++xx+++++;;;;;;:.................................",
      "$$$XX$$$XXxxxxXXXXXxXXxXXx++xxX$&&&$X&$XxXxXXXxx+++++++++;;;;;;;;;..................................",
      "XXXXXXXX$XXXxxxXXXXxxXXXXXxxx+xxxX$&&&&&$$Xxx+xXXxx++;;;;+;;;;++;:..................................",
      "XXXxxxXXX$$XXxxxXXXXXXxXXxXxxxxxxxxXxX$$XXxxx+xxxx++;++++++++++;;...................................",
      ];

    let artIndex = 0;
    setGrid(grid.map(cell => {
      const row = Math.floor(artIndex / gridSize);
      const col = artIndex % gridSize;
      let char = ' ';
      if (row < asciiArt.length && col < asciiArt[row].length) {
        char = asciiArt[row][col];
      }
      artIndex++;
      return { ...cell, char: char, visible: cell.visible };
    }));
  }, []);

  const revealArea = (index) => {
    const rowClicked = Math.floor(index / gridSize);
    const colClicked = index % gridSize;
    const revealRadius = 3; // Adjust this value to change the reveal radius

    setGrid(grid.map((cell, idx) => {
      const rowCurrent = Math.floor(idx / gridSize);
      const colCurrent = idx % gridSize;
      if (
        rowCurrent >= rowClicked - revealRadius && rowCurrent <= rowClicked + revealRadius &&
        colCurrent >= colClicked - revealRadius && colCurrent <= colClicked + revealRadius
      ) {
        return { ...cell, visible: true };
      }
      return cell;
    }));
  };

  const revealAllCharacters = () => {
    setGrid(grid.map(cell => ({
      ...cell,
      visible: true,
    })));
  };

  const clearAllCharacters = () => {
    setGrid(grid.map(cell => ({
      ...cell,
      visible: false,
    })));
  };

  const handleCellClick = (index) => {
    revealArea(index);
  };

  return (
    <div className="gridContainer">
      <div className={styles.grid}>
        {grid.map((cell, index) => (
          <div key={cell.id} id={`cell-${cell.id}`} className={styles.gridCell} onClick={() => handleCellClick(index)}>
            {cell.visible ? cell.char : ''}
          </div>
        ))}
      </div>
      <div className="buttonContainer mt-4 flex justify-center space-x-2">
        <button 
          onClick={revealAllCharacters} 
          className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 whitespace-nowrap"
        >
          Reveal All
        </button>
        <button 
          onClick={clearAllCharacters} 
          className="py-2 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 whitespace-nowrap"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Grid;
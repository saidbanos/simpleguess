import React, { useState, useEffect } from 'react';
import styles from './Grid.module.css';

const Grid = ({ asciiArtFromApi }) => {
  const [grid, setGrid] = useState([]);

  // Initialize with a blank ASCII art or use the one provided via props

  //console.log(asciiArtFromApi);
  //console.log(asciiArtFromApi.length > 0);
  

  useEffect(() => {
    const initialArt = asciiArtFromApi.length > 0 ? asciiArtFromApi : [
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

    const artToUse = initialArt.length > 0 ? initialArt : [
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
    
  const newGrid = artToUse.flatMap((row, rowIndex) =>
  row.split('').map((char, colIndex) => ({
    char,
    visible: false,
    id: `${rowIndex}-${colIndex}`,
  }))
);

setGrid(newGrid);
}, [asciiArtFromApi]);

  // Determine grid dimensions dynamically
  const numCols = asciiArtFromApi.length > 0 && asciiArtFromApi[0] ? asciiArtFromApi[0].length : 100; // 100 or the default length of your initialArt row


  const revealArea = (id) => {
    const [rowClicked, colClicked] = id.split('-').map(Number);
    const revealRadius = 3;

    const newGrid = grid.map(cell => {
      const [rowCurrent, colCurrent] = cell.id.split('-').map(Number);
      const distance = Math.max(Math.abs(rowCurrent - rowClicked), Math.abs(colCurrent - colClicked));
      if (distance <= revealRadius) {
        return { ...cell, visible: true };
      }
      return cell;
    });

    setGrid(newGrid);
  };

  const revealAllCharacters = () => {
    setGrid(grid.map(cell => ({ ...cell, visible: true })));
  };

  const clearAllCharacters = () => {
    setGrid(grid.map(cell => ({ ...cell, visible: false })));
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
          >
            {cell.visible ? cell.char : ''}
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

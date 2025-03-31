const ROWS = 25; // Number of rows
const COLUMNS = 60; // Adjust as needed
const CELL_SIZE = 30; // Cell size

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-start overflow-hidden opacity-10">
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black" />

      {/* Grid */}
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLUMNS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
        }}
      >
        {[...Array(ROWS)].map((_, row) =>
          [...Array(COLUMNS)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="border border-gray-800"
              style={{ width: CELL_SIZE, height: CELL_SIZE }}
            />
          ))
        )}
      </div>
    </div>
  );
} 
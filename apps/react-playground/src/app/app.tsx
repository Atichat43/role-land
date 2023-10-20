import { useVirtualizer } from '@tanstack/react-virtual';
import React from 'react';

function RowVirtualizerFixed() {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: 100,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
    // debug: true,
  });

  return (
    <div
      ref={parentRef}
      className="List"
      style={{
        height: `200px`,
        width: `400px`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  );
}

export function App() {
  return (
    <div>
      <RowVirtualizerFixed />
    </div>
  );
}

export default App;

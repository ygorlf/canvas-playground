import React, { Component } from 'react';
import {
  Stage,
  Layer,
  Group,
  Rect,
} from 'react-konva';

class App extends Component {

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const strokeColor = '#000';
    const strokeWidth = 2;

    const blocksNames = [
      'key-partners',
      'key-activities',
      'key-resources',
      'value-proposition',
      'customer-relationship',
      'channels',
      'customer-segments',
      'cost-structure',
      'revenue-streams'
    ];

    return (
      <div className='App'>
        <Stage
          width={width}
          height={height}>
          <Layer>
            <Group>

              <Rect
                name={blocksNames[0]}
                x={2}
                y={2}
                width={width * 0.2} // 20%
                height={height * 0.66} // 66%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[1]}
                x={(width * 0.2) + strokeWidth} // 20% + linha
                y={2}
                width={(width * 0.2) - strokeWidth} // 20% - linha
                height={(height * 0.33) - strokeWidth} // 33% - linha
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[2]}
                x={(width * 0.2) + strokeWidth} // 20% + linha
                y={height * 0.33} // 33%
                width={(width * 0.2) - strokeWidth} // 20% - linha
                height={(height * 0.33) + strokeWidth} // 33% + linha
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[3]}
                x={width * 0.4} // 40%
                y={2}
                width={width * 0.2} // 20%
                height={height * 0.66} // 66%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[4]}
                x={width * 0.6} // 60%
                y={2}
                width={width * 0.2} // 20%
                height={(height * 0.33) - strokeWidth} // 33% - linha
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[5]}
                x={width * 0.6} // 60%
                y={height * 0.33} // 33%
                width={width * 0.2} // 20%
                height={(height * 0.33) + strokeWidth} // 33%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[6]}
                x={width * 0.8} // 80%
                y={2}
                width={(width * 0.2) - strokeWidth} // 20% - linha
                height={height * 0.66} // 66%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[7]}
                x={2}
                y={(height * 0.66) + strokeWidth} // 66% + linha
                width={(width * 0.5) - strokeWidth} // 50% - linha
                height={height * 0.33} // 33%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

              <Rect
                name={blocksNames[8]}
                x={width * 0.5} // 50%
                y={(height * 0.66) + strokeWidth} // 66% + linha
                width={(width * 0.5) - strokeWidth} // 50% - linha
                height={height * 0.33} // 33%
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />

            </Group>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;

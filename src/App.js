import React, { Component } from 'react';
import {
  Stage,
  Layer,
  Group,
  Rect,
  Circle,
  Line,
  Text,
  Star,
  Wedge
} from 'react-konva';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
      <div className='App'>
        <Stage
          width={width}
          height={height}>
          <Layer>
            <Text
              text='Formas do Canvas:'
              fontSize={24} />
            <Group>
              <Rect
                x={10}
                y={30}
                width={120}
                height={120}
                fill={'red'}
                draggable={true} />
              <Circle
                x={250}
                y={120}
                width={120}
                height={120}
                fill={'purple'}
                draggable={true} />
              <Line
                points={[50, 200, 500, 200]}
                stroke={'red'}
                strokeWidth={3} />
              <Star
                x={width / 2}
                y={height / 2}
                numPoints={5}
                innerRadius={40}
                outerRadius={70}
                fill={'deeppink'}
                stroke={'black'}
                strokeWidth={2}
                draggable={true} />
              <Wedge
                x={width * 0.8}
                y={height * 0.2}
                radius={120}
                angle={70}
                fill={'deepskyblue'}
                stroke={'black'}
                strokeWidth={2}
                rotation={-120}
                draggable={true} />
            </Group>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;

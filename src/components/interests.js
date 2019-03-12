import React from 'react'
import { Container } from 'react-bootstrap'
import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    id: 'UX Design',
    label: 'UX Design',
    value: 20,
    color: 'hsl(51, 70%, 50%)'
  },
  {
    id: 'Web Development',
    label: 'Web Development',
    value: 40,
    color: 'hsl(60, 70%, 50%)'
  },
  {
    id: 'Arsenal',
    label: 'Arsenal',
    value: 10,
    color: 'hsl(15, 70%, 50%)'
  },
  {
    id: 'Netflix',
    label: 'Netflix',
    value: 10,
    color: 'hsl(128, 70%, 50%)'
  },
  {
    id: 'Electric Scooters',
    label: 'Electric Scooters',
    value: 10,
    color: 'hsl(9, 70%, 50%)'
  },
  {
    id: 'Travelling',
    label: 'Travelling',
    value: 20,
    color: 'hsl(9, 70%, 50%)'
  }
]

class Interests extends React.Component {
  render() {
    return (
      <div className="section-container green-bg">
        <Container>
          <h3 className="section-header">Interests</h3>
          <div className="chart-container">
            <div className="chart-height interests">
              <ResponsivePie
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                sliceLabel=""
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: 'UX Design'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'Web Development'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'Arsenal'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'elixir'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'javascript'
                    },
                    id: 'lines'
                  }
                ]}
                // legends={[
                //   {
                //     anchor: 'bottom',
                //     direction: 'row',
                //     itemDirection: 'top-to-bottom',
                //     translateY: 50,
                //     itemWidth: 160,
                //     itemHeight: 18,
                //     itemTextColor: '#999',
                //     symbolSize: 18,
                //     symbolShape: 'circle',
                //     effects: [
                //       {
                //         on: 'hover',
                //         style: {
                //           itemTextColor: '#000'
                //         }
                //       }
                //     ]
                //   }
                // ]}
              />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Interests

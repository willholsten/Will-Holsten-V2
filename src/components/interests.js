import React from 'react'
import { Container } from 'react-bootstrap'
import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    id: 'Sports (playing & watching)',
    label: 'Sports (playing & watching)',
    value: 30
  },
  {
    id: 'Travelling',
    label: 'Travelling',
    value: 30
  },
  {
    id: 'Arsenal',
    label: 'Arsenal',
    value: 10
  },
  {
    id: 'Netflix',
    label: 'Netflix',
    value: 10
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
                // sortByValue={true}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 180
                }}
                enableRadialLabels={false}
                innerRadius={0.5}
                isInteractive={false}
                padAngle={2.5}
                cornerRadius={3}
                colors="pastel1"
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
                      id: 'Sports (playing & watching)'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'Travelling'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'Arsenal'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'Netflix'
                    },
                    id: 'lines'
                  }
                ]}
                legends={[
                  {
                    anchor: 'left',
                    direction: 'column',
                    itemDirection: 'left-to-right',
                    translateX: -180,
                    itemWidth: 140,
                    itemHeight: 30,
                    itemTextColor: '#5f6d7e',
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000'
                        }
                      }
                    ]
                  }
                ]}
              />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Interests

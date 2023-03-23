import React from 'react';

const bandNames = [
  {name: "The Beastie Boys", members: "Ad Rock, MCA, Mike D", formed: 1979},
  {
    name: "Wolfmother",
    members: "Andrew Stockdale, Chris Ross, Myles Heskett",
    formed: 2004
  },
  {name: "Cream", members: "Eric Clapton, Jack Bruce, Ginger Baker", formed: 1966}
];

function Welcome() {
  return (<h1>The Best Music Trios Ever (according to Spencer)</h1>);
}

class Band extends React.Component {
  render() {

    const oneBand = this.props;

    return (
      <div>
        <img/>
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map(oneBand => <Band {...oneBand}/>)}
    </div>
  );
}

function App() {
    return (
        <div>
            <Welcome/>
            <BandList/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('mountNode'),
);
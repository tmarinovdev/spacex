import React from 'react';

export class SpaceXLaunchesFetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true, allLaunches: [] }
  }
  
  async componentDidMount() {
    const url = 'https://api.spacexdata.com/v3/launches';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({allLaunches: data, loading: false});
  }

  render() {
    const { loading, allLaunches } = this.state;
    const items = allLaunches.map(item => (
      <div key={item.flight_number}>
        <div>Mission: {item.mission_name}</div> 
        <div>Date: {item.launch_date_local}</div> 
        <div>Rocket: {item.rocket.rocket_name}</div>
      </div>
    ));

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return items;      
    }    
  }

}
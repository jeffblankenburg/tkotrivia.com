import React, { Component } from 'react';

const userData = [
  {
    UserId: "ABCD",
    CurrentLevel: 3,
    PointTotal: 3498
  },
  {
    UserId: "EFGH",
    CurrentLevel: 14,
    PointTotal: 14875
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appQl5QbwCOJ21LCs/User?maxRecords=30&api_key=keynLGHM8Jor40KNX&sort%5B0%5D%5Bfield%5D=PointTotal&sort%5B0%5D%5Bdirection%5D=desc')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ users: data.records });
    }).catch(err => {
      // Error :(
    });
  }


  render() {
    return (
      <div class="container">
        <center><div class="container">
          <img src="https://tko-trivia.s3.amazonaws.com/art/tko-logo.png" width="200" />
        </div>
        <div class="row">
          <div class="col">
          UserID
          </div>
          <div class="col">
          Current Level
          </div>
          <div class="col">
          Point Total
          </div>
      </div>
        {this.state.users.map(item => <LeaderboardItem {...item.fields} /> )}
        </center>
      </div>
    );
  }
}

export default App;

const LeaderboardItem = ({UserId, CurrentLevel, PointTotal}) => (
  <div class="row">
      <div class="col">
      {UserId.substr(-4)}
      </div>
      <div class="col">
      {CurrentLevel}
      </div>
      <div class="col">
      {PointTotal}
      </div>
  </div>
);
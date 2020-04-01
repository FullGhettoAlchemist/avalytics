import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Table from './components/Table'
import Record from './components/Record';

class App extends Component {
  
  // state = {
  //   overallWins : 0,
  //   overallLosses : 0,
  //   overallTies : 0,
  //   homeWins : 0,
  //   homeLosses : 0,
  //   homeTies : 0,
  //   awayWins : 0,
  //   awayLosses : 0,
  //   awayTies : 0,
  //   lastTenWins : 0,
  //   lastTenLosses : 0,
  //   lastTenTies : 0,
  // }

  // componentDidMount() {
  //     fetch('https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record')
  //     .then(res => res.json())
  //     .then((data) => {
  //       let overallWs, overallLs, overallTs;
  //       let results = data.records[2].teamRecords;
  //       for (let i = 0; i < results.length; i++){
  //         if(results[i].team.id == 21){
  //           overallWs = results[i].leagueRecord.wins;
  //           overallLs = results[i].leagueRecord.losses;
  //           overallTs = results[i].leagueRecord.ot;
  //           // home = results[i].records.overallRecords[0];
  //           // away = results[i].records.overallRecords[1];
  //           // streak = results[i].records.overallRecords[3];
  //           // console.log(home)
  //         }
  //       }
  //       this.setState({ overallWins: overallWs, overallLosses : overallLs, overallTies : overallTs})
  //     })
  //     .catch(console.log)
  // }


  render(){
    return (
      <div className="App">
        <Banner></Banner>
        <Record></Record>
        <Table> </Table>
        {/* <Record record={[this.state.overallWins, this.state.overallLosses, this.state.overallTies]}></Record> */}
        {/* <Table playerInfo={this.state.playerInfo}></Table> */}
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react'

class Record extends React.Component{
  constructor(){
    super();
    this.state = {
      overallWins : 0,
      overallLosses : 0,
      overallTies : 0,
      homeWins : 0,
      homeLosses : 0,
      homeTies : 0,
      awayWins : 0,
      awayLosses : 0,
      awayTies : 0,
      lastTenWins : 0,
      lastTenLosses : 0,
      lastTenTies : 0,
    };
  };

  componentDidMount() {
    fetch('https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record')
    .then(res => res.json())
    .then((data) => {
      let overallWs, overallLs, overallTs, homeWs, homeLs, homeTs, awayWs, awayLs, awayTs, lastTenWs, lastTenLs, lastTenTs;
      let results = data.records[2].teamRecords;
      for (let i = 0; i < results.length; i++){
        if(results[i].team.id == 21){
          overallWs = results[i].leagueRecord.wins;
          overallLs = results[i].leagueRecord.losses;
          overallTs = results[i].leagueRecord.ot;
          homeWs = results[i].records.overallRecords[0].wins;
          homeLs = results[i].records.overallRecords[0].losses;
          homeTs = results[i].records.overallRecords[0].ot;
          awayWs = results[i].records.overallRecords[1].wins;
          awayLs = results[i].records.overallRecords[1].losses;
          awayTs = results[i].records.overallRecords[1].ot;
          lastTenWs = results[i].records.overallRecords[3].wins;
          lastTenLs = results[i].records.overallRecords[3].losses;
          lastTenTs = results[i].records.overallRecords[3].ot;
          // home = results[i].records.overallRecords[0];
          // away = results[i].records.overallRecords[1];
          // streak = results[i].records.overallRecords[3];
          // console.log(home)
        }
      }
      this.setState({ overallWins: overallWs, overallLosses : overallLs, overallTies : overallTs, homeWins : homeWs, homeLosses : homeLs, homeTies : homeTs, awayWins : awayWs, awayLosses : awayLs, awayTies : awayTs, lastTenWins : lastTenWs, lastTenLosses : lastTenLs, lastTenTies : lastTenTs})
    })
}

render() {

  return (
    <div>
      <h3>Overall Record</h3>
          <div>{this.state.overallWins} - {this.state.overallLosses} - {this.state.overallTies}</div>
      <h3>Home Record</h3>
          <div>{this.state.homeWins} - {this.state.homeLosses} - {this.state.homeTies}</div>
      <h3>Away Record</h3>
          <div>{this.state.awayWins} - {this.state.awayLosses} - {this.state.awayTies}</div>
      <h3>Last Ten</h3>
          <div>{this.state.lastTenWins} - {this.state.lastTenLosses} - {this.state.lastTenTies}</div>
    </div>
  )
}

}
  


export default Record;
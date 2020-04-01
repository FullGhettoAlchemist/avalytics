import React, { Component } from 'react'
import ReactTable from 'react-table'
import Promise from 'promise'
const rp = require('request-promise-native');


const columns = [{  
   Header: 'Player',  
   accessor: 'fullName'  
  },{  
  Header: 'No.',  
  accessor: 'jerseyNumber'  
  },
  {Header: 'Position',
  accessor: 'position'
   }
]  

//MySQL docker password = teHbyL0K3kYx&ekOwaRnif;@GIp
class Table extends Component{
   constructor(){
      super()
      this.state = {
         tabledata : []
      }
   }

   //might have to replace this with Promise.all for multiple API calls 
   componentDidMount(){
      Promise.all([fetch('https://statsapi.web.nhl.com/api/v1/teams/21/?expand=team.roster')])
         .then(([res1]) => {
            return Promise.all([res1.json()])
         })
         .then(([res1]) => {
            var roster = []
            let dataset = res1.teams[0].roster.roster;
               console.log(dataset);
               dataset.forEach(player => {
                  const dict = {
                     id: player.person.id,
                     fullName : player.person.fullName,
                     jerseyNumber : player.jerseyNumber,
                     position : player.position.code,
                  }
                  roster.push(dict);
               })
               console.log(roster)
               this.setState({tabledata : [...this.state.tabledata, ...roster]})
            })
   }


   //  componentDidMount(){
   //      fetch('https://statsapi.web.nhl.com/api/v1/teams/21/?expand=team.roster')
   //      .then(res => res.json())
   //      .then((data) => {
   //         var roster = []
   //         let dataset = data.teams[0].roster.roster;
   //          console.log(dataset);
   //          dataset.forEach(player => {
   //             const dict = {
   //                id: player.person.id,
   //                fullName : player.person.fullName,
   //                jerseyNumber : player.jerseyNumber,
   //                position : player.position.code,
   //             }
   //             roster.push(dict);
   //          })
   //          console.log(roster)
   //          this.setState({tabledata : [...this.state.tabledata, ...roster]})
   //      })
         
   //      .catch(console.log)
   //  }

    renderTableData(){
       return this.state.tabledata.map((player, index) => {
          const {id, fullName, jerseyNumber, position} = player
          return(
             <tr key={id}>
                <td>{jerseyNumber}</td>
                <td>{fullName}</td>
                <td>{position}</td>
             </tr>
          )
       })
    }
     render() {
        return (
           <div>
              <h1 id='title'>Stats</h1>
             <table>
                <tbody>
                   {this.renderTableData()}
                </tbody>
             </table>
           </div>
        )
     }
}



 
export default Table;
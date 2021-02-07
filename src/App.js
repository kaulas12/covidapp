import React from 'react';
import './App.css';
import axios from 'axios';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Card from './Card';
import 'tachyons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      columnDefs:[
      // {headerName: 'Make', field:'make',sortable: true, filter:true},
      // "dailyconfirmed": "1",
      // "dailydeceased": "0",
      // "dailyrecovered": "0",
      // "date": "30 January ",
      // "dateymd": "2020-01-30",
      // "totalconfirmed": "1",
      // "totaldeceased": "0",
      // "totalrecovered": "0"
      // {headerName: 'Model', field:'model',sortable: true, filter:true},
      
      {headerName: 'dailyconfirmed', field:'dailyconfirmed',sortable:true, filter:true},
      {headerName: 'dailydeceased', field:'dailydeceased',sortable:true, filter:true},
      {headerName: 'dailyrecovered', field:'dailyrecovered',sortable:true, filter:true},
      {headerName: 'date', field:'date',sortable:true, filter:true},
      {headerName: 'dateymd', field:'dateymd',sortable:true, filter:true},
      {headerName: 'totalconfirmed', field:'totalconfirmed',sortable:true, filter:true},
      {headerName: 'totaldeceased', field:'totaldeceased',sortable:true, filter:true},
      {headerName: 'totalrecovered', field:'totalrecovered',sortable:true, filter:true},
      // {headerName: 'price', field:'price',sortable: true, filter:true},
      ],
       rowData:[
       {"dailyconfirmed": "1",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "30 January ",
      "dateymd": "2020-01-30",
      "totalconfirmed": "1",
      "totaldeceased": "0",
      "totalrecovered": "0"},
      {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "31 January ",
      "dateymd": "2020-01-31",
      "totalconfirmed": "1",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "01 February ",
      "dateymd": "2020-02-01",
      "totalconfirmed": "1",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    
    {
      "dailyconfirmed": "1",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "03 February ",
      "dateymd": "2020-02-03",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "04 February ",
      "dateymd": "2020-02-04",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "05 February ",
      "dateymd": "2020-02-05",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "06 February ",
      "dateymd": "2020-02-06",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "07 February ",
      "dateymd": "2020-02-07",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "08 February ",
      "dateymd": "2020-02-08",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "09 February ",
      "dateymd": "2020-02-09",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "10 February ",
      "dateymd": "2020-02-10",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "11 February ",
      "dateymd": "2020-02-11",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "12 February ",
      "dateymd": "2020-02-12",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "0"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "1",
      "date": "13 February ",
      "dateymd": "2020-02-13",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "1"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "14 February ",
      "dateymd": "2020-02-14",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "1"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "15 February ",
      "dateymd": "2020-02-15",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "1"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "1",
      "date": "16 February ",
      "dateymd": "2020-02-16",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "2"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "17 February ",
      "dateymd": "2020-02-17",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "2"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "18 February ",
      "dateymd": "2020-02-18",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "2"
    },
    {
      "dailyconfirmed": "0",
      "dailydeceased": "0",
      "dailyrecovered": "0",
      "date": "19 February ",
      "dateymd": "2020-02-19",
      "totalconfirmed": "3",
      "totaldeceased": "0",
      "totalrecovered": "2"
    },




    
      // {make:'Toyota', model:'Celica',price:35000},
      // {make:'To', model:'Celica',price:34000},
      // {make:'yota', model:'Celica',price:31000},
      // // {"make": "1","model": "0","dailyrecovered": "0"},
      ]
        // rowData: null,

    };
  }

  // componentDidMount(){
  //   fetch('https://api.covid19india.org/data.json')
  //   .then(res => res.json())
  //   .then(rowData => this.setState({rowData}))
  //   .catch(err=>console.log(err));
  // }

  render(){
    return(
      <div className=' f4 tc '>
      <h1>Covid Dashboard</h1>
      <div className='container'>
      <div
      className="ag-theme-alpine tc

      dib br5 pa3 ma2 grow  bw2 shadow-5"
      style={
        {

          width:600,
          height:600,
        }
      }
      >

      <AgGridReact
      columnDefs={this.state.columnDefs}
      rowData={this.state.rowData}
      rowSelection="multiple"
      />
      </div>
      <Card/>
      </div>
      
      </div>
      )
  }

}

export default App;

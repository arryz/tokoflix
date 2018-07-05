import React, { Component } from 'react';
import {rootUrl, api_key} from './../../config/MoviesDBApi.js';

class MoviesCurrent extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var currMonth = today.getMonth()+1;
    var currDate = today.getDate();
    var currYear = today.getFullYear();
    this.state = {
      'Agenda': [],
      'pickerItemYear':[currYear-1, currYear, currYear+1],
      'pickerItemMonth':[
        {'value':1,'label':"Januari"},
        {'value':2,'label':"Februari"},
        {'value':3,'label':"Maret"},
        {'value':4,'label':"April"},
        {'value':5,'label':"Mei"},
        {'value':6,'label':"Juni"},
        {'value':7,'label':"Juli"},
        {'value':8,'label':"Agustus"},
        {'value':9,'label':"September"},
        {'value':10,'label':"Oktober"},
        {'value':11,'label':"November"},
        {'value':12,'label':"Desember"}
      ],
      'year':currYear,
      'month':currMonth,
      'currentYear':currYear,
      'currentMonth':currMonth,
      'currentDate':currYear+"-"+
        (currMonth.toString().length>1?currMonth:"0"+currMonth)+"-"+
        (currDate.toString().length>1?currDate:"0"+currDate),
      'msg':""
    };
  };

  render() {
  return(
    <div>
      <h2>MoviesCurrent 2</h2>
    </div>
  );

  }



  _getMoviesCurrent = async () => {

    try{

      let response = await fetch(
        rootUrl+'movie/popular?api_key='+api_key,{
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      let responseJson = await response.json();

      console.log("result", responseJson);

      return(
        <div>
          <h2>MoviesCurrent</h2>
        </div>
      );

    }
    catch(error){
      console.log(error);
    }
  }
};

export default MoviesCurrent;

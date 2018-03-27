import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import 'global/fonts/Roboto/style.scss'
import './main.scss'

const daysOfTheWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

const AmountOfDaysInMonth = () => {
  return new Date(new Date().getMonth()+1, new Date().getFullYear()+1, 0).getDate()
}

const daysOfTheWeekRender = () => {
    return (
      <ul className='daysOfTheWeek'>
        {
          daysOfTheWeek.map((item, index) => <li className='dayOfTheWeek' key={index}>{item}</li>)
        }
      </ul>
    )
}

const daysOfTheMonthRender = (num) => {
  let daysToSkip = 3;
  let a = (new Array(daysToSkip)).fill().map((v,i) => i+1);

    return (
      <ul className='daysOfTheMonth'>
        {
          a.map((item, index) => <li className='dayOfTheMonth' key={index}>{'-'}</li>)
        } {
          num.map((item, index) => <li className='dayOfTheMonth' key={index}>{item}</li>)
        }
      </ul>
    )
/*   return (
    <ul className='daysOfTheMonth'>
      {
        num.map((item, index) => <li className='dayOfTheMonth' key={index}>{item}</li>)
      }
    </ul>
  ) */
}

const currentDayHightLight = document.getElementsByTagName('li');
let  currentWeekDayq = daysOfTheWeek[parseInt(new Date().getDay())-1];
const check = () => {
  if (currentDayHightLight.innerHTML == {currentWeekDayq}) {
    alert('hi');
  }
}

class Main extends Component {
  state = {
    months,
    currentMonth: (months[parseInt(new Date().getMonth())]),
    currentWeekDay: daysOfTheWeek[parseInt(new Date().getDay())-1],
    currentDay: parseInt(new Date().getDate())
  }

  handleLoad = () => {
    this.setState (prevState => ({

    }))
  }

  render(){
    const num = (new Array(AmountOfDaysInMonth())).fill().map((v,i) => i+1)

    return (
      <Fragment>
        <div id="calendarHolder">
          <div id="monthHolder">{this.state.currentMonth}</div>
          {daysOfTheWeekRender()}
          {daysOfTheMonthRender(num)}
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))

import React, { Component } from 'react'

//const items = ['Jon', 'Gendry', 'Aria', 'Kate', 'Tirion'];

const items = [
  {
    name: 'Jon',
    surname: 'Targaryen',
    phone: '8(555)0235 62'
  },
  {
    name: 'Gendry',
    surname: 'Barathien',
    phone: '8(555)0842 93'
  },
  {
    name: 'Aria',
    surname: 'Stark',
    phone: '8(555)0564 55'
  },
  {
    name: 'Kate',
    surname: 'Stark',
    phone: '2(555)6613 10'
  },
  {
    name: 'Tirion',
    surname: 'Lanister',
    phone: '2(555)5532 45'
  }
];

class Search extends Component {
    state = { 
      items
    }

handleChange = (({target: {value}}) => { 
  // value = value.split(' ').join('')
  this.setState ({
    //items: items.filter(item => item.toLowerCase() === value.toLowerCase())
    //items: items.filter(item => ~(item.toLowerCase().search(value.toLowerCase()))),
    //items: items.filter(item => ~(item.toLowerCase().indexOf(value.toLowerCase()))),
    items: items.filter(item => 
      {
        const fullName = `${item.name} ${item.surname}`.toLowerCase()
        // debugger
        return ~fullName.indexOf(value.toLowerCase())
      }
    ),
  })
})

  render(){
    const {items} = this.state
    return(
      <div>
        <form>
        <input type="search" onChange={this.handleChange} />
        </form>
        <table id="SearchResults">{
          items.map((item, index) =>
          <tr key={index}>
            <td>{item.name} {item.surname}</td>
            <td>{item.phone}</td>
          </tr>)
        }</table>
      </div>
    );
  }
}
/* <ul>{
  items.map((item, index) =>
  <li key={index}>{item.name} {item.surname}</li>)
}</ul> */
export default Search

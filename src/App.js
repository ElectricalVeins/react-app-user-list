/*
import React, { Component } from 'react';
import UsersList from './components/UserList';

const usersData = [
  {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }];

class App extends Component {

  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render () {
    return (
      <UsersList users={usersData}/>
    );
  }
}

export default App;*/
import React, { Component } from 'react';
import Timer from './components/Timer'

/*class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phones: [],
      isFetching: false,
      error: null,
      isTrue:true,
    };
  }

  loadData = () => {
    fetch('/phones.json')
      .then(res => res.json())
      .then(phones => {
        this.setState({
                        isFetching: false, phones
                      });
      })
      .catch(err => { //обычно .catch не используют тут читай доку: ajax and api
        this.setState({
                        isFetching: false, error: err
                      });
      });
  };

  componentDidMount () {
    this.setState({ isFetching: true, });
    setTimeout(this.loadData,4000);
    //в реальной задаче просто вызов loadData
  }

  reverse=()=>{
    this.setState({
                    isTrue: !this.state.isTrue
                  })
  };

  render () {
    if (this.state.isFetching) {
      return 'Loading...';
    }

    if (this.state.error) {
      return 'Error! or(this.state.error.message)';
    }

    return (
      <div>
      <ol>
        {
          this.state.phones.map(item => {
            return <li key={item.id}>{item.model + item.id}</li>;
          })
        }
      </ol>
        {this.state.isTrue && <ChildComponent/>}
        <button onClick={this.reverse}> Toggle </button>
      </div>
    );
  }

}*/
class App extends Component {
  constructor (props) {
    super(props);

    this.timeId=setInterval(
      this.getTimeInNormalFormat
      ,1000);

    this.state = {
      timer: 0,
      isOn: false,
    };

  }

  componentDidMount() {
    this.setState({
      timer: new Date(2021,1).getTime() - new Date().getTime()
                  })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {

  }

  getTimeInNormalFormat=()=>{
    let distance = this.state.timer;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      timer: `${days}: ${hours}: ${minutes}: ${seconds}`
                  })
  };

  componentWillUnmount () {
    this.clearInterval(this.timeId)
  }

  render () {
  return (<div>
    {this.state.timer}
    <Timer/>
  </div>)
  }
}

export default App;
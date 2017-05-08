import React from 'react';
import Util from '../../util/util.js';
import {receiveTodo} from '../../actions/actions.js';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: Util.uniqueId(), title: '', body: '', done: false};
  }

  handleClick(e){
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  handleTitleInput(e){
    e.preventDefault();

    this.setState({title: e.target.value});

  }

  handleBodyInput(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render() {

    return (
      <form>
        <label> Title:
          <input onChange={this.handleTitleInput.bind(this)} type="text" value={this.state.title}/>
        </label>
        <label> Body:
          <input onChange={this.handleBodyInput.bind(this)} type="text" value={this.state.body}/>
        </label>

        <button onClick={this.handleClick.bind(this)} >Submit</button>
      </form>

    );

  }

}

export default TodoListForm;

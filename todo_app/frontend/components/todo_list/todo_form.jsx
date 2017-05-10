import React from 'react';
import Util from '../../util/util.js';
import {receiveTodo} from '../../actions/actions.js';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', done: false, tag_names: [], current_tag: ""};
  }

  handleClick(e){
    e.preventDefault();
    this.props.createTodo(this.state).then(
      () => this.setState({ title: '', body: '', tag_names: [], current_tag: ''})
    );
  }

  handleTitleInput(e){
    e.preventDefault();

    this.setState({title: e.target.value});

  }

  handleBodyInput(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }
  handleTagInput(e){
    e.preventDefault();
    this.setState({current_tag: e.target.value});
  }
  handleTagClick(e){
    e.preventDefault();
    this.setState({current_tag:"", tag_names: (this.state.tag_names.concat(this.state.current_tag))});
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
        <ul className="tag">
          {this.state.tag_names.map((tag_name, idx)=><li key={idx}>{tag_name}</li>)}
        </ul>
        <label> Input Tag Here:
          <input onChange={this.handleTagInput.bind(this)} type="text" value={this.state.current_tag} />
        </label>
        <button onClick={this.handleTagClick.bind(this)}> Add Tag </button>
        <button onClick={this.handleClick.bind(this)} >Submit</button>
        <ul>
        {this.props.allErrors.map((err, idx)=> <li key={idx}>{err}</li>)}
        </ul>
      </form>

    );

  }

}

export default TodoListForm;

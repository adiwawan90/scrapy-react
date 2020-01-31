import React, { Component } from 'react';
import paginate from 'paginate-array';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      size: 5,
      page: 1,
      currPage: null
    }

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:4000/crawl.json?start_requests=true&spider_name=babastudio`)
      .then(response => response.json())
      .then(todos => {
        const { page, size } = this.state;

        const currPage = paginate(todos, page, size);

        this.setState({
          ...this.state,
          todos,
          currPage
        });
      });
  }

  previousPage() {
    const { currPage, page, size, todos } = this.state;

    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(todos, newPage, size);

      this.setState({
        ...this.state,
        page: newPage,
        currPage: newCurrPage
      });
    }
  }

  nextPage() {
    const { currPage, page, size, todos } = this.state;

    if (page < 10) {
      const newPage = page + 1;
      const newCurrPage = paginate(todos, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  render() {
    const { page, size, currPage } = this.state;

    return (
      <div>
        <div>page: {page}</div>
        <div>size: {size}</div>
        {currPage &&
          <ul>
            {currPage.data.map(todo => <li>{todo.title}</li>)}
          </ul>
        }
        <button onClick={this.previousPage}>Previous Page</button>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    )
  }
}

export default TodoList;
import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of Booklist
  // If our state ever changes this container will instantly re-render with new list of books
  return {
    books: state.books
  };
}

//Connect takes a function and a component and produces a container
//Container is a component that is aware of the state that is contained by redux
//Whatever object is returned will be available to our component as this.props
//Whenever the application state changes,
//the object in the state funciton will be assigned as props to the function
export default connect(mapStateToProps)(BookList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {  bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // what is resturne dwil show up as aprops inside of BooList
  return {
    books: state.books,
  };
}

//Anything return from this fucntion will end up as props on the book list container
function mapDispatchToProps(dispatch) {
  //Whenver selectBook is called, the resul should be passed to all of our reduecers
  return bindActionCreators({selectBook: selectBook}, dispatch)

}

//Promote BookList from a componenet to ca container - 
//it needs to know about htis new dispaceth method, selectBook. make it available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

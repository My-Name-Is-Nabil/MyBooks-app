import React from 'react';
import './App.css';
import Title from './components/Title';
import BookShelf from './components/BookShelf';
import Search from './components/Search';
import { Link, Route } from 'react-router-dom';
// eslint-disable-next-line
import { getUserBooks, setUserBooks } from './getUserBooks';
class BooksApp extends React.Component {
  state = {
    userBooks: getUserBooks(),
  };
  checkForBook = ( books, book ) => {
    for(let i = 0; i < books.length; i++){
      if ( books[i].bookId === book.bookId || books[i].bookId === book.id )
        return true;
    }
    return false; 
  };
  addToCurrentlyReading = book => {
    book.section = 'currentlyReading';
    this.setState( prevState =>{
      const userBooks = prevState.userBooks;
      if (this.checkForBook(userBooks.read, book))
        userBooks.read.splice(userBooks.read.indexOf(book),1);
      if (this.checkForBook(userBooks.wantToRead, book ))
        userBooks.wantToRead.splice(userBooks.wantToRead.indexOf(book),1);
      if (!this.checkForBook(userBooks.currentlyReading, book))
        userBooks.currentlyReading.push(book);
      return { userBooks: userBooks };
    }, ()=>{
      setUserBooks(this.state.userBooks);
    })
  };
  addToWantToRead = book =>{
    book.section = 'wantToRead';
    this.setState(prevState => {
      const userBooks = prevState.userBooks;
      if (this.checkForBook(userBooks.read, book))
        userBooks.read.splice(userBooks.read.indexOf(book),1);
      if (this.checkForBook(userBooks.currentlyReading, book))
        userBooks.currentlyReading.splice(userBooks.currentlyReading.indexOf(book),1);
      if (!this.checkForBook(userBooks.wantToRead, book))
        userBooks.wantToRead.push(book);
      return { userBooks: userBooks };
    }, ()=>{
      setUserBooks(this.state.userBooks);
    })
  };
  addToRead = book =>{
    book.section = 'read';
    this.setState( prevState =>{
      const userBooks = prevState.userBooks;
      if (this.checkForBook(userBooks.currentlyReading, book))
        userBooks.currentlyReading.splice(userBooks.currentlyReading.indexOf(book),1);
      if (this.checkForBook(userBooks.wantToRead, book))
        userBooks.wantToRead.splice(userBooks.wantToRead.indexOf(book),1);
      if (!this.checkForBook(userBooks.read, book))
        userBooks.read.push(book);
      return { userBooks: userBooks };
    }, ()=>{
      setUserBooks(this.state.userBooks);
    });
  };
  determineSection = book =>{
    console.log(this.state.userBooks);
    if (this.checkForBook( this.state.userBooks.currentlyReading, book ))
        return 'currentlyReading';
    if (this.checkForBook( this.state.userBooks.wantToRead, book ))
        return 'wantToRead';
    if (this.checkForBook( this.state.userBooks.read, book ))
        return 'read';
    return '';
  };
  render() {
    return (
      <div className="app">
        <Route path="/search" exact>
          <Search determineSection={this.determineSection} addToCurrentlyReading={this.addToCurrentlyReading} addToWantToRead={this.addToWantToRead} addToRead={this.addToRead}></Search>
        </Route>
        <Route path="/" exact>
          <div className="list-books">
            <Title />
            <div className="list-books-content">
                <BookShelf addToCurrentlyReading={this.addToCurrentlyReading} addToWantToRead={this.addToWantToRead} addToRead={this.addToRead} section="Currently Reading" books = { this.state.userBooks.currentlyReading } ></BookShelf>
                <BookShelf addToCurrentlyReading={this.addToCurrentlyReading} addToWantToRead={this.addToWantToRead} addToRead={this.addToRead} section="Want to Read" books = { this.state.userBooks.wantToRead } ></BookShelf>
                <BookShelf addToCurrentlyReading={this.addToCurrentlyReading} addToWantToRead={this.addToWantToRead} addToRead={this.addToRead} section="Read" books = { this.state.userBooks.read } ></BookShelf>
            </div>
            <div className="open-search">
                <Link to="/search">
                  <button>
                    Add a book
                  </button>
                </Link>
            </div>
          </div>
        </Route>
      </div>
    )
  }
}

export default BooksApp;

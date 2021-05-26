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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    userBooks: getUserBooks(),
  };
  checkForBook = ( books, book ) => {
    for(let i = 0; i < books.length; i++){
      if ( books[i].name === book.name && books[i].author === book.author )
        return true;
    }
    return false; 
  };
  addToCurrentlyReading = book => {
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
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Route path="/search" exact>
          <Search addToCurrentlyReading={this.addToCurrentlyReading} addToWantToRead={this.addToWantToRead} addToRead={this.addToRead}></Search>
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

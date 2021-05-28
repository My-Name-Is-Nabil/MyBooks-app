import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { search } from '../BooksAPI';
export default class SearchBar extends React.Component{
    state = {
        query: '',
        books: [],
    };
    updateQuery( query ){
        this.setState({ query: query }, () => {
            query = query.trim();
            if (query !== ''){
                search(query).then( books => {
                    if (books && Array.isArray(books) && books.length > 0)
                        this.setState({ books: books });
                    else
                        this.setState( { books: [] } );
                }).catch( err => console.log(err));
            }
            else{
                this.setState( { books: [] } );
            }
        });
    };
    getBookAuthors( book ){
        if (book.authors)
            return book.authors.join(','); 
        else
            return 'Unknown';
    };
    getBookImage( book ){
        if (book.imageLinks)
            return book.imageLinks.thumbnail;
        return '../image-not-found.svg';
    };
    render(){ 
        const renderBooks = books => {
            return books.map( book => <Book addToCurrentlyReading={this.props.addToCurrentlyReading} addToWantToRead={this.props.addToWantToRead} addToRead={this.props.addToRead} bookId={book.id} key={book.id} title={`Title: ${book.title}`} authors={`Authors: ${this.getBookAuthors(book)}`} imageURL={this.getBookImage(book)} section={this.props.determineSection(book)}></Book> )
        };
        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ event => {this.updateQuery(event.target.value);}}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { renderBooks(this.state.books) }
                </ol>
            </div>
        </div>)
    }
}
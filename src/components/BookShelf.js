import React from 'react';
import Book from './Book';
export default class BookShelf extends React.Component{
    // state = {
    //     books: this.props.initialBooks, // This will only initialize the books state, but we have to deal with the change in other places in the code
    // };
    render(){
        return  (<div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.section}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            { this.props.books.map( book => ( <Book  addToCurrentlyReading={this.props.addToCurrentlyReading} addToWantToRead={this.props.addToWantToRead} addToRead={this.props.addToRead} bookId={book.bookId} key={book.bookId} title={book.title} authors={book.authors} imageURL={book.imageURL} section={book.section}/>) )}
                        </ol>
                    </div>
                </div>);
    }
}

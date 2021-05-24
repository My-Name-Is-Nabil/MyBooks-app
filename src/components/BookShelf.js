import React from 'react';
import Book from './Book';
export default class BookShelf extends React.Component{
    state = {
        books: this.props.initialBooks, // This will only initialize the books state, but we have to deal with the change in other places in the code
    };
    render(){
        console.log(this.state);
        return  (<div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.section}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            { this.state.books.map( book => ( <Book key={book.name} name={book.name} author={book.author} imageURL={book.imageURL} />) )}
                        </ol>
                    </div>
                </div>);
    }
}

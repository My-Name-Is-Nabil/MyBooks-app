import React from 'react';

export default function Book(props){
    return (<li>
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.imageURL})` }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move"  disabled>Move to...</option>
          <option value="currentlyReading" className={props.section === 'currentlyReading' ? 'highlight-section' : ''} onClick={()=>props.addToCurrentlyReading({title: props.title, authors: props.authors,imageURL: props.imageURL, bookId: props.bookId})}>Currently Reading</option>
          <option value="wantToRead" className={props.section === 'wantToRead' ? 'highlight-section' : ''} onClick={()=>props.addToWantToRead({title:props.title, authors:props.authors,imageURL:props.imageURL, bookId: props.bookId})}>Want to Read</option>
          <option value="read" className={props.section === 'read' ? 'highlight-section' : ''} onClick={()=>props.addToRead({title:props.title, authors:props.authors,imageURL:props.imageURL, bookId: props.bookId})}>Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">{props.authors}</div>
  </div></li>);
}
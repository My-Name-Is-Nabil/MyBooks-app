import React from 'react';

export default function Book(props){
    return (<li>
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.imageURL})` }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.name}</div>
    <div className="book-authors">{props.author}</div>
  </div></li>);
}
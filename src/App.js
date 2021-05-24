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
    userBooks:{
      currentlyReading:[],
      wantToRead:[],
      read:[]  
    }
  };
  render() {
    return (
      <div className="app">
        <Route path="/search" exact>
          <Search></Search>
        </Route>
        <Route path="/" exact>
          <div className="list-books">
            <Title />
            <div className="list-books-content">
                <BookShelf section="Currently Reading" initialBooks={
                  [
                    {
                      name: "To Kill a Mockinbird",
                      author: "Harper Lee",
                      imageURL: `"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"`,
                    },
                    {
                      name: "Ender's Game",
                      author: "Orson Scott Card",
                      imageURL: `"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"`, 
                    },
                  ]
                 }>
                </BookShelf>
                {/* <BookShelf section="Currently Reading" initialBooks= { this.state.userBooks.currentlyReading } ></BookShelf> */}
                {/* <BookShelf section="Want to Read" initialBooks={
                  [
                    {
                    name: '1776',
                    author: 'David McCullogh',
                    imageURL: `"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"`, 
                    },
                    {
                    name: "Harry Potter and the Sorcerer's Stone",
                    author: "J.K. Rowling",
                    imageURL: `"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"`, 
                    }
                  ]}>
                </BookShelf> */}
                <BookShelf section="Want to Read" initialBooks= { this.state.userBooks.wantToRead } ></BookShelf>
                {/* <BookShelf section="Read" initialBooks={
                  [
                    {
                    name: "The Hobbit",
                    author: "J.R.R. Tolkien",
                    imageURL: `"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"`,
                    },
                    {
                    name: "Oh, the Places You'll Go!",
                    author: "Mark Twain",
                    imageURL: `"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"`,
                    },
                    {
                    name: "The Adcentures of Tom Sawyer",
                    author: "Seuss",
                    imageURL: `"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"`,
                    }
                  ]
                }>
                </BookShelf> */}
                <BookShelf section="Read" initialBooks= { this.state.userBooks.read } ></BookShelf>
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

//Stack Overflow
export function getUserBooks() {
    return localStorage.getItem('userBooks') || { currentlyReading: [], wantToRead: [], read: [] }; 
}

export function setUserBooks( userBooks ) {
    localStorage.setItem( 'userBooks', userBooks );
    this.setState( { userBooks: userBooks } );
}
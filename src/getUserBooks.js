//Stack Overflow
export function getUserBooks() {
    if (localStorage.getItem('userBooks'))
        return JSON.parse(localStorage.getItem('userBooks'));
    else{
        localStorage.setItem('userBooks', JSON.stringify({ currentlyReading: [], wantToRead: [], read: [] }));        
        return JSON.parse(localStorage.getItem('userBooks'));
    }
}

export function setUserBooks( userBooks ) {
    localStorage.setItem('userBooks', JSON.stringify(userBooks));
}
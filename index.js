class Book {
    constructor(title, author, releaseDate, read) {
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
        this.read = read;
    }
}

class Library {
    library = [];

    addBookToLibrary() 
    {
        const title = document.querySelector('form > #title').value;
        const author = document.querySelector('form > #author').value;
        const releaseDate = document.querySelector('form > #release-date').value;
        
        this.library.push(new Book(title, author, releaseDate));
    }

    displayBookOnPage()
    {   
        // clear existing list, so no duplicates records are created
        const bookList = document.querySelector('#book-list');
        const bookRecords = Array.from(document.querySelectorAll('.BookRecord'));
    
        for (let record in bookRecords) {
            bookList.removeChild(bookRecords[record]);
        }
        
    
    
        for (const book in this.library)
        {
    
            // div for book info card
            const newDiv = document.createElement('div');
            newDiv.classList.add('BookRecord');
            
            // present book data in an unordered list
            const unorderedList = document.createElement('ul');
            newDiv.appendChild(unorderedList);
            
            const listOne = document.createElement('li');
            const listTwo = document.createElement('li');
            const listThree = document.createElement('li');
            const listFour = document.createElement('li');
    
            let bookObject = this.library[book];
            
            listOne.innerText = 'Title: ' + bookObject.title;
            listTwo.innerText = 'Author: ' + bookObject.author;
            listThree.innerText = 'Release Date: ' + bookObject.releaseDate;
            listFour.innerText = 'Read Status: ' + bookObject.read;
            
            unorderedList.appendChild(listOne);
            unorderedList.appendChild(listTwo);
            unorderedList.appendChild(listThree);
            unorderedList.appendChild(listFour);
            
            // Add the remove button
            const removeButton = document.createElement('button');
            removeButton.innerText = 'remove';
            removeButton.addEventListener('click', () => {
                bookList.removeChild(newDiv);
                this.library.splice(book, 1);
                this.displayBookOnPage();
            })
            newDiv.appendChild(removeButton);
    
            // Add read status button
            const readStatusButton = document.createElement('button');
            readStatusButton.innerText = 'Read Status';
            readStatusButton.addEventListener('click', () => {
                bookObject.read = !bookObject.read;
                this.displayBookOnPage();
            })
            newDiv.appendChild(readStatusButton);
    
    
            bookList.appendChild(newDiv);
        }
    }
}





// const myLibrary = [];
const myLibrary = new Library();

// temp populate Library array with books 
myLibrary.library.push(new Book('The Way of Kings', 'Brandon Sanderson', 2010, true));
myLibrary.library.push(new Book('Words of Radiance', 'Brandon Sanderson', 2014, true));
myLibrary.library.push(new Book('Oathbringer', 'Brandon Sanderson', 2017, false));

console.log(myLibrary.library);

myLibrary.displayBookOnPage();

const newBookBtn = document.querySelector('#new-book-button');
const formSubmit = document.querySelector('#submit-form');
const formClose = document.querySelector('#close-form');
const bookForm = document.querySelector('form');

newBookBtn.addEventListener( 'click', () => {
    const displayStyle = bookForm.style.display;
    if (displayStyle === 'none') {
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
});

formClose.addEventListener( 'click', (e) => {
    // e.preventDefault();
    bookForm.style.display = 'none';
});

formSubmit.addEventListener( 'click', (e) => {
    e.preventDefault();
    myLibrary.addBookToLibrary();
    myLibrary.displayBookOnPage();
});
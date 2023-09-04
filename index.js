
function Book(title, author, releaseDate) 
{
    this.title = title;
    this.author = author;
    this.releaseDate = releaseDate;
}

function addBookToLibrary() 
{
    const title = document.querySelector('form > #title').value;
    const author = document.querySelector('form > #author').value;
    const releaseDate = document.querySelector('form > #release-date').value;
    
    myLibrary.push(new Book(title, author, releaseDate));
}


function displayBookOnPage()
{   
    // clear existing list, so no duplicates records are created
    const bookList = document.querySelector('#book-list');
    const bookRecords = Array.from(document.querySelectorAll('.BookRecord'));

    for (let record in bookRecords) {
        bookList.removeChild(bookRecords[record]);
    }
    


    for (const book in myLibrary)
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
        
        let bookObject = myLibrary[book];
        
        listOne.innerText = 'Title: ' + bookObject.title;
        listTwo.innerText = 'Author: ' + bookObject.author;
        listThree.innerText = 'Release Date: ' + bookObject.releaseDate;
        
        unorderedList.appendChild(listOne);
        unorderedList.appendChild(listTwo);
        unorderedList.appendChild(listThree);
        
        // Add the remove button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.addEventListener('click', () => {
            bookList.removeChild(newDiv);
            myLibrary.splice(book, 1);
            displayBookOnPage();
        })
        newDiv.appendChild(removeButton);


        bookList.appendChild(newDiv);
    }
}


const myLibrary = [];

// temp populate Library array with books 
myLibrary.push(new Book('The Way of Kings', 'Brandon Sanderson', 2010));
myLibrary.push(new Book('Words of Radiance', 'Brandon Sanderson', 2014));
myLibrary.push(new Book('Oathbringer', 'Brandon Sanderson', 2017));

console.log(myLibrary);

displayBookOnPage();

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
    addBookToLibrary();
    displayBookOnPage();
});
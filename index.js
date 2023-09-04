const myLibrary = [];

function Book(title, author, releaseDate) 
{
    this.title = title;
    this.author = author;
    this.releaseDate = releaseDate;
}

function addBookToLibrary() 
{
    const title = prompt('Book Title');
    const author = prompt('Book Author');
    const releaseDate = prompt('Book Release Date');

    myLibrary.push(new Book(title, author, releaseDate));
}


function displayBookOnPage()
{
    pageDiv = document.querySelector('#book-list');

    for (const book in myLibrary)
    {
        // div for book info card
        newDiv = document.createElement('div');
        newDiv.classList.add('BookRecord');

        // present book data in an unordered list
        unorderedList = document.createElement('ul');
        newDiv.appendChild(unorderedList);

        listOne = document.createElement('li');
        listTwo = document.createElement('li');
        listThree = document.createElement('li');

        bookObject = myLibrary[book];

        listOne.innerText = 'Title: ' + bookObject.title;
        listTwo.innerText = 'Author: ' + bookObject.author;
        listThree.innerText = 'Release Date: ' + bookObject.releaseDate;

        unorderedList.appendChild(listOne);
        unorderedList.appendChild(listTwo);
        unorderedList.appendChild(listThree);

        // Add the remove button
        removeButton = document.createElement('button');
        removeButton.innerText = 'delete';
        newDiv.appendChild(removeButton);
  
        
        pageDiv.appendChild(newDiv);
    }
}
// addBookToLibrary(myLibrary);

// temp populate Library array with books 
myLibrary.push(new Book('The Way of Kings', 'Brandon Sanderson', 2010));
myLibrary.push(new Book('Words of Radiance', 'Brandon Sanderson', 2014));
myLibrary.push(new Book('Oathbringer', 'Brandon Sanderson', 2017));

console.log(myLibrary);

displayBookOnPage();
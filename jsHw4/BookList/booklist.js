document.addEventListener('DOMContentLoaded', () => {
    const bookItems = document.querySelectorAll('.book-item');

    let currentSelected = null;

    bookItems.forEach(item => {
        item.addEventListener('click', () => {
            if (currentSelected) {
                currentSelected.style.backgroundColor = ''; 
            }
            item.style.backgroundColor = '#ffa984'; 
            currentSelected = item; 
        });
    });
});

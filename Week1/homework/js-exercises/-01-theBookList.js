'use strict';

const books = [
    {
      title: 'Kurk Mantolu Madonna',
      author: 'Sabahattin Ali',
      alreadyRead: true,
    },
    {
      title: 'Kucuk Aga',
      author: 'Tarik Bugra',
      alreadyRead: true,
    },
    {
      title: 'Tutunamayanlar',
      author: 'Oguz Altay',
      alreadyRead: false,
    }
  ];
  
  for (let i = 0; i < books.length; ++i) {
      let createPEls = document.createElement('p');
      createPEls.textContent = `${books[i].title} written by ${books[i].author}` ;
      document.body.appendChild(createPEls);
      if (books[i].alreadyRead === true) {
        createPEls.style.color = 'green';
      } else {
        createPEls.style.color = 'red';
      }
  };

  let imageBook1 = document.createElement('img');
  imageBook1.src = 'https://upload.wikimedia.org/wikipedia/tr/f/fe/Kurk_mantolu_madonna.jpg';
  document.body.appendChild(imageBook1);
  let imageBook2 = document.createElement('img');
  imageBook2.src = 'https://upload.wikimedia.org/wikipedia/tr/thumb/7/71/Kucukaga.jpg/220px-Kucukaga.jpg';
  document.body.appendChild(imageBook2);
  let imageBook3 = document.createElement('img');
  imageBook3.src = 'https://upload.wikimedia.org/wikipedia/tr/thumb/a/a2/Tutunamayanlar-kapak.jpg/220px-Tutunamayanlar-kapak.jpg';
  document.body.appendChild(imageBook3);
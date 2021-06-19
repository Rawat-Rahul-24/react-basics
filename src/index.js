import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {books} from './books'
import Book from './Book'

function BookList() {
  
  return (
    <section className="booklist">
      {books.map((book) => {

        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
      {/* <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/> */}
    </section>
  );
}


// const Image = () => <img src="https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-600w-1529923664.jpg" alt="" />

// const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Paulo Cohelo</h4>

// const Title = () => <h1>Eleven Minutes</h1>


ReactDom.render(<BookList />, document.getElementById('root'))
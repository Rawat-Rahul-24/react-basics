import React from 'react'

const Book = (props) => {
 //eventhandler - onClick, onMouseOver

 const clickHandler = (e) => {
   console.log(e);
   console.log(e.target);
 }

 const complexEvent = (author) => {
   console.log(author);
 }

  const {img, title, author} = props;

  return <article className="book" onMouseOver={() => {
     console.log(title);
  }}> 
      <img src={img} alt="" />
     
      <h1 onClick={() => console.log(title)}>{title}</h1>

      <h4>{author}</h4>
      
      <button type="button" onClick={clickHandler}>EventHandler</button>
      <button type="button" onClick={() => complexEvent(author)}>Complex Event</button>
      {/* {console.log(props)} */}
     </article>
}

export default Book

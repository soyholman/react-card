import React from 'react'
import Card from './Card'


const cards=[
 {
   id:1,
   title:'Holman Morales',
   image:'https://soyholman.github.io/img/mypic.jpg',
   Text:'Hola Soy Holman',
   smalling:'web developer'
 }
 ,
 {
   id:2,
   title:'Angely Membreño',
   image:'https://soyholman.github.io/img/WhatsApp%20Image%202022-01-17%20at%201.10.11%20PM.jpeg',
 Text:'Hola soy Angely',
 smalling:'web design'
  },
 {
   id:3,
   title:'Josefo',
   image: 'https://soyholman.github.io/img/jose.jpeg',
   Text:'Hola Soy Josefo',
   smalling:'web dev'
 }

]
function Cards() {
  return (
    <div className='container d-flex justify-content-center  align-items-center h-100'>
         <div className="row">
      {
cards.map(card=>(
<div className="col-md-4" key={card.id}>
  <Card title={card.title} imagesource={card.image} Text={card.Text} smalling={card.smalling}></Card>
</div>

))

      }
      
         </div>


    </div>
  )
}

export default Cards

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const Home = () => {

     const dis=useDispatch()
      const product=[
        {
            id:1,
            name: "Wireless Headphones",
            description: "Bluetooth headphones with noise cancellation",
            price: 8999,
             stock: 50,
             category: "Electronics",
             image:'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
              id:2,
             name: "shoes",
             description: "comfortable shoes for running",
             price: 109,
             stock: 5,
            category: "Sports",
            image:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        },
          {
              id:3,
             name: "laptop",
             description: "A dell 7490 i7 gen12 touch display",
             price: 9999,
             stock: 10,
            category: "Electronics",
            image:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        },
          {
              id:4,
             name: "table",
             description: "A polish wooden for home decoration",
             price: 99,
             stock: 30,
            category: "Furniture",
            image:'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
  return (
    <>
    <div>Home</div>

{
    product.map((e)=>{
        return(
            <>
            <div className='flex '>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
         {e.description} 
         
        </Card.Text>
        <Card.Text>
        
       Price  {e.price}
       
        </Card.Text>
         <Card.Text>
        
        {e.stock}
       
        </Card.Text>
         <Card.Text>
        
        {e.category}
       
        </Card.Text>
        <Button variant="primary" onClick={()=>{dis(addToCart({

            id:e.id,
            name:e.name,
            description:e.description,
            price:e.price,
            stock:e.stock,
            category:e.category,
            image:e.image,
            qnty:1
        }))}}>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>

            </>
        )
    })
}
    
</>

  )
}

export default Home
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Toaster,toast } from 'react-hot-toast';
import '../pages/card.css'


const Home = () => {

     const dis=useDispatch()

     const products=useSelector(state=>state.myca.cart)
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
        },
         {
              id:5,
             name: "Sunglasses",
             description: "A lightweighted and uv protected sun glass",
             price: 75,
             stock: 7,
            category: "Men's Accessories",
            image:'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
         
      ]
  return (
    <>
   <div className="flex flex-wrap justify-center gap-6 mt-5">
  {product.map((e) => (
    <div key={e.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <Card className="shadow-2xl hover:scale-105 transition-transform duration-300">
        <Card.Img variant="top" src={e.image} />
        <Card.Body className="flex flex-col gap-2">
          <p className="text-black font-bold">Product</p>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text className="flex">
            <p className="text-black font-bold">Description</p>:{" "}
            <p className="font-semibold">{e.description}</p>
          </Card.Text>
          <Card.Text className="flex">
            <p className="text-black font-bold">Price</p>:{" "}
            <p className="font-semibold">{e.price}</p>
          </Card.Text>
          <Card.Text className="flex">
            <p className="text-black font-bold">Stock</p>:{" "}
            <p className="font-semibold">{e.stock}</p>
          </Card.Text>
          <Card.Text className="flex">
            <p className="text-black font-bold">Category</p>:{" "}
            <p className="font-semibold">{e.category}</p>
          </Card.Text>
          <Button
            variant="primary"
            className="bg-gradient-to-br from-indigo-900 to-indigo-600"
            onClick={() => {
              dis(
                addToCart({
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  price: e.price,
                  stock: e.stock,
                  category: e.category,
                  image: e.image,
                  qnty: 1,
                })
              );
             
            }}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>


    <Toaster/>
</>

  )
}

export default Home
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios'
import { useState, useEffect } from "react";
const FreeBook = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get("http://localhost:4001/book")
      setBook(res.data.filter((data) => data.category === "Free"))
      }catch(err){
        console.log(err)
      }
    }
    getBook();
  },[])

  // const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-[50rem] container mx-auto md:px-20 px-4">
        <div><h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
            Lorem ispum dolor sit amet, consectetur adipisicing elit. Accsantium
            veritals alias pariatur ad dolor repudiandae eligendi corporis nulla
            non suscipit, iure neque earu nearu?
        </p>
        </div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
            {
              (book.length>0) ?
              book.map((item)=>(
                  <Cards item={item} key={item.id}/>
              )) :
              <p>No book available</p>
            }
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;

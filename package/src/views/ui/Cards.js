import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import { useState, useEffect } from "react";

const BlogDataa = [
  {
    image: bg1,
    title: "Name of Doctor",
    subtitle: "Rating 2 , 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional This is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 5,
    liked:false,
    viewDetail: true,
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 4,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 3,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 2,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 1,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 0,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 0,
    liked:false,
    viewDetail: false,
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    likes: 0,
    stars: 0,
    liked:false,
    viewDetail: false,
  },
];


const Cards = () => {
  const [BlogData, setBlogdata] = useState(BlogDataa);


  const HandleLike = (index) =>{
      setBlogdata((prevData)=>{
        const newData = [...prevData];
        if (!newData[index].liked){
          newData[index].liked = true;
          newData[index].likes += 1;
        }
        else{
          newData[index].liked = false;
          newData[index].likes -= 1;
        }
        return newData;
      })
    }

    const showDetail =  (index) =>
    {
      setBlogdata((prevData)=>{
        const newData = [...prevData];
        if (!newData[index].viewDetail){
          newData[index].viewDetail = true;
        }
        else{
          newData[index].viewDetail = false;
        }
        return newData;
      })
      
    }

  
    return (
      <div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <h5 className="mb-3">Posts</h5>
        <Row>
          {BlogData.map((blg, index) => (
            blg.viewDetail ? (
              <Col sm="12" lg="12" xl="12" key={index}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  subtitle={blg.subtitle}
                  text={blg.description}
                  color={blg.btnbg}
                  likes={blg.likes}
                  stars={blg.stars}
                  liked={blg.liked}
                  isDetail = {true}
                  onLike={() => {
                    HandleLike(index);
                  }}
                  showDetail = {
                    ()=>{
                      showDetail(index)
                    }
                  }
                />
              </Col>
            ) : (
              <Col sm="12" lg="6" xl="6" key={index}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  subtitle={blg.subtitle}
                  text={blg.description.slice(0, 100) + '...'}
                  color={blg.btnbg}
                  likes={blg.likes}
                  stars={blg.stars}
                  liked={blg.liked}
                  isDetail = {false}
                  onLike={() => {
                    HandleLike(index);
                  }}
                  showDetail = {
                    ()=>{
                      showDetail(index)
                    }
                  }
                />
              </Col>
            )
          ))}
        </Row>
      </div>
    );

                }


export default Cards;
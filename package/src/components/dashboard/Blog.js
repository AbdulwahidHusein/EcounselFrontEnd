import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from 'reactstrap';
import { FaHeart, FaStar } from 'react-icons/fa';

const Blog = (props) => {
  const [stars, setStars] = useState([Array(5).fill(false)])
  useEffect(
    ()=>{
      setStars(
        (prevstars)=>{
          let newStar = [...prevstars];
      
          for (let i=0; i< props.stars; i++){
            newStar[i] = true;
          }
          for (let j=props.stars; j<5; j++){
            newStar[j] = false;
          }
          return newStar;
        }
      )
    }, [props.stars
    ]
  )

  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        {props.isDetail && <CardText className="mt-3">{props.text}</CardText>}
        {
        
        !props.isDetail && <CardText className="mt-3">{props.text}</CardText>
        
        }
        <Button onClick={props.showDetail} color={props.color}>
          
          {!props.isDetail && 'Read More'}{props.isDetail && 'Read Less'}</Button>
        <div className="d-flex justify-content-between mt-3">
          <div onClick={props.onLike} style={{'cursor':'pointer'}}  >
            {props.liked && <FaHeart className="mr-2" style={{'color':'red'}}/> }
            {!props.liked && <FaHeart className="mr-2"/> }
            <span> {props.likes} Likes</span>
          </div>
            {
              stars.map(
                (bool, index)=>{
                  return (
                    <div key={index} className="">
                    {bool && <FaStar className="mr-2" style={{'color':'gold'}}/>}
                    {!bool && <FaStar className="mr-2" />}
          </div>
                  )
                }
              )
            }
          
            
        </div>
      </CardBody>
    </Card>
  );
};

export default Blog;
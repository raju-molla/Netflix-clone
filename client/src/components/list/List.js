import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.css'

const List = () => {
    const [slideNumber, setSlider] = useState(0);
    const [isMove, Setmove] = useState(false);
    const listRef = useRef();

    const handerClick=(direction)=>{
        Setmove(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber>0 ) {
          setSlider(slideNumber-1)
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber<5 ) {
            setSlider(slideNumber+1)
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        // console.log(distance);
    }
  return (
    <div className="list">
    <span className="listTitle">Continue to watch</span>
    <div className="wrapper">
      <ArrowBackIosOutlined
        className="sliderArrow left" onClick={()=> handerClick("left")}
        style={{display: !isMove && "none"}}
        />
      <div className="containerList" ref={listRef} >
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={()=> handerClick("right")}
      />
    </div>
  </div>
  )
}

export default List
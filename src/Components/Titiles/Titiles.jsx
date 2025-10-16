import React from 'react'
import { TfiShiftRightAlt } from "react-icons/tfi";
import '../../App.css';

const Titiles = ({maintitle}) => {
  return (
    <div>
        <h2 className='title_one'><span><TfiShiftRightAlt size='1.3em' style={{color:'#fff'}} /></span> {maintitle}</h2>
    </div>
  )
}

export default Titiles
import React from 'react'
import ImageBg from "next/image";
import RoboPunksPic from "../robopunksnft.png";


const RoboPunksNFT = () => {
  return (
    <div >
      <ImageBg src={RoboPunksPic} className="rounded-xl"/>
    
    </div>
  )
}

export default RoboPunksNFT
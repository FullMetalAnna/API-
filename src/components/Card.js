import React, { useState } from 'react'

const Card = ({ person }) => {
    //owner and files const 
    const { owner, files } = person;
    const [clicked, setClicked] = useState(false);

  return (
    <div onClick={() => setClicked(true)}  className=' flex justify-start items-center p-2 my-2 max-[100%] h-28 '>
  
    <img 
    className={`w-1/6 object-contain h-28 ${clicked ? "opacity-50" : ""} `}
    src={person.owner.avatar_url} 
    alt='Avatar' />

    <p className={`text-xl  ${
						clicked ? "text-orange-500" : "text-black"
					}  `}> {Object.keys(files)[0] ? Object.keys(files)[0] : "No files Found!"}</p>
    </div>
  )
}

export default Card;

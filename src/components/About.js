import React from 'react'
import "../styles/About.css"

import church from "../assets/images/church.png";
import father from "../assets/images/father1.png"
import imageOne from "../assets/images/imgOne.CR2"




export const About = () => {

    const images = [
        {id:1 , imgUrl: imageOne},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
        {id:1 , imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmp0m-dCqgyz7Qxnfoh6rG9-s9xoGcNEGpw&usqp=CAU"},
    ]


  return (
    <>
    <body className='aboutContainer'>
        <header className='heading'>
            <h1>About Us</h1>
        </header>
        <div className='aboutChurch'>
            <div className='churchText'>
                <h2>Church Name</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis culpa necessitatibus nihil commodi ut ullam labore eveniet reiciendis debitis recusandae? Saepe a vitae accusamus expedita! Perspiciatis soluta aliquid maxime culpa?</p>
                <div className='slider'>
                    {images.slice(0, 6).map((d) => (
                        <img src={d.imgUrl} alt="" className='imageSlider' />
                    ))}
                <div className=''>
                    <p className='seeMoreText'>See More</p>
                </div>
                </div>
            </div>
            <div className='churchImage'>
                <div className='imgCircle'></div>
                <img src={church} alt="" />
            </div>
        </div>
        {/* About Father */}
        <div className='aboutFather'>
            <img src={father} alt="" />
            <div className='fatherText'>
                <h2>Father Name</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laborum aliquid
                    fugiat exercitationem fuga qui beatae impedit aperiam, adipisci, pariatur corrupti assumenda
                    eligendi maiores delectus unde explicabo facilis quos omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi hic, quaerat nesciunt tempora sapiente neque 
                    reprehenderit perferendis reiciendis, commodi voluptatem unde laborum corporis deserunt animi 
                    consequuntur architecto quo? Officiis, nihil! <span className='seeMoreText'>Read More</span></p>
            </div>
        </div>
    </body>
    </>
  )
}

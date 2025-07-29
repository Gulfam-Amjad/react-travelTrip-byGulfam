import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import './disStyle.css'
import DistinationData from './DistinationData'

function Distination() {
  return (
    <>
      <div className="distination">
        <div className="top-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor!</p>
        </div>
       
        <DistinationData
        className ="first-des"
        heading = "Lorem ipsum dolor sit amet."
        text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor! "

        img1= {img1} 
        img2= {img2} 
        />


        <DistinationData
        className ="first-des-reverse"
        heading = "Lorem ipsum dolor sit amet."
        text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae eaque sit voluptatum quod porro mollitia! Fugiat amet rerum dolor! "

        img1= {img3} 
        img2= {img4} 
        />

      </div>
    </>
  )
}

export default Distination
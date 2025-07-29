import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import './disStyle.css'


import { Component } from 'react'

class DistinationData extends Component {
     render(){
        return(
             <div className={this.props.className}>
                       <div className="text-des">
                           <h1>{this.props.heading}</h1>
                           <p>{this.props.text}?</p>
                       </div>
                       <div className="images">
                           <img src={this.props.img1} alt="img" />
                           <img src={this.props.img2} alt="img" />
                       </div>
            </div>
        )
     }
}

export default DistinationData
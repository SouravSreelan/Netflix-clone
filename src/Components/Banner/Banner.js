import {React,useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'

function Banner() {
    useEffect(() => {
     
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>
    console.log(response.data))
      
    }, [])
    
  return (
    <div className='banner'>
        <div className="content">
            <div className="title">Movie Name</div>
            <div className="banner_buttons">
            <button className='buttons'>Play</button>
                <button className='buttons'>My List</button>
            </div>
            <div className="description">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
            </div>
            <div className="fade_bottom"></div>
        </div>
   
    </div>
  )
}

export default Banner
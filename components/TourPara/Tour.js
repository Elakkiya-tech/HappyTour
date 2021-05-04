import React, {Component} from 'react';
import '../TourPara/Tour.css';





export default class Tour extends Component {
    
    render() {
      

        return <article className="content1">
             <div className="heading">
             <h2>Are you Ready for the Trip</h2>
            <h4>Have lot of funs and Discounts from us</h4>
             </div>
            
            <div className="Latest_Package">
            <h2 >Latest_Package</h2>
            <p>If there’s a special event or festival taking place, work with the organizers to offer the deals with more interesting Package</p>
           </div>
           <div className ="image">
            <img src="https://wallpaperaccess.com/full/1454779.jpg" alt="Package0"></img>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrDLyw7bVZV2rHv4jRtUqY2kIJz4HigmF-A&usqp=CAU" alt="package1"></img>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1qTaUSczqtjICn7pdJyhMp5YOf7-JIzNGA&usqp=CAU" alt="Package2"></img>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWb2BiW0za6HUwy9XPcnbTodIodtR843SoQ&usqp=CAU" alt="Package3"></img>
            </div>

          
           
            <h2>You May Like to visit</h2>
         <div className="align">

            <div className="p1" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByg1tqQXaQscxqxUaXgrDxz0fM7IY0xNSiA&usqp=CAU"alt='southKorea'></img>
            <h4 >South Korea</h4>
            <p>While only 60 years ago South Korea was considered a developing country, it’s now one of Asia’s economic and cultural leaders. Super-chic Seoul combines modernism with ancient history; coastal Busan serves up rugged beach spots; and Jeju Island wows with volcanic landscapes and towering mountains.</p>
            </div>

            <div className="p2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xH2bu9siFgTF3DNVc-D3l_5WRdsWMFxFmA&usqp=CAU" alt="paris"></img>
            <h4 >Paris</h4>
            <p>One of the city’s attractions, the Palace of Versailles is the former residence of three kings named Louis. It’s surrounded by 815ha of gardens and parks. Its interior hides many halls worth admiring.</p>
            </div>


            <div className="p3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAJnJysh4m-DJWIjJNkzo5JH8EIfG1Bu95g&usqp=CAU"alt="syndey"></img>
            <h4 >Sydney</h4>
            <p>Sydney is not a place you automatically think of when it comes to spectacular autumn leaves. The deciduous trees that produce the autumn colour start the process as temperatures start to cool down April.</p>
           

            </div>
            
         </div>
         <div className="copy">
         <p>Copyright All Rights Reserved © 2021 </p>
         </div>
            
        </article>
    }
}
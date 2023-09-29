import React from 'react'


const Reviewcard = () => {
  return (
    <div>
                <div className='review-card'>
                  <FaUserCircle style={{ height: "40px", width: "40px", fill: "grey" }}></FaUserCircle><span style={{ fontWeight: "500", position: "relative", left: "10px", bottom: "20px", fontSize: "17px" }}>User Name<div style={{ fontWeight: "500", fontSize: "12px", position: "relative", left: "40px", opacity: "0.6" }}>Verified purchase</div></span>
                  <div style={{ position: "relative", left: "5px", bottom: "10px" }} ><Starrating rating={5} starRatedColor={'#d3af37'} starDimension={"20px"} starSpacing={"0px"} /><div style={{ fontWeight: "500", fontSize: "18px" }}>Review title</div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odit optio. Culpa architecto est minus molestias. Deleniti iste aliquam hic impedit omnis quos est exercitationem. Veniam quas voluptatem odit aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia, quae id quaerat, rem esse ducimus amet dicta provident, debitis praesentium beatae unde! Odit cupiditate numquam aliquid, non asperiores provident!</div><hr style={{ marginTop: "30px", opacity: "0.6", borderRadius: "10px" }}></hr></div>

                </div>
                </div>
  )
}

export default Reviewcard
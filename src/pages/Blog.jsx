import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Blog = () => {
  const pathname=useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
     <Helmet>
        <title>Blog | Akashara</title>
        <meta name="description" content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
      </Helmet>


    </>
  )
}

export default Blog

import React from 'react'
import Resume from '../../media/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} className='btn'>Download Resume</a>
    </div>
  )
}

export default CTA
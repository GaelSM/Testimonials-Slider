import { useState, useEffect, useRef } from 'react'
import next from '../images/icon-next.svg'
import prev from '../images/icon-prev.svg'
import pattern from '../images/pattern-bg.svg'
import quotes from '../images/pattern-quotes.svg'
import Testimonial from './Testimonial'
import data from './data.json'
import './App.css'

function App() {

  const [index, setIndex] = useState(0)
  const testimonialsRef = useRef()

  useEffect(() => {
    const list = testimonialsRef.current
    const testimonial = list.querySelectorAll("article")[index]

    if(testimonial) testimonial.scrollIntoView({behavior: "smooth"})
  }, [index])

  const scrollImage = (type) => {
    if(type === "prev"){
      setIndex(prev => prev === 0 ? data.length - 1 : prev - 1)
    }else{
      setIndex(prev => prev === data.length - 1 ? 0 : prev + 1)
    }
  }

  return (
    <>
      <main>
        <section className="slider-container">
          <div className="buttons">
            <button className="left" onClick={() => scrollImage("prev")}>
              <img src={prev} alt="Next Icon" />
            </button>
            <button className="right" onClick={() => scrollImage("next")}>
              <img src={next} alt="Prev Icon" />
            </button>
          </div>
          <img src={quotes} alt="Quotes Imgae" className="quotes"/>
          <img src={pattern} alt="Pattern Image" className="pattern"/>
          <div className="testimonials-container" ref={testimonialsRef}>
            {
              data.map(({id, name, cargo, image, testimonial}) => {
              return <Testimonial key={id} name={name} cargo={cargo} image={image} testimonial={testimonial}/>
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
export default function Testimonial({name, cargo, image, testimonial}) {
  return (
    <>
      <article className="slide">
        <div className="text">
          <h2> “ {testimonial} ” </h2>
          <p> <span> {name} </span> {cargo} </p>
        </div>
        <div className="image">
          <div>
            <img src={image} alt={`${name} Image`} className="image-user"/>
          </div>
        </div>
      </article>
    </>
  )
}
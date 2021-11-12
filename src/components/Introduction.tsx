import DevJane from '../assets/images/dev-jane-01.jpg';

export default function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={DevJane} alt="Dev jane smiling" />
    </section>
  )
}
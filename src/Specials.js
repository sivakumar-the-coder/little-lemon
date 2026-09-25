import { Link } from 'react-router-dom';

const specials = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    image: '/greek-salad.jpg',
    alt: 'Greek salad with fresh vegetables and feta',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.',
  },
  {
    name: 'Bruschetta',
    price: '$7.99',
    image: '/bruschetta.svg',
    alt: 'Bruschetta topped with tomatoes and herbs',
    description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned.',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    image: '/lemon-dessert.jpg',
    alt: 'Little Lemon signature lemon dessert',
    description: 'This comes straight from grandma\'s recipe book, every ingredient is sourced for an authentic finish.',
  },
];

function Specials() {
  return (
    <section className="specials" id="specials" aria-labelledby="specials-title">
      <div className="section-heading">
        <h2 id="specials-title">This week&apos;s specials!</h2>
        <Link className="button button-secondary" to="/#specials">Online Menu</Link>
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <article className="special-card" key={special.name}>
            <img src={special.image} alt={special.alt} />
            <div className="card-content">
              <div className="card-title-row">
                <h3>{special.name}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p>{special.description}</p>
              <Link to="/#specials">Order a delivery</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
import React from 'react';
import styles from '../styles/Testimonials.css';

const testimonials = [
  { id: 1, name: 'Jacob Jones', role: 'Team Leader', review: 'Lorem Ipsum passage...', rating: 5 },
  { id: 2, name: 'Masirul Jones', role: 'Team Leader', review: 'Lorem Ipsum passage...', rating: 5 },
  { id: 3, name: 'Adam Jones', role: 'Team Leader', review: 'Lorem Ipsum passage...', rating: 5 },
  { id: 4, name: 'John Doe', role: 'Manager', review: 'Lorem Ipsum passage...', rating: 4 },
  { id: 5, name: 'Emily Smith', role: 'Designer', review: 'Lorem Ipsum passage...', rating: 5 },
  { id: 6, name: 'Sara Lee', role: 'CEO', review: 'Lorem Ipsum passage...', rating: 4 },
  { id: 7, name: 'Mark Ruffalo', role: 'Engineer', review: 'Lorem Ipsum passage...', rating: 5 },
  { id: 8, name: 'Anna White', role: 'Developer', review: 'Lorem Ipsum passage...', rating: 4 },
  { id: 9, name: 'Chris Evans', role: 'Consultant', review: 'Lorem Ipsum passage...', rating: 5 }
];

const Testimonials = () => {
  const getStars = (count) => '⭐'.repeat(count);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="testimonial-container">
      <h2 className="heading">What Our Clients Say?</h2>

      <div className="slider">
        <div className="column first">
          {firstColumn.map((client) => (
            <div key={client.id} className="testimonial-card">
              <h3>{client.name}</h3>
              <p className="role">{client.role}</p>
              <p className="review">{client.review}</p>
              <p className="stars">{getStars(client.rating)}</p>
            </div>
          ))}
        </div>

        <div className="column second">
          {secondColumn.map((client) => (
            <div key={client.id} className="testimonial-card">
              <h3>{client.name}</h3>
              <p className="role">{client.role}</p>
              <p className="review">{client.review}</p>
              <p className="stars">{getStars(client.rating)}</p>
            </div>
          ))}
        </div>

        <div className="column third">
          {thirdColumn.map((client) => (
            <div key={client.id} className="testimonial-card">
              <h3>{client.name}</h3>
              <p className="role">{client.role}</p>
              <p className="review">{client.review}</p>
              <p className="stars">{getStars(client.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

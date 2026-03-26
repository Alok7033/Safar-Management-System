import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import '../style/Testimonial.css'; // Make sure the path is correct
import { motion} from 'motion/react'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Alok Kumar',
      location: 'Vaishali',
      image: assets.alok,
      rating: 5,
      testimonial: 'wonderful',
    },
    {
      name: 'Ayush Kumar',
      location: 'Vaishali',
      image: assets.testimonial_image_2,
      rating: 5,
      testimonial: 'such a good service',
    },
    // {
    //   name: 'tushar mahto',
    //   location: 'Patna',
    //   image: assets.testimonial_image_3,
    //   rating: 5,
    //   testimonial: 'wonderful service',
    // },
  ];

  return (
    <div className="testimonial-wrapper">
      <Title
        title="what our customer say"
        subTitle="Discover why discerning travelers choose stayventure for their luxury accommodations around the world."
      />

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div 
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y:0}}
          transition={{ duration:0.6, delay: index * 0.2, ease:'easeOut'}}
          key={index} className="testimonial-card">
            <div className="testimonial-user">
              <img
                className="testimonial-avatar"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </div>
            <div className="testimonial-stars">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

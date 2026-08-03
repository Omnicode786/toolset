import React from 'react';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import { reviews, videos } from '../data/constants';

export const Reviews = () => {
  return (
    <>
      <PageHero 
        eyebrow="Reviews" 
        title="Simple feedback from customers" 
        description="A clean review page with written testimonials and useful embedded videos." 
      />
      <section className="section">
        <div className="container review-grid">
          {reviews.map((review, i) => (
            <article key={i} className="review-card reveal">
              <Icon name="quote" size={24} />
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>
      <section className="section product-section lavender">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Video resources</p>
            <h2>Helpful product videos</h2>
            <p>These embedded videos are temporary examples and can later be replaced with your own customer videos.</p>
          </div>
          <div className="video-grid">
            {videos.map((video, i) => (
              <article key={i} className="video-resource reveal">
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`} 
                  title={video.title} 
                  loading="lazy" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

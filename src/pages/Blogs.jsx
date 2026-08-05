import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import { posts } from '../data/constants';

export const Blogs = () => {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Simple guides for choosing digital tools"
        description="Understand common plan types, compare tools by purpose and make a more informed choice before ordering."
      />
      <section className="section">
        <div className="container blog-grid">
          {posts.map((post, index) => (
            <article key={post.title} className="blog-card reveal">
              <div className={`blog-cover cover-${index + 1}`}></div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <NavLink to="/subscriptions">
                  Explore relevant plans <Icon name="arrow" size={15} />
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

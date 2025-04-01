import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - here's what our clients have to
            say about their experience with us.
          </p>
          <div className="testimonial-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                The service was absolutely fantastic! I was amazed by the
                attention to detail and the professionalism of the team. They
                delivered beyond my expectations.
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Marketing Director, TechCorp</p>
                  <div className="rating">★★★★★</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                Working with this company was a game-changer for our business.
                Their innovative solutions helped us increase our revenue by 40%
                in just three months.
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Michael Chen"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>CEO, Startup Ventures</p>
                  <div className="rating">★★★★☆</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                Exceptional customer support and high-quality products. I've
                recommended them to all my colleagues in the industry. Truly a
                five-star experience!
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emily Rodriguez"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <p>Product Manager, DesignCo</p>
                  <div className="rating">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonial
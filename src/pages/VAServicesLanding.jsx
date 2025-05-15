import React from "react";
import LandingLayout from "../components/landing-layout";

/**
 * VA Services Landing Page with Contact Form
 * 
 * This page showcases VA services with a full-width hero section,
 * service cards, testimonials, statistics, and a comprehensive contact form.
 */
const VAServicesLanding = () => {
  return (
    <LandingLayout>
      {/* Visually hidden title for screen readers */}
      <h1 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-y--2 vads-u-display--none">
        VA Services
      </h1>

      {/* Hero Section - Full Width */}
      <section className="vads-u-background-color--primary vads-u-color--white vads-u-padding-y--5 vads-u-margin-bottom--5">
        <div className="vads-grid-container">
          <div className="vads-grid-row">
            <div className="vads-grid-col-12 desktop:vads-grid-col-8">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-top--0">
                Supporting Veterans Every Step of the Way
              </h2>
              <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
                Access the benefits and services you've earned through your military service.
              </p>
              <va-button 
                text="Contact Us Today" 
                href="#contact-form"
                uswds
                big
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section id="services" className="vads-u-margin-bottom--6">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
            Our Services
          </h2>
          <div className="vads-grid-row vads-u-margin-x--neg2p5">
            {/* Health Care Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Health Care
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#medical_services"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">Comprehensive medical services</span>
                </div>
                <p>
                  Apply for VA health care benefits and access world-class health services at VA medical centers and clinics.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>

            {/* Disability Benefits Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Disability Benefits
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#assignment_turned_in"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">Compensation for service-connected disabilities</span>
                </div>
                <p>
                  Get financial support for disabilities that were caused by or worsened during your military service.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>

            {/* Education & Training Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Education & Training
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#school"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">GI Bill and education benefits</span>
                </div>
                <p>
                  Apply for the GI Bill and other education benefits to help pay for college, training programs, and career development.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>

            {/* Home Loans Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Home Loans
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#home"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">VA-backed home loans</span>
                </div>
                <p>
                  Get better terms on home loans with VA-backed guarantees and find resources for refinancing or avoiding foreclosure.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>

            {/* Life Insurance Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Life Insurance
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#verified_user"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">Financial security for your family</span>
                </div>
                <p>
                  Explore life insurance options to provide financial security for your loved ones in the event of your death.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>

            {/* Career Development Card */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                  Career Development
                </h3>
                <div className="vads-u-display--flex vads-u-align-items--center vads-u-margin-bottom--2">
                  <svg className="vads-u-color--primary" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="/img/sprite.svg#work"></use>
                  </svg>
                  <span className="vads-u-margin-left--1">Employment assistance and training</span>
                </div>
                <p>
                  Find resources for job training, employment services, and career counseling to help you build a civilian career.
                </p>
                <div slot="actions">
                  <va-button 
                    text="Learn More" 
                    secondary
                  />
                </div>
              </va-card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="vads-u-background-color--gray-lightest vads-u-padding-y--5 vads-u-margin-bottom--5">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
            Veteran Success Stories
          </h2>
          <div className="vads-grid-row vads-u-margin-x--neg2p5">
            {/* Testimonial 1 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <div className="vads-u-text-align--center">
                  <p className="vads-u-font-style--italic vads-u-margin-bottom--2">
                    "The VA education benefits helped me earn my degree in computer science. Now I have a rewarding career in technology that I never thought possible."
                  </p>
                  <p className="vads-u-font-weight--bold vads-u-margin--0">
                    Michael Rodriguez
                  </p>
                  <p className="vads-u-margin-top--0">
                    U.S. Army Veteran
                  </p>
                </div>
              </va-card>
            </div>

            {/* Testimonial 2 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <div className="vads-u-text-align--center">
                  <p className="vads-u-font-style--italic vads-u-margin-bottom--2">
                    "The VA home loan program made it possible for me to buy my first home with no down payment. The process was straightforward and the support was excellent."
                  </p>
                  <p className="vads-u-font-weight--bold vads-u-margin--0">
                    Sarah Johnson
                  </p>
                  <p className="vads-u-margin-top--0">
                    U.S. Navy Veteran
                  </p>
                </div>
              </va-card>
            </div>

            {/* Testimonial 3 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <va-card class="vads-u-height--full">
                <div className="vads-u-text-align--center">
                  <p className="vads-u-font-style--italic vads-u-margin-bottom--2">
                    "The healthcare I've received through the VA has been life-changing. My primary care team truly understands the unique needs of veterans."
                  </p>
                  <p className="vads-u-font-weight--bold vads-u-margin--0">
                    James Wilson
                  </p>
                  <p className="vads-u-margin-top--0">
                    U.S. Marine Corps Veteran
                  </p>
                </div>
              </va-card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="vads-u-margin-bottom--6">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
            VA Impact by the Numbers
          </h2>
          <div className="vads-grid-row vads-u-margin-x--neg2p5">
            {/* Statistic 1 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-3 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <div className="vads-u-text-align--center">
                <p className="vads-u-font-size--3xl vads-u-font-weight--bold vads-u-color--primary vads-u-margin-bottom--1 vads-u-margin-top--0">
                  9+ Million
                </p>
                <p className="vads-u-margin--0">
                  Veterans enrolled in VA health care
                </p>
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-3 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <div className="vads-u-text-align--center">
                <p className="vads-u-font-size--3xl vads-u-font-weight--bold vads-u-color--primary vads-u-margin-bottom--1 vads-u-margin-top--0">
                  1.2 Million
                </p>
                <p className="vads-u-margin--0">
                  Veterans using GI Bill benefits annually
                </p>
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-3 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <div className="vads-u-text-align--center">
                <p className="vads-u-font-size--3xl vads-u-font-weight--bold vads-u-color--primary vads-u-margin-bottom--1 vads-u-margin-top--0">
                  4.9 Million
                </p>
                <p className="vads-u-margin--0">
                  Veterans receiving disability compensation
                </p>
              </div>
            </div>

            {/* Statistic 4 */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-3 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
              <div className="vads-u-text-align--center">
                <p className="vads-u-font-size--3xl vads-u-font-weight--bold vads-u-color--primary vads-u-margin-bottom--1 vads-u-margin-top--0">
                  3+ Million
                </p>
                <p className="vads-u-margin--0">
                  VA home loans guaranteed since 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="vads-u-background-color--primary-alt-lightest vads-u-padding-y--5 vads-u-margin-bottom--5">
        <div className="vads-grid-container">
          <div className="vads-grid-row">
            <div className="vads-grid-col-12 vads-u-text-align--center">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0">
                Ready to Access Your VA Benefits?
              </h2>
              <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
                Our team is here to help you navigate your benefits and answer any questions you may have.
              </p>
              <va-button 
                text="Contact Us Now" 
                href="#contact-form"
                uswds
                big
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="vads-u-margin-bottom--6">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--4">
            Contact Us
          </h2>
          
          <div className="vads-grid-row vads-u-margin-x--neg2p5">
            {/* Contact Form Column */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-8 vads-u-padding-x--2p5">
              <form>
                <div className="vads-grid-row vads-u-margin-x--neg2p5">
                  <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                    <va-text-input
                      label="First name"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                    <va-text-input
                      label="Last name"
                      name="lastName"
                      required
                    />
                  </div>
                </div>
                
                <div className="vads-grid-row vads-u-margin-x--neg2p5">
                  <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                    <va-text-input
                      label="Email address"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                    <va-text-input
                      label="Phone number"
                      name="phone"
                      type="tel"
                    />
                  </div>
                </div>
                
                <div className="vads-u-margin-bottom--3">
                  <va-select
                    label="Service status"
                    name="serviceStatus"
                    required
                  >
                    <option value="">-- Select your status --</option>
                    <option value="active">Active Duty</option>
                    <option value="veteran">Veteran</option>
                    <option value="reserve">Reserve/National Guard</option>
                    <option value="family">Family Member</option>
                    <option value="other">Other</option>
                  </va-select>
                </div>
                
                <div className="vads-u-margin-bottom--3">
                  <va-select
                    label="Topic"
                    name="topic"
                    required
                  >
                    <option value="">-- Select a topic --</option>
                    <option value="health">Health Care</option>
                    <option value="disability">Disability Benefits</option>
                    <option value="education">Education & Training</option>
                    <option value="housing">Home Loans</option>
                    <option value="insurance">Life Insurance</option>
                    <option value="career">Career Development</option>
                    <option value="other">Other</option>
                  </va-select>
                </div>
                
                <div className="vads-u-margin-bottom--3">
                  <va-textarea
                    label="Message"
                    name="message"
                    required
                  />
                </div>
                
                <div className="vads-u-margin-bottom--3">
                  <va-radio
                    label="Preferred contact method"
                    required
                  >
                    <va-radio-option
                      label="Email"
                      name="contactMethod"
                      value="email"
                    />
                    <va-radio-option
                      label="Phone"
                      name="contactMethod"
                      value="phone"
                    />
                  </va-radio>
                </div>
                
                <div className="vads-u-margin-bottom--4">
                  <va-checkbox
                    label="Subscribe to our newsletter for updates on VA benefits and services"
                    name="newsletter"
                  />
                </div>
                
                <va-button
                  text="Submit"
                  submit
                  uswds
                />
              </form>
            </div>
            
            {/* Contact Information Sidebar */}
            <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5">
              <va-card background>
                <h3 slot="headline">Contact Information</h3>
                <div>
                  <p className="vads-u-margin-top--0">
                    <strong>Phone:</strong><br />
                    <va-telephone contact="8008271000" />
                  </p>
                  <p>
                    <strong>Hours:</strong><br />
                    Monday - Friday, 8:00 a.m. to 9:00 p.m. ET
                  </p>
                  <p>
                    <strong>Follow us:</strong>
                  </p>
                  <div className="vads-u-display--flex vads-u-align-items--center">
                    <a href="#" className="vads-u-margin-right--2" aria-label="Facebook">
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <use href="/img/sprite.svg#facebook"></use>
                      </svg>
                    </a>
                    <a href="#" className="vads-u-margin-right--2" aria-label="Twitter">
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <use href="/img/sprite.svg#twitter"></use>
                      </svg>
                    </a>
                    <a href="#" className="vads-u-margin-right--2" aria-label="Instagram">
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <use href="/img/sprite.svg#instagram"></use>
                      </svg>
                    </a>
                    <a href="#" aria-label="YouTube">
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <use href="/img/sprite.svg#youtube"></use>
                      </svg>
                    </a>
                  </div>
                  <p className="vads-u-margin-top--4">
                    <strong>Need immediate help?</strong><br />
                    If you are in crisis, call the Veterans Crisis Line at <va-telephone contact="988" /> and press 1.
                  </p>
                </div>
              </va-card>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default VAServicesLanding;

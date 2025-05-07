import React from 'react';
import './SchoolLocations.css';
import AnimatedSection from './AnimatedSection';

export default function SchoolLocations() {
  return (
    <AnimatedSection>
      <section className="locations" id="locations">
        <h2>📍 Daily Drop-off & Pick-up Locations</h2>
        <p className="desc">
          Each morning, host families will drop off their students at Maranatha Christian Schools and pick them up in the evening from Grace Christian School.
        </p>
        <div className="maps-container">
          <div className="map-box">
            <h3>Maranatha Christian Schools (Drop-off)</h3>
            <iframe
              title="Maranatha Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13457.875266090978!2d-117.12378933251229!3d33.018208525975556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfceee85d30f7%3A0xe5b3770db759b11e!2sMaranatha%20Christian%20Schools!5e0!3m2!1sen!2sus!4v1715037822493!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="map-box">
            <h3>Grace Christian School (Pick-up)</h3>
            <iframe
              title="Grace Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13457.47424150916!2d-117.12020462650974!3d33.01976605643751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfcec6527400f%3A0x82a432626e1cdef4!2s10760%20Thornmint%20Rd%2C%20San%20Diego%2C%20CA%2092127!5e0!3m2!1sen!2sus!4v1715037896467!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

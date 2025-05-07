import React from 'react';
import './QRCodeSection.css';
import qrImage from '../assets/host_family_registration_qr.png';
import AnimatedSection from './AnimatedSection';

export default function QRCodeSection() {
  return (
    <AnimatedSection>
        <section className="qr-section" id="apply">
            <h2>📱 Quick Access</h2>
            <p>Scan or download this QR code to apply as a host family.</p>
            <img src={qrImage} alt="Host Family Registration QR Code" className="qr-image" />
            <br />
            <a href={qrImage} download="host_family_qr_code.png" className="download-btn">
                ⬇️ Download QR Code
            </a>
        </section>
    </AnimatedSection>
  );
}

import React, { useEffect, useState } from 'react';
import './ApplyReminder.css';
import AnimatedSection from './AnimatedSection';

export default function ApplyReminder() {
    // const [showArrow, setShowArrow] = useState(true);

    // useEffect(() => {
    //   const timer = setTimeout(() => setShowArrow(false), 6000);
    //   return () => clearTimeout(timer);
    // }, []);

    return (
        <AnimatedSection>
            <div className="apply-reminder">
                <p>
                    🌟 Ready to host? Tap the yellow <strong>“Apply Now”</strong> button in the corner to start your application!
                </p>
                {/* {showArrow && (
                    <div className="arrow-container">
                        <div className="arrow bounce">↘️</div>
                    </div>
                )} */}
            </div>
        </AnimatedSection>
    );
}

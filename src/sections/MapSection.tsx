import React from "react";

const MapSection: React.FC = () => {
    return (
        <section className="map">
            <iframe
                className="map"
                title="googlemaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.260750868198!2d18.020033016155036!3d59.345295116784314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1666352168432!5m2!1ssv!2sse"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default MapSection;

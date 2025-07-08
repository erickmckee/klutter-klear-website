
import React from 'react';

const services = [
  { title: "Residential Junk Removal", description: "Fast and affordable removal of all unwanted household items." },
  { title: "Commercial Junk Removal", description: "Clean out your business space efficiently and responsibly." },
  { title: "Recycling & Donation", description: "We recycle or donate items whenever possible to reduce waste." },
];

const testimonials = [
  { name: "Sarah J.", text: "Klutter Klear made junk removal so easy! Highly recommend." },
  { name: "Mike T.", text: "Professional, quick, and affordable service." },
  { name: "Linda K.", text: "They handled everything with care and were very friendly." },
];

export default function KlutterKlearApp() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-green-700 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Klutter Klear Junk Removal</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">Fast, Friendly, and Responsible Junk Removal in Your Area</p>
        <a
          href="https://calendly.com/erickmckee"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          Book Your Pickup Now
        </a>
      </header>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, description }, i) => (
            <div key={i} className="bg-white rounded shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-100 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-900">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map(({ name, text }, i) => (
            <blockquote key={i} className="bg-white p-6 rounded shadow italic text-gray-700">
              “{text}”
              <footer className="mt-4 font-semibold text-green-900">— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer className="bg-green-700 text-white p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
        <p>Call or email us to learn more or schedule your pickup.</p>
        <p className="mt-2">
          Phone: <a href="tel:+18001234567" className="underline hover:text-green-300">1-800-KLUTTER</a><br/>
          Email: <a href="mailto:erick.mckee@klutterkleer.com" className="underline hover:text-green-300">erick.mckee@klutterkleer.com</a>
        </p>
        <div className="mt-6">
          <a
            href="https://calendly.com/erickmckee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
          >
            Book Now
          </a>
        </div>
        <p className="mt-6 text-sm text-green-200">&copy; {2025} Klutter Klear. All rights reserved.</p>
      </footer>

      <script src="//code.tidio.co/m7is6tbxbj6g8bpmx9uxos6i7bbbrz4e.js" async></script>
    </div>
  );
}

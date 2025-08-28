import React from 'react';
export default function Section({ title, desc, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {desc && <p className="desc">{desc}</p>}
      {children}
    </section>
  );
}

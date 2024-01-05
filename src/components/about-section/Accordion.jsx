import React from "react";

function Accordion(props) {
  const accordionId = `accordion-${props.index}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${accordionId}`}
          aria-expanded="false"
          aria-controls={accordionId}
        >
          {props.head}
        </button>
      </h2>
      <div
        id={accordionId}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{props.body}</div>
      </div>
    </div>
  );
}

export default Accordion;

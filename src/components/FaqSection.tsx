import { ChevronDown } from "lucide-react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "Can you blend to our own formulation?",
    a: "Yes. We offer comprehensive toll manufacturing for solvents, emulsions and aqueous formulations — acidic, neutral or alkaline, viscous or non-viscous — using your formulation or ours, with full confidentiality guaranteed at all times.",
  },
  {
    q: "Can you develop a completely new formulation from scratch?",
    a: "Yes. Our research and development team has a combined experience of over 70 years in the industry and is always available to discuss the formulation and specification of new products to your exact requirements, using existing, specially sourced, or free-issue raw materials.",
  },
  {
    q: "What packaging and labelling options are available?",
    a: "We offer UN approved packaging for UK and export markets in a wide range of pack sizes, plus bespoke packaging options. Our in-house label printing service produces CLP/GHS compliant labels with your corporate identity, including multi-language options.",
  },
  {
    q: "What documentation do you provide?",
    a: "Every product comes with up-to-date CLP compliant data sheets, Safety Data Sheets (SDS), Certificates of Analysis, REACH compliance documentation, and technical support materials.",
  },
  {
    q: "Do you supply outside the UK?",
    a: "Yes. From our facility in Atherstone, Warwickshire, we supply customers throughout the UK, Europe and worldwide, with flexible delivery options including bulk supply and just-in-time delivery.",
  },
];

export function FaqSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="sec-head">
          <p className="eyebrow rv">FAQ</p>
          <h2 className="lm-display rv rv-d1">Common questions</h2>
          <p className="sec-lead rv rv-d2">
            Answers to the questions we hear most often. If yours is not here, get in touch.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item rv">
              <summary>
                {faq.q}
                <ChevronDown size={18} />
              </summary>
              <div className="faq-a">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

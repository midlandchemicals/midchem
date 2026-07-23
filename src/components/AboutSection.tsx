import { useReveal } from "./useReveal";

export function AboutSection() {
  const ref = useReveal<HTMLElement>();

  const team = [
    {
      initials: "SP",
      name: "Sunny Pathak",
      role: "Managing Director",
      bio: "Sunny founded Midland Chemicals in 1991 and brings over 40 years of hands-on experience in the chemical industry. He partners closely with clients to tackle complex formulation and process challenges, delivering practical, custom made chemical solutions that help their business succeed.",
      email: "sunny@midlandchem.com",
    },
    {
      initials: "RC",
      name: "Robert Cameron",
      role: "Technical Director",
      bio: "Robert brings years of technical chemistry expertise and a practical understanding of product innovation. He works alongside customers to solve complex challenges and develops bespoke formulations that give them a competitive edge.",
      email: "rob@midlandchem.com",
    },
    {
      initials: "BA",
      name: "Brian Aconley",
      role: "Agricultural Consultant",
      bio: "Brian Aconley is an expert agricultural chemical specialist, dedicated to helping farmers and businesses achieve optimal results. At Midland Chemicals, he collaborates closely with clients to design and develop products precisely tailored to their specific requirements.",
      email: "brian@ilex-envirosciences.com",
    },
  ];

  return (
    <section id="about" ref={ref} className="shell">
      <div className="sec-head">
        <p className="eyebrow rv">Why Midland Chemicals</p>
        <h2 className="lm-display rv rv-d1">A UK manufacturer that formulates around you</h2>
        <p className="sec-lead rv rv-d2">
          Midland Chemicals Ltd is a privately owned, independent UK manufacturer of chemicals
          established in 1991, based in Atherstone, Warwickshire. Our reputation for high-quality
          products and technical support has led to us supplying customers throughout the UK,
          Europe and worldwide — and our R&amp;D team is always available to discuss the
          formulation and specification of new products to your requirements.
        </p>
      </div>

      <div className="team-grid rv-stagger">
        {team.map((member) => (
          <div key={member.initials} className="team-card rv">
            <div className="team-avatar">{member.initials}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

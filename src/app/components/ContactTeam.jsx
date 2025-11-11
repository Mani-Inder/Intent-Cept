import React from "react";

export default function ContactTeam() {
  const team = [
    {
      name: "Daniel Swick",
      title: "Founder – CTO",
      email: "daniel@exactmatchmarketing.com",
      img: "/Contact-Team/daniel.png",
    },
    {
      name: "Casey Hamilton",
      title: "Founder – CSO",
      email: "casey@exactmatchmarketing.com",
      img: "/Contact-Team/casey.png",
    },
  ];

  return (
    <section className="text-center py-24 bg-gradient-to-b from-[#fffefb] via-[#fff8f5] to-white font-sans">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
        Meet Our <span className="text-[#a53000]">Team</span>
      </h2>
      <p className="text-gray-600 text-lg mb-12">
        Passionate experts dedicated to helping agencies grow smarter.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {team.map((person, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-[280px]"
          >
            <img
              src={person.img}
              alt={person.name}
              className="h-32 w-32 rounded-full object-cover border-4 border-[#a53000]/20 shadow-md mx-auto"
            />
            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {person.name}
            </h3>
            <p className="text-gray-600">{person.title}</p>
            <div className="w-12 h-1 bg-[#a53000] mx-auto my-3 rounded-full"></div>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

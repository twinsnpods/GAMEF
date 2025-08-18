import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const eventData = [
  {
    date: "23 March 2023",
    theme: "Programming / Coding (6 Months)",
    venue: "Sammy Marks Library (Tshwane)",
    attendees: 11,
    images: ["Picture2.jpg", "Picture3.jpg"],
    description:
      "The NGO recently hosted an engaging six-month programming and coding event at the Sammy Marks Library in Tshwane. With a total of 11 enthusiastic attendees, the initiative provided a focused and interactive environment for participants to develop their coding skills and deepen their understanding of programming concepts. The event’s theme highlighted the importance of digital literacy and equipped attendees with practical knowledge that can be applied in real-world tech scenarios. Through hands-on exercises and collaborative learning, the participants gained valuable experience, fostering both technical growth and a sense of community within the group."
  },
  {
    date: "16 March 2023",
    theme: "Programming / Coding (6 Months)",
    venue: "Sammy Marks Library (Tshwane)",
    attendees: 16,
    images: ["Picture4.jpg", "Picture5.jpg"],
    description:
      "The NGO recently held a dynamic six-month programming and coding event at the Sammy Marks Library in Tshwane, welcoming 16 enthusiastic attendees. The program offered an interactive environment for participants to sharpen their coding skills and expand their understanding of programming concepts. Emphasizing digital literacy, the event provided practical knowledge applicable to real-world tech scenarios. Through hands-on exercises and collaborative learning, participants gained valuable experience while building both technical expertise and a sense of community."
  },
  {
    date: "10 March 2023",
    theme: "GAMEF Annual General Meeting",
    venue: "Sammy Marks Library (Tshwane)",
    attendees: 28,
    images: ["Picture6.jpg", "Picture7.jpg"],
    description:
      "On 10 March 2023, GAMEF hosted its Annual General Meeting at the Sammy Marks Library in Tshwane, bringing together 28 attendees. The event provided a structured platform for members to review organizational achievements, discuss strategic plans, and engage in collaborative decision-making. With a focus on transparency and active participation, attendees had the opportunity to contribute their insights, strengthen networks, and align on future initiatives, fostering both organizational growth and a sense of community among participants."
  }
];

function Upcoming() {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <div
      id="programs"
      className="bg-white text-black flex flex-col justify-center items-center gap-10 px-6 sm:px-10 md:px-20 py-10 overflow-x-hidden pt-20 max-w-[1200px] mx-auto"
    >
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center max-w-[900px]"
      >
        Be Part of Our Programs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[800px]"
      >
        Stay informed and get involved — our latest programs and event announcements will always be featured here.
      </motion.p>

      {/* Three cards */}
      {eventData.map((event, idx) => (
        <div
          key={idx}
          className="w-full flex flex-col items-center gap-6 border-b border-gray-200 pb-10"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-center"
          >
            <span className="text-blue-400 font-bold">{event.date}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-center"
          >
            <span className="text-blue-400 font-bold">Theme:</span> {event.theme}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-center"
          >
            <span className="text-blue-400 font-bold">Venue:</span> {event.venue}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-center"
          >
            <span className="text-blue-400 font-bold">Attendees:</span> {event.attendees}
          </motion.p>

          {/* Image grid */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {event.images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Upcoming Programs"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="rounded-md shadow-2xl object-cover aspect-[16/9] w-full md:w-1/2"
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-center"
          >
            {event.description}
          </motion.p>
        </div>
      ))}

      {/* Button to route to PastPrograms */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        onClick={() => navigate("/past-programs")} // <-- route to PastPrograms component
      >
        View Past Programs
      </motion.button>

      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center max-w-[900px]"
      >
        Public Speaking Moments
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[900px]"
      >
        As representatives of Gamef, we have had the honor of being invited to a variety of events to discuss the significance of leadership, personal development, and the responsibilities that individuals must uphold within society. Our engagements have included presentations at educational institutions, places of worship, and various organizations, where we have the opportunity to share our insights and experiences with young audiences, while actively participating in the events organized by these entities.
      </motion.p>
    </div>
  );
}

export default Upcoming;

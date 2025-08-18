import React from "react";
import { motion } from "framer-motion";

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
  },
  {
    date: "27 January 2023",
    theme: "Youth Unemployment/ Entrepreneur/ Career Guidance/ 4IR Activation (Part 2)",
    venue: "Sammy Marks Library  (Tshwane) ",
    attendees: 49,
    images: ["Picture9.jpg", "Picture10.jpg"],
    description:
      "On 27 January 2023, GAMEF hosted an impactful event at the Sammy Marks Library in Tshwane, focusing on youth unemployment, entrepreneurship, career guidance, and 4IR activation. The initiative provided young attendees with practical insights into navigating the challenges of the modern job market, developing entrepreneurial skills, and preparing for the opportunities and disruptions of the Fourth Industrial Revolution. Through interactive sessions, mentorship, and engaging discussions, participants gained valuable guidance on career planning, business development, and leveraging technology to thrive in an evolving economy. The event emphasized empowerment, innovation, and community support, equipping the next generation with the tools and confidence to succeed"
  },
  {
    date: "20 January 2023",
    theme: "Youth Unemployment/ Entrepreneur/ Career Guidance/ 4IR Activation(Part 1) ",
    venue: "Sammy Marks Library  (Tshwane) ",
    attendees: 52,
    images: ["Picture11.jpg", "Picture12.jpg"],
    description:
      "On 20 January 2023, GAMEF hosted the first part of its Youth Unemployment, Entrepreneurship, Career Guidance, and 4IR Activation series at the Sammy Marks Library in Tshwane. With 52 enthusiastic attendees, the event offered practical strategies to tackle youth unemployment, explore entrepreneurial opportunities, and prepare for the evolving landscape of the Fourth Industrial Revolution. Through interactive discussions and mentorship, participants received guidance on career planning, business development, and leveraging technology for future success. The session fostered empowerment, innovation, and a strong sense of community, equipping young people with the tools to pursue meaningful careers and entrepreneurial ventures."
  },
  {
    date: "30 January 2023",
    theme: "Gender Based-Violence",
    venue: "Eldorado Park (City of Johannesburg)",
    attendees: 38,
    images: ["Picture13.jpg", "Picture14.jpg"],
    description:
      "On 30 January 2023, GAMEF hosted an important Gender-Based Violence (GBV) awareness event in Eldorado Park, City of Johannesburg, attended by 38 participants. The session focused on educating the community about the causes, consequences, and prevention of GBV, while providing practical guidance on support resources and reporting mechanisms. Through discussions, interactive activities, and shared experiences, attendees gained a deeper understanding of the societal impact of GBV and the role each individual can play in creating safer communities. The event emphasized empowerment, awareness, and collective action to address this critical issue"
  },
   {
    date: "20 December 2022",
    theme: "Unemployed Youth",
    venue: "Ennerdale  (City of Johannesburg)",
    attendees: 33,
    images: ["Picture15.jpg", "Picture16.jpg"],
    description:
      "On 20 December 2022, GAMEF organized an Unemployed Youth engagement event in Ennerdale, City of Johannesburg, with 33 participants in attendance. The event provided practical guidance on career opportunities, skill development, and pathways to entrepreneurship, helping young attendees navigate challenges in the job market. Through interactive discussions and mentorship, participants gained valuable insights into building employable skills and exploring avenues for personal and professional growth. The session fostered empowerment, motivation, and community support, equipping youth with tools to create meaningful career paths."
  },
  {
    date: "20 September 2022",
    theme: "NPOs Training",
    venue: "Jerry Moloi Public Library (Ekurhuleni)",
    attendees: 54,
    images: ["Picture17.jpg", "Picture18.jpg"],
    description:
      "On 20 September 2022, GAMEF hosted a Non-Profit Organizations (NPOs) Training session at Jerry Moloi Public Library in Ekurhuleni, attended by 54 participants. The event focused on equipping NPO representatives with practical skills in management, governance, and community engagement, ensuring their organizations can operate effectively and sustainably. Through interactive workshops and discussions, attendees gained insights into best practices, strategic planning, and resource mobilization, fostering stronger, more impactful NPOs. The session emphasized capacity building, collaboration, and the importance of empowering organizations to create meaningful community change."
  },
  {
    date: "16 August 2022",
    theme: "NPOs Training",
    venue: "Diepkloof Welfare Centre (City of Joburg)",
    attendees: 60,
    images: ["Picture19.jpg", "Picture20.jpg"],
    description:
      "On 16 August 2022, GAMEF hosted a Non-Profit Organizations (NPOs) Training session at the Diepkloof Welfare Centre in the City of Johannesburg, attended by 60 participants. The training focused on enhancing the skills and knowledge of NPO representatives in areas such as governance, program management, and community engagement. Through interactive workshops and discussions, attendees gained practical tools to strengthen their organizations, improve service delivery, and foster sustainable impact. The event emphasized collaboration, capacity building, and empowering NPOs to effectively serve their communities."
  },
  {
    date: "30 July 2022",
    theme: "Youth (Mandela Day)",
    venue: "Innovation hub (Mamelodi)",
    attendees: 58,
    images: ["Picture21.jpg", "Picture22.jpg"],
    description:
      "On 30 July 2022, GAMEF hosted a Youth Engagement event in celebration of Mandela Day at the Innovation Hub in Mamelodi, with 58 participants attending. The session focused on inspiring young people to embrace social responsibility, community service, and personal development. Through interactive activities, discussions, and mentorship, attendees learned about leadership, volunteerism, and the importance of contributing positively to their communities. The event emphasized empowerment, collaboration, and the spirit of giving back, reflecting the values championed by Nelson Mandela."
  },
    {
    date: "30 June 2022",
    theme: "Unemployed Youth (Mamelodi)",
    venue: "Innovation hub",
    attendees: 21,
    images: ["Picture23.jpg", "Picture24.jpg"],
    description:
      "On 30 June 2022, GAMEF hosted an Unemployed Youth engagement session at the Innovation Hub in Mamelodi, attended by 21 participants. The event focused on equipping young people with practical guidance on career opportunities, entrepreneurship, and skill development. Through interactive discussions and mentorship, attendees gained insights into improving employability, exploring business ventures, and navigating the challenges of the job market. The session emphasized empowerment, motivation, and community support, providing youth with tools to build meaningful careers and pursue personal growth"
  },
  {
    date: "21 June 2022",
    theme: "Boy/ Youth Child Programme",
    venue: "Orange Farm",
    attendees: 110,
    images: ["Picture25.jpg", "Picture26.jpg"],
    description:
      "On 21 June 2022, GAMEF organized the Boy/Youth Child Programme in Orange Farm, attended by 110 young participants. The event focused on mentorship, personal development, and leadership skills for boys and youth in the community. Through interactive workshops, activities, and discussions, attendees gained guidance on education, responsibility, and life skills, helping to build confidence and resilience. The session emphasized empowerment, positive role modeling, and community support, providing young participants with tools to grow into responsible and engaged members of society."
  },
  {
    date: "9 December 2021",
    theme: "Boy Child Hiking",
    venue: "Kliprivier resort",
    attendees: 31,
    images: ["Picture27.jpg", "GamefLogo.png"],
    description:
      "On 9 December 2021, GAMEF hosted a Boy Child Hiking event at Kliprivier Resort, attended by 31 young participants. The event aimed to promote physical activity, teamwork, and personal development through outdoor adventure. Participants engaged in hiking and team-building exercises, learning valuable lessons in resilience, leadership, and collaboration. The session emphasized empowerment, confidence-building, and fostering a sense of community among the youth, while encouraging a healthy and active lifestyle."
  },
  {
    date: "8 December 2021",
    theme: "GBV and Drug Abuse",
    venue: ": Eldorado Park",
    attendees: 52,
    images: ["Picture28.jpg", "Picture29.jpg"],
    description:
      "On 8 December 2021, GAMEF hosted an awareness event on Gender-Based Violence (GBV) and Drug Abuse in Eldorado Park. The session focused on educating the community about the risks and consequences of GBV and substance abuse, while providing practical guidance on prevention and support resources. Through discussions, interactive activities, and shared experiences, attendees gained insights into addressing these challenges within their communities. The event emphasized empowerment, awareness, and proactive community engagement to foster safer and healthier environments."
  },
  {
    date: "26 November 2021",
    theme: "GBV",
    venue: "Fine Town Meriteng",
    attendees: 91,
    images: ["Picture30.jpg", "Picture22.jpg"],
    description:
      "On 26 November 2021, GAMEF hosted a Gender-Based Violence (GBV) awareness event at Fine Town Meriteng, attended by 91 participants. The session focused on educating the community about the causes, consequences, and prevention of GBV, while providing guidance on support resources and reporting mechanisms. Through interactive discussions and activities, attendees gained insights into fostering safer communities and promoting gender equality. The event emphasized empowerment, awareness, and collective action to address this pressing societal issue."
  },
  {
    date: "19 November 2021",
    theme: "GBV",
    venue: "Sedibeng Hanana Park",
    attendees: 85,
    images: ["Pictures1.jpg", "Pictures17.jpg"],
    description:
      "On 19 November 2021, GAMEF held a Gender-Based Violence (GBV) awareness program at Sedibeng Hanana Park, with 85 attendees. The event provided a safe platform for dialogue on the impact of GBV and highlighted the importance of prevention, support systems, and community responsibility in creating safer environments."
  },
  {
    date: "16 November 2021",
    theme: "GBV",
    venue: "Westrand Poortjie",
    attendees: 29,
    images: ["Pictures2.jpg", "Pictures12.jpg"],
    description:
      "On 16 November 2021, GAMEF hosted a GBV awareness program at Westrand Poortjie, with 29 attendees. Despite the smaller turnout, the session emphasized the importance of standing together against GBV and encouraged community members to take collective responsibility in fostering safer, more supportive environments."
  },
  {
    date: "12 August 2021",
    theme: "GBV and Drug Abuse",
    venue: "Eldorado Park",
    attendees: 52,
    images: ["Pictures3.jpg", "Pictures4.png"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "25 June 2021",
    theme: "GBV",
    venue: "Mamelodi Workshop",
    attendees: 30,
    images: ["Pictures5.jpg", "Loading.webp"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "10 March 2021",
    theme: "GBV and Drug Abuse",
    venue: "Diepkloof Workshop",
    attendees: 14,
    images: ["Pictures6.jpg", "Pictures36.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "25 February 2021",
    theme: " Men and Boy Forum Launch Masixoxe",
    venue: "Soweto",
    attendees: 44,
    images: ["Pictures7.jpg", "Pictures35.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "20 February 2021",
    theme: "Boy Child Programme",
    venue: "Diepkloof",
    attendees: 18,
    images: ["Pictures8.jpg", "SouthAfrica.webp"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "18 December 2020",
    theme: "Boy Child Programme",
    venue: "KapKop Hiking",
    attendees: 33,
    images: ["Pictures9.jpg", "Pictures47.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "16 December 2020",
    theme: "16 Days of Activism Campaign",
    venue: "Diepkloof",
    attendees: 48,
    images: ["Pictures10.jpg", "Pictures11.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "24 September 2020",
    theme: "Leon Dale Mentoring and Coaching (Boy Child)",
    venue: "Pumula",
    attendees: 33,
    images: ["Pictures12.jpg", "Picture15.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "18 September 2020",
    theme: "GBV",
    venue: "Meadowlands",
    attendees: 34,
    images: ["Pictures13.jpg", "Pictures14.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "16 September 2020",
    theme: "Sukumababa Men’s Forum",
    venue: "Diepkloof Welfare Centre",
    attendees: 22,
    images: ["Pictures15.jpg", "GamefLogo.png"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "27 August 2020",
    theme: "Ennerdale Mentoring and Coaching",
    venue: "ENCM",
    attendees: 29,
    images: ["Pictures16.jpg", "Pictures17.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "13 December 2019",
    theme: "GBV and Substance Abuse",
    venue: "Meadowlands Men’s Launch",
    attendees: 27,
    images: ["Pictures18.jpg", "Picture28.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "3 December 2019",
    theme: "GBV and Substance Abuse",
    venue: "Diepkloof",
    attendees: 37,
    images: ["Pictures19.jpg", "Pictures20.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "28 November 2019",
    theme: "GBV and Substance Abuse",
    venue: "Mamelodi",
    attendees: 30,
    images: ["Pictures21.jpg", "Pictures22.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "26 October 2019",
    theme: "Men’s Conference and Seminar",
    venue: "Ennerdale",
    attendees: 31,
    images: ["Pictures23.jpg", "Pictures1.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "23 October 2019",
    theme: "Men’s Forum Launch",
    venue: "Jeppestower",
    attendees: 13,
    images: ["Pictures24.jpg", "Pictures25.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "18 October 2019",
    theme: "GBV",
    venue: "Soweto",
    attendees: 73,
    images: ["Pictures26.jpg", "Pictures27.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "3 December 2018",
    theme: "Orange Farm Men’s Forum Launch",
    venue: "Orange Farm skills Centre",
    attendees: 22,
    images: ["Pictures28.jpg", "Pictures29.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "29 November 2018",
    theme: "SA Men of the Year",
    venue: "Carnival City",
    attendees: 16,
    images: ["Pictures30.jpg", "Pictures31.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "27 November 2018",
    theme: "Tshepisong Mens Forum Launch",
    venue: "Tshepisong digital centre",
    attendees: 21,
    images: ["Pictures32.jpg", "Pictures33.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "8 November 2018",
    theme: "Soweto Men’s Forum Launch",
    venue: "Diepkloof Welfare Centre",
    attendees: 29,
    images: ["Pictures34.jpg", "health.webp"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "10 October 2018",
    theme: "Sukumababa Men’s Forum Launch",
    venue: "Diepkloof Welfare Centre",
    attendees: 91,
    images: ["Pictures35.jpg", "Picture19.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "11 July 2018",
    theme: "Men and Boys Dialogue",
    venue: "Ekurhuleni",
    attendees: 45,
    images: ["Pictures36.jpg", "Pictures33.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "26 June 2018",
    theme: "Boy child Programme",
    venue: "Orange Farm skills Centre",
    attendees: 55,
    images: ["Pictures37.jpg", "Pictures27.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "23 June 2018",
    theme: "Behavioural Change Awareness (GBV)",
    venue: "Pimville (Soweto)",
    attendees: 88,
    images: ["Pictures38.jpg", "Pictures39.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "16 February 2018",
    theme: "Hustles Men’s Forum Launch",
    venue: "Atterigdville",
    attendees: 364,
    images: ["Pictures40.jpg", "Pictures41.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "30 January 2018",
    theme: "Boy child/ Youth Programme",
    venue: "Tshwane Interactive digital Centre",
    attendees: 36,
    images: ["Pictures44.jpg", "Pictures45.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "19 January 2018",
    theme: "Behavioural change awareness",
    venue: "Mabopane station (Drugs/Nyaope Campaign)",
    attendees: 110,
    images: ["Pictures46.jpg", "Pictures47.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "21 October 2017",
    theme: "Spruitview Forum Launch",
    venue: "Evangelical Lutheran Church in Southern  Africa",
    attendees: 68,
    images: ["Pictures48.jpg", "Pictures49.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "9 September 2017",
    theme: "Jeppestown Men’s Forum Launch",
    venue: "Bertha Solomon Recreation Centre",
    attendees: 49,
    images: ["Pictures52.jpg", "Pictures53.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "26 August 2017",
    theme: "Atteridgeville Men’s Forum Launch",
    venue: "Makgatho Primary School",
    attendees: 24,
    images: ["Pictures54.jpg", "Pictures55.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "24 June 2017",
    theme: "Noordgesig Men’s Forum Launch",
    venue: "House of Prayer Ministeries",
    attendees: 59,
    images: ["Pictures56.jpg", "Pictures14.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "17 June 2017",
    theme: "Boy Child/ Youth Programme",
    venue: "Leamogetswe safety home",
    attendees: 60,
    images: ["Pictures58.jpg", "Pictures59.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "1 June 2017",
    theme: "GBV",
    venue: "Eskom",
    attendees: 12,
    images: ["Pictures60.jpg", "Pictures61.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "1 May 2017",
    theme: "Vukani Mododa Men’s Forum Launch",
    venue: "Naledi High School",
    attendees: 53,
    images: ["Pictures62.jpg", "Picture13.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "23 February 2017",
    theme: "Boy child/ Youth program",
    venue: "Tshwane digital Interactive centre (Mamelodi men’s forum)",
    attendees: 27,
    images: ["Pictures63.jpg", "Pictures64.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "18 February 2017",
    theme: "Mamelodi Men’s Forum Workshop",
    venue: "Matimba Hall",
    attendees: 48,
    images: ["Pictures68.jpg", "Pictures69.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "11 February 2017",
    theme: "Boy Child/ Youth Programme",
    venue: "Tshwane digital interactive centre( Mamelodi men’s forum)",
    attendees: 28,
    images: ["Pictures70.jpg", "Pictures71.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "14 December 2016",
    theme: "Boy child/ youth program",
    venue: "Tshwane interactive digital centre (SOS)",
    attendees: 39,
    images: ["Picture24.jpg", "Pictures78.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "13 December 2016",
    theme: "Witpoortjie Men’s Forum Launch",
    venue: "Witpoortjie",
    attendees: 59,
    images: ["Pictures79.jpg", "Picture16.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "9 December 2016",
    theme: "Etwatwa Men’s Forum Launch",
    venue: "Healing Etendeni Emaphusheni",
    attendees: 147,
    images: ["Pictures83.jpg", "Pictures84.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },{
    date: "8 December 2016",
    theme: "Soweto Men’s Forum: Digital training",
    venue: "Soweto",
    attendees: 61,
    images: ["Pictures85.jpg", "Pictures86.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "25 November 2016",
    theme: "GBV Awareness",
    venue: "Calvary Church",
    attendees: 71,
    images: ["Pictures87.jpg", "Pictures89.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "22 October 2016",
    theme: "Atteridgeville Men’s Forum Launch",
    venue: "Saulsville Library Hall",
    attendees: 76,
    images: ["Pictures90.jpg", "Pictures91.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "27 September 2016",
    theme: "Orange farm MMC Dialogue",
    venue: "Orange Farm Skills Centre",
    attendees: 45,
    images: ["Pictures92.jpg", "Pictures93.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "6 September 2016",
    theme: "zola MMC Dialogue",
    venue: "Zola 2 Dumping site Stadium Hall",
    attendees: 40,
    images: ["Pictures94.jpg", "Pictures95.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "20 August 2016",
    theme: "Vukani Madoda Forum Launch",
    venue: "Ekhaya Recreation Centre",
    attendees: 142,
    images: ["Pictures96.jpg", "Pictures97.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
  {
    date: "16 August 2016",
    theme: "Kwa-Thema Men’s Forum Launch",
    venue: "Kwa-Thema Community Hall",
    attendees: 270,
    images: ["Pictures98.jpg", "Picture27.jpg"],
    description:
      "On 12 August 2021, GAMEF held a GBV and Drug Abuse awareness campaign in Eldorado Park, drawing 52 attendees. The program focused on addressing the link between substance abuse and gender-based violence, while encouraging the community to engage in proactive measures to protect vulnerable groups and promote safer living environments."
  },
];

function PastPrograms() {
  return (
    <div className="pt-28 px-6 md:px-20 min-h-[80vh] flex flex-col items-center gap-10">
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
                alt={img}
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
    </div>
  );
}

export default PastPrograms;

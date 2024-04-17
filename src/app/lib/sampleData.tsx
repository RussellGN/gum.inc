import { EmailOutlined } from "@mui/icons-material";
import images from "../assets";
import {
   OrganizationInterface,
   EventInterface,
   NotificationInterface,
   SubscriptionInterface,
   UserInterface,
   ChatInterface,
   MessageInterface,
} from "../interfaces";
import { generateAvatarLetters } from "./utils";

export const sampleUsers: UserInterface[] = [
   {
      type: "user",
      worksAt: "Independant",
      id: 1,
      slug: "esther-rios-1",
      name: "Esther Rios",
      email: "erios@gmail.com",
      jobTitle: "Visa Consultant",
      industry: "Travel & Finance",
      location: "Ipswich",
      verified: true,
      bio: "Experienced visa consultant adept at navigating complex immigration processes. Specializing in providing tailored solutions for individuals and businesses seeking to obtain visas for travel, work, or study purposes. Skilled in analyzing visa requirements, preparing documentation, and guiding clients through the application process efficiently. Committed to delivering exceptional service and ensuring client satisfaction. Proficient in addressing diverse visa-related inquiries and resolving issues promptly. Dedicated to staying updated on immigration laws and regulations to offer the most accurate advice and assistance.",
      displayPhoto: images.user4f,
      images: [images.visa_consultancy, images.firm2],
      serviceOfferings: [
         {
            service: "Visa Assessment",
            description:
               "Comprehensive evaluation of client eligibility and requirements for various types of visas, ensuring accurate guidance.",
         },
         {
            service: "Application Assistance",
            description:
               "Expert support in completing and submitting visa applications, minimizing errors and optimizing chances of approval.",
         },
         {
            service: "Document Preparation",
            description:
               "Thorough assistance in gathering and organizing required documents, streamlining the application process for clients.",
         },
         {
            service: "Consultation Sessions",
            description:
               "Personalized consultations to address specific visa-related queries, providing clarity and guidance tailored to individual circumstances.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "RiosConsultant",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 2,
      slug: "Josef-klein-2",
      name: "Josef Klein",
      email: "carriek@yahoo.co.uk",
      jobTitle: "Web Developer",
      industry: "IT & Software",
      location: "Birmingham",
      verified: true,
      bio: "Experienced web developer proficient in React.js, Next.js, JavaScript, and Python. Specializes in crafting bespoke websites with a focus on functionality, aesthetics, and user experience. Known for delivering high-quality code and designs tailored to client needs. Detail-oriented and dedicated to staying updated on the latest web development technologies and best practices. Passionate about creating visually appealing and responsive interfaces while ensuring optimal performance and user satisfaction.",
      displayPhoto: images.person8m,
      images: [images.event5],
      serviceOfferings: [
         {
            service: "Website Development",
            description:
               "Crafting bespoke websites tailored to client needs, focusing on functionality, aesthetics, and user experience.",
         },
         {
            service: "Frontend Design",
            description:
               "Creating visually appealing and responsive frontend interfaces using modern web development technologies and best practices.",
         },
         {
            service: "Backend Development",
            description:
               "Building robust server-side applications and APIs to power dynamic website functionalities and data management.",
         },
         {
            service: "Maintenance & Support",
            description:
               "Providing ongoing maintenance services, troubleshooting, and technical support to ensure smooth operation and optimal performance of websites.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "KleinJ",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "KleinJ",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "KleinJ",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 3,
      slug: "nell-lane-3",
      name: "Nell Lane",
      email: "nelllane@lane.com",
      jobTitle: "Quantity Surveyor",
      industry: "Construction",
      location: "London",
      verified: true,
      bio: "Detail-oriented quantity surveyor with expertise in cost estimation, procurement, and project management. Specializes in optimizing project budgets and ensuring cost efficiency. Experienced in conducting thorough cost analysis and providing accurate quantity take-offs. Skilled in contract negotiation and compliance, with a focus on delivering projects on time and within budget constraints. Committed to continuous professional development and staying abreast of industry standards and regulations.",
      displayPhoto: images.person4m,
      images: [images.office, images.auto_shop_2],
      serviceOfferings: [
         {
            service: "Cost Estimation",
            description:
               "Accurate assessment of project costs through meticulous analysis of materials, labor, and overhead expenses, ensuring budget clarity.",
         },
         {
            service: "Quantity Take-Offs",
            description:
               "Precise quantification of materials and resources required for construction projects, facilitating efficient procurement and cost management.",
         },
         {
            service: "Procurement Management",
            description:
               "Strategic sourcing of materials and services at competitive prices while maintaining quality standards and project timelines.",
         },
         {
            service: "Project Cost Control",
            description:
               "Implementation of cost control measures and monitoring systems to track project expenditures and mitigate budget overruns, ensuring financial efficiency.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "Nell_lane",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 4,
      slug: "lela-cook-4",
      name: "Lela Cook",
      email: "lela@gmail.com",
      jobTitle: "Script Writer",
      industry: "Film & Entertainment",
      location: "Leicester",
      verified: true,
      bio: "Dynamic script writer skilled in crafting compelling narratives for film, television, and other media platforms. Excels in developing engaging characters, captivating dialogue, and immersive storylines that resonate with audiences. Experienced in collaborating with directors, producers, and other creative professionals to bring scripts to life. Passionate about storytelling and dedicated to delivering scripts that entertain, inspire, and provoke thought.",
      displayPhoto: images.person5f,
      images: [images.event, images.user4f],
      serviceOfferings: [
         {
            service: "Script Development",
            description:
               "Creating original scripts from concept to final draft, tailored to client preferences and project requirements.",
         },
         {
            service: "Script Editing",
            description:
               "Polishing existing scripts by refining dialogue, enhancing plot structure, and ensuring coherence and consistency.",
         },
         {
            service: "Adaptation Services",
            description:
               "Adapting existing material such as books, articles, or real-life events into screenplay format, preserving the essence of the original work.",
         },
         {
            service: "Consultation & Feedback",
            description:
               "Providing insightful feedback and guidance on script ideas, plot development, and character arcs to enhance storytelling effectiveness.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "lelaCook",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 5,
      slug: "aron-rhodes-5",
      name: "Aaron Rhodes",
      email: "arhodes@rhodesconsultancy.com",
      jobTitle: "Tax Lawyer",
      industry: "Finance & Law",
      location: "London",
      verified: true,
      bio: "Seasoned tax lawyer specializing in providing comprehensive legal counsel and representation in matters of taxation and finance. Proficient in navigating complex tax laws and regulations to help clients optimize their financial strategies and minimize tax liabilities. Skilled in tax planning, compliance, and dispute resolution, with a track record of achieving favorable outcomes for individuals and businesses. Committed to delivering personalized solutions and proactive advice to address clients' tax-related needs effectively.",
      displayPhoto: images.person2m,
      images: [images.logo3, images.office1, images.firm],
      serviceOfferings: [
         {
            service: "Tax Planning",
            description:
               "Developing tailored tax strategies to maximize deductions, credits, and exemptions while ensuring compliance with tax laws.",
         },
         {
            service: "Tax Compliance",
            description:
               "Assisting clients in fulfilling their tax obligations, including filing tax returns, preparing financial statements, and responding to tax audits.",
         },
         {
            service: "Tax Dispute Resolution",
            description:
               "Representing clients in tax disputes with tax authorities or other parties, negotiating settlements, and litigating cases when necessary.",
         },
         {
            service: "Legal Advice & Counsel",
            description:
               "Providing expert legal advice on various tax matters, including estate planning, corporate taxation, international taxation, and tax implications of business transactions.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "rhodesLaw",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 6,
      slug: "tom-lloyd-6",
      name: "Tom Lloyd",
      email: "lloydtm@gmail.com",
      jobTitle: "Organic farm specialist",
      industry: "Farming",
      location: "Manchester",
      verified: true,
      bio: "Dedicated farmer with a passion for sustainable agriculture and land stewardship. Specializes in cultivating organic crops and raising livestock using environmentally friendly practices. Experienced in crop rotation, soil health management, and integrated pest management to ensure high yields and quality produce. Committed to promoting local food systems and community engagement in agriculture.",
      displayPhoto: images.user2m,
      images: [images.farm_logo, images.farm, images.farm1, images.garden],
      serviceOfferings: [
         {
            service: "Organic Farming",
            description:
               "Cultivating a variety of organic crops using methods that prioritize soil health, biodiversity, and environmental sustainability.",
         },
         {
            service: "Livestock Management",
            description:
               "Raising healthy and happy animals through ethical and humane practices, focusing on animal welfare and quality of products.",
         },
         {
            service: "Farm-to-Table Sales",
            description:
               "Selling fresh produce and farm products directly to consumers through farmer's markets, community-supported agriculture (CSA), and online platforms.",
         },
         {
            service: "Agricultural Consulting",
            description:
               " Providing expert advice and guidance on sustainable farming practices, crop selection, and farm management techniques to aspiring farmers and agricultural businesses.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "farmerLloyd",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "farmerLloyd",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 7,
      slug: "steven-tyler-7",
      name: "Steven Tyler",
      email: "tyler@yahoo.co.uk",
      jobTitle: "Dj",
      industry: "Music",
      location: "London",
      verified: true,
      bio: "Dynamic bass DJ renowned for electrifying performances and infectious beats that keep crowds dancing all night. Specializes in mixing and blending bass-heavy tracks across various genres, from dubstep to trap to drum and bass. Known for creating immersive sonic experiences and fostering a vibrant atmosphere at clubs, festivals, and events worldwide.",
      displayPhoto: images.person9m,
      images: [images.event2, images.event3, images.event7],
      serviceOfferings: [
         {
            service: "Live Performances",
            description:
               "Delivering high-energy DJ sets featuring bass-heavy music, customized to suit the vibe and audience preferences of each event.",
         },
         {
            service: "Event Booking",
            description:
               "Available for bookings at clubs, festivals, concerts, private parties, and corporate events, bringing unparalleled energy and excitement to any occasion.",
         },
         {
            service: "Music Production",
            description:
               "Producing original bass music tracks and remixes for release on digital platforms, showcasing unique soundscapes and innovative production techniques.",
         },
         {
            service: "DJ Workshops",
            description:
               "Offering workshops and tutorials on bass DJing techniques, mixing fundamentals, and music production tips to aspiring DJs and electronic music enthusiasts.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "djTyler",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 63,
      slug: "jessica-dei-63",
      name: "Jessica Dei",
      email: "jessicadei@gmail.com",
      jobTitle: "Venture Capitalist",
      industry: "Finance",
      location: "London",
      verified: true,
      bio: "Experienced investor supporting early-stage startups in securing funding.",
      displayPhoto: images.user3f,
      images: [images.office1, images.furniture, images.vinatge_cars],
      serviceOfferings: [
         {
            service: "Startup Funding",
            description: "Investing in promising early-stage companies.",
         },
         {
            service: "Business Advisory",
            description: "Providing strategic guidance to portfolio companies.",
         },
      ],
      socialMedia: [
         {
            platform: "Twitter",
            username: "jessicadei",
            url: "#",
         },
         {
            platform: "LinkedIn",
            username: "jessicadei",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 22,
      slug: "jane-smith-22",
      name: "Jane Smith",
      email: "jane.smith@yahoo.co.uk",
      jobTitle: "Product Manager",
      industry: "Technology",
      location: "Liverpool",
      verified: true,
      bio: "Experienced product manager with a focus on user-centered design.",
      displayPhoto: images.person6f,
      images: [images.office2],
      serviceOfferings: [
         {
            service: "Product Management",
            description: "Driving product strategy and execution.",
         },
         {
            service: "User Research",
            description: "Gathering insights to inform product decisions.",
         },
      ],
      socialMedia: [
         {
            platform: "Twitter",
            username: "janesmith",
            url: "#",
         },
         {
            platform: "LinkedIn",
            username: "janesmith",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 32,
      slug: "emily-johnson-32",
      name: "Emily Johnson",
      email: "emily.johnson@gmail.com",
      jobTitle: "Artist",
      industry: "Arts",
      location: "Essex",
      verified: true,
      bio: "Contemporary artist exploring themes of identity and culture.",
      displayPhoto: images.person3f,
      images: [images.artShop, images.artShop2],
      serviceOfferings: [
         {
            service: "Painting",
            description: "Creating vibrant and thought-provoking artworks.",
         },
         {
            service: "Art Commission",
            description: "Accepting commissions for customized artworks.",
         },
      ],
      socialMedia: [
         {
            platform: "Instagram",
            username: "emilyjohnson",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "emilyjohnsonart",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 24,
      slug: "sarah-davis-24",
      name: "Sarah Davis",
      email: "sarahdavis@gmail.com",
      jobTitle: "Fitness Instructor",
      industry: "Fitness",
      location: "Newcastle",
      verified: true,
      bio: "Certified fitness instructor passionate about helping others achieve their health and wellness goals.",
      displayPhoto: images.user3f,
      images: [images.restaurant2],
      serviceOfferings: [
         {
            service: "Personal Training",
            description: "One-on-one fitness sessions tailored to individual needs.",
         },
         {
            service: "Group Classes",
            description: "Fun and energizing fitness classes for all fitness levels.",
         },
      ],
      socialMedia: [
         {
            platform: "Instagram",
            username: "sarahfitness",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "sarahfitness",
            url: "#",
         },
      ],
   },
];

export const sampleEvents: EventInterface[] = [
   {
      type: "event",
      verified: true,
      id: 1,
      slug: "tech-conference-1",
      name: "Tech Conference",
      creator: sampleUsers[0],
      hosts: [sampleUsers[1], sampleUsers[2], sampleUsers[3]],
      contactDetails: "Call +101 775668421",
      eventType: "Conference",
      location: "Liverpool",
      about: "A conference for technology enthusiasts and professionals to network and learn about the latest trends and developments in the industry.",
      startDate: "2024-05-01",
      endDate: "2024-05-03",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.event5,
      images: [images.event, images.event5, images.office2],
      socialMedia: [
         {
            platform: "Twitter",
            username: "techconf",
            url: "#",
         },
      ],
   },
   {
      type: "event",
      verified: true,
      id: 2,
      slug: "art-exhibition-2",
      name: "Art Exhibition",
      creator: sampleUsers[5],
      contactDetails: "Text or call +101 32433494",
      eventType: "Exhibition",
      location: "London",
      about: "An exhibition showcasing the works of local artists exploring different mediums and styles.",
      startDate: "2024-07-15",
      endDate: "2024-07-20",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.artShop2,
      images: [images.artShop2, images.artShop, images.person4m],
   },
   {
      type: "event",
      verified: true,
      id: 3,
      slug: "fitness-workshop-3",
      name: "Fitness Workshop",
      creator: sampleUsers[2],
      contactDetails: "Call +12 32121 323",
      eventType: "Workshop",
      location: "Ipswich",
      about: "A hands-on workshop where participants will learn effective workout techniques and receive guidance on creating a personalized fitness plan.",
      startDate: "2024-09-10",
      endDate: "2024-09-11",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.event6,
      images: [images.garden, images.restaurant2],
   },
   {
      type: "event",
      verified: true,
      id: 4,
      slug: "startup-pitch-competition-4",
      name: "Startup Pitch Competition",
      creator: sampleUsers[6],
      hosts: [sampleUsers[0], sampleUsers[4]],
      contactDetails: "info@startups.org",
      eventType: "Competition",
      location: "San Francisco",
      about: "A pitch competition where early-stage startups will showcase their innovative ideas to a panel of judges and investors.",
      startDate: "2024-10-05",
      endDate: "2024-10-06",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.event7,
      images: [images.event, images.event3],
      socialMedia: [
         {
            platform: "Twitter",
            username: "startuppitch",
            url: "#",
         },
      ],
   },
   {
      type: "event",
      verified: true,
      id: 5,
      slug: "charity-cala-5",
      name: "Charity Gala",
      creator: sampleUsers[7],
      contactDetails: "info@example.com",
      eventType: "Gala",
      location: "London",
      about: "A fundraising gala to support various charitable initiatives and make a positive impact in the community.",
      startDate: "2024-11-15",
      endDate: "2024-11-15",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.logo,
      images: [images.restaurant, images.event, images.person4m],
   },
   {
      type: "event",
      verified: true,
      id: 6,
      slug: "music-festival-6",
      name: "Music Festival",
      creator: sampleUsers[8],
      contactDetails: "Contact us on +232 24334 2323",
      eventType: "Music Festival",
      location: "Nottingham",
      about: "A multi-day music festival featuring a diverse lineup of artists across different genres.",
      startDate: "2024-12-01",
      endDate: "2024-12-03",
      keyTakeaways: [
         {
            takeaway: "Special guests",
            description: "We've invited relevant people to speak for the occasion",
         },
         {
            takeaway: "Drinks & Food",
            description: "Drinks and food will be made available",
         },
      ],
      displayPhoto: images.event2,
      images: [images.event2, images.event3, images.user4f, images.restaurant2],
      socialMedia: [
         {
            platform: "Instagram",
            username: "musicfest",
            url: "#",
         },
      ],
   },
];

export const sampleOrganizations: OrganizationInterface[] = [
   {
      type: "organization",
      id: 901,
      slug: "danny's-veggies-901",
      name: "Danny's Veggies",
      admin: sampleUsers[4],
      team: [sampleUsers[3], sampleUsers[1]],
      industry: "Food",
      location: "Ipswich",
      verified: true,
      email: "dansvegs@dannysveg.co.uk",
      contactDetails: "call us on +121 43435 656",
      about: "Passionate vegetable selling business committed to providing fresh, locally sourced produce to the community. Specializes in offering a wide variety of seasonal vegetables, fruits, and herbs, all grown with care and sustainability in mind. Dedicated to promoting healthy eating and supporting local farmers. Known for excellent customer service and a vibrant, welcoming atmosphere at the market or store.",
      displayPhoto: images.farm_logo,
      images: [images.user2m, images.farm1, images.garden],
      serviceOfferings: [
         {
            service: "Fresh Produce Selection",
            description:
               "Offering a diverse range of fresh vegetables, fruits, and herbs, carefully selected and sourced from local farmers and suppliers.",
         },
         {
            service: "Seasonal Specials",
            description:
               "Providing seasonal specials and promotions to highlight the best of each season's harvest, ensuring customers have access to the freshest produce.",
         },
         {
            service: "Community Engagement",
            description:
               "Engaging with the local community through educational events, cooking demonstrations, and partnerships with schools and organizations to promote healthy eating habits.",
         },
         {
            service: "Custom Orders",
            description:
               "Accommodating custom orders and requests from customers, including bulk purchases for events, special occasions, or specific dietary needs.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "dannysveg",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "dannysveg",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 90,
      slug: "auto-works-90",
      name: "Borcelle Auto Works",
      admin: sampleUsers[1],
      team: [sampleUsers[2], sampleUsers[0]],
      industry: "Automotive repairs",
      location: "Glasgow",
      verified: true,
      email: "info@autoglasgow.com",
      contactDetails: "call us on +121 43435 656",
      about: "Trusted auto repair shop specializing in comprehensive vehicle maintenance and repair services. With years of experience, our team of skilled technicians is dedicated to providing top-notch automotive solutions. From routine maintenance tasks to complex engine repairs, we're committed to keeping vehicles running smoothly and safely on the road.",
      displayPhoto: images.auto_shop_2,
      images: [images.auto_shop_2, images.auto_shop_3, images.auto_shop_2, images.vinatge_cars, images.auto_shop_5],
      serviceOfferings: [
         {
            service: "Diagnostic Services",
            description:
               "Utilizing state-of-the-art diagnostic equipment to identify and troubleshoot vehicle issues accurately and efficiently.",
         },
         {
            service: "Routine Maintenance",
            description:
               "Performing essential maintenance tasks such as oil changes, tire rotations, and brake inspections to ensure optimal vehicle performance and longevity.",
         },
         {
            service: "Repair Services",
            description:
               "Offering a full range of repair services, including engine repairs, transmission repairs, brake repairs, and electrical system diagnostics and repairs.",
         },
         {
            service: "Quality Parts",
            description:
               "Using high-quality OEM or aftermarket parts for repairs and replacements, backed by warranty options for added peace of mind.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "BorcelleAuto",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 111,
      slug: "reap-farm-111",
      name: "Reap farm",
      admin: sampleUsers[3],
      industry: "farming",
      location: "Leicester",
      verified: false,
      email: "info@reapfarm.co.uk",
      contactDetails: "call us on +121 43435 656",
      about: "Family-owned farm dedicated to sustainable agriculture and ethical farming practices. Specializes in growing a wide variety of crops and raising livestock with a focus on environmental stewardship and community engagement.",
      displayPhoto: images.farm_logo2,
      images: [images.farm_logo2, images.farm, images.farm1, images.garden, images.restaurant2],
      serviceOfferings: [
         {
            service: "Organic Produce",
            description: "Providing fresh, organic fruits, vegetables, and herbs grown with care and respect for the land.",
         },
         {
            service: "Farm-to-Table Events",
            description:
               "Hosting farm-to-table dinners and events showcasing seasonal produce and locally sourced ingredients.",
         },
         {
            service: "Agritourism Activities",
            description: "Offering educational farm tours, workshops, and hands-on experiences for visitors of all ages.",
         },
         {
            service: "Community Supported Agriculture (CSA)",
            description:
               "Offering CSA memberships for customers to receive weekly or monthly shares of seasonal produce directly from the farm.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "reapFarm",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 92,
      slug: "iphone-repairs-92",
      name: "iPhone Repairs",
      admin: sampleUsers[4],
      team: [sampleUsers[3], sampleUsers[1], sampleUsers[8], sampleUsers[7]],
      industry: "Tech repairs",
      location: "Newcastle",
      verified: true,
      email: "info@irepairs.com",
      contactDetails: "call us on +121 43435 656",
      about: "Trusted iPhone repair shop specializing in fast and reliable repairs for all models of iPhones. With skilled technicians and high-quality parts, we're committed to getting your device back to optimal condition.",
      displayPhoto: images.office2,
      images: [images.office2],
      serviceOfferings: [
         {
            service: "Screen Replacement",
            description: "Quick and efficient screen replacements for cracked or damaged iPhone screens.",
         },
         {
            service: "Battery Replacement",
            description: "Professional battery replacement services to restore battery life and performance.",
         },
         {
            service: "Water Damage Repair",
            description: "Expert diagnosis and repair for iPhones affected by water damage or liquid spills.",
         },
         {
            service: "Diagnostic Services",
            description:
               "Thorough diagnostic services to identify and address any other issues affecting your iPhone's functionality.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "irepairs",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "irepairs",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "irepairs",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 101,
      slug: "children's-artworks-101",
      name: "Children's Artworks",
      admin: sampleUsers[5],
      team: [sampleUsers[0], sampleUsers[9]],
      industry: "Art",
      location: "Manchester",
      verified: true,
      email: "info@kidsart.com",
      contactDetails: "call us on +121 43435 656",
      about: "Whimsical children's artwork store offering a curated selection of creative supplies and unique artwork for kids of all ages. Dedicated to fostering imagination, self-expression, and artistic exploration.",
      displayPhoto: images.artShop2,
      images: [images.artShop2, images.artShop],
      serviceOfferings: [
         {
            service: "Art Supplies",
            description:
               "Providing a wide range of art supplies, including paints, crayons, markers, and sketchbooks, tailored to children's needs and interests.",
         },
         {
            service: "Art Classes",
            description:
               "Offering art classes and workshops for children to learn new techniques and unleash their creativity in a supportive environment.",
         },
         {
            service: "Custom Artwork",
            description:
               "Creating custom artwork and personalized gifts for children, including name plaques, growth charts, and hand-painted keepsakes.",
         },
         {
            service: "Birthday Parties",
            description:
               "Hosting art-themed birthday parties with customizable packages, including guided art activities, decorations, and party favors.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "kidsart",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 988,
      slug: "the-bistro-988",
      name: "The Bistro",
      admin: sampleUsers[0],
      industry: "Food",
      location: "Birmingham",
      verified: true,
      email: "info@thebistro.com",
      contactDetails: "call us on +121 43435 656",
      about: "Vibrant restaurant serving delicious, globally inspired cuisine made with locally sourced ingredients. Known for its welcoming atmosphere, innovative dishes, and commitment to sustainability.",
      displayPhoto: images.restaurant,
      images: [images.restaurant, images.restaurant2, images.restaurant3],
      serviceOfferings: [
         {
            service: "Diverse Menu",
            description:
               "Offering a diverse menu featuring a fusion of flavors and culinary techniques from around the world.",
         },
         {
            service: "Seasonal Specials",
            description:
               "Highlighting seasonal ingredients and flavors with regularly updated specials and prix-fixe menus.",
         },
         {
            service: "Catering Services",
            description:
               "Providing catering services for events of all sizes, from intimate gatherings to large corporate functions.",
         },
         {
            service: "Private Dining",
            description:
               "Offering private dining options for special occasions, complete with customizable menus and personalized service.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "the_bistro",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "the_bistro",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "the_bistro",
            url: "#",
         },
      ],
   },
];

export const sampleUsersForFeature: UserInterface[] = [
   {
      type: "user",
      worksAt: "Independant",
      id: 1,
      slug: "esther-rios-1",
      name: "Esther Rios",
      email: "erios@gmail.com",
      jobTitle: "Visa Consultant",
      industry: "Travel & Finance",
      location: "Ipswich",
      verified: true,
      bio: "Experienced visa consultant adept at navigating complex immigration processes. Specializing in providing tailored solutions for individuals and businesses seeking to obtain visas for travel, work, or study purposes. Skilled in analyzing visa requirements, preparing documentation, and guiding clients through the application process efficiently. Committed to delivering exceptional service and ensuring client satisfaction. Proficient in addressing diverse visa-related inquiries and resolving issues promptly. Dedicated to staying updated on immigration laws and regulations to offer the most accurate advice and assistance.",
      displayPhoto: images.user3f,
      images: [images.visa_consultancy, images.firm2],
      serviceOfferings: [
         {
            service: "Visa Assessment",
            description:
               "Comprehensive evaluation of client eligibility and requirements for various types of visas, ensuring accurate guidance.",
         },
         {
            service: "Application Assistance",
            description:
               "Expert support in completing and submitting visa applications, minimizing errors and optimizing chances of approval.",
         },
         {
            service: "Document Preparation",
            description:
               "Thorough assistance in gathering and organizing required documents, streamlining the application process for clients.",
         },
         {
            service: "Consultation Sessions",
            description:
               "Personalized consultations to address specific visa-related queries, providing clarity and guidance tailored to individual circumstances.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "RiosConsultant",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 2,
      slug: "Josef-klein-2",
      name: "Josef Klein",
      email: "carriek@yahoo.co.uk",
      jobTitle: "Web Developer",
      industry: "IT & Software",
      location: "Birmingham",
      verified: true,
      bio: "Experienced web developer proficient in React.js, Next.js, JavaScript, and Python. Specializes in crafting bespoke websites with a focus on functionality, aesthetics, and user experience. Known for delivering high-quality code and designs tailored to client needs. Detail-oriented and dedicated to staying updated on the latest web development technologies and best practices. Passionate about creating visually appealing and responsive interfaces while ensuring optimal performance and user satisfaction.",
      displayPhoto: images.person9m,
      images: [images.event5],
      serviceOfferings: [
         {
            service: "Website Development",
            description:
               "Crafting bespoke websites tailored to client needs, focusing on functionality, aesthetics, and user experience.",
         },
         {
            service: "Frontend Design",
            description:
               "Creating visually appealing and responsive frontend interfaces using modern web development technologies and best practices.",
         },
         {
            service: "Backend Development",
            description:
               "Building robust server-side applications and APIs to power dynamic website functionalities and data management.",
         },
         {
            service: "Maintenance & Support",
            description:
               "Providing ongoing maintenance services, troubleshooting, and technical support to ensure smooth operation and optimal performance of websites.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "KleinJ",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "KleinJ",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "KleinJ",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 3,
      slug: "nell-lane-3",
      name: "Nell Lane",
      email: "nelllane@lane.com",
      jobTitle: "Quantity Surveyor",
      industry: "Construction",
      location: "London",
      verified: true,
      bio: "Detail-oriented quantity surveyor with expertise in cost estimation, procurement, and project management. Specializes in optimizing project budgets and ensuring cost efficiency. Experienced in conducting thorough cost analysis and providing accurate quantity take-offs. Skilled in contract negotiation and compliance, with a focus on delivering projects on time and within budget constraints. Committed to continuous professional development and staying abreast of industry standards and regulations.",
      displayPhoto: images.person9m,
      images: [images.office, images.auto_shop_2],
      serviceOfferings: [
         {
            service: "Cost Estimation",
            description:
               "Accurate assessment of project costs through meticulous analysis of materials, labor, and overhead expenses, ensuring budget clarity.",
         },
         {
            service: "Quantity Take-Offs",
            description:
               "Precise quantification of materials and resources required for construction projects, facilitating efficient procurement and cost management.",
         },
         {
            service: "Procurement Management",
            description:
               "Strategic sourcing of materials and services at competitive prices while maintaining quality standards and project timelines.",
         },
         {
            service: "Project Cost Control",
            description:
               "Implementation of cost control measures and monitoring systems to track project expenditures and mitigate budget overruns, ensuring financial efficiency.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "Nell_lane",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "Nell_lane",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 4,
      slug: "lela-cook-4",
      name: "Lela Cook",
      email: "lela@gmail.com",
      jobTitle: "Script Writer",
      industry: "Film & Entertainment",
      location: "Leicester",
      verified: true,
      bio: "Dynamic script writer skilled in crafting compelling narratives for film, television, and other media platforms. Excels in developing engaging characters, captivating dialogue, and immersive storylines that resonate with audiences. Experienced in collaborating with directors, producers, and other creative professionals to bring scripts to life. Passionate about storytelling and dedicated to delivering scripts that entertain, inspire, and provoke thought.",
      displayPhoto: images.person6f,
      images: [images.event, images.user4f],
      serviceOfferings: [
         {
            service: "Script Development",
            description:
               "Creating original scripts from concept to final draft, tailored to client preferences and project requirements.",
         },
         {
            service: "Script Editing",
            description:
               "Polishing existing scripts by refining dialogue, enhancing plot structure, and ensuring coherence and consistency.",
         },
         {
            service: "Adaptation Services",
            description:
               "Adapting existing material such as books, articles, or real-life events into screenplay format, preserving the essence of the original work.",
         },
         {
            service: "Consultation & Feedback",
            description:
               "Providing insightful feedback and guidance on script ideas, plot development, and character arcs to enhance storytelling effectiveness.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "lelaCook",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "lelaCook",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 5,
      slug: "aron-rhodes-5",
      name: "Aaron Rhodes",
      email: "arhodes@rhodesconsultancy.com",
      jobTitle: "Tax Lawyer",
      industry: "Finance & Law",
      location: "London",
      verified: true,
      bio: "Seasoned tax lawyer specializing in providing comprehensive legal counsel and representation in matters of taxation and finance. Proficient in navigating complex tax laws and regulations to help clients optimize their financial strategies and minimize tax liabilities. Skilled in tax planning, compliance, and dispute resolution, with a track record of achieving favorable outcomes for individuals and businesses. Committed to delivering personalized solutions and proactive advice to address clients' tax-related needs effectively.",
      displayPhoto: images.person4m,
      images: [images.logo3, images.office1, images.firm],
      serviceOfferings: [
         {
            service: "Tax Planning",
            description:
               "Developing tailored tax strategies to maximize deductions, credits, and exemptions while ensuring compliance with tax laws.",
         },
         {
            service: "Tax Compliance",
            description:
               "Assisting clients in fulfilling their tax obligations, including filing tax returns, preparing financial statements, and responding to tax audits.",
         },
         {
            service: "Tax Dispute Resolution",
            description:
               "Representing clients in tax disputes with tax authorities or other parties, negotiating settlements, and litigating cases when necessary.",
         },
         {
            service: "Legal Advice & Counsel",
            description:
               "Providing expert legal advice on various tax matters, including estate planning, corporate taxation, international taxation, and tax implications of business transactions.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "rhodesLaw",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "rhodesLaw",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 6,
      slug: "tom-lloyd-6",
      name: "Tom Lloyd",
      email: "lloydtm@gmail.com",
      jobTitle: "Organic farm specialist",
      industry: "Farming",
      location: "Manchester",
      verified: true,
      bio: "Dedicated farmer with a passion for sustainable agriculture and land stewardship. Specializes in cultivating organic crops and raising livestock using environmentally friendly practices. Experienced in crop rotation, soil health management, and integrated pest management to ensure high yields and quality produce. Committed to promoting local food systems and community engagement in agriculture.",
      displayPhoto: images.userm,
      images: [images.farm_logo, images.farm, images.farm1, images.garden],
      serviceOfferings: [
         {
            service: "Organic Farming",
            description:
               "Cultivating a variety of organic crops using methods that prioritize soil health, biodiversity, and environmental sustainability.",
         },
         {
            service: "Livestock Management",
            description:
               "Raising healthy and happy animals through ethical and humane practices, focusing on animal welfare and quality of products.",
         },
         {
            service: "Farm-to-Table Sales",
            description:
               "Selling fresh produce and farm products directly to consumers through farmer's markets, community-supported agriculture (CSA), and online platforms.",
         },
         {
            service: "Agricultural Consulting",
            description:
               " Providing expert advice and guidance on sustainable farming practices, crop selection, and farm management techniques to aspiring farmers and agricultural businesses.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "farmerLloyd",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "farmerLloyd",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 7,
      slug: "steven-tyler-7",
      name: "Steven Tyler",
      email: "tyler@yahoo.co.uk",
      jobTitle: "Dj",
      industry: "Music",
      location: "London",
      verified: true,
      bio: "Dynamic bass DJ renowned for electrifying performances and infectious beats that keep crowds dancing all night. Specializes in mixing and blending bass-heavy tracks across various genres, from dubstep to trap to drum and bass. Known for creating immersive sonic experiences and fostering a vibrant atmosphere at clubs, festivals, and events worldwide.",
      displayPhoto: images.person2m,
      images: [images.event2, images.event3, images.event7],
      serviceOfferings: [
         {
            service: "Live Performances",
            description:
               "Delivering high-energy DJ sets featuring bass-heavy music, customized to suit the vibe and audience preferences of each event.",
         },
         {
            service: "Event Booking",
            description:
               "Available for bookings at clubs, festivals, concerts, private parties, and corporate events, bringing unparalleled energy and excitement to any occasion.",
         },
         {
            service: "Music Production",
            description:
               "Producing original bass music tracks and remixes for release on digital platforms, showcasing unique soundscapes and innovative production techniques.",
         },
         {
            service: "DJ Workshops",
            description:
               "Offering workshops and tutorials on bass DJing techniques, mixing fundamentals, and music production tips to aspiring DJs and electronic music enthusiasts.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "djTyler",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 63,
      slug: "jessica-dei-63",
      name: "Jessica Dei",
      email: "jessicadei@gmail.com",
      jobTitle: "Venture Capitalist",
      industry: "Finance",
      location: "London",
      verified: true,
      bio: "Experienced investor supporting early-stage startups in securing funding.",
      displayPhoto: images.user4f,
      images: [images.office1, images.furniture, images.vinatge_cars],
      serviceOfferings: [
         {
            service: "Startup Funding",
            description: "Investing in promising early-stage companies.",
         },
         {
            service: "Business Advisory",
            description: "Providing strategic guidance to portfolio companies.",
         },
      ],
      socialMedia: [
         {
            platform: "Twitter",
            username: "jessicadei",
            url: "#",
         },
         {
            platform: "LinkedIn",
            username: "jessicadei",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 22,
      slug: "jane-smith-22",
      name: "Jane Smith",
      email: "jane.smith@yahoo.co.uk",
      jobTitle: "Product Manager",
      industry: "Technology",
      location: "Liverpool",
      verified: true,
      bio: "Experienced product manager with a focus on user-centered design.",
      displayPhoto: images.person3f,
      images: [images.office2],
      serviceOfferings: [
         {
            service: "Product Management",
            description: "Driving product strategy and execution.",
         },
         {
            service: "User Research",
            description: "Gathering insights to inform product decisions.",
         },
      ],
      socialMedia: [
         {
            platform: "Twitter",
            username: "janesmith",
            url: "#",
         },
         {
            platform: "LinkedIn",
            username: "janesmith",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 32,
      slug: "emily-johnson-32",
      name: "Emily Johnson",
      email: "emily.johnson@gmail.com",
      jobTitle: "Artist",
      industry: "Arts",
      location: "Essex",
      verified: true,
      bio: "Contemporary artist exploring themes of identity and culture.",
      displayPhoto: images.person6f,
      images: [images.artShop, images.artShop2],
      serviceOfferings: [
         {
            service: "Painting",
            description: "Creating vibrant and thought-provoking artworks.",
         },
         {
            service: "Art Commission",
            description: "Accepting commissions for customized artworks.",
         },
      ],
      socialMedia: [
         {
            platform: "Instagram",
            username: "emilyjohnson",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "emilyjohnsonart",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 24,
      slug: "sarah-davis-24",
      name: "Sarah Davis",
      email: "sarahdavis@gmail.com",
      jobTitle: "Fitness Instructor",
      industry: "Fitness",
      location: "Newcastle",
      verified: true,
      bio: "Certified fitness instructor passionate about helping others achieve their health and wellness goals.",
      displayPhoto: images.user4f,
      images: [images.restaurant2],
      serviceOfferings: [
         {
            service: "Personal Training",
            description: "One-on-one fitness sessions tailored to individual needs.",
         },
         {
            service: "Group Classes",
            description: "Fun and energizing fitness classes for all fitness levels.",
         },
      ],
      socialMedia: [
         {
            platform: "Instagram",
            username: "sarahfitness",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "sarahfitness",
            url: "#",
         },
      ],
   },
];

export const sampleOrganizationsForFeature: OrganizationInterface[] = [
   {
      type: "organization",
      id: 901,
      slug: "danny's-veggies-901",
      name: "Danny's Veggies",
      admin: sampleUsers[4],
      team: [sampleUsers[3], sampleUsers[1]],
      industry: "Food",
      location: "Ipswich",
      verified: true,
      email: "dansvegs@dannysveg.co.uk",
      contactDetails: "call us on +121 43435 656",
      about: "Passionate vegetable selling business committed to providing fresh, locally sourced produce to the community. Specializes in offering a wide variety of seasonal vegetables, fruits, and herbs, all grown with care and sustainability in mind. Dedicated to promoting healthy eating and supporting local farmers. Known for excellent customer service and a vibrant, welcoming atmosphere at the market or store.",
      displayPhoto: images.farm_logo2,
      images: [images.user2m, images.farm1, images.garden],
      serviceOfferings: [
         {
            service: "Fresh Produce Selection",
            description:
               "Offering a diverse range of fresh vegetables, fruits, and herbs, carefully selected and sourced from local farmers and suppliers.",
         },
         {
            service: "Seasonal Specials",
            description:
               "Providing seasonal specials and promotions to highlight the best of each season's harvest, ensuring customers have access to the freshest produce.",
         },
         {
            service: "Community Engagement",
            description:
               "Engaging with the local community through educational events, cooking demonstrations, and partnerships with schools and organizations to promote healthy eating habits.",
         },
         {
            service: "Custom Orders",
            description:
               "Accommodating custom orders and requests from customers, including bulk purchases for events, special occasions, or specific dietary needs.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "dannysveg",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "dannysveg",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 90,
      slug: "auto-works-90",
      name: "Borcelle Auto Works",
      admin: sampleUsers[1],
      team: [sampleUsers[2], sampleUsers[0]],
      industry: "Automotive repairs",
      location: "Glasgow",
      verified: true,
      email: "info@autoglasgow.com",
      contactDetails: "call us on +121 43435 656",
      about: "Trusted auto repair shop specializing in comprehensive vehicle maintenance and repair services. With years of experience, our team of skilled technicians is dedicated to providing top-notch automotive solutions. From routine maintenance tasks to complex engine repairs, we're committed to keeping vehicles running smoothly and safely on the road.",
      displayPhoto: images.auto_shop_3,
      images: [images.auto_shop_2, images.auto_shop_3, images.auto_shop_2, images.vinatge_cars, images.auto_shop_5],
      serviceOfferings: [
         {
            service: "Diagnostic Services",
            description:
               "Utilizing state-of-the-art diagnostic equipment to identify and troubleshoot vehicle issues accurately and efficiently.",
         },
         {
            service: "Routine Maintenance",
            description:
               "Performing essential maintenance tasks such as oil changes, tire rotations, and brake inspections to ensure optimal vehicle performance and longevity.",
         },
         {
            service: "Repair Services",
            description:
               "Offering a full range of repair services, including engine repairs, transmission repairs, brake repairs, and electrical system diagnostics and repairs.",
         },
         {
            service: "Quality Parts",
            description:
               "Using high-quality OEM or aftermarket parts for repairs and replacements, backed by warranty options for added peace of mind.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "BorcelleAuto",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "BorcelleAuto",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 111,
      slug: "reap-farm-111",
      name: "Reap farm",
      admin: sampleUsers[3],
      industry: "farming",
      location: "Leicester",
      verified: false,
      email: "info@reapfarm.co.uk",
      contactDetails: "call us on +121 43435 656",
      about: "Family-owned farm dedicated to sustainable agriculture and ethical farming practices. Specializes in growing a wide variety of crops and raising livestock with a focus on environmental stewardship and community engagement.",
      displayPhoto: images.farm_logo,
      images: [images.farm_logo2, images.farm, images.farm1, images.garden, images.restaurant2],
      serviceOfferings: [
         {
            service: "Organic Produce",
            description: "Providing fresh, organic fruits, vegetables, and herbs grown with care and respect for the land.",
         },
         {
            service: "Farm-to-Table Events",
            description:
               "Hosting farm-to-table dinners and events showcasing seasonal produce and locally sourced ingredients.",
         },
         {
            service: "Agritourism Activities",
            description: "Offering educational farm tours, workshops, and hands-on experiences for visitors of all ages.",
         },
         {
            service: "Community Supported Agriculture (CSA)",
            description:
               "Offering CSA memberships for customers to receive weekly or monthly shares of seasonal produce directly from the farm.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "reapFarm",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "reapFarm",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 92,
      slug: "iphone-repairs-92",
      name: "iPhone Repairs",
      admin: sampleUsers[4],
      team: [sampleUsers[3], sampleUsers[1], sampleUsers[8], sampleUsers[7]],
      industry: "Tech repairs",
      location: "Newcastle",
      verified: true,
      email: "info@irepairs.com",
      contactDetails: "call us on +121 43435 656",
      about: "Trusted iPhone repair shop specializing in fast and reliable repairs for all models of iPhones. With skilled technicians and high-quality parts, we're committed to getting your device back to optimal condition.",
      displayPhoto: images.office,
      images: [images.office2],
      serviceOfferings: [
         {
            service: "Screen Replacement",
            description: "Quick and efficient screen replacements for cracked or damaged iPhone screens.",
         },
         {
            service: "Battery Replacement",
            description: "Professional battery replacement services to restore battery life and performance.",
         },
         {
            service: "Water Damage Repair",
            description: "Expert diagnosis and repair for iPhones affected by water damage or liquid spills.",
         },
         {
            service: "Diagnostic Services",
            description:
               "Thorough diagnostic services to identify and address any other issues affecting your iPhone's functionality.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "irepairs",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "irepairs",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "irepairs",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 101,
      slug: "children's-artworks-101",
      name: "Children's Artworks",
      admin: sampleUsers[5],
      team: [sampleUsers[0], sampleUsers[9]],
      industry: "Art",
      location: "Manchester",
      verified: true,
      email: "info@kidsart.com",
      contactDetails: "call us on +121 43435 656",
      about: "Whimsical children's artwork store offering a curated selection of creative supplies and unique artwork for kids of all ages. Dedicated to fostering imagination, self-expression, and artistic exploration.",
      displayPhoto: images.artShop,
      images: [images.artShop2, images.artShop],
      serviceOfferings: [
         {
            service: "Art Supplies",
            description:
               "Providing a wide range of art supplies, including paints, crayons, markers, and sketchbooks, tailored to children's needs and interests.",
         },
         {
            service: "Art Classes",
            description:
               "Offering art classes and workshops for children to learn new techniques and unleash their creativity in a supportive environment.",
         },
         {
            service: "Custom Artwork",
            description:
               "Creating custom artwork and personalized gifts for children, including name plaques, growth charts, and hand-painted keepsakes.",
         },
         {
            service: "Birthday Parties",
            description:
               "Hosting art-themed birthday parties with customizable packages, including guided art activities, decorations, and party favors.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "kidsart",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "kidsart",
            url: "#",
         },
      ],
   },
   {
      type: "organization",
      id: 988,
      slug: "the-bistro-988",
      name: "The Bistro",
      admin: sampleUsers[0],
      industry: "Food",
      location: "Birmingham",
      verified: true,
      email: "info@thebistro.com",
      contactDetails: "call us on +121 43435 656",
      about: "Vibrant restaurant serving delicious, globally inspired cuisine made with locally sourced ingredients. Known for its welcoming atmosphere, innovative dishes, and commitment to sustainability.",
      displayPhoto: images.restaurant2,
      images: [images.restaurant, images.restaurant2, images.restaurant3],
      serviceOfferings: [
         {
            service: "Diverse Menu",
            description:
               "Offering a diverse menu featuring a fusion of flavors and culinary techniques from around the world.",
         },
         {
            service: "Seasonal Specials",
            description:
               "Highlighting seasonal ingredients and flavors with regularly updated specials and prix-fixe menus.",
         },
         {
            service: "Catering Services",
            description:
               "Providing catering services for events of all sizes, from intimate gatherings to large corporate functions.",
         },
         {
            service: "Private Dining",
            description:
               "Offering private dining options for special occasions, complete with customizable menus and personalized service.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "the_bistro",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "the_bistro",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "the_bistro",
            url: "#",
         },
      ],
   },
];

export const sampleNotifications: NotificationInterface[] = [
   {
      id: 1,
      title: "More exposure",
      user: sampleUsers[1],
      type: "search-appearance",
      content: `You made 5 Search appearances today!`,
      date: "2024-01-13",
      read: false,
   },
   {
      id: 2,
      title: "How to monetize",
      user: sampleUsers[1],
      type: "account",
      content: "Find out how you can monentize your account on the monetization page",
      date: "2024-01-12",
      read: false,
   },
   {
      id: 3,
      title: "Introducing 'Gummy Pages'",
      user: sampleUsers[1],
      type: "announcement",
      content: `Check out our new 'Gummy Pages' directory and consider becoming a memebr!`,
      date: "2023-11-02",
      read: true,
   },
   {
      id: 4,
      title: "More exposure",
      user: sampleUsers[1],
      type: "saved",
      content: "You've been bookmarked 15 times today!",
      date: "2023-10-12",
      read: true,
   },
   {
      id: 5,
      title: "'City Thrift' Business page approved",
      user: sampleUsers[1],
      type: "page",
      content: "Your business page was approved and is now live!",
      date: "2023-09-02",
      read: true,
   },
   {
      id: 6,
      title: "Signup successfull",
      user: sampleUsers[1],
      type: "account",
      content: `Welcome to Gum.iNc ${generateAvatarLetters(sampleUsers[1].name)}!`,
      date: "2023-09-01",
      read: true,
   },
];

export const sampleSubscriptions: SubscriptionInterface[] = [
   {
      id: 1,
      user: sampleUsers[1],
      name: "Research Bureau Newsletter",
      price: "£30.00",
      renews: true,
      date: "2024-02-11",
      description: "This newsletter offers business insights and research into relevant fields selected by user.",
      icon: <EmailOutlined fontSize="large" />,
   },
];

export const sampleChats: ChatInterface[] = [
   {
      id: 1,
      chatInitiator: sampleUsers[3],
      chatRespondend: sampleOrganizations[3],
   },
   {
      id: 2,
      chatInitiator: sampleUsers[3],
      chatRespondend: sampleOrganizations[4],
   },
   {
      id: 3,
      chatInitiator: sampleUsers[3],
      chatRespondend: sampleUsers[7],
   },
];

export const sampleMessages: MessageInterface[] = [
   {
      id: 1,
      sender: sampleUsers[3],
      body: "Hello! I admire your work and would love to discuss a potential collaboration. Are you available for a chat?",
      chat: sampleChats[0],
      date: "2024-01-02",
      opened: true,
   },
   {
      id: 2,
      sender: sampleOrganizations[3],
      body: "Hi. Thank you for reaching out. I'm definitely interested in exploring collaboration opportunities. When would be a good time for us to connect?",
      chat: sampleChats[0],
      date: "2024-01-03",
      opened: true,
   },
   {
      id: 3,
      sender: sampleUsers[3],
      body: "Great to hear! How about tomorrow at 2:00 PM? We can discuss more details and see how our skills complement each other.",
      chat: sampleChats[0],
      date: "2024-01-04",
      opened: false,
   },
   {
      id: 4,
      sender: sampleUsers[3],
      body: "Hi how are you doing.",
      chat: sampleChats[1],
      date: "2023-11-14",
      opened: true,
   },
   {
      id: 5,
      sender: sampleUsers[3],
      body: "I need your services.",
      chat: sampleChats[2],
      date: "2023-11-12",
      opened: true,
   },
   {
      id: 5,
      sender: sampleUsers[7],
      body: "How may i help.",
      chat: sampleChats[2],
      date: "2023-11-12",
      opened: true,
   },
];

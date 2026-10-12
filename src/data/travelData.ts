export interface TourPackage {
  slug: string;
  name: string;
  category: "One-Day" | "Two-Day" | "Pilgrimage" | "Sightseeing" | "Family" | "Custom";
  duration: string;
  placesCovered: string[];
  startingPrice: number; // In INR (per vehicle / group)
  vehicleType: string;
  featuredImage: string;
  shortDescription: string;
  overview: string;
  itinerary: { time: string; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  brief: string;
  description: string;
  historicalSignificance: string;
  visitorInformation: {
    timings: string;
    entryFee: string;
    dressCode: string;
    idealDuration: string;
    bestTimeToVisit: string;
  };
  photographyTips: string;
  nearbyAttractions: string[];
  relatedPackageSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  coverImage: string;
  excerpt: string;
  contentHtml: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface Vehicle {
  name: string;
  type: string;
  passengers: number;
  luggage: number;
  ratePerKm: number;
  localPackageRate: number; // approx 8hr/80km local
  features: string[];
}

export const businessInfo = {
  name: "Rameshwaram Cars & Coastal Tours",
  shortName: "Rameshwaram Cars",
  tagline: "Curated Pilgrimages & Coastal Journeys",
  phone: "+91 88076 19273",
  phoneRaw: "918807619273",
  whatsapp: "+91 88076 19273",
  whatsappRaw: "918807619273",
  email: "rameswaramcars@gmail.com",
  address: "Opposite Bus Station, Rameshwaram, Tamil Nadu 623526, India",
  operatingHours: "24/7 Helpline & Booking Desk (Local office: 05:00 AM – 10:00 PM)",
  rating: 4.9,
  reviewsCount: 1280,
  yearsActive: 12,
  completedTrips: 15400,
};

export const fleetData: Vehicle[] = [
  {
    name: "Maruti Suzuki Swift Dzire",
    type: "Sedan (AC)",
    passengers: 4,
    luggage: 2,
    ratePerKm: 17,
    localPackageRate: 1800,
    features: ["Dual Airbags", "Chilled Air Conditioning", "Clean Sanitized Interiors", "Spacious Boot"],
  },
  {
    name: "Toyota Etios",
    type: "Sedan (AC)",
    passengers: 4,
    luggage: 3,
    ratePerKm: 17,
    localPackageRate: 1900,
    features: ["Ample Rear Legroom", "Comfortable Suspension", "Clean Linens & Water Bottles", "Experienced Driver"],
  },
  {
    name: "Maruti Suzuki Ertiga Tour M",
    type: "MPV (AC)",
    passengers: 6,
    luggage: 4,
    ratePerKm: 21,
    localPackageRate: 2600,
    features: ["Flexible Seating", "Rear AC Vents", "Family Comfort", "Smooth Island Drive"],
  },
  {
    name: "Kia Carens",
    type: "Premium MPV (AC)",
    passengers: 6,
    luggage: 4,
    ratePerKm: 19,
    localPackageRate: 2800,
    features: ["Plush Captain Chairs Option", "USB Ports on all rows", "Whisper Quiet Ride", "Tinted Heat Windows"],
  },
  {
    name: "Toyota Innova Crysta",
    type: "Luxury SUV (AC)",
    passengers: 7,
    luggage: 5,
    ratePerKm: 23,
    localPackageRate: 3600,
    features: ["Gold Standard Highway Ride", "Reclining Comfort", "Maximum Luggage Space", "Senior Citizen Friendly"],
  },
  {
    name: "Force Tempo Traveller",
    type: "Executive Van (AC)",
    passengers: 14,
    luggage: 10,
    ratePerKm: 28,
    localPackageRate: 5200,
    features: ["Individual Pushback Seats", "Surround Sound & Mic", "Large Luggage Carrier", "Ideal for Group Yatras"],
  },
];

export const packagesData: TourPackage[] = [
  {
    slug: "rameshwaram-one-day-tour",
    name: "Rameshwaram One-Day Complete Island Tour",
    category: "One-Day",
    duration: "1 Day (8 - 10 Hours)",
    placesCovered: ["Ramanathaswamy Temple", "Agni Theertham", "Ramar Patham", "Lakshmana Theertham", "Panchamukhi Hanuman", "Dhanushkodi Beach", "APJ Abdul Kalam Memorial"],
    startingPrice: 2200,
    vehicleType: "Sedan (Swift Dzire / Etios) - MPV / SUV options available",
    featuredImage: "/images/hero-bg.jpg",
    shortDescription: "A comprehensive island itinerary covering sacred theerthams, iconic temples, the Kalam memorial, and the haunting beauty of Dhanushkodi in a single well-paced day.",
    overview: "Designed for travelers with tight schedules or weekend pilgrims, this tour covers every must-see cultural, spiritual, and coastal landmark in Rameshwaram. With a dedicated local chauffeur who knows crowd timings, you can complete holy theertham rituals comfortably and enjoy the sunset at Dhanushkodi without rush.",
    itinerary: [
      { time: "06:00 AM", title: "Morning Holy Bath & Darshan Assistance", description: "Pickup from hotel/railway station. Assistance at Agni Theertham for holy dip, followed by Ramanathaswamy Temple 22 theerthams and Spatika Linga darshan." },
      { time: "10:30 AM", title: "Breakfast & Sacred Theerthams Circuit", description: "Visit Lakshmana Theertham, Sita Theertham, and the highest point of the island at Gandhamadhana Parvatham (Ramar Patham)." },
      { time: "12:30 PM", title: "Floating Stone Temple & Kalam Memorial", description: "Visit Panchamukhi Hanuman Temple to witness the famous floating stone used in Ram Setu, followed by a tour of Dr. APJ Abdul Kalam National Memorial." },
      { time: "01:45 PM", title: "Lunch Break", description: "Authentic South Indian thali or multi-cuisine dining recommendation based on your dietary preferences." },
      { time: "03:00 PM", title: "Dhanushkodi & Arichal Munai (Land's End)", description: "Scenic drive along the marine highway to the ruins of Dhanushkodi ghost town, the old railway station, church, and the confluence of the Bay of Bengal & Indian Ocean." },
      { time: "06:00 PM", title: "Sunset at Pamban Bridge & Drop-off", description: "Stop at the Pamban Sea Bridge viewpoint to watch the evening train crossing, followed by drop-off at your hotel or Rameshwaram Railway Station." },
    ],
    inclusions: ["Dedicated Air-Conditioned Vehicle", "Fuel, Toll Charges, Parking Fees", "Experienced Local Chauffeur Cum Guide", "Pickup and Drop from Hotel / Station within Town", "Flexible Stops for Refreshments"],
    exclusions: ["Temple Darshan Tickets (Special Entry / Theertham)", "Personal Meals and Refreshments", "Entry tickets to optional museums", "GST (5% applicable on billing)"],
    faqs: [
      { question: "Can the driver help with early morning temple queue?", answer: "Yes, our drivers are locals and will guide you on the fastest theertham sequence and the least crowded entry gates." },
      { question: "Is Dhanushkodi included in the same cab?", answer: "Yes! Modern tar roads now lead up to Arichal Munai, allowing regular AC sedans and MPVs to reach the end comfortably." },
      { question: "Can we upgrade to an Innova Crysta?", answer: "Absolutely. During booking or enquiry, you can select Innova Crysta or Ertiga as your preferred vehicle." },
    ],
  },
  {
    slug: "rameshwaram-two-day-tour",
    name: "Rameshwaram Two-Day In-Depth Pilgrimage & Coastline Tour",
    category: "Two-Day",
    duration: "2 Days / 1 Night",
    placesCovered: ["Ramanathaswamy Temple (Multiple Darshans)", "22 Theerthams Bath", "Dhanushkodi Land's End", "Kothandaramaswamy Temple", "Pamban Sea Bridge (Day & Night)", "Kalam House & Memorial", "Villoondi Theertham", "Devipattinam Navagraha Temple"],
    startingPrice: 4200,
    vehicleType: "Private AC Cab (Sedan / Ertiga / Innova)",
    featuredImage: "/images/dhanushkodi.jpg",
    shortDescription: "An unhurried spiritual and coastal getaway. Allows quiet morning and evening temple darshans, sunrise at Agni Theertham, and sunset at Dhanushkodi.",
    overview: "This two-day package is tailored for devotees and families who wish to experience the sacred energy of Rameshwaram without fatigue. You will have ample time for peaceful prayers, complete all 22 well theerthams, visit Devipattinam (Navagraha temples inside the sea), and explore the remote coastal trails.",
    itinerary: [
      { time: "Day 1 Morning", title: "Arrival, Agni Theertham & 22 Wells Holy Bath", description: "Arrival reception. Proceed to Agni Theertham for sea bath, followed by the complete 22 Theerthams bath inside Ramanathaswamy Temple and morning Darshan." },
      { time: "Day 1 Afternoon", title: "Kalam Memorial, Ramar Patham & Villoondi", description: "Explore the burial memorial of Dr. Kalam, Ramar Footprint hill with panoramic island views, and Villoondi Theertham where fresh water springs inside the sea." },
      { time: "Day 1 Evening", title: "Pamban Bridge Sunset & Night Darshan", description: "Watch sunset over the Pamban cantilever rail bridge. Attend the evening Palliyarai Pooja at Ramanathaswamy Temple." },
      { time: "Day 2 Morning", title: "Sunrise at Dhanushkodi & Ghost Town Safari", description: "Early morning drive to Arichal Munai to witness the sunrise at the border of India and Sri Lanka maritime boundary. Explore the 1964 cyclone ruins." },
      { time: "Day 2 Afternoon", title: "Kothandaramaswamy Temple & Devipattinam", description: "Visit the temple where Vibhishana surrendered to Lord Rama, followed by a coastal excursion to Devipattinam Navagraha stones before evening departure." },
    ],
    inclusions: ["Two Days Dedicated AC Cab with Chauffeur", "Driver Night Allowance & Bata", "Toll, Parking, and State Permits", "Assistance for Temple Darshan & Rituals"],
    exclusions: ["Hotel Accommodation (Can be arranged on request)", "Pooja Materials & Archana Tickets", "Meals"],
    faqs: [
      { question: "Is hotel booking included?", answer: "The base package provides private transportation. If you need hotel recommendations or booking assistance, let us know via WhatsApp." },
      { question: "Can we modify the departure time on Day 2?", answer: "Yes, our packages are fully customizable to align with your return train or flight timings." },
    ],
  },
  {
    slug: "temple-and-pilgrimage-tours",
    name: "Sacred 22 Theerthams & Temple Darshan Guided Tour",
    category: "Pilgrimage",
    duration: "Half Day (5 - 6 Hours)",
    placesCovered: ["Agni Theertham", "22 Wells inside Ramanathaswamy Temple", "Spatika Linga Darshan", "Kasi Viswanathar Shrine", "Lakshmana Theertham"],
    startingPrice: 1800,
    vehicleType: "Private AC Sedan / MPV",
    featuredImage: "/images/temple-corridor.jpg",
    shortDescription: "A dedicated spiritual tour focused strictly on completing the sacred Snanam (holy bath) ritual and main temple darshan with minimum walking stress for elders.",
    overview: "Rameshwaram is one of the Char Dhams and one of the 12 sacred Jyotirlingas. For pilgrims coming to perform ancestral rites, theertha snanam, or special vows, our local chauffeurs ensure seamless coordination. We drop you right at the designated bathing gates, store luggage safely, and guide you on the exact 22-well ritual order.",
    itinerary: [
      { time: "05:00 AM", title: "Spatika Linga Pooja Assistance", description: "Early morning pickup to witness the holy crystal linga abhishekham (conducted only between 5:00 AM and 6:00 AM)." },
      { time: "06:30 AM", title: "Agni Theertham Holy Dip", description: "Assistance to Agni Theertham seashore for initial prayer and sankalpam." },
      { time: "07:30 AM", title: "The 22 Wells Sacred Theerthams Bath", description: "Step-by-step guidance through the 22 holy wells (Mahalakshmi, Gayatri, Savitri, Ganga, Yamuna, etc.). Changing into dry clothes." },
      { time: "09:30 AM", title: "Main Ramanathaswamy & Parvathavardhini Darshan", description: "Darshan of the main Jyotirlinga consecrated by Lord Rama, and walk through the world-famous third corridor." },
      { time: "11:00 AM", title: "Lakshmana Theertham & Drop-off", description: "Visit Lakshmana Theertham tank and return drop-off to your room." },
    ],
    inclusions: ["AC Vehicle with Doorstep Pickup", "Safe Luggage Storage in Cab while bathing", "Experienced Chauffeur familiar with Temple Timings", "Parking & Waiting Charges"],
    exclusions: ["Temple Temple Board Theertham fee (Nominal ticket charged by temple)"],
    faqs: [
      { question: "Is there wheelchair assistance available?", answer: "Yes, we can arrange wheelchair assistance at the temple entrance for senior citizens." },
      { question: "Where do we keep our mobile phones during darshan?", answer: "Mobile phones are not allowed inside Ramanathaswamy temple. You can safely lock your phones and valuables in our cab with the chauffeur." },
    ],
  },
  {
    slug: "dhanushkodi-sightseeing",
    name: "Dhanushkodi Land's End & Ghost Town Safari",
    category: "Sightseeing",
    duration: "4 - 5 Hours",
    placesCovered: ["Arichal Munai (Land's End)", "Dhanushkodi Beach", "Ruined Railway Station", "Submerged Church & School", "Ram Setu Vantage Point", "Kothandaramaswamy Temple"],
    startingPrice: 1900,
    vehicleType: "All-Terrain Sedan / MPV / SUV",
    featuredImage: "/images/dhanushkodi.jpg",
    shortDescription: "Travel to the southernmost tip where the Bay of Bengal meets the Indian Ocean. Witness the remnants of the town lost to the 1964 cyclone.",
    overview: "Dhanushkodi is a hauntingly beautiful strip of sand flanked by turquoise waters. Drive along one of the most scenic coastal highways in India to Arichal Munai, where the Sri Lankan coastline lies just 18 nautical miles away. Explore the remains of the old church, hospital, and railway terminus that stood still in time after the December 1964 cyclone.",
    itinerary: [
      { time: "02:30 PM", title: "Pickup & Coastal Highway Cruise", description: "Drive along the newly built high-speed highway cutting through the ocean." },
      { time: "03:15 PM", title: "Arichal Munai & Ashoka Pillar Monument", description: "Arrive at the tip of the land. Feel the contrasting waters: the calm sea of the Palk Strait and the roaring waves of the Gulf of Mannar." },
      { time: "04:15 PM", title: "Exploration of Ghost Town Ruins", description: "Walk through the sand-swept ruins of the 1964 church, railway station platform, and old post office." },
      { time: "05:15 PM", title: "Kothandaramaswamy Temple", description: "Visit the historic temple standing on an island surrounded by shallow lagoon waters." },
      { time: "06:30 PM", title: "Sunset Return", description: "Enjoy the sunset breeze as we return to Rameshwaram town." },
    ],
    inclusions: ["Private Clean AC Cab", "Scenic Highway Toll & Parking", "Flexible Photo Stops"],
    exclusions: ["Personal Water Sports / Souvenirs"],
    faqs: [
      { question: "What are Dhanushkodi gate timings?", answer: "The police checkpost opens at 6:00 AM and closes entry at 5:00 PM for safety. All tourist vehicles must exit before sunset." },
      { question: "Is it safe for children and senior citizens?", answer: "Yes, completely safe. The newly paved national highway goes straight up to Arichal Munai." },
    ],
  },
  {
    slug: "family-travel-packages",
    name: "Family Comfort Rameshwaram & Pamban Holiday",
    category: "Family",
    duration: "Full Day / 12 Hours",
    placesCovered: ["Pamban Rail & Road Bridge", "Kalam Memorial & House", "Ramanathaswamy Temple", "Agni Theertham", "Kurushadai Coral Marine Island", "Dhanushkodi"],
    startingPrice: 3200,
    vehicleType: "Toyota Innova Crysta / Ertiga (Spacious 6-7 Seater)",
    featuredImage: "/images/kalam-memorial.jpg",
    shortDescription: "Spacious, relaxed family itinerary with plenty of rest stops, child-friendly sightseeing, comfortable seats, and senior citizen accessibility.",
    overview: "Traveling with grandparents and children requires comfort, clean restrooms, timely meals, and smooth rides. This package provides our premium MPVs/SUVs (Ertiga / Innova Crysta) with our most courteous family-friendly drivers who ensure an easy, stress-free holiday for all generations.",
    itinerary: [
      { time: "08:30 AM", title: "Pamban Sea Bridge & Train Viewing", description: "Morning scenic stop at Pamban Bridge to experience the sea breeze and observe fishing boats beneath the cantilever bridge." },
      { time: "10:30 AM", title: "Dr. APJ Abdul Kalam Memorial Pei Karumbu", description: "Inspiring educational tour through Dr. Kalam's life story, scientific rocket models, and peaceful memorial gardens." },
      { time: "01:00 PM", title: "Family Lunch at Premium Restaurant", description: "Clean dining venue with AC and clean restrooms." },
      { time: "03:30 PM", title: "Dhanushkodi Marine Drive & Land's End", description: "Pleasant coastal ride to Arichal Munai with plenty of photo opportunities for the family album." },
      { time: "06:30 PM", title: "Rameshwaram Temple Evening Visit & Shopping", description: "Visit local seashell handicrafts markets and the illuminated temple corridor." },
    ],
    inclusions: ["Premium Family Vehicle (Innova / Ertiga)", "Complimentary Bottled Water", "Senior Citizen Wheelchair Coordination on Request", "Tolls & Driver Bata"],
    exclusions: ["Personal Meals & Shopping"],
    faqs: [
      { question: "Can the driver suggest clean restaurants?", answer: "Yes, our drivers know the most hygienic veg and multi-cuisine family restaurants in town." },
    ],
  },
  {
    slug: "madurai-to-rameshwaram-circuit",
    name: "Madurai to Rameshwaram Highway & Tour Package",
    category: "Custom",
    duration: "Same-Day Return or 2 Days",
    placesCovered: ["Madurai Airport / Junction Pickup", "Pamban Bridge Crossing", "Rameshwaram Temple Darshan", "Dhanushkodi", "Return to Madurai / Drop"],
    startingPrice: 4800,
    vehicleType: "Sedan (Swift Dzire) / Innova Crysta",
    featuredImage: "/images/agni-theertham.jpg",
    shortDescription: "Direct comfortable highway transfer from Madurai Airport or Junction to Rameshwaram with island sightseeing and return drop-off.",
    overview: "Madurai is the primary air and high-speed rail gateway to Rameshwaram (175 km, approx 3 hours). Skip crowded buses and slow passenger trains. Our private AC cab picks you up right at Madurai Airport terminal or Railway Station and brings you smoothly across the Pamban Bridge straight into Rameshwaram.",
    itinerary: [
      { time: "Flexible", title: "Madurai Airport / Railway Station Pickup", description: "Chauffeur receives you with name placard at arrivals." },
      { time: "En Route", title: "Scenic NH 87 Highway Drive", description: "Smooth 4-lane highway through Ramanathapuram with clean refreshment stops." },
      { time: "Arrive", title: "Pamban Bridge Cross & Island Tour", description: "Cross the historic sea bridge and begin your chosen Rameshwaram itinerary immediately." },
      { time: "Return", title: "Smooth Drop-off at Madurai", description: "On-time drop back to Madurai Airport for flight check-in or hotel." },
    ],
    inclusions: ["One-way or Round-trip Highway Cab", "All NH Toll Taxes Included", "Airport Parking & Driver Allowance", "Door-to-door Transfer"],
    exclusions: ["Personal Meals"],
    faqs: [
      { question: "How long does the drive take?", answer: "The 175 km drive takes approximately 3 to 3.5 hours on the smooth NH 87 highway." },
    ],
  },
];

export const destinationsData: Destination[] = [
  {
    slug: "ramanathaswamy-temple",
    name: "Ramanathaswamy Temple",
    tagline: "The Sacred Jyotirlinga with the World's Longest Pillared Corridor",
    image: "/images/temple-corridor.jpg",
    brief: "A revered masterpiece of Dravidian architecture housing one of the 12 Jyotirlingas, sanctified by Lord Rama.",
    description: "Sri Ramanathaswamy Temple is the spiritual nucleus of Rameshwaram island. Renowned globally for its monumental third corridor extending over 1,200 meters with over 1,212 intricately sculpted sandstone pillars, the temple houses the sacred Jyotirlinga worshipped by Lord Rama after returning from Lanka. Devotees from across the world take holy snanam in its 22 inner sacred water wells (theerthams) to wash away worldly sins before seeking blessings from Lord Ramanatha and Goddess Parvathavardhini.",
    historicalSignificance: "According to the Ramayana, Lord Rama consecrated this Shiva lingam here to seek forgiveness for killing Ravana, a Brahmin king. The temple corridors were constructed and expanded by the Pandya and Sethupathi rulers of Ramanathapuram between the 12th and 18th centuries.",
    visitorInformation: {
      timings: "05:00 AM – 01:00 PM and 03:00 PM – 09:00 PM",
      entryFee: "Free general entry. Special darshan tickets (₹50 - ₹100) and Theertham bath ticket (₹25) available at temple counters.",
      dressCode: "Traditional Indian attire strictly enforced. Men: Dhoti/Veshti with shirt or angavastram. Women: Saree, half-saree, or salwar kameez with dupatta. Western wear (shorts, jeans) prohibited.",
      idealDuration: "3 to 4 Hours (including 22 theerthams bath and main darshan)",
      bestTimeToVisit: "Early morning 5:00 AM for Spatika Linga Darshan or post 4:00 PM for a cooler evening visit.",
    },
    photographyTips: "Photography and mobile phones are strictly prohibited inside the inner temple corridors. Deposit your electronics in our locked cab with the driver.",
    nearbyAttractions: ["Agni Theertham", "Ramar Patham", "Lakshmana Theertham", "Panchamukhi Hanuman Temple"],
    relatedPackageSlugs: ["temple-and-pilgrimage-tours", "rameshwaram-one-day-tour", "rameshwaram-two-day-tour"],
  },
  {
    slug: "pamban-bridge",
    name: "Pamban Sea Bridge",
    tagline: "India's First Cantilever Sea Bridge & Engineering Marvel",
    image: "/images/hero-bg.jpg",
    brief: "The iconic 2.06 km bridge linking mainland India to the holy island over the turquoise Palk Strait.",
    description: "Commissioned in 1914, the historic Pamban Railway Bridge is an engineering triumph that withstood more than a century of fierce cyclonic marine winds. The bridge features a double-leaf bascule section designed by William Scherzer that can open up to let ships pass beneath. Adjacent to it runs the scenic Annai Indira Gandhi Road Bridge, opened in 1988, offering visitors sweeping aerial panoramas of turquoise ocean waters, fishing catamarans, and the new state-of-the-art vertical-lift railway bridge.",
    historicalSignificance: "Constructed during the British era to establish direct trade and ferry connections between India and Ceylon (Sri Lanka). It miraculously stood strong even during the fierce 1964 cyclone.",
    visitorInformation: {
      timings: "Open 24 hours (Road bridge). Best views during daylight and train crossings.",
      entryFee: "Free public bridge.",
      dressCode: "Casual comfortable attire.",
      idealDuration: "30 to 45 Minutes for photography and sightseeing.",
      bestTimeToVisit: "Sunrise (06:00 AM) or sunset (05:30 PM) for golden reflection photography.",
    },
    photographyTips: "Use a wide-angle lens from the Annai Indira Gandhi Road Bridge walkway to capture the railway bridge and the sea. Avoid leaning over barriers on windy days.",
    nearbyAttractions: ["Mandapam Marine Park", "Kunthukal Beach", "Vivekananda Memorial"],
    relatedPackageSlugs: ["rameshwaram-one-day-tour", "family-travel-packages", "madurai-to-rameshwaram-circuit"],
  },
  {
    slug: "dhanushkodi",
    name: "Dhanushkodi (Land's End & Ghost Town)",
    tagline: "Where Two Oceans Meet Amidst Sand Dunes and Cyclone Ruins",
    image: "/images/dhanushkodi.jpg",
    brief: "The tragic ghost town swallowed by the 1964 cyclone, situated at the extreme tip of the island.",
    description: "Located at the south-eastern tip of Pamban Island, Dhanushkodi was once a bustling commercial port town with passenger trains running directly to ferry boats connecting Colombo. On the fateful night of December 22, 1964, a catastrophic super cyclone submerged the entire town. Today, Dhanushkodi stands as a tranquil, mesmerizing ghost town where the ruined church, railway station, water tank, and hospital stand in the golden sand. At the furthest point, Arichal Munai, the calm waves of the Bay of Bengal embrace the roaring tides of the Indian Ocean.",
    historicalSignificance: "According to the Valmiki Ramayana, Lord Rama broke the bridge (Ram Setu) with the end of his bow (Dhanush) on the request of the new king of Lanka, Vibhishana, giving the town the name 'Dhanush-kodi' (end of the bow).",
    visitorInformation: {
      timings: "06:00 AM to 05:00 PM (Strict police checkpost control)",
      entryFee: "Free entry. Vehicle parking fees may apply.",
      dressCode: "Comfortable beachwear or light cottons, sunglasses, and hats.",
      idealDuration: "2 to 3 Hours",
      bestTimeToVisit: "Morning before 10:00 AM or late afternoon around 3:30 PM to avoid intense midday sun.",
    },
    photographyTips: "The straight ribbon highway with ocean on both sides makes for striking drone or wide-angle shots. The ruined church facade against the blue sky is deeply atmospheric.",
    nearbyAttractions: ["Arichal Munai (Land's End)", "Kothandaramaswamy Temple", "Gulf of Mannar Biosphere"],
    relatedPackageSlugs: ["dhanushkodi-sightseeing", "rameshwaram-one-day-tour", "rameshwaram-two-day-tour"],
  },
  {
    slug: "agni-theertham",
    name: "Agni Theertham",
    tagline: "Sacred Seashore Where Pilgrimages Begin",
    image: "/images/agni-theertham.jpg",
    brief: "The tranquil bay just outside the eastern gate of Ramanathaswamy Temple, where devotees take the preliminary holy dip.",
    description: "Agni Theertham is the holy sea beach located barely 100 meters east of the temple gopuram. Devout Hindus believe that bathing in these calm, waveless waters purifies the soul and washes away past sins before stepping into the temple. It is also an auspicious location for performing ancestral ceremonies (Tarpanam and Pinda Dhanam) during new moon days (Amavasya) and solar eclipses.",
    historicalSignificance: "Mythology holds that Lord Agni (the Fire God) washed his sins in these waters after testing the purity of Goddess Sita, lending the sea its sacred name.",
    visitorInformation: {
      timings: "Open 24 hours. Rituals begin at 04:30 AM daily.",
      entryFee: "Free public seashore.",
      dressCode: "Traditional bathing attire. Changing rooms and dry luggage counters available nearby.",
      idealDuration: "45 Minutes to 1 Hour",
      bestTimeToVisit: "Dawn (05:00 AM - 06:30 AM) to catch the sunrise over the Bay of Bengal.",
    },
    photographyTips: "Sunrise silhouettes of bathing devotees and fishing boats in the calm morning waters provide soulful cultural photographs.",
    nearbyAttractions: ["Ramanathaswamy Temple", "Sita Theertham", "Ramayana Art Gallery"],
    relatedPackageSlugs: ["temple-and-pilgrimage-tours", "rameshwaram-one-day-tour"],
  },
  {
    slug: "apj-abdul-kalam-memorial",
    name: "Dr. APJ Abdul Kalam National Memorial",
    tagline: "A Tribute to the Missile Man & People's President of India",
    image: "/images/kalam-memorial.jpg",
    brief: "The grand memorial honoring India's most beloved President and scientist at his resting place in Pei Karumbu.",
    description: "Inaugurated by the Prime Minister in 2017, the Dr. APJ Abdul Kalam National Memorial was built by DRDO in Pei Karumbu, Rameshwaram. Spanning acres of serene gardens, the structure's architecture combines the dome style of Rashtrapati Bhavan with the Chettinad stone pillars of Tamil Nadu. Inside, visitors are taken on an inspiring journey through Kalam's childhood in Rameshwaram, his aerospace career with ISRO and DRDO, and his tenure as President through rare photographs, personal artifacts, and life-size replicas of rockets (SLV-3, Agni, and Prithvi).",
    historicalSignificance: "The final resting place (Khabar) of Dr. Avul Pakir Jainulabdeen Abdul Kalam, who inspired millions of youth worldwide with his message of dreams, humility, and science.",
    visitorInformation: {
      timings: "09:00 AM to 01:00 PM and 02:00 PM to 06:00 PM (Open all days)",
      entryFee: "Free entry for all visitors.",
      dressCode: "Modest casual attire.",
      idealDuration: "1 to 1.5 Hours",
      bestTimeToVisit: "Morning between 09:30 AM and 11:30 AM or afternoon around 03:30 PM.",
    },
    photographyTips: "The exterior stone facade, central dome, and garden walkways are photogenic. Mobile photography inside the museum gallery is subject to memorial guidelines.",
    nearbyAttractions: ["Kalam's Ancestral House (House of Kalam in Mosque Street)", "Pamban Bridge"],
    relatedPackageSlugs: ["rameshwaram-one-day-tour", "family-travel-packages"],
  },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "best-places-to-visit-in-rameshwaram",
    title: "Best Places to Visit in Rameshwaram: The Ultimate 2026 Travel Guide",
    category: "Sightseeing Guide",
    publishedDate: "October 8, 2026",
    readingTime: "6 min read",
    coverImage: "/images/hero-bg.jpg",
    excerpt: "From the monumental Ramanathaswamy Temple to the wind-swept ruins of Dhanushkodi and the historic Pamban Bridge, discover the must-visit highlights of Rameshwaram island.",
    author: { name: "Suresh Ramanathan", role: "Senior Travel Consultant" },
    tags: ["Rameshwaram", "Sightseeing", "Tamil Nadu", "Pamban Bridge"],
    contentHtml: `
      <p>Rameshwaram is not merely a temple town; it is a captivating coastal island cradled between the calm waters of Palk Bay and the energetic waves of the Gulf of Mannar. Connected to mainland India by the legendary Pamban Bridge, the island offers an unforgettable blend of deep spirituality, colonial engineering, and untouched maritime beauty.</p>
      
      <h3>1. Ramanathaswamy Temple: The Heart of the Island</h3>
      <p>No trip to Rameshwaram is complete without stepping inside the Sri Ramanathaswamy Temple. Famed for its monumental third corridor stretching 1,212 meters with intricately carved sandstone pillars, it is one of the 12 Jyotirlingas in India. Make sure to visit at 5:00 AM to witness the sacred Spatika Linga Darshan.</p>

      <h3>2. Dhanushkodi & Arichal Munai: Where Two Oceans Meet</h3>
      <p>At the extreme southeastern tip of the island lies Dhanushkodi, a ghost town destroyed in the 1964 cyclone. A newly built national highway runs directly between the seas to Arichal Munai (Land's End), where the deep blue of the Indian Ocean meets the turquoise waters of the Bay of Bengal.</p>

      <h3>3. The Iconic Pamban Sea Bridge</h3>
      <p>Stretching 2.06 kilometers across the ocean, Pamban Bridge is India's first sea bridge, completed in 1914. Standing on the parallel road bridge and watching a train glide across the open sea is a bucket-list spectacle for every traveler.</p>

      <h3>4. Dr. APJ Abdul Kalam National Memorial</h3>
      <p>Located in Pei Karumbu, this majestic memorial built by DRDO honors India's beloved People's President. It showcases rocket models, rare manuscripts, and his inspiring journey from a modest island boy to the nation's head of state.</p>
    `,
  },
  {
    slug: "rameshwaram-one-day-travel-itinerary",
    title: "Rameshwaram One-Day Travel Itinerary: How to See Everything in 24 Hours",
    category: "Itineraries",
    publishedDate: "October 2, 2026",
    readingTime: "5 min read",
    coverImage: "/images/temple-corridor.jpg",
    excerpt: "Tight on time? Follow our hour-by-hour local cab itinerary to cover temple darshan, 22 theerthams, Dhanushkodi sunset, and Pamban bridge smoothly.",
    author: { name: "Kavitha Natarajan", role: "Pilgrimage Coordinator" },
    tags: ["Itinerary", "One Day Tour", "Darshan Guide"],
    contentHtml: `
      <p>Many travelers arrive in Rameshwaram on early morning trains and depart the same evening. With smart planning and a dedicated private cab, you can experience all essential rituals and scenic spots without feeling rushed.</p>

      <h3>Phase 1: 05:00 AM – 09:30 AM (Sacred Bath & Temple Darshan)</h3>
      <p>Start before sunrise at Agni Theertham for your ocean dip. Enter Ramanathaswamy Temple through the East Gate to take the holy bath from all 22 inside wells. Change into dry traditional clothes, deposit your wet garments, and proceed for the main Jyotirlinga darshan.</p>

      <h3>Phase 2: 10:00 AM – 01:00 PM (Local Sacred Sites & Kalam Memorial)</h3>
      <p>Have an authentic South Indian breakfast near West Car Street. Then visit Ramar Patham (the highest viewpoint), Panchamukhi Hanuman Temple to see the floating Ram Setu stones, and Dr. APJ Abdul Kalam Memorial.</p>

      <h3>Phase 3: 02:30 PM – 06:00 PM (Dhanushkodi Land's End & Pamban Sunset)</h3>
      <p>Head down the scenic coastal expressway to Dhanushkodi. Spend time at Arichal Munai and the old church ruins. On your way back, stop at Pamban Bridge around 5:30 PM for sunset photography before boarding your return train.</p>
    `,
  },
  {
    slug: "complete-dhanushkodi-travel-guide",
    title: "Complete Dhanushkodi Travel Guide: Timings, Cab Rates & Ram Setu Viewpoint",
    category: "Travel Guide",
    publishedDate: "September 24, 2026",
    readingTime: "7 min read",
    coverImage: "/images/dhanushkodi.jpg",
    excerpt: "Everything you need to know before visiting Dhanushkodi: checkpost regulations, road conditions, history of the 1964 cyclone, and photo spots.",
    author: { name: "Suresh Ramanathan", role: "Senior Travel Consultant" },
    tags: ["Dhanushkodi", "Ghost Town", "Ram Setu", "Coastal Tour"],
    contentHtml: `
      <p>Dhanushkodi is one of the most enigmatic destinations in India. Situated on a slender sandbar pointing toward Sri Lanka, this town was wiped away in one night in December 1964. Today, it attracts thousands of travelers seeking pristine coastlines and historic intrigue.</p>

      <h3>How to Reach Dhanushkodi in 2026</h3>
      <p>Earlier, travelers had to hire four-wheel-drive vans to navigate deep sand tracks. Now, a smooth, high-grade National Highway (NH 87 extension) takes private AC cabs right up to Arichal Munai. You can comfortably travel in any sedan or MPV without bumpy off-road transfers.</p>

      <h3>Entry Timings & Strict Security Rules</h3>
      <p>Because Dhanushkodi is a sensitive coastal border zone, the local police operate a checkpost at Mukuntharayar Chathiram. The gate opens strictly at 06:00 AM and closes at 05:00 PM. No tourists are permitted to stay past dusk.</p>
    `,
  },
  {
    slug: "best-time-to-visit-rameshwaram",
    title: "Best Time to Visit Rameshwaram: Weather, Darshan Seasons & Festival Calendars",
    category: "Travel Tips",
    publishedDate: "September 15, 2026",
    readingTime: "4 min read",
    coverImage: "/images/agni-theertham.jpg",
    excerpt: "Understand Rameshwaram's seasonal weather patterns, crowd peak seasons (Aadi Amavasya, Mahashivratri), and the pleasant winter months.",
    author: { name: "R. Meenakshi Sundaram", role: "Local Culture Expert" },
    tags: ["Weather", "Best Time", "Festivals", "Temple Timings"],
    contentHtml: `
      <p>Being an island near the equator, Rameshwaram experiences tropical coastal weather. While pilgrims visit year-round, knowing the best months ensures a significantly more comfortable journey.</p>

      <h3>October to March: Peak Winter Season (Best Time)</h3>
      <p>Temperatures range between 20°C and 28°C with gentle, refreshing sea breezes. This is the prime period for family trips, Dhanushkodi sightseeing, and walking along the open temple corridors without midday heat.</p>

      <h3>Key Pilgrimage Dates to Note</h3>
      <p>Expect massive devotee turnouts during <strong>Maha Shivratri (Feb/Mar)</strong>, <strong>Aadi Amavasya (July/August)</strong>, and <strong>Thai Amavasya (January)</strong>. If visiting during these festivals, booking your cab and accommodation weeks in advance is essential.</p>
    `,
  },
  {
    slug: "madurai-to-rameshwaram-travel-guide",
    title: "Madurai to Rameshwaram Travel Guide: Highway Route, Tolls & Cab Options",
    category: "Road Trips",
    publishedDate: "September 2, 2026",
    readingTime: "5 min read",
    coverImage: "/images/kalam-memorial.jpg",
    excerpt: "Everything about traveling between Madurai and Rameshwaram: distance, 4-lane highway route, scenic stopovers, and hiring a reliable AC cab.",
    author: { name: "Suresh Ramanathan", role: "Senior Travel Consultant" },
    tags: ["Madurai", "Road Trip", "Airport Pickup", "Car Rental"],
    contentHtml: `
      <p>Madurai is the principal international and domestic flight hub serving Rameshwaram. The road connection spans 175 kilometers along the well-maintained NH 87, making a private taxi the quickest and most comfortable transit method.</p>

      <h3>Drive Time & Route Quality</h3>
      <p>The drive takes roughly 3 to 3.5 hours. The highway bypasses major congestion and passes through the Ramanathapuram district before offering dramatic views as you approach the Pamban coastal bridge.</p>

      <h3>Why Choose a Dedicated AC Cab Over Public Buses</h3>
      <p>State transport buses take between 4.5 to 5.5 hours with multiple local stops. A private cab picks you up right at Madurai Airport terminal gate, handles your heavy pilgrimage luggage, and takes you directly to your hotel doorstep or temple gates.</p>
    `,
  },
  {
    slug: "rameshwaram-22-theertham-bath-guide",
    title: "Complete 22 Theerthams of Rameshwaram: Names, Order & Ritual Bathing Guide (2026)",
    category: "Pilgrimage Guide",
    publishedDate: "October 10, 2026",
    readingTime: "8 min read",
    coverImage: "/images/temple-corridor.jpg",
    excerpt: "Detailed list of all 22 holy wells inside Ramanathaswamy Temple. Learn the Vedic sequence, timings, changing room locations, and how our local cab drivers assist elderly pilgrims.",
    author: { name: "Kavitha Natarajan", role: "Pilgrimage Coordinator" },
    tags: ["22 Theerthams", "Rameshwaram Temple", "Holy Bath", "Theertham Order", "Darshan Guide"],
    contentHtml: `
      <p>Taking a holy bath (Theertha Snanam) in the 22 consecrated water wells inside Sri Ramanathaswamy Temple is considered one of the highest spiritual purifying rituals in Hinduism. Each well possesses distinct mineral composition, temperature, and specific spiritual significance, ranging from curing illnesses to washing away ancestral sins.</p>

      <h3>Step 1: The Essential Sea Bath at Agni Theertham</h3>
      <p>Before stepping into the temple compound, pilgrims must begin at Agni Theertham seashore (located just 100 meters east of the temple gopuram). Take three dips in the calm waters of the Bay of Bengal, perform prayers for your ancestors (if conducting Pithru Tharpanam), and collect sand for traditional Rameswaram rituals.</p>

      <h3>Step 2: Entering the Temple & Purchasing Theertham Passes</h3>
      <p>Walk to the East Gopuram gate. The temple administration charges a nominal ticket (₹25 per devotee) for temple staff to draw water from the wells and pour it over your head. Keep dry clothes in a secure bag or lock them safely in our cab with your dedicated chauffeur.</p>

      <h3>The Sacred 22 Theerthams in Exact Traditional Sequence</h3>
      <ol>
        <li><strong>Mahalakshmi Theertham:</strong> Bestows prosperity, divine grace, and removes poverty.</li>
        <li><strong>Savithri Theertham:</strong> Removes speech impediments and curses.</li>
        <li><strong>Gayathri Theertham:</strong> Blesses with spiritual wisdom and peace.</li>
        <li><strong>Saraswathi Theertham:</strong> Imparts learning, academic clarity, and intellect.</li>
        <li><strong>Setu Madhava Theertham:</strong> Purifies mind and relieves guilt.</li>
        <li><strong>Gandhamadhana Theertham:</strong> Grants penance fruits and health.</li>
        <li><strong>Kavacha Theertham:</strong> Shields the devotee from torment.</li>
        <li><strong>Gavaya Theertham:</strong> Removes feelings of jealousy.</li>
        <li><strong>Nala Theertham:</strong> Clears burdens and brings tranquility.</li>
        <li><strong>Neela Theertham:</strong> Provides spiritual grounding.</li>
        <li><strong>Sangu Theertham:</strong> Brings auspicious blessings.</li>
        <li><strong>Sakkara Theertham:</strong> Removes negative planetary influences.</li>
        <li><strong>Brahmahathi Vimochana Theertham:</strong> Removes severe ancestral karmas and sins.</li>
        <li><strong>Sooriya Theertham:</strong> Cures physical eye ailments and solar weaknesses.</li>
        <li><strong>Chandra Theertham:</strong> Calms mental turmoil and moon afflictions.</li>
        <li><strong>Ganga Theertham:</strong> Pure nectar water representing the holy Ganges.</li>
        <li><strong>Yamuna Theertham:</strong> Holy Yamuna river blessings.</li>
        <li><strong>Gaya Theertham:</strong> Offers peace to departed departed souls.</li>
        <li><strong>Siva Theertham:</strong> Grants liberation and inner strength.</li>
        <li><strong>Sathyamirtha Theertham:</strong> Gives long life and truthfulness.</li>
        <li><strong>Sarva Theertham:</strong> Accumulates the virtues of all sacred rivers across Bharat.</li>
        <li><strong>Kodi Theertham:</strong> The final and most sacred well, consecrated by Lord Rama himself to wash his bow.</li>
      </ol>

      <h3>Important Tips for Senior Citizens & Families</h3>
      <p>The entire walking circuit covers roughly 1.5 kilometers through wet stone corridors. We advise wearing comfortable grip footwear outside, but inside you must walk barefoot. Our chauffeurs assist elderly devotees with wheelchair coordination up to the temple gate and keep dry towels and changes of clothes ready in our air-conditioned car.</p>
    `,
  },
  {
    slug: "madurai-to-rameshwaram-cab-fare-guide",
    title: "Madurai to Rameshwaram Taxi Fare Breakdown: Sedan vs Ertiga vs Innova Crysta Rates (2026)",
    category: "Pricing & Costs",
    publishedDate: "October 7, 2026",
    readingTime: "5 min read",
    coverImage: "/images/hero-bg.jpg",
    excerpt: "Transparent pricing guide for Madurai Airport and Junction to Rameshwaram taxi hires. Compare one-way vs round-trip fares, NH 87 highway toll inclusions, and vehicle options.",
    author: { name: "Suresh Ramanathan", role: "Senior Travel Consultant" },
    tags: ["Madurai to Rameshwaram Cab", "Taxi Fare", "Innova Crysta", "Airport Taxi", "Car Rental Rates"],
    contentHtml: `
      <p>Planning a trip from Madurai to Rameshwaram? Madurai Airport (IXM) and Madurai Junction railway station are the most convenient transit hubs connecting global travelers to Rameshwaram island. Understanding true taxi costs helps you avoid airport counter markups and unreliable roadside operators.</p>

      <h3>Distance, Travel Time & Route Map</h3>
      <p>The road distance between Madurai and Rameshwaram is <strong>175 kilometers</strong> via the national highway NH 87 (now designated as part of NH 49 extension). In a private AC sedan or SUV, the drive takes <strong>3 to 3.5 hours</strong> on smooth 4-lane roads.</p>

      <h3>Transparent Vehicle Fare Matrix (All Inclusive)</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background-color: #0B1F33; color: #FAF8F3; text-align: left;">
            <th style="padding: 10px; border: 1px solid #ddd;">Vehicle Model</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Seating Capacity</th>
            <th style="padding: 10px; border: 1px solid #ddd;">One-Way Drop Fare</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Same-Day Round Trip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Swift Dzire / Toyota Etios</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">4 Passengers</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹4,200</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹5,500</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Maruti Ertiga (AC MPV)</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">6 Passengers</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹5,100</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹6,800</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Toyota Innova Crysta</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">7 Passengers</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹6,200</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹8,200</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Force Tempo Traveller</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">14 Seater</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹8,900</td>
            <td style="padding: 10px; border: 1px solid #ddd;">₹11,500</td>
          </tr>
        </tbody>
      </table>

      <h3>What is Included in Our Madurai to Rameshwaram Cab Fare?</h3>
      <ul>
        <li>Dedicated clean AC car with professional uniformed chauffeur</li>
        <li>All National Highway 87 Toll Plaza charges (No additional payment at toll booths)</li>
        <li>Driver Bata, nighttime allowances, and fuel costs</li>
        <li>Doorstep pickup right at Madurai Airport terminal arrivals gate with passenger name placard</li>
      </ul>
    `,
  },
  {
    slug: "rameshwaram-temple-darshan-timings-dress-code",
    title: "Ramanathaswamy Temple Darshan Timings, Dress Code & Spatika Linga Pooja Schedule (2026)",
    category: "Pilgrimage Guide",
    publishedDate: "October 5, 2026",
    readingTime: "6 min read",
    coverImage: "/images/agni-theertham.jpg",
    excerpt: "Everything you need to know about visiting Ramanathaswamy Temple: morning & evening pooja hours, special entry ticket counters, Spatika Linga darshan, and strict dress codes.",
    author: { name: "R. Meenakshi Sundaram", role: "Local Culture Expert" },
    tags: ["Rameshwaram Temple Timings", "Dress Code", "Spatika Linga", "Special Darshan", "Temple Pooja"],
    contentHtml: `
      <p>Sri Ramanathaswamy Temple in Rameshwaram is one of the most spiritually charged sanctums in India. Because thousands of pilgrims arrive daily from all over the world, knowing the exact daily pooja schedules and temple dress code prevents unnecessary waiting and ensures a peaceful darshan experience.</p>

      <h3>Daily Temple Opening & Darshan Hours</h3>
      <ul>
        <li><strong>Morning Session:</strong> 05:00 AM to 01:00 PM</li>
        <li><strong>Afternoon Break (Kovil Closed):</strong> 01:00 PM to 03:00 PM</li>
        <li><strong>Evening Session:</strong> 03:00 PM to 09:00 PM</li>
      </ul>

      <h3>The Auspicious Spatika Linga Darshan (05:00 AM – 06:00 AM)</h3>
      <p>The sacred Spatika Lingam (pure crystal linga sanctified by Adi Shankaracharya) is brought out for abhishekam only once a day in the early morning between <strong>5:00 AM and 6:00 AM</strong>. Devotees line up by 04:30 AM to witness the milk, honey, and holy water abhishekam of this glowing crystal.</p>

      <h3>Strict Temple Dress Code Guidelines</h3>
      <p>The Tamil Nadu Hindu Religious & Charitable Endowments (HR&CE) department strictly enforces traditional Hindu dress codes:</p>
      <ul>
        <li><strong>Men:</strong> Dhoti (Veshti) with Angavastram or Kurta/Shirt. Jeans, t-shirts, Bermudas, and shorts are strictly forbidden.</li>
        <li><strong>Women:</strong> Traditional Saree, Half-Saree (Dhavani), or Salwar Kameez with Dupatta. Western attire, jeans, sleeveless tops, and short skirts are not allowed.</li>
        <li><strong>Children:</strong> Traditional formal clothing.</li>
      </ul>

      <h3>Electronic Device & Luggage Regulations</h3>
      <p>Mobile phones, cameras, smart watches, and electronic gadgets are strictly banned inside the temple. Devotees are strongly advised to keep all phones locked safely inside our cab with the chauffeur, avoiding long cloakroom queues outside the temple entrance.</p>
    `,
  },
  {
    slug: "rameshwaram-to-kanyakumari-temple-tour-cab",
    title: "Rameshwaram to Kanyakumari Cab Package: 2-Day Coastal Highway Itinerary & Fare",
    category: "Road Trips",
    publishedDate: "September 29, 2026",
    readingTime: "7 min read",
    coverImage: "/images/dhanushkodi.jpg",
    excerpt: "Complete guide to the southern spiritual circuit: Rameshwaram to Kanyakumari via Tiruchendur Murugan Temple. Route details, sightseeing halts, and cab hire costs.",
    author: { name: "Suresh Ramanathan", role: "Senior Travel Consultant" },
    tags: ["Rameshwaram to Kanyakumari Cab", "Tiruchendur Temple", "South India Circuit", "Coastal Highway Tour"],
    contentHtml: `
      <p>Combining Rameshwaram and Kanyakumari is the quintessential South Indian road trip. Running along the scenic coastal belt of Tamil Nadu, this route takes you through holy temples, historic sea forts, and the southern tip of the Indian subcontinent.</p>

      <h3>Total Distance & Recommended Travel Route</h3>
      <p>The road distance between Rameshwaram and Kanyakumari is approximately <strong>310 kilometers</strong>. The most scenic and spiritually rewarding route is via <strong>Sayalkudi ➔ Thoothukudi ➔ Tiruchendur ➔ Kanyakumari</strong> (via the East Coast Road / SH 176).</p>

      <h3>Must-Visit Spiritual Stops Along the Way</h3>
      <ol>
        <li><strong>Devipattinam Navagraha Temple:</strong> Nine ancient stone deities placed directly inside the sea water, visited for Navagraha dosha remedies.</li>
        <li><strong>Tiruchendur Subramanya Swamy Temple:</strong> One of the sacred Arupadaiveedu temples of Lord Murugan, located right on the ocean waves of the Bay of Bengal.</li>
        <li><strong>Suchindram Thanumalayan Temple:</strong> Famous for its musical stone pillars and 22-foot Hanuman idol.</li>
        <li><strong>Kanyakumari Land's End:</strong> Vivekananda Rock Memorial, Thiruvalluvar Statue, and the sunset over the confluence of three oceans.</li>
      </ol>

      <h3>Vehicle Options & Package Rates</h3>
      <p>We provide 2-Day / 1-Night private AC cab packages for this circuit starting from ₹9,500 for a comfortable sedan (Swift Dzire) and ₹13,500 for a luxury Toyota Innova Crysta, including all interstate tolls, driver night stay, and fuel.</p>
    `,
  },
  {
    slug: "dhanushkodi-taxi-vs-bus-travel-cost",
    title: "How to Visit Dhanushkodi: Taxi Fare, Timings & Arichal Munai Land's End Guide",
    category: "Travel Guide",
    publishedDate: "September 20, 2026",
    readingTime: "6 min read",
    coverImage: "/images/kalam-memorial.jpg",
    excerpt: "Planning your trip to Dhanushkodi? Compare local private taxi packages versus public transport, understand police checkpost timings, and discover the best photo points at Arichal Munai.",
    author: { name: "Kavitha Natarajan", role: "Pilgrimage Coordinator" },
    tags: ["Dhanushkodi Taxi Fare", "Arichal Munai", "Ghost Town Safari", "Rameshwaram to Dhanushkodi Cab"],
    contentHtml: `
      <p>Dhanushkodi, often referred to as the Ghost Town of India, is located at the southeastern tip of Pamban Island. Destroyed by the devastating cyclone of 1964, it remains one of the most mesmerizing, wind-swept coastal destinations in Asia.</p>

      <h3>Can Regular Private Cabs Go to Dhanushkodi in 2026?</h3>
      <p>Yes! In previous years, tourists had to change into four-wheel-drive vans to navigate deep sand dunes. Today, a world-class National Highway (NH 87 extension) runs straight across the ocean up to Arichal Munai (the zero-point). All our air-conditioned sedans, MPVs, and SUVs comfortably cruise right to the edge of the land.</p>

      <h3>Dhanushkodi Police Checkpost Rules & Timings</h3>
      <p>For maritime border security and tourist safety, Tamil Nadu Police manages a strict checkpost at Mukuntharayar Chathiram:</p>
      <ul>
        <li><strong>Entry Opens:</strong> 06:00 AM</li>
        <li><strong>Entry Closes:</strong> 05:00 PM (No tourist vehicles are allowed past 5 PM)</li>
        <li><strong>Complete Exit Required By:</strong> 06:00 PM (Before twilight sets in)</li>
      </ul>

      <h3>Dhanushkodi Private Cab Package Inclusions</h3>
      <p>A standard 4 to 5 hour Dhanushkodi cab package with Rameshwaram Cars costs between <strong>₹1,900 to ₹3,400</strong> (depending on vehicle choice from Dzire to Innova Crysta) and covers doorstep hotel pickup, the scenic coastal drive, 1964 Church ruins, Railway station remnants, Arichal Munai, and Kothandaramaswamy Temple.</p>
    `,
  },
];


export const whyChooseUsData = [
  {
    title: "Local Chauffeur Guides",
    description: "Our chauffeurs are native islanders who understand temple queue timings, theertham sequences, and local customs.",
    icon: "Compass",
  },
  {
    title: "Transparent Fixed Pricing",
    description: "Honest rates with no surprise driver batas or hidden toll fees. What we quote on WhatsApp is what you pay.",
    icon: "ShieldCheck",
  },
  {
    title: "Pristine Sanitized Fleet",
    description: "Every sedan, MPV, and SUV is thoroughly cleaned, fully air-conditioned, and equipped with cold water bottles.",
    icon: "Sparkles",
  },
  {
    title: "Senior Citizen Support",
    description: "We provide extra care for elderly pilgrims, including wheelchair coordination and drop-offs as close to temple gates as permissible.",
    icon: "HeartHandshake",
  },
  {
    title: "24/7 Island Dispatch Desk",
    description: "Whether your train arrives at 3:00 AM or your flight lands late in Madurai, our drivers are on standby with live tracking.",
    icon: "Clock",
  },
  {
    title: "Over 15,000+ Happy Pilgrims",
    description: "Consistently rated 4.9/5 by families, devotees, and travelers across India and abroad.",
    icon: "Star",
  },
];

export const travelServices = [
  {
    title: "Rameshwaram Local Sightseeing & Theerthams",
    description: "Half-day and full-day private cabs covering Ramanathaswamy Temple, Agni Theertham, Ramar Patham, and Dhanushkodi.",
  },
  {
    title: "Madurai Airport & Station Transfers",
    description: "Round-the-clock point-to-point AC transfers between Madurai Airport/Junction and Rameshwaram hotels.",
  },
  {
    title: "South Tamil Nadu Temple Circuit",
    description: "Custom multi-day tours covering Madurai, Rameshwaram, Tiruchendur, and Kanyakumari.",
  },
  {
    title: "Large Group & Yatra Tempo Travellers",
    description: "Comfortable 12 to 20 seater pushback AC Tempo Travellers for bhajan mandalis and extended family yatras.",
  },
];

export const testimonials = [
  {
    name: "Rajesh & Sunita Sharma",
    location: "New Delhi",
    review: "We booked an Innova Crysta for our parents' Rameshwaram pilgrimage. The driver, Murugan, was incredibly patient and guided my elderly father through all 22 theerthams with zero stress. Truly remarkable service!",
    rating: 5,
    package: "Sacred 22 Theerthams Tour",
  },
  {
    name: "Anand K. Swaminathan",
    location: "Bengaluru",
    review: "Punctual, clean cab, and honest billing. Our driver picked us up at Madurai Airport at 11 PM and drove us safely across Pamban bridge. Dhanushkodi sunset trip was the highlight of our holiday.",
    rating: 5,
    package: "Madurai to Rameshwaram Circuit",
  },
  {
    name: "Deepika Verma",
    location: "Mumbai",
    review: "Booking via WhatsApp was effortless. Within 5 minutes, we had our driver details and vehicle confirmation. The cab was spotless and the AC was ice cold in the coastal heat.",
    rating: 5,
    package: "Dhanushkodi Sightseeing Tour",
  },
];

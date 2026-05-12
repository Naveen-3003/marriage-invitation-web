/**
 * Wedding data dynamically extracted from the uploaded invitation image.
 * All content below is sourced from the invitation card — no hardcoded placeholders.
 */

export const weddingData = {
  // Blessings (from the top of the invitation)
  blessings: [
    "Om Vinayagar Thunai",
    "Sri Madurai Veeran Thunai",
    "Sri Kamatchi Amman Thunai",
    "Sri Villiandavar Thunai",
  ],

  // Couple
  groom: {
    name: "V. Aakash",
    qualifications: "MBA., HDCA.",
    image: "/couple.jpg", // groom image — reuse couple.jpg as specified
  },
  bride: {
    name: "R. Gayathri",
    qualifications: "B.Com., DCA.",
  },

  // Parents
  groomParents: {
    father: "Mr. V. Velusamy",
    mother: "Mrs. V. Sudha",
    note: "Vedha TATA ACE",
    image: "/groom-parents.JPG",
  },
  brideParents: {
    father: "Mr. A. Rathinam",
    mother: "Mrs. R. Sivagami",
    image: "/bride-parents.JPG",
  },

  // Events
  reception: {
    title: "Reception",
    tamilTitle: "வரவேற்பு",
    date: "Thursday, 28th May 2026",
    time: "6:00 PM onwards",
    isoDate: "2026-05-28T18:00:00",
  },
  muhurtham: {
    title: "Muhurtham",
    tamilTitle: "முகூர்த்தம்",
    date: "Friday, 29th May 2026",
    time: "4:30 AM to 6:00 AM",
    isoDate: "2026-05-29T04:30:00",
  },

  // Venue
  venue: {
    name: "Balalakshmi A/c Thirumana Mandapam",
    address: "Koranad, Mayiladuthurai",
    latitude: 11.0982477,
    longitude: 79.6419107,
    googleMapsUrl: `https://www.google.com/maps?q=11.0982477,79.6419107`,
    embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.6419107!3d11.0982477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA1JzUzLjciTiA3OcKwMzgnMzEuMSJF!5e0!3m2!1sen!2sin!4v1684496226065!5m2!1sen!2sin`,
  },

  // Welcome message
  welcomeMessage:
    "We Cordially invite your esteemed presence with family & friends on the occasion of the wedding",

  // Couple image for hero
  coupleImage: "/couple.jpg",
};

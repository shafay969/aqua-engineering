import heroImage from "../assets/hero image.png";

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
}

export interface BookingDetails {
  serviceId: string;
  date: number; // day of month for demo
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}

export const IMAGES = {
  hero: heroImage,
  performance: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRdlqqrlEa4eLqni6D2QwXPhc43n6A2Z4H2RPml36JlOqA2YtpjW6fFSY2p_cbCPHk61LYXtzT5pjlkgRF-4_IY8U_QF4RouA8og2_SHL_QjcU4etKQMviLC0vqGznewqzN_YiKgyL26TgWUh4IE5ZNbG4BM-ESpgytG-D1gSzdlY87BUaXlaAtZQ45JPcrKHRrrFD4Q100uSmqIanxJBnbdfI2yRStV6qFJMP78uLfAJ9HEhVUZa_BnHHISLtUUDrfK-sYFFN8MU",
  philosophy1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrB0JUtFq1rIXUCoSFZ5HbGPi-7nAw5_sd395V0Em2OOLkqXGW3GXsy31ROBPSxwx6RDL2Za2FTcdjdtbeBiJfZXKrU5cqP6TLQbjTDveyNt4_e4hSlt9JYGdjK3WC7rmakEG2K_OT8AeWYb6Ipb3djIL7dc78pKMiMDBavFaqhL6PwvYIE5Y6Ppvzx_9vhGcefFARmrUnV-lsxUC9d-JMLaLA7ZfB3Ec0-uPoPaUVj34g4WRed4JXwwEBmUglrADAckQJIBYSoxY",
  philosophy2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNq0D-tkQEugewUnTDvN9JOhJrs8cSkgk8VYnBIFKOdWyBnUsFBKRYbUNsKaCYnK5fEwuhDrmqwJLe41NGq2snO8Yt1-aGDBCXm91qEZMZ9EbJplwI7PUX3FXhVetB7i8wdEqRrIT76JUW9mLPlt1yXfSH3k0QJTHETvGe8sMElWWozKNR_2iQe5ezVl0Dxe5MNRBX8sykMXhdabgnuBlKfq3q_kpm2COG7T25D-71YI8PS3fON7b01ScaTdRjug8cXIHEEkZKEak"
};

export const SERVICES: ServiceOption[] = [
  {
    id: "plumbing_maintenance",
    title: "Plumbing Maintenance",
    description: "Full system diagnostic and preventative care."
  },
  {
    id: "emergency_repair",
    title: "Emergency Repair",
    description: "Immediate response for critical failures."
  },
  {
    id: "water_purification",
    title: "Water Purification",
    description: "Installation of multi-stage filtration."
  },
  {
    id: "custom_engineering",
    title: "Custom Engineering",
    description: "Bespoke system design for new builds."
  }
];

export const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"];

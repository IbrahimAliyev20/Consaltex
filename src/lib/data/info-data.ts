
export interface BlogPost {
  slug: string;
  imageSrc: string;
  readingTime: string;
  date: string;
  title: string;
  description: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'new-trends-in-healthcare-1',
    imageSrc: "/images/aboutus1.jpg",
    readingTime: '9',
    date: '30.06.2025',
    title: 'New Trends in Healthcare',
    description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions.',
    content: 'This is the full detailed content for the article about new trends in healthcare. It can be a long text with multiple paragraphs explaining the topic in depth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
  },
  {
    slug: 'digital-health-future',
    imageSrc: "/images/aboutus2.png",
    readingTime: '7',
    date: '28.06.2025',
    title: 'Digital Health: The Future of Medical Technology',
    description: 'Exploring the rise of digital health and its transformative effects on patient care and medical services.',
    content: 'This is the full detailed content for the article about digital health. It discusses telemedicine, electronic health records (EHRs), and wearable devices. The integration of these technologies is streamlining healthcare delivery and empowering patients to take a more active role in their health management.'
  },
  {
    slug: 'patient-centered-care',
    imageSrc: "/images/aboutus3.jpg",
    readingTime: '5',
    date: '25.06.2025',
    title: 'Patient-Centered Care Models',
    description: 'A look into how patient-centered care is reshaping the healthcare landscape for better outcomes.',
    content: 'Detailed content for Patient-Centered Care Models...'
  },
  {
    slug: 'ai-in-diagnostics',
    imageSrc: "/images/aboutus4.jpg",
    readingTime: '12',
    date: '22.06.2025',
    title: 'The Role of AI in Diagnostics',
    description: 'How Artificial Intelligence is revolutionizing medical diagnostics, leading to faster and more accurate results.',
    content: 'Detailed content for The Role of AI in Diagnostics...'
  },
  {
    slug: 'telemedicine-best-practices',
    imageSrc: "/images/aboutus5.png",
    readingTime: '8',
    date: '20.06.2025',
    title: 'Telemedicine: Best Practices for Virtual Consultations',
    description: 'A guide for healthcare providers on conducting effective and secure virtual patient consultations.',
    content: 'Detailed content for Telemedicine: Best Practices...'
  },
  {
    slug: 'managing-healthcare-costs',
    imageSrc: "/images/aboutus1.jpg",
    readingTime: '10',
    date: '18.06.2025',
    title: 'Strategies for Managing Healthcare Costs',
    description: 'Innovative approaches for clinics and hospitals to reduce operational costs without compromising patient care.',
    content: 'Detailed content for Strategies for Managing Healthcare Costs...'
  },
  {
    slug: 'healthcare-data-security',
    imageSrc: "/images/aboutus2.png",
    readingTime: '11',
    date: '15.06.2025',
    title: 'Enhancing Data Security in Healthcare',
    description: 'Protecting sensitive patient information is crucial. Learn about the latest in healthcare data security.',
    content: 'Detailed content for Enhancing Data Security in Healthcare...'
  },
  {
    slug: 'mental-health-support-tech',
    imageSrc: "/images/aboutus3.jpg",
    readingTime: '6',
    date: '12.06.2025',
    title: 'Technology\'s Role in Mental Health Support',
    description: 'How apps and online platforms are making mental health support more accessible than ever.',
    content: 'Detailed content for Technology\'s Role in Mental Health Support...'
  },
  {
    slug: 'robotic-surgery-advancements',
    imageSrc: "/images/aboutus4.jpg",
    readingTime: '14',
    date: '10.06.2025',
    title: 'Advancements in Robotic Surgery',
    description: 'A deep dive into the latest advancements in robotic-assisted surgery and its benefits.',
    content: 'Detailed content for Advancements in Robotic Surgery...'
  },
  {
    slug: 'preventive-care-importance',
    imageSrc: "/images/aboutus5.png",
    readingTime: '7',
    date: '08.06.2025',
    title: 'The Importance of Preventive Care',
    description: 'Why a focus on preventive care is key to long-term health and reducing the burden on healthcare systems.',
    content: 'Detailed content for The Importance of Preventive Care...'
  },
  {
    slug: 'genomic-medicine-breakthroughs',
    imageSrc: "/images/aboutus1.jpg",
    readingTime: '15',
    date: '05.06.2025',
    title: 'Genomic Medicine: The Next Frontier',
    description: 'Exploring breakthroughs in genomic medicine and personalized treatment plans.',
    content: 'Detailed content for Genomic Medicine: The Next Frontier...'
  },
  {
    slug: 'wearable-health-tech',
    imageSrc: "/images/aboutus2.png",
    readingTime: '8',
    date: '02.06.2025',
    title: 'The Rise of Wearable Health Technology',
    description: 'From smartwatches to continuous glucose monitors, how wearables are changing personal health.',
    content: 'Detailed content for The Rise of Wearable Health Technology...'
  },
  {
    slug: 'improving-patient-experience',
    imageSrc: "/images/aboutus3.jpg",
    readingTime: '6',
    date: '30.05.2025',
    title: 'Improving the Patient Experience',
    description: 'Simple but effective strategies to improve patient satisfaction and engagement in your clinic.',
    content: 'Detailed content for Improving the Patient Experience...'
  },
  {
    slug: 'future-of-nursing',
    imageSrc: "/images/aboutus4.jpg",
    readingTime: '9',
    date: '28.05.2025',
    title: 'The Future of Nursing: Challenges and Opportunities',
    description: 'A look at the evolving role of nurses and the future of the nursing profession.',
    content: 'Detailed content for The Future of Nursing...'
  },
  {
    slug: 'blockchain-in-healthcare',
    imageSrc: "/images/aboutus5.png",
    readingTime: '13',
    date: '25.05.2025',
    title: 'Can Blockchain Secure Medical Records?',
    description: 'Investigating the potential of blockchain technology to secure and manage electronic health records.',
    content: 'Detailed content for Can Blockchain Secure Medical Records? ...'
  },
  {
    slug: 'value-based-care-models',
    imageSrc: "/images/aboutus1.jpg",
    readingTime: '10',
    date: '22.05.2025',
    title: 'Transitioning to Value-Based Care',
    description: 'A practical guide for healthcare organizations moving from fee-for-service to value-based care models.',
    content: 'Detailed content for Transitioning to Value-Based Care...'
  },
  {
    slug: '3d-printing-in-medicine',
    imageSrc: "/images/aboutus2.png",
    readingTime: '11',
    date: '20.05.2025',
    title: 'The Impact of 3D Printing in Medicine',
    description: 'From custom prosthetics to organ bioprinting, 3D printing is pushing medical boundaries.',
    content: 'Detailed content for The Impact of 3D Printing in Medicine...'
  },
  {
    slug: 'global-health-initiatives',
    imageSrc: "/images/aboutus3.jpg",
    readingTime: '9',
    date: '18.05.2025',
    title: 'Key Global Health Initiatives to Watch',
    description: 'An overview of the most important global health initiatives currently shaping our world.',
    content: 'Detailed content for Key Global Health Initiatives to Watch...'
  },
  {
    slug: 'combating-antibiotic-resistance',
    imageSrc: "/images/aboutus4.jpg",
    readingTime: '12',
    date: '15.05.2025',
    title: 'The Fight Against Antibiotic Resistance',
    description: 'Strategies and research aimed at combating the growing threat of antibiotic-resistant bacteria.',
    content: 'Detailed content for The Fight Against Antibiotic Resistance...'
  },
  {
    slug: 'nutrition-and-health',
    imageSrc: "/images/aboutus5.png",
    readingTime: '7',
    date: '12.05.2025',
    title: 'The Link Between Nutrition and Health Outcomes',
    description: 'How proper nutrition plays a critical role in preventing chronic diseases and improving overall health.',
    content: 'Detailed content for The Link Between Nutrition and Health Outcomes...'
  },
];

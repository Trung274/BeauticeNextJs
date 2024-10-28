import consultation from '@/public/assets/img1.svg'
import beauty from '@/public/assets/img2.svg'
import treatments from '@/public/assets/img3.svg'
import art4 from '@/public/assets/img4.svg'
import art5 from '@/public/assets/img5.svg'
import art6 from '@/public/assets/img6.svg'
import FacebookIcon from '@/public/assets/Facebook.svg'
import TwitterIcon from '@/public/assets/Twitter.svg'
import InstagramIcon from '@/public/assets/Instagram.svg'
import LinkedInIcon from '@/public/assets/Linkedin.svg'
import Post1 from '@/public/assets/Post1.svg'
import Post2 from '@/public/assets/Post2.svg'
import Post3 from '@/public/assets/Post3.svg'
import Consultation from '@/public/assets/Animation1.svg'
import Treatments from '@/public/assets/Animation2.svg'
import Product from '@/public/assets/Animation3.svg'
import Phone from '@/public/assets/Phone.svg'
import Mail from '@/public/assets/Mail.svg'
import Location from '@/public/assets/Location.svg'
import BeautyConsultationIcon from '@/public/assets/consu2.svg'
import SkinTreatmentsIcon from '@/public/assets/treat2.svg'
import BeautyProductIcon from '@/public/assets/pro2.svg'
import pic1 from '@/public/assets/pic1.svg'
import pic2 from '@/public/assets/pic2.svg'
import pic3 from '@/public/assets/pic3.svg'
import ImgLinaGustav from '@/public/assets/LinaGustav.svg'
import ImgAdamWhite from '@/public/assets/AdamWhite.svg'
import ImgJaneDoe from '@/public/assets/JaneDoe.svg'


export const BLOG_ARTICLES = [
  {
    image: consultation,
    category: "Consultation",
    title: "How much does a consultation cost at our clinic?",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    image: beauty,
    category: "Beauty",
    title: "Watch out! don't choose the wrong beauty product",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    image: treatments,
    category: "Treatments",
    title: "About skin care you need to know",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    image: art4,
    category: "Consultation",
    title: "Tips for starting facial treatments that start early",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    image: art5,
    category: "Beauty",
    title: "Why are beauty treatments needed today?",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    image: art6,
    category: "Treatments",
    title: "Don't be afraid to start your beauty treatment",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
];

export const CATEGORIES = [
  'Consultation',
  'Beauty',
  'Treatments',
  'News'
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com' },
];

export const RECENT_POSTS = [
  {
    id: 1,
    date: '01 jan 2021',
    image: Post1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 2,
    date: '01 jan 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: Post2,
  },
  {
    id: 3,
    date: '01 jan 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: Post3,
  },
];

export const TAGS = ['beauty', 'cute', 'skin', 'glow', 'style', 'clinic', 'style', 'great', 'cute'];

export const FAQData = [
  {
    question: "Is beauty consultation handled thoroughly?",
    answer: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
      "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
    ]
  },
  {
    question: "Can I be beautiful in an instant time?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
  },
  {
    question: "Are there any side effects to the treatment methods or treatments at this clinic?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
  },
  {
    question: "Do professionals have accreditation in their respective fields?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
  }
];

export const CONTACT_INFO = [
  {
    icon: Location,
    title: 'Address',
    value: '101 Baker Street, NY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+896 120 5889',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
  {
    icon: Mail,
    title: 'Mail',
    value: 'mail@company.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
];

export const SERVICES = [
  {
    icon: Consultation,
    title: 'Beauty consultation',
    description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    icon: Treatments,
    title: 'Skin treatments',
    description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla                                   turpis.',
  },
  {
    icon: Product,
    title: 'Beauty product',
    description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
];

export const SERVICES2 = [
  {
    icon: BeautyConsultationIcon,
    title: "Beauty consultation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    icon: SkinTreatmentsIcon,
    title: "Skin treatments",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    icon: BeautyProductIcon,
    title: "Beauty product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];

export const ARTICLES = [
  {
    image: pic1,
    category: 'Consultation',
    title: 'How much does a consultation cost at our clinic?',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    image: pic2,
    category: 'Beauty',
    title: 'Watch out! don\'t choose the wrong beauty product',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    image: pic3,
    category: 'Treatments',
    title: 'About skin care you need to know',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
];

export const ASSISTANT_TEAM = [
  {
    image: ImgLinaGustav,
    name: "Lina Gustav",
    role: "Pharmacist",
    description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nam id magnis at placerat\npulvinar euismod neque."
  },
  {
    image: ImgAdamWhite,
    name: "Adam White",
    role: "Finance",
    description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nam id magnis at placerat\npulvinar euismod neque."
  },
  {
    image: ImgJaneDoe,
    name: "Jane Doe",
    role: "Marketer",
    description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nam id magnis at placerat\npulvinar euismod neque."
  }
];
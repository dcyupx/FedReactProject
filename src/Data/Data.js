// React Icons For Nav And React.......................
import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';

// Header Books  Data.......................
import HBook1 from '../assets/HeaderBooks/headerBook1.png'
import HBook2 from '../assets/HeaderBooks/headerBook2.png'
import HBook3 from '../assets/HeaderBooks/headerBook3.png'

// Brands Data.......................
import Brand1 from '../assets/Brands/brand1.png'
import Brand2 from '../assets/Brands/brand2.png'
import Brand3 from '../assets/Brands/brand3.png'
import Brand4 from '../assets/Brands/brand4.png'
import Brand5 from '../assets/Brands/brand5.png'

// Featured Books Data.......................
import FeaturedBooks1 from '../assets/FeaturedBooksImages/FeaturedBook1.png'
import FeaturedBooks2 from '../assets/FeaturedBooksImages/FeaturedBook2.png'
import FeaturedBooks3 from '../assets/FeaturedBooksImages/FeaturedBook3.png'
import FeaturedBooks4 from '../assets/FeaturedBooksImages/FeaturedBook4.png'
import FeaturedBooks5 from '../assets/FeaturedBooksImages/FeaturedBook5.png'

// Selling Data.......................
import sellingBookimage from '../assets/SellingBookImage/sellingBook.png'

// Popular Books Data.......................
import popularbook1 from '../assets/PopularBooksImage/book1.png'
import popularbook2 from '../assets/PopularBooksImage/book2.png'
import popularbook3 from '../assets/PopularBooksImage/book3.png'
import popularbook4 from '../assets/PopularBooksImage/book4.png'
import popularbook5 from '../assets/PopularBooksImage/book5.png'
import popularbook6 from '../assets/PopularBooksImage/book6.png'
import popularbook7 from '../assets/PopularBooksImage/book7.png'
import popularbook8 from '../assets/PopularBooksImage/book8.png'

// lettestArticleData Data .......................
import ArticleImage1 from '../assets/letestArticlesIamge/ArticleImage1.png'
import ArticleImage2 from '../assets/letestArticlesIamge/ArticleImage2.png'
import ArticleImage3 from '../assets/letestArticlesIamge/ArticleImage3.png'

//import store images........................
import store1 from '../assets/bookstore/store1.png'


//import shop images........................
import shop1 from '../assets/shop/shop1.png'
import shop2 from '../assets/shop/shop2.png'
import shop3 from '../assets/shop/shop3.png'
import shop4 from '../assets/shop/shop4.png'
import shop5 from '../assets/shop/shop5.png'
import shop6 from '../assets/shop/shop6.png'
import shop7 from '../assets/shop/shop7.png'
import shop8 from '../assets/shop/shop8.png'
import shop9 from '../assets/shop/shop9.png'
import shop10 from '../assets/shop/shop10.png'
import shop11 from '../assets/shop/shop11.png'
import shop12 from '../assets/shop/shop12.png'
import shop13 from '../assets/shop/shop13.png'
import shop14 from '../assets/shop/shop14.png'
import shop15 from '../assets/shop/shop15.png'
import shop16 from '../assets/shop/shop16.png'
import shop17 from '../assets/shop/shop17.png'
import shop18 from '../assets/shop/shop18.png'
import shop19 from '../assets/shop/shop19.png'
import shop20 from '../assets/shop/shop20.png'

//import Article images......................
import Article1 from '../assets/Articlesimg/Article1.png'
import Article2 from '../assets/Articlesimg/Article2.png'
import Article3 from '../assets/Articlesimg/Article3.png'
import Article4 from '../assets/Articlesimg/Article4.png'
import Article5 from '../assets/Articlesimg/Article5.png'
import Article6 from '../assets/Articlesimg/Article6.png'
import Article7 from '../assets/Articlesimg/Article7.png'
import Article8 from '../assets/Articlesimg/Article8.png'


// import react Icon.......................
import {  ImFacebook, ImBehance } from 'react-icons/im';
import {  FiInstagram } from 'react-icons/fi';
import {  RiTwitterXLine } from 'react-icons/ri';
import {  GrLinkedinOption } from 'react-icons/gr';

// Nav [a] Links  Data.......................
export const navLinks =[
  {
      name:'Home',
      path:'/'
  },
  {
      name:'About',
      path:'/about'
  },
  {
      name:'Shop',
      path:'/shop'
  },
  {
      name:'Articles',
      path:'/articles'
  },
  {
      name:'Contact',
      path:'/contact'
  }
];


// navRight links Data..............................
export const navRight = {
  managements: [
    {
        id: 1,
        icon: FiUser,  
        link: '*'
    },
    {
        id: 2,
        icon: BsBag,      
        link: '*'
    },
    {
        id: 3,
        icon: VscSearch,      
        link: '*'
    },
  ]
    
};


export const headerBooks =[
    {
        id: 1,
        img: HBook1,
        title:'Descendent of the Crane',
        info: 'In this debut novel of Joan He , Descendant of the Crane, a determined and vulnerable young heroine struggles to do right in a world brimming with deception. This gorgeous, Chinese-inspired fantasy is packed with dizzying twists, complex characters, and intricate politics.',
        btnLink: '*'
    },
    {
        id: 2,
        img: HBook2,
        title:'The Gloaming',
        info: '‘The best lives leave a mark.’ A bewitching tale of first love, shattering grief, and the dangerous magic that draws us home.',
        btnLink: '*'
    },
    {
        id: 3,
        img: HBook3,
        title:'Graceling',
        info: 'Katsa has been able to kill a man with her bare hands since she was eight - she’s a Graceling, one of the rare people in her land born with an extreme skill. And now she is forced to work as the king’s thug. But she never expects to fall in love with beautiful Prince Po...',
        btnLink: '*'
    },
];


export const brandsData =[
    {
        id: 1,
        img: Brand1,        
    },
    {
        id: 2,
        img: Brand2,        
    },
    {
        id: 3,
        img: Brand3,        
    },
    {
        id: 4,
        img: Brand4,        
    },
    {
        id: 5,
        img: Brand5,        
    },
];


export const featuredBooksData =[
    {
        id: 1,
        img: FeaturedBooks1, 
        imgLlink: "*", 
        nameLink:"*",
        name: 'Eye of the Fox',        
        writer:'Minka Brown',
        price: '$ 28.00 '      
    },
    {
        id: 2,
        img: FeaturedBooks2,  
        imgLlink: "*", 
        nameLink:"*",
        name: ' Howls Moving Castle',
        writer:'Diana Wayne Jones',
        price: '$ 38.00 ' 

    },
    {
        id: 3,
        img: FeaturedBooks3, 
        imgLlink: "*", 
        nameLink:"*", 
        name: 'The Last Royal Dragon',
        writer:'Dazai Osamu',
        price: '$ 32.00 '      
    },
    {
        id: 4,
        img: FeaturedBooks4, 
        imgLlink: "*", 
        nameLink:"*", 
        name: 'The House on Vesper Sands',
        writer:'Paraic Dowell',
        price: '$ 18.00 '      
    },
    {
        id: 5,
        img: FeaturedBooks5, 
        imgLlink: "*", 
        nameLink: "*", 
        name: 'Deadly Curious',
        writer:'Cindy Anstey',
        price: '$ 38.00 '      
    },
];


export const sellingBooksData =[
    {
        id: 1,
        img: sellingBookimage,
        infoTitleTop: 'By Mo Xiang Tong Xiu',
        infoTitle: 'Heaven Officials Blessing',
        desc: 'Born the crown prince of a prosperous kingdom, Xie Lian was renowned for his beauty, strength, and purity. His years of dedicated study and noble deeds allowed him to ascend to godhood. But those who rise may also fall, and fall he does--cast from the heavens and banished to the world below.',
        price: '$ 45.00',
        shopbtnLink: "*",
    }
];


export const galleryData = [
    {
      id: 1,
      name: 'The Diary of A Bookseller',
      writer:'Shaun Bythell',
      price: '$ 15.00 ' ,
      category: 'Romance',
      image: popularbook1,
    },
    {
      id: 2,
      name: 'After Alice',
      writer:'Gregory Maguire',
      price: '$ 18.00 ' ,
      category: 'Technology',
      image: popularbook2,
    },
    {
      id: 3,
      name: 'Lost Boy',
      writer:'Christina Henry',
      price: '$ 20.00 ' ,
      category: 'Adventure',
      image: popularbook3,
    },
    {
      id: 4,
      name: 'The Antidote',
      writer:'Shelley Sackier',
      price: '$ 38.00 ' ,
      category: 'Mystery',
      image: popularbook4,
    },
    {
      id: 5,
      name: 'They Both Die At The End',
      writer:'Adam Silvera',
      price: '$ 12.00 ' ,
      category: 'Thriller',
      image: popularbook5,
    },
    {
      id: 6,
      name: 'Snow, Glass, Apples',
      writer:'Neil Gaiman',
      price: '$ 24.00 ' ,
      category: 'Horror',
      image: popularbook6,
    },
    {
      id: 7,
      name: 'Something is Killing',
      writer:'James Tynion IV',
      price: '$ 17.00 ' ,
      category: 'Horror',
      image: popularbook7,
    },
    {
      id: 8,
      name: 'Tess of the Road',
      writer:'Rachel Hartman',
      price: '$ 22.00 ' ,
      category: 'Romance',
      image: popularbook8,
    },
    
  ];
  
 export const storeData = [
  {
    id: 1,
    image: store1, 
  },
  // {
  //   id: 2,
  //   image: store2,
  // },
  // {
  //   id: 3,
  //   image: store3,
  // },
 ];

 export const shopData = [
  { id: 1, title: 'Scavengers', author: 'Darren Simpson', price: '22.99', image: shop1},
  { id: 2, title: 'Flowerheart', author: 'Catherine Bakewell', price: '18.50', image: shop2 },
  { id: 3, title: 'Little Thieves', author: 'Margaret Owen', price: '20.00', image: shop3 },
  { id: 4, title: 'The Bass Rock', author: 'Evie Wyld', price: '16.75', image: shop4 },
  { id: 5, title: 'Ariadne', author: 'Jennifer Saint', price: '21.99', image: shop5 },
  { id: 6, title: 'The Light Jar', author: 'Lisa Thompson', price: '19.95', image: shop6 },
  { id: 7, title: 'The Atlas Six', author: 'Olivie Blake', price: '24.99', image: shop7},
  { id: 8, title: 'The Mermaid', author: 'Christina Henry', price: '17.99', image: shop8 },
  { id: 9, title: 'Carnival', author: 'Stephanie Garber', price: '23.50', image: shop9 },
  { id: 10, title: 'Locklands', author: 'Robert Jackson Bennett', price: '25.00', image: shop10 },
  { id: 11, title: 'Apartment', author: 'Teddy Wayne', price: '22.00', image: shop11 },
  { id: 12, title: 'Thorn', author: 'Intisar Khanani', price: '18.99', image: shop12 },
  { id: 13, title: 'The Moonlight Whispers', author: 'George Mills', price: '19.50', image: shop13 },
  { id: 14, title: 'All the Secrets in the Wolrd', author: 'Lemony Snicket', price: '21.50', image: shop14 },
  { id: 15, title: 'Little Women', author: 'Louisa May Alcott', price: '20.75', image: shop15 },
  { id: 16, title: 'A Dark and Drowning Tide', author: 'Allison Saft', price: '23.99', image: shop16 },
  { id: 17, title: 'The Hidden Ways', author: 'Alistair Moffat', price: '17.50', image: shop17 },
  { id: 18, title: 'The Wood', author: 'John Lewis-Stempel', price: '22.50', image: shop18 },
  { id: 19, title: 'Wild Magic', author: 'Tamora Pierce', price: '19.99', image: shop19 },
  { id: 20, title: 'Goldeline', author: 'Jimmy Cajoleas', price: '24.00', image: shop20 }
];

//article data.........................
export const articlesData = [
  {
      id: 1,
      title: "The Rise of E-books and Digital Reading",
      author: "Kim Namjoon",
      excerpt: "Exploring how digital formats are changing our reading habits and what it means for the future of books.",
      date: "Jan 24, 2024",
      image: Article1,
  },
  {
      id: 2,
      title: "The Art of Book Cover Design",
      author: "Kim Seokjin",
      excerpt: "A look at how book covers are created and what makes for a captivating and successful design.",
      date: "Feb 10, 2024",
      image: Article2,
  },
  {
      id: 3,
      title: "Bestselling Books of the Decade",
      author: "Min Yoongi",
      excerpt: "A retrospective on the most popular and influential books of the past ten years.",
      date: "Mar 3, 2024",
      image: Article3,
  },
  {
      id: 4,
      title: "The Importance of Independent Bookstores",
      author: "Jung Hoseok",
      excerpt: "Why supporting local bookstores is crucial for the book industry and local communities.",
      date: "Mar 18, 2024",
      image: Article4,
  },
  {
      id: 5,
      title: "Exploring Literary Genres: From Romance to Sci-Fi",
      author: "Park Jimin",
      excerpt: "A journey through various literary genres and what makes each one unique.",
      date: "Apr 8, 2024",
      image: Article5,
  },
  {
      id: 6,
      title: "The Impact of Literature on Society",
      author: "Kim Taehyung",
      excerpt: "How books have shaped and influenced our world throughout history.",
      date: "Apr 22, 2024",
      image: Article6,
  },
  {
      id: 7,
      title: "Writing Tips from Bestselling Authors",
      author: "Jeon Jungkook",
      excerpt: "Advice from successful authors on writing and how to navigate the world of publishing.",
      date: "May 15, 2024",
      image: Article7,
  },
  {
      id: 8,
      title: "The Evolution of Children's Literature",
      author: "BTS",
      excerpt: "A look at how children's books have evolved over time and their importance in early education.",
      date: "May 30, 2024",
      image: Article8,
  }
];

 // Quote Data .......................
 
export const quoteData =[
    {
        id: 1,
        quote: '“The harder you try to surpass the wall, the higher it gets. In such times, the more you will need to look at your surroundings and not the wall”',
        speaker: 'Dan Woohyun'
    }
];


export const lettestArticleData = [
  {
    id: 1,
    title: 'Reading books always makes the moments happy',
    image: ArticleImage1,
    titLink: "#",
    date: '13 nov, 2023',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 2,
    image: ArticleImage2,
    title: 'Reading books always makes the moments happy',
    titleLink: "*",
    date: '13 nov, 2023',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 3,
    image: ArticleImage3,
    title: 'Reading books always makes the moments happy',
    titleLink: "*",
    date: '13 nov, 2023',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
 ];

 
// Footers Data .......................  
export const FootersLinksData = {

  Aboutus: [
    { linkname: 'vision ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'careers ', link: "*", },    
    { linkname: 'service terms ', link: "*", },    
    { linkname: 'donate ', link: "*", },   
   
  ],    
  Discover: [
    { linkname: 'Home ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'Books ', link: "*", },    
    { linkname: 'Authors  ', link: "*", },    
    { linkname: 'Subjects ', link: "*", },   
    { linkname: 'Advanced Search ', link: "*", },   
  ],    
  Myaccount: [
    { linkname: 'Sign In', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'My Wishtlist  ', link: "*", },    
    { linkname: 'Track My Order ', link: "*", },      
  ],  

  Help: [
    { linkname: 'Help center ', link: "*", },    
    { linkname: 'Report a problem  ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'Suggesting edits ', link: '#' },    
    { linkname: 'Contact us', link: "*", },   
  ],  

  socials: [
    { icon: ImFacebook, link: 'https://www.facebook.com' },
    { icon: FiInstagram, link: 'https://www.instagram.com' },
    { icon: GrLinkedinOption, link: 'https://www.linkedin.com' },
    { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
    { icon: ImBehance, link: 'https://www.behance.com' }
  ],    
    
};

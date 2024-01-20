import nikeImage from '../assets/images/nike.png'
import jordanImage from '../assets/images/jordan.png'
import yeezyImage from '../assets/images/yeezy.png'
import adidasImage from '../assets/images/adidas.png'

  export const headerData = [
    {
      _id: '652d683a2bd325edf8cbb439',
      index: 0,
      title: 'Air Max 97 Gold',
    },

    {
      _id: '652d69b92bd325edf8cbb43b',
      index: 1,
      title: 'Jordan 1 Backboard',
    },

    {
      _id: '652d6a322bd325edf8cbb43c',
      index: 2,
      title: 'Yeezy 500 Black',
    },

    {
      _id: '652d6ad02bd325edf8cbb43d',
      index: 3,
      title: 'Adidas NMD Grey',
    },
  ]

export const brands = [
    {
        name: 'nike',
        image: nikeImage,
        // logoImage: nikeLogoImage
    },

    {
        name: 'jordan',
        image: jordanImage,
        // logoImage: jordanLogoImage
    },

    {
        name: 'yeezy',
        image: yeezyImage,
        // logoImage: yeezyLogoImage
    },

    {
        name: 'adidas',
        image: adidasImage,
        // logoImage: adidasLogoImage
    },
]

export const featuredSneakers = [
   {
        imageID: 8,
        _id: '6507d95867472372f74393fe',
        brand: "yeezy",
        title: "Yeezy 700 Grey Gum",
        price: 590
    },

    {
        imageID: 12,
        _id: '6507d95867472372f7439402',
        brand: "jordan",
        title: "Jordan 4 Bred",
        price: 350
    },

    {
       imageID: 18,
        _id: '6507d95867472372f7439408',
        brand: "nike",
        title: "Nike Foamposite Gold",
        price: 140
    },

    {
       imageID: 25,
        _id: '6507d95867472372f743940f',
        brand: "nike",
        title: "Nike Vapormax Triple Red",
        price: 280
    },

    {
       imageID: 31,
        _id: '6507d95867472372f7439414',
        brand: "yeezy",
        title: "Yeezy 350 Triple White",
        price: 110
    },

    {
       imageID: 36,
        _id: '6507d95867472372f7439419',
        brand: "jordan",
        title: "Jordan 3 Cardinal Red",
        price: 280
    },
]



export const articles = [
    {
       index: 0,
       title: "The Air Jordan 9 Olive Green: A Fusion of Functionality and Iconic Design",
       content: `The Air Jordan 9 Olive Green is a variation of the classic Air Jordan 9, a popular sneaker model from the iconic Air Jordan line created by Nike in collaboration with Michael Jordan, the legendary basketball player. The Air Jordan 9 Olive Green features a primarily olive green colorway, with black and red accents complementing the design.
The upper part of the shoe typically comprises a mixture of materials such as premium leather, suede, and synthetic textiles, providing a unique texture and visual appeal. The olive green hue gives the shoe a subtle and versatile aesthetic, making it a suitable choice for both casual wear and sporting activities. The black accents often appear on the midsole, outsole, and heel, adding contrast to the overall design.
As with other Air Jordan models, the Air Jordan 9 Olive Green is likely to feature the Jumpman logo, representing Michael Jordan's iconic dunking silhouette, prominently displayed on the heel or the tongue. Additionally, the shoe is built with advanced cushioning technology and a sturdy outsole, ensuring comfort, support, and durability for everyday use and athletic performance.

The Air Jordan 9 Olive Green is designed for sneaker enthusiasts and basketball fans alike, offering a blend of style, comfort, and performance that has become synonymous with the Air Jordan brand.`
    },

    {
      index: 1,
       title: "Embracing Vibrancy and Creativity with the Pharrell NMD Yellow",
       content: `
The Adidas Pharrell NMD Yellow is a sneaker collaboration between Adidas and the renowned musician and designer Pharrell Williams. The NMD silhouette, known for its futuristic design and innovative technology, serves as the canvas for Pharrell's creative vision. The yellow colorway is often associated with energy, vibrancy, and positivity, reflecting Pharrell's eclectic and bold style.
Pharrell Williams is known for his distinctive approach to fashion, combining streetwear influences with high-end aesthetics, and his collaboration with Adidas often showcases his unique perspective on design, culture, and creativity. The vibrant yellow shade of the sneaker represents optimism and a playful spirit, encouraging wearers to embrace individuality and self-expression.
The Adidas Pharrell NMD Yellow is more than just a shoe; it embodies a fusion of music, fashion, and contemporary culture, reflecting Pharrell's passion for artistic expression and his commitment to spreading positivity and inclusivity through his work. The design might incorporate unique patterns, textures, and details, adding a touch of Pharrell's signature style to the classic Adidas NMD model.`
    },

    {
       index: 2,
       title: "Nike Air Max 1: A Timeless Sneaker Redefining Footwear Innovation",
       content: `The Nike Air Max 1 is a classic and iconic sneaker that holds a significant place in the history of footwear design. Revered for its groundbreaking visible Air-Sole unit in the heel, the Air Max 1 has been a pioneer in introducing innovative technology in the realm of sneakers.

The typical design of the Nike Air Max 1 features a combination of mesh, leather, and synthetic materials in its upper, providing durability and breathability. The silhouette is characterized by its sleek and sporty appearance, often with a low-cut collar for unrestricted ankle movement and a classic lace-up closure for a secure fit.

The midsole, a hallmark of the Air Max series, incorporates the visible Air-Sole unit, which not only delivers enhanced cushioning and shock absorption but also showcases the revolutionary technology that transformed the sneaker industry. The outsole is designed with durable rubber, offering excellent traction and grip on various surfaces.

In terms of colorways, the Nike Air Max 1 has been released in a multitude of options over the years, catering to a wide range of preferences and styles. These colorways can include vibrant and bold combinations as well as more subdued and classic choices, appealing to both sneaker collectors and everyday wearers.

The Nike Swoosh logo is prominently displayed on the sides, representing the brand's legacy and ensuring the authenticity of the shoe. With its timeless design, comfortable fit, and innovative technology, the Nike Air Max 1 continues to be a favorite among sneaker enthusiasts and athletes, maintaining its status as a staple in the sneaker culture.`
    },

    ]

export const prices = [
    '$0-$100', '$100-$200', '$200-$300', '$300-$400', '$400-$500', '$500-$600'
]


export const sizes = [
'8',
'8.5',
'9',
'9.5',
'10',
'10.5',
'11',
'11.5',
'12',
'12.5',
]


export const sortOptions = [
  {
    value: '',
    text: 'Default'
  },

  {
    value: 'lowest',
    text: 'Price: (Lowest)'
  },

  {
    value: 'highest',
    text: 'Price: (Highest)'
  },

  {
    value: 'a-z',
    text: 'Name: (A-Z)'
  },

  {
    value: 'z-a',
    text: 'Name: (Z-A)'
  },
]
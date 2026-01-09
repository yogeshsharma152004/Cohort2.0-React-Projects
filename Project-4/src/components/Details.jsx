import React from 'react'
import Card from './Card'
const Details = () => {
    const cities = [
  {
    city: "Udaipur",
    country: "India",
    tag: "Top Rated",
    description: "The city of lakes, known for royal palaces and romantic sunsets.",
    price: 150,
    image:
      "https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=600"
  },
  {
    city: "Paris",
    country: "France",
    tag: "Popular",
    description: "The city of love, art, fashion, and iconic landmarks.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
  },
  {
    city: "Tokyo",
    country: "Japan",
    tag: "Trending",
    description: "A vibrant blend of futuristic technology and rich tradition.",
    price: 280,
    image:
      "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D"
  },
  {
    city: "New York",
    country: "USA",
    tag: "Famous",
    description: "The city that never sleeps, full of energy and opportunity.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D"
  },
  {
    city: "Rome",
    country: "Italy",
    tag: "Historic",
    description: "An open-air museum filled with ancient history and culture.",
    price: 260,
    image:
      "https://media.istockphoto.com/id/508540910/photo/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=DO9rOk8gsv12TKbtDGFt_yGZlARQmhYwwuBpY733WsE="
  },
  {
    city: "Dubai",
    country: "UAE",
    tag: "Luxury",
    description: "A city of skyscrapers, luxury shopping, and desert adventures.",
    price: 400,
    image:
      "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
  },
  {
    city: "London",
    country: "UK",
    tag: "Classic",
    description: "A timeless city with royal heritage and modern lifestyle.",
    price: 300,
    image:
      "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww"
  },
  {
    city: "Bali",
    country: "Indonesia",
    tag: "Relax",
    description: "A tropical paradise famous for beaches and peaceful vibes.",
    price: 180,
    image:
      "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ybl4tKrFgBNH0CrxEUbVdnfbAfCeRGzUdmquea5o_L4="
  },
  {
    city: "Istanbul",
    country: "Turkey",
    tag: "Cultural",
    description: "Where East meets West with rich culture and architecture.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1649455051732-3754d8962279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXN0YW5idWwlMjBjaXR5fGVufDB8fDB8fHww"
  },
  {
    city: "Cape Town",
    country: "South Africa",
    tag: "Scenic",
    description: "A coastal city with stunning mountains and ocean views.",
    price: 200,
    image:
      "https://plus.unsplash.com/premium_photo-1697730005046-8706d7a72bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcGUlMjB0b3dufGVufDB8fDB8fHww"
  },
  {
    city: "Sydney",
    country: "Australia",
    tag: "Iconic",
    description: "Famous for its opera house, beaches, and laid-back lifestyle.",
    price: 330,
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww"
  },
  {
    city: "Barcelona",
    country: "Spain",
    tag: "Artistic",
    description: "A city of art, architecture, and lively street culture.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1578912996078-305d92249aa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmNlbG9uYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    city: "Bangkok",
    country: "Thailand",
    tag: "Budget Friendly",
    description: "Known for street food, nightlife, and vibrant markets.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600"
  },
  {
    city: "Zurich",
    country: "Switzerland",
    tag: "Premium",
    description: "A clean and peaceful city surrounded by natural beauty.",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHp1cmljaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    tag: "Vibrant",
    description: "Famous for beaches, carnival, and breathtaking landscapes.",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww"
  },
  {
  city: "Santorini",
  country: "Greece",
  tag: "Romantic",
  description: "Famous for white houses, blue domes, and stunning sunset views.",
  price: 290,
  image: "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pfGVufDB8fDB8fHww"
}
       ]

  return (

    
    
       <div className=' bg-black px-10 py-6  grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6   md:gap-14 items-center justify-center gap-6'>
           {cities.map(function(data ,index){
            return <Card city={data} index={index}/>
           })}
       </div>

  )
}

export default Details
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: "";
    rating: "";
    link: "";
    href: "https://www.whatsapp.com";
  }

  export const products = [
    {
      id: 1,
      name: 'Socks',
      price: 17.99,
      description: 'Beautiful socks to keep you warm at cold times)',
      image: "https://m.media-amazon.com/images/I/71jFn3LK0-L._AC_UL480_FMwebp_QL65_.jpg",
      rating: "Rating: 4/5 ",
      href: "https://www.whatsapp.com",
      link: "https://www.amazon.com/Fruit-Loom-Defense-Socks-black/dp/B07VNHNWPL/ref=sr_1_5?keywords=socks&qid=1647168486&sprefix=socks%2Caps%2C314&sr=8-5",
    },
    {
      id: 2,
      name: 'USB stick',
      price: 20,
      description: 'Great for keeping memories or other things)',
      image: "https://m.media-amazon.com/images/I/41IhYxnGIvL._AC_UY327_FMwebp_QL65_.jpg",
      rating: "Rating: 3/5 ",
      href: "https://www.whatsapp.com",
      link: "https://www.amazon.com/SanDisk-Ultra-Flair-128GB-Flash/dp/B015CH1PJU/ref=sr_1_3?crid=3232UV7DAE8CZ&keywords=usb+stick&qid=1647168831&sprefix=usb+sti%2Caps%2C293&sr=8-3",
    },
    {
      id: 3,
      name: 'Chocolate',
      price: 299,
      description: 'YES, YUMMY, very tasty stuff)',
      image: "https://m.media-amazon.com/images/I/616gYG+Q5BL._AC_UL480_FMwebp_QL65_.jpg",
      rating: "Rating: 4.5/5 ",
      href: "https://www.whatsapp.com",
      link: "https://www.amazon.com/Dove-Easter-Assorted-Springtime-Chocolate/dp/B01N6BVQGL/ref=sr_1_3?crid=3QJ4VHBKCVFJC&keywords=chocolate&qid=1647168891&sprefix=chocola%2Caps%2C285&sr=8-3",
    },
    {
      id: 4,
      name: "Monitor",
      price:  189,
      description: "Cool Monitor to keep your eyes gazed!",
      image: "https://m.media-amazon.com/images/I/81XKPle6OAL._AC_UY327_FMwebp_QL65_.jpg",
      rating: "Rating: 5/5 ",
      href: "https://www.whatsapp.com",
      link: "https://www.amazon.com/SAMSUNG-Border-Less-Compatible-Adjustable-LF27G35TFBNXZA/dp/B098R8NRS5/ref=sr_1_3?crid=KLOFRPYE17BT&keywords=monitor&qid=1647168942&sprefix=monito%2Caps%2C271&sr=8-3",

    },
    {
      id: 5,
      name: "Mouse",
      price:  21,
      description: "Cool mouse to keep your hands touched",
      image: "https://m.media-amazon.com/images/I/61jPHmkRjOL._AC_UY327_FMwebp_QL65_.jpg",
      rating: "Rating: 3.5/5 ",
      href: "https://www.whatsapp.com",
      link: "https://www.amazon.com/Logitech-M525-Wireless-Mouse-Micro-Precision/dp/B005KSAHZU/ref=sr_1_3?crid=3B9D2M79F60V&keywords=mouse&qid=1647168977&sprefix=mou%2Caps%2C255&sr=8-3",
    }
]
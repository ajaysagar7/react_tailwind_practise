const ProductData = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/51cNZ4e9JRL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 1",
    rating: 4.5,
    color: "Blue",
    aosDelay: 100,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/71ObTkVyG7L._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 2",
    rating: 3.8,
    color: "Red",
    aosDelay: 200,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 3,
    image:
      "https://m.media-amazon.com/images/I/61tP-UVED7L._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 3",
    rating: 4.2,
    color: "Green",
    aosDelay: 300,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 4,
    image:
      "https://m.media-amazon.com/images/I/61pdqHwLuTL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 4",
    rating: 4.0,
    color: "Yellow",
    aosDelay: 400,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/I/61pwSlkui9L._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 5",
    rating: 4.8,
    color: "Purple",
    aosDelay: 500,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/I/617RVtwt9RL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 6",
    rating: 3.5,
    color: "Black",
    aosDelay: 600,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/I/61hDSSt0SzL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 7",
    rating: 4.7,
    color: "White",
    aosDelay: 700,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 8,
    image:
      "https://m.media-amazon.com/images/I/91AEbuZjyFL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 8",
    rating: 3.9,
    color: "Pink",
    aosDelay: 800,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/I/719WnVVtaOL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Product 9",
    rating: 4.1,
    color: "Orange",
    aosDelay: 900,
    price: getRandomPrice(1000, 10000),
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/61J4vuXI9TL._SY879_.jpg",
    title: "Product 10",
    rating: 4.6,
    color: "Brown",
    aosDelay: 1000,
    price: getRandomPrice(1000, 10000),
  },
];

export default ProductData;

// Function to get a random price between min and max (inclusive)
function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

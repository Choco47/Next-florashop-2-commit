import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Blue Rose Bouquet',
      slug: 'blue-rose-bouquet',
      category: 'bouquet',
      image: '/image/blue.jpg',
      price: 400,
      rating: 4.5,
      numReviews: 20,
      countInStock: 20,
      description:
        'A bouquet collection of royal blue, white or ivory foam roses',
    },
    {
      name: 'Brides Purple & Ivory Rose',
      slug: 'purple-ivory-bouquet',
      category: 'bouquet',
      image: '/image/Purple-Ivory-Rose.jpg',
      price: 350,
      rating: 3.5,
      numReviews: 10,
      countInStock: 5,
      description:
        'A bouquet collection of royal blue, white or ivory foam roses',
    },
    {
      name: 'Colorful Collection Bouquet',
      slug: 'colorful-bouquet',
      category: 'bouquet',
      image: '/image/color.jpg',
      price: 330,
      rating: 3,
      numReviews: 13,
      countInStock: 5,
      description:
        'Roses, callas, grasses, stock, lavender, upright amaranth & hypericum create this beautiful bouquet.',
    },
    {
      name: 'Garden Bouquet',
      slug: 'garden-bouquet',
      category: 'bouquet',
      image: '/image/garden.jpg',
      price: 290,
      rating: 3.2,
      numReviews: 6,
      countInStock: 2,
      description:
        'Stunning garden roses are the focal for this garden-themed creation with standard roses, stock and accent flowers.',
    },
    {
      name: 'Peach Bouquet',
      slug: 'peach-bouquet',
      category: 'bouquet',
      image: '/image/peach.jpg',
      price: 250,
      rating: 3.5,
      numReviews: 15,
      countInStock: 8,
      description:
        'These artificial flowers are hand painted by artisans to faithfully recreate the beauty of natural blossoms and are expertly arranged to achieve a charming, freshly cut look.',
    },
    {
      name: 'Pink Bouquet',
      slug: 'pink-bouquet',
      category: 'bouquet',
      image: '/image/pink.jpg',
      price: 230,
      rating: 2.5,
      numReviews: 10,
      countInStock: 4,
      description:
        'Sweetly coloured blooms in bright pinks and soft blush to bring some spring-time sweetness to your home.',
    },
    {
      name: 'Purple Bouquet',
      slug: 'purple-bouquet',
      category: 'bouquet',
      image: '/image/purple.jpg',
      price: 400,
      rating: 4.5,
      numReviews: 30,
      countInStock: 18,
      description:
        'Purple is a wedding flower color for all seasons. From the soft lavender shades of spring to the vibrant violet hues of summer, to the dark-as-night purple tones of autumn.',
    },
  ],
};
export default data;

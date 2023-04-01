import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mandy',
      email: 'mandy7373@gmail.com',
      password: bcrypt.hashSync('Password123'),
      isAdmin: true,
    },
    {
      name: 'Alex',
      email: 'alex@gmail.com',
      password: bcrypt.hashSync('Password123'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Gold Kratom',
      slug: 'gold-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/gold.jpg',
      brand: 'Kratomsy',
      rating: 4.8,
      price: 30,
      numReviews: 8,
      countInStock: 20,
      description:
        'Popular Kratom Strain (Gold): Has uplifting and energizing effect, good for most occasions.',
    },
    {
      name: 'Green Kratom',
      slug: 'green-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/green.jpg',
      brand: 'Kratomsy',
      rating: 4.4,
      price: 25,
      numReviews: 10,
      countInStock: 46,
      description: 'Green Strain: Has energizing effect, good for focus.',
    },
    {
      name: 'Red Kratom',
      slug: 'red-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/red.jpg',
      brand: 'Kratomsy',
      rating: 4.6,
      price: 20,
      numReviews: 4,
      countInStock: 32,
      description:
        'red Strain: has relaxing effect, good for reading or painting.',
    },
    {
      name: 'White Kratom',
      slug: 'white-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/white.jpg',
      brand: 'Kratomsy',
      rating: 4.5,
      price: 15,
      numReviews: 16,
      countInStock: 25,
      description: 'White Strain: has uplifting and energizing effect.',
    },
    {
      name: 'Platinum Kratom',
      slug: 'platinum-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/platinum.jpg',
      brand: 'Kratomsy',
      rating: 4.9,
      price: 50,
      numReviews: 27,
      countInStock: 8,
      description:
        "Platinum Strain Mix: It's our exclussive strain mix and it has euphoric effect",
    },
    {
      name: 'Silver Kratom',
      slug: 'silver-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/platinum.jpg',
      brand: 'Kratomsy',
      rating: 4.2,
      price: 45,
      numReviews: 21,
      countInStock: 0,
      description:
        "Silver Strain Mix: It's our exclussive strain mix and it has euphoric effect",
    },
    {
      name: 'Titanium Kratom',
      slug: 'titanium-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/platinum.jpg',
      brand: 'Kratomsy',
      rating: 4.2,
      price: 40,
      numReviews: 21,
      countInStock: 12,
      description:
        "Titanium Strain Mix: It's our exclussive strain mix and it has euphoric effect",
    },
    {
      name: 'Diamond Kratom',
      slug: 'diamond-kratom',
      category: 'Kratom',
      image: '/assets/images/kratom/platinum.jpg',
      brand: 'Kratomsy',
      rating: 4.9,
      price: 80,
      numReviews: 10,
      countInStock: 4,
      description:
        "Titanium Strain Mix: It's our exclussive strain mix and it has euphoric effect",
    },
  ],
};

export default data;

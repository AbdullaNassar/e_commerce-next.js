import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rose Glow Foundation',
    price: 42.00,
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Makeup',
    brand: 'Bella Beauty',
    rating: 4.8,
    description: 'A luminous, medium-coverage foundation that gives your skin a natural, radiant glow with rose-infused ingredients.',
    ingredients: ['Rose Water', 'Hyaluronic Acid', 'Vitamin E', 'SPF 30'],
    images: [
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '2',
    name: 'Silk Matte Lipstick',
    price: 28.00,
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Makeup',
    brand: 'Luxe Lips',
    rating: 4.6,
    description: 'Long-lasting matte lipstick with a comfortable, non-drying formula in stunning rose shades.',
    ingredients: ['Vitamin E', 'Jojoba Oil', 'Hyaluronic Acid'],
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '3',
    name: 'Hydrating Rose Serum',
    price: 65.00,
    image: 'https://images.pexels.com/photos/5938433/pexels-photo-5938433.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Skincare',
    brand: 'Pure Botanicals',
    rating: 4.9,
    description: 'Intensive hydrating serum with rose extract and hyaluronic acid for plump, glowing skin.',
    ingredients: ['Rose Extract', 'Hyaluronic Acid', 'Vitamin C', 'Peptides'],
    images: [
      'https://images.pexels.com/photos/5938433/pexels-photo-5938433.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '4',
    name: 'Blush Palette',
    price: 38.00,
    image: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Makeup',
    brand: 'Color Dreams',
    rating: 4.7,
    description: 'Four complementary blush shades in coral, rose, and peach tones for a natural flush.',
    images: [
      'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '5',
    name: 'Gentle Cleansing Oil',
    price: 35.00,
    image: 'https://images.pexels.com/photos/6621388/pexels-photo-6621388.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Skincare',
    brand: 'Pure Botanicals',
    rating: 4.5,
    description: 'Luxurious cleansing oil that removes makeup and impurities while nourishing the skin.',
    ingredients: ['Rosehip Oil', 'Jojoba Oil', 'Vitamin E'],
    images: [
      'https://images.pexels.com/photos/6621388/pexels-photo-6621388.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    discount: 20
  },
  {
    id: '6',
    name: 'Eyeshadow Palette - Rose Gold',
    price: 52.00,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Makeup',
    brand: 'Glamour Studio',
    rating: 4.8,
    description: '12 highly pigmented eyeshadows in warm rose gold and neutral tones.',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '7',
    name: 'Rose Hip Face Mask',
    price: 24.00,
    image: 'https://images.pexels.com/photos/8142010/pexels-photo-8142010.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Skincare',
    brand: 'Natural Glow',
    rating: 4.4,
    description: 'Nourishing face mask with rose hip oil and botanical extracts for radiant skin.',
    ingredients: ['Rose Hip Oil', 'Aloe Vera', 'Honey', 'Clay'],
    images: [
      'https://images.pexels.com/photos/8142010/pexels-photo-8142010.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    discount: 15
  },
  {
    id: '8',
    name: 'Highlighter Compact',
    price: 32.00,
    image: 'https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Makeup',
    brand: 'Radiant Beauty',
    rating: 4.6,
    description: 'Silky smooth highlighter that gives a natural, luminous glow to cheekbones and brow bones.',
    images: [
      'https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  }
];

export const categories = [
  'All',
  'Makeup',
  'Skincare',
  'Fragrance',
  'Hair Care'
];

export const brands = [
  'All',
  'Bella Beauty',
  'Luxe Lips',
  'Pure Botanicals',
  'Color Dreams',
  'Glamour Studio',
  'Natural Glow',
  'Radiant Beauty'
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Beauty Influencer',
    content: 'Bella Cosmetics has completely transformed my skincare routine. The rose serum is absolutely divine!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  },
  {
    id: 2,
    name: 'Emily Davis',
    role: 'Makeup Artist',
    content: 'The quality of these products is exceptional. My clients always ask what foundation I use!',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  },
  {
    id: 3,
    name: 'Jessica Wilson',
    role: 'Content Creator',
    content: 'I love how these products make me feel confident and beautiful. The packaging is gorgeous too!',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  }
];
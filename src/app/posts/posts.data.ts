import { CITY_GUIDES } from './city-guides.data';
import { Post } from './post';
import { WORLD_CITY_GUIDES } from './world-city-guides.data';

export const POSTS: Post[] = [
  {
    slug: 'lisbon-tram-28',
    title: 'Rattling Through Lisbon on Tram 28',
    excerpt: 'Hills, tiles and pastéis de nata: three days getting lost in the Portuguese capital.',
    location: 'Lisbon',
    country: 'Portugal',
    date: '2026-09-14',
    readingMinutes: 6,
    tags: ['City break', 'Food'],
    cover: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    body: [
      'Lisbon greets you with a climb. Every street seems to tilt toward the river, and the yellow trams squeal around corners so tight you could touch the azulejo tiles from your seat.',
      'We started early at Martim Moniz to beat the queues for Tram 28. The route winds through Graça, Alfama and Baixa before crawling up to Estrela, and it is the best cheap sightseeing tour in Europe.',
      'Lunch was grilled sardines in a tiny tasca with paper tablecloths, followed by the obligatory pastel de nata in Belém. Warm, flaky, dusted with cinnamon. We went back for seconds.',
      'Tip: sunset at Miradouro da Senhora do Monte is quieter than the famous viewpoints and the light over the castle is unbeatable.',
    ],
  },
  {
    slug: 'iceland-ring-road',
    title: 'Ten Days on the Iceland Ring Road',
    excerpt: 'Waterfalls, black sand beaches and a campervan that smelled faintly of wet wool.',
    location: 'Ring Road',
    country: 'Iceland',
    date: '2026-07-02',
    readingMinutes: 9,
    tags: ['Road trip', 'Nature'],
    cover: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    body: [
      'Route 1 loops 1,322 km around Iceland, and we gave ourselves ten days to drive it counter-clockwise from Reykjavík.',
      'The south coast is a parade of waterfalls: Seljalandsfoss, which you can walk behind, and Skógafoss, which soaks you from fifty metres away. Reynisfjara beach, with its basalt columns, is beautiful and genuinely dangerous; respect the sneaker waves.',
      'Jökulsárlón glacier lagoon was the highlight. Icebergs drift out to sea and wash up on Diamond Beach, glittering on the black sand.',
      'In the north, Mývatn’s geothermal baths were a perfect reward after a long, windy drive. Fill the tank whenever you can, and always check road.is before setting off.',
    ],
  },
  {
    slug: 'kyoto-autumn',
    title: 'Kyoto in Autumn Colours',
    excerpt: 'Maple leaves, quiet temples and the art of arriving before the tour buses.',
    location: 'Kyoto',
    country: 'Japan',
    date: '2025-11-20',
    readingMinutes: 7,
    tags: ['Culture', 'Asia'],
    cover: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    body: [
      'Late November is peak momiji season in Kyoto, when the maples turn every shade from amber to crimson.',
      'We set alarms for 6 a.m. to walk through Fushimi Inari’s thousands of torii gates in near silence. By 9 a.m. the lower paths were packed, but the upper trail stays peaceful.',
      'Eikan-dō and Tōfuku-ji are worth the crowds for their autumn views, while the moss garden at Gio-ji felt like a secret.',
      'Evenings meant wandering Pontochō alley and eating far too much yakitori. Get an ICOCA card on day one; buses and trains become effortless.',
    ],
  },
  ...CITY_GUIDES,
  ...WORLD_CITY_GUIDES,
];

/**
 * Gear page data — mirrors your Amazon storefront lists.
 *
 * SYNCING WITH AMAZON:
 * Amazon does not provide a public API for influencer storefront / idea lists,
 * so this file is the source of truth. When you add or remove items (or a
 * collection) on your Amazon storefront, update this file to match.
 *
 * List URLs (for reference):
 * - Desk Setup:  https://www.amazon.com/shop/phillipche/list/2EL6EOCFIKQ6O
 * - Recording:   https://www.amazon.com/shop/phillipche/list/1Z7YDJROMUT40
 * - PC Gear:     https://www.amazon.com/shop/phillipche/list/2IJ800MZ94A7W
 *
 * To add an item: push a new entry with name, link, and image URL.
 */

export interface GearEntry {
  name: string;
  link: string;
  image: string;
}

export interface GearCategory {
  category: string;
  listUrl: string;
  items: GearEntry[];
}

export const gearCategories: GearCategory[] = [
  {
    category: "Desk Setup",
    listUrl: "https://www.amazon.com/shop/phillipche/list/2EL6EOCFIKQ6O",
    items: [
      {
        name: "LOFREE Flow Lite 84 Keys",
        link: "https://www.lofree.co/products/flow-lite84-mechanical-keyboard?ref=phillipche",
        image: "https://m.media-amazon.com/images/I/61z5Q8bkrkL._AC_SL1500_.jpg",
      },
      {
        name: "LOFREE Flow2 Low-Profile Mechanical Keyboard",
        link: "https://www.lofree.co/products/flow-2-84-low-profile-mechanical-keyboard?ref=phillipche&variant=47210573037787",
        image: "https://m.media-amazon.com/images/I/61YNZRCJnuL._AC_SL1500_.jpg",
      },
      {
        name: "EPOMAKER x Aula F65 65% Wireless",
        link: "https://amzn.to/4rJrGdi",
        image: "https://m.media-amazon.com/images/I/613gc0JYwpL._AC_SL1500_.jpg",
      },
      {
        name: "Razer Viper V3 Pro Wireless Gaming Mouse",
        link: "https://amzn.to/4bgYdBu",
        image: "https://m.media-amazon.com/images/I/619xpFKAXPL._AC_SL1500_.jpg",
      },
      {
        name: "LiberNovo Dynamic Ergonomic Office Chair",
        link: "https://libernovo.com/products/libernovo-omni-dynamic-ergonomic-chair?ref=PHILLIPCHE",
        image: "https://m.media-amazon.com/images/I/51frk9L5dgL._AC_SL1500_.jpg",
      },
      {
        name: "FIFINE Gaming XLR/USB Microphone Kit",
        link: "https://amzn.to/4aW9c1J",
        image: "https://m.media-amazon.com/images/I/61lQRD5+66L._AC_SL1500_.jpg",
      },
      {
        name: "HyperX QuadCast S",
        link: "https://amzn.to/4sgOyAu",
        image: "https://m.media-amazon.com/images/I/61dQJkzRopL._AC_SL1500_.jpg",
      },
      {
        name: "GIGABYTE MO27Q28GR - 27in W-OLED Gaming Monitor",
        link: "https://amzn.to/3OORcPx",
        image: "https://m.media-amazon.com/images/I/81tV43avnpL._AC_SL1500_.jpg",
      },
      {
        name: "FLEXISPOT E6 3-Stage Dual Motor Electric Standing Desk",
        link: "https://amzn.to/4shFEmq",
        image: "https://m.media-amazon.com/images/I/615aO04PBYL._AC_SL1500_.jpg",
      },
      {
        name: "HUANUO FlowLift™ Dual Monitor Stand",
        link: "https://amzn.to/47gnvNA",
        image: "https://m.media-amazon.com/images/I/7182jSFV25L._AC_SL1500_.jpg",
      },
      {
        name: "SteelSeries QcK Gaming Mouse Pad",
        link: "https://amzn.to/4aW9kyf",
        image: "https://m.media-amazon.com/images/I/31AROTdFEzL._AC_SL1050_.jpg",
      },
      {
        name: "GUNMJO Pro Custom Coiled USB-C Cable",
        link: "https://amzn.to/40z0CkP",
        image: "https://m.media-amazon.com/images/I/61QcNG-4L1L._SL1500_.jpg",
      },
    ],
  },
  {
    category: "Recording Gear",
    listUrl: "https://www.amazon.com/shop/phillipche/list/1Z7YDJROMUT40",
    items: [
      {
        name: "DJI Osmo Pocket 3",
        link: "https://amzn.to/3ODz2QU",
        image: "https://m.media-amazon.com/images/I/61tukvVUMiL._AC_SL1500_.jpg",
      },
      {
        name: "ULANZI PM01 Magnetic Mount Stand",
        link: "https://amzn.to/4cl6dm4",
        image: "https://m.media-amazon.com/images/I/61OzCjisLHL._AC_SL1500_.jpg",
      },
      {
        name: "NEEWER Variable ND64-512 Filter",
        link: "https://amzn.to/4u3kB8L",
        image: "https://m.media-amazon.com/images/I/61AUJhcU+AL._AC_SL1500_.jpg",
      },
      {
        name: "DJI Osmo Mini Tripod",
        link: "https://amzn.to/4bf5rpv",
        image: "https://m.media-amazon.com/images/I/611hT2xQ1zL._AC_SL1500_.jpg",
      },
      {
        name: "DJI Osmo Pocket 3 Battery Handle",
        link: "https://amzn.to/4r234uU",
        image: "https://m.media-amazon.com/images/I/51i0zyJvAHL._AC_SL1500_.jpg",
      },
      {
        name: "Magnetic Camera Desktop Base Stand",
        link: "https://amzn.to/4l3igqu",
        image: "https://m.media-amazon.com/images/I/61ECr0pB59L._AC_SL1500_.jpg",
      },
      {
        name: "uni SD Card Reader",
        link: "https://amzn.to/4cl9IsK",
        image: "https://m.media-amazon.com/images/I/61LoxJ701dL._AC_SL1474_.jpg",
      },
      {
        name: "Amazon Basics Micro SDXC 256 GB",
        link: "https://amzn.to/4aV8DFx",
        image: "https://m.media-amazon.com/images/I/612SKs+CB1L._AC_SL1500_.jpg",
      },
    ],
  },
  {
    category: "PC Gear",
    listUrl: "https://www.amazon.com/shop/phillipche/list/2IJ800MZ94A7W",
    items: [
      {
        name: "Apple 2024 MacBook Pro M4 Pro 16-inch",
        link: "https://amzn.to/47eXoqk",
        image: "https://m.media-amazon.com/images/I/61hw7aZWYSL._AC_SL1500_.jpg",
      },
      {
        name: "Lian Li A4-H2O",
        link: "https://amzn.to/3NbQVFX",
        image: "https://m.media-amazon.com/images/I/71wYP5rp36L._AC_SL1200_.jpg",
      },
      {
        name: "AMD Ryzen 7 7800X3D",
        link: "https://amzn.to/3BvamUk",
        image: "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SL1500_.jpg",
      },
      {
        name: "ASUS Dual GeForce RTX 4070 White OC",
        link: "https://amzn.to/4kYPMxT",
        image: "https://m.media-amazon.com/images/I/81aLFs6DwgL._AC_SX466_.jpg",
      },
      {
        name: "ASRock B650I Lightning Mini-ITX Motherboard",
        link: "https://amzn.to/406k1th",
        image: "https://m.media-amazon.com/images/I/818Cq+2O3kL._AC_SL1500_.jpg",
      },
      {
        name: "Corsair Vengeance DDR5 32GB",
        link: "https://amzn.to/46s6ksk",
        image: "https://m.media-amazon.com/images/I/71AV5PQu1yL._AC_SL1500_.jpg",
      },
      {
        name: "WD_BLACK SN850X 2TB NVMe SSD",
        link: "https://amzn.to/4qYYZrD",
        image: "https://m.media-amazon.com/images/I/61jQCrK6mFL._AC_SL1500_.jpg",
      },
      {
        name: "EKWB EK-Nucleus CPU AIO CR240 Dark",
        link: "https://amzn.to/46ybLGd",
        image: "https://m.media-amazon.com/images/I/51v4vlNYXmL._SL1500_.jpg",
      },
    ],
  },
];

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "flooring" | "wallpaper" | "carpet" | "blind" | "green" | "panel";
  price: number;
  compareAt?: number;
  imageUrl: string;
  tags: string[];
}

export const products: Product[] = [
  // ---------------- Flooring ----------------
  { id: "flooring-gym-1", title: "Premium Gym Flooring", slug: "gym-flooring-1", description: "Durable rubber flooring for gyms.", category: "flooring", price: 1200, compareAt: 1500, imageUrl: "/images/flooring/Gym_Flooring_1.jpg", tags: ["gym","rubber","flooring"] },
  { id: "flooring-gym-2", title: "Shock-Absorbent Gym Flooring", slug: "gym-flooring-2", description: "Shock absorbent gym flooring.", category: "flooring", price: 1300, compareAt: 1600, imageUrl: "/images/flooring/Gym_Flooring_2.jpg", tags: ["gym","shock-absorbent"] },
  { id: "flooring-gym-3", title: "High-Performance Gym Flooring", slug: "gym-flooring-3", description: "High performance flooring for fitness spaces.", category: "flooring", price: 1250, compareAt: 1550, imageUrl: "/images/flooring/Gym_Flooring_3.jpg", tags: ["gym","performance"] },
  { id: "flooring-gym-4", title: "Luxury Gym Rubber Flooring", slug: "gym-flooring-4", description: "Premium rubber flooring for modern gyms.", category: "flooring", price: 1400, compareAt: 1700, imageUrl: "/images/flooring/Gym_Flooring_4.jpg", tags: ["gym","premium"] },

  { id: "flooring-office-1", title: "Elegant Office Flooring", slug: "office-flooring-1", description: "Elegant office flooring design.", category: "flooring", price: 1500, compareAt: 1800, imageUrl: "/images/flooring/Office_Flooring_1.jpg", tags: ["office","flooring"] },
  { id: "flooring-office-2", title: "Modern Office Flooring", slug: "office-flooring-2", description: "Modern flooring for workspaces.", category: "flooring", price: 1600, compareAt: 1900, imageUrl: "/images/flooring/Office_Flooring_2.jpg", tags: ["office","modern"] },
  { id: "flooring-office-3", title: "Durable Commercial Flooring", slug: "office-flooring-3", description: "Durable commercial flooring.", category: "flooring", price: 1650, compareAt: 2000, imageUrl: "/images/flooring/Office_Flooring_3.jpg", tags: ["office","durable"] },
  { id: "flooring-office-4", title: "Premium Workspace Flooring", slug: "office-flooring-4", description: "Premium flooring for offices.", category: "flooring", price: 1750, compareAt: 2100, imageUrl: "/images/flooring/Office_Flooring_4.jpg", tags: ["office","premium"] },

  { id: "flooring-spc-1", title: "Waterproof SPC Flooring", slug: "spc-flooring-1", description: "Waterproof SPC flooring.", category: "flooring", price: 1400, compareAt: 1700, imageUrl: "/images/flooring/SPC_Flooring_1.jpg", tags: ["spc","flooring"] },
  { id: "flooring-spc-2", title: "Luxury SPC Plank Flooring", slug: "spc-flooring-2", description: "Luxury SPC flooring.", category: "flooring", price: 1600, compareAt: 1900, imageUrl: "/images/flooring/SPC_Flooring_2.jpg", tags: ["spc","luxury"] },
  { id: "flooring-spc-3", title: "Eco-Friendly SPC Flooring", slug: "spc-flooring-3", description: "Eco-friendly SPC flooring.", category: "flooring", price: 1500, compareAt: 1800, imageUrl: "/images/flooring/SPC_Flooring_3.jpg", tags: ["spc","eco"] },
  { id: "flooring-spc-4", title: "Textured SPC Flooring", slug: "spc-flooring-4", description: "Textured SPC flooring.", category: "flooring", price: 1550, compareAt: 1850, imageUrl: "/images/flooring/SPC_Flooring_4.jpg", tags: ["spc","textured"] },

  { id: "flooring-vinyl-1", title: "Affordable Vinyl Flooring", slug: "vinyl-flooring-1", description: "Affordable and stylish vinyl flooring.", category: "flooring", price: 900, compareAt: 1200, imageUrl: "/images/flooring/Vinyl_Flooring_1.jpg", tags: ["vinyl","flooring"] },
  { id: "flooring-vinyl-2", title: "Luxury Vinyl Planks", slug: "vinyl-flooring-2", description: "Luxury vinyl planks.", category: "flooring", price: 1100, compareAt: 1400, imageUrl: "/images/flooring/Vinyl_Flooring_2.jpg", tags: ["vinyl","plank"] },
  { id: "flooring-vinyl-3", title: "Modern Vinyl Flooring", slug: "vinyl-flooring-3", description: "Modern vinyl flooring.", category: "flooring", price: 950, compareAt: 1250, imageUrl: "/images/flooring/Vinyl_Flooring_3.jpg", tags: ["vinyl","modern"] },
  { id: "flooring-vinyl-4", title: "Designer Vinyl Flooring", slug: "vinyl-flooring-4", description: "Designer vinyl flooring.", category: "flooring", price: 1200, compareAt: 1500, imageUrl: "/images/flooring/Vinyl_Flooring_4.jpg", tags: ["vinyl","designer"] },
  { id: "flooring-vinyl-5", title: "Premium Vinyl Flooring", slug: "vinyl-flooring-5", description: "High-quality vinyl flooring.", category: "flooring", price: 1250, compareAt: 1600, imageUrl: "/images/flooring/Vinyl_Flooring_5.jpg", tags: ["vinyl","luxury"] },

  { id: "flooring-wooden-1", title: "Classic Wooden Flooring", slug: "wooden-flooring-1", description: "Classic wooden flooring.", category: "flooring", price: 1800, compareAt: 2200, imageUrl: "/images/flooring/Wooden_Flooring_1.jpg", tags: ["wooden","classic"] },
  { id: "flooring-wooden-2", title: "Rustic Oak Wooden Flooring", slug: "wooden-flooring-2", description: "Rustic oak wooden flooring.", category: "flooring", price: 2000, compareAt: 2400, imageUrl: "/images/flooring/Wooden_Flooring_2.jpg", tags: ["wooden","oak"] },
  { id: "flooring-wooden-3", title: "Premium Wooden Flooring", slug: "wooden-flooring-3", description: "Premium wooden flooring.", category: "flooring", price: 2200, compareAt: 2600, imageUrl: "/images/flooring/Wooden_Flooring_3.jpg", tags: ["wooden","premium"] },
  { id: "flooring-wooden-4", title: "Modern Wooden Flooring", slug: "wooden-flooring-4", description: "Modern wooden flooring.", category: "flooring", price: 2400, compareAt: 2800, imageUrl: "/images/flooring/Wooden_Flooring_4.jpg", tags: ["wooden","modern"] },

  // ---------------- Wallpapers ----------------
  { id: "wallpaper-standard-1", title: "Elegant Grey Wallpaper", slug: "standard-wallpaper-1", description: "Elegant standard wallpaper.", category: "wallpaper", price: 1200, compareAt: 1500, imageUrl: "/images/wallpapers/Standard_Wallpaper_1.jpg", tags: ["wallpaper","standard"] },
  { id: "wallpaper-standard-2", title: "Contemporary Bedroom Wallpaper", slug: "standard-wallpaper-2", description: "Modern standard wallpaper.", category: "wallpaper", price: 1300, compareAt: 1600, imageUrl: "/images/wallpapers/Standard_Wallpaper_2.jpg", tags: ["wallpaper","modern"] },
  { id: "wallpaper-standard-3", title: "Premium Textured Wallpaper", slug: "standard-wallpaper-3", description: "Premium textured wallpaper.", category: "wallpaper", price: 1400, compareAt: 1700, imageUrl: "/images/wallpapers/Standard_Wallpaper_3.jpg", tags: ["wallpaper","textured"] },
  { id: "wallpaper-standard-4", title: "Stylish Pattern Wallpaper", slug: "standard-wallpaper-4", description: "Stylish wallpaper design.", category: "wallpaper", price: 1250, compareAt: 1550, imageUrl: "/images/wallpapers/Standard_Wallpaper_4.jpg", tags: ["wallpaper","design"] },
  { id: "wallpaper-standard-5", title: "Affordable Wall Covering", slug: "standard-wallpaper-5", description: "Affordable standard wallpaper.", category: "wallpaper", price: 1150, compareAt: 1450, imageUrl: "/images/wallpapers/Standard_Wallpaper_5.jpg", tags: ["wallpaper","affordable"] },
  { id: "wallpaper-standard-6", title: "Modern Contemporary Wallpaper", slug: "standard-wallpaper-6", description: "Contemporary wall covering.", category: "wallpaper", price: 1350, compareAt: 1650, imageUrl: "/images/wallpapers/Standard_Wallpaper_6.jpg", tags: ["wallpaper","contemporary"] },

  { id: "wallpaper-custom-1", title: "Floral Customized Wallpaper", slug: "customized-wallpaper-1", description: "Customized wallpaper with floral design.", category: "wallpaper", price: 1800, compareAt: 2200, imageUrl: "/images/wallpapers/Customized_Wallpaper_1.jpg", tags: ["wallpaper","customized","floral"] },
  { id: "wallpaper-custom-2", title: "Modern Customized Wallpaper", slug: "customized-wallpaper-2", description: "Customized wallpaper with modern patterns.", category: "wallpaper", price: 2000, compareAt: 2500, imageUrl: "/images/wallpapers/Customized_Wallpaper_2.jpg", tags: ["wallpaper","customized","modern"] },
  { id: "wallpaper-custom-3", title: "Luxury Customized Wallpaper", slug: "customized-wallpaper-3", description: "Luxury customized wallpaper.", category: "wallpaper", price: 2200, compareAt: 2700, imageUrl: "/images/wallpapers/Customized_Wallpaper_3.jpg", tags: ["wallpaper","customized","luxury"] },
  { id: "wallpaper-custom-4", title: "Elegant Customized Wallpaper", slug: "customized-wallpaper-4", description: "Elegant customized wallpaper.", category: "wallpaper", price: 2100, compareAt: 2600, imageUrl: "/images/wallpapers/Customized_Wallpaper_4.jpg", tags: ["wallpaper","customized","elegant"] },
  { id: "wallpaper-custom-5", title: "Exclusive Customized Wallpaper", slug: "customized-wallpaper-5", description: "Exclusive customized wallpaper.", category: "wallpaper", price: 1900, compareAt: 2300, imageUrl: "/images/wallpapers/Customized_Wallpaper_5.jpg", tags: ["wallpaper","customized","exclusive"] },
  { id: "wallpaper-custom-6", title: "Designer Customized Wallpaper", slug: "customized-wallpaper-6", description: "Designer customized wallpaper.", category: "wallpaper", price: 2000, compareAt: 2500, imageUrl: "/images/wallpapers/Customized_Wallpaper_6.jpg", tags: ["wallpaper","customized","designer"] },

  // ---------------- Carpets ----------------
  { id: "carpet-tile-1", title: "Durable Carpet Tiles", slug: "carpet-tiles-1", description: "Durable carpet tiles for office use.", category: "carpet", price: 950, compareAt: 1200, imageUrl: "/images/carpets/Carpet_Tiles_1.jpg", tags: ["carpet","tiles","office"] },
  { id: "carpet-tile-2", title: "Modern Carpet Tiles", slug: "carpet-tiles-2", description: "Modern carpet tiles design.", category: "carpet", price: 1000, compareAt: 1300, imageUrl: "/images/carpets/Carpet_Tiles_2.jpg", tags: ["carpet","tiles","modern"] },
  { id: "carpet-tile-3", title: "Premium Office Carpet Tiles", slug: "carpet-tiles-3", description: "Premium office carpet tiles.", category: "carpet", price: 1100, compareAt: 1400, imageUrl: "/images/carpets/Carpet_Tiles_3.jpg", tags: ["carpet","tiles","premium"] },
  { id: "carpet-tile-4", title: "Stylish Modular Carpet Tiles", slug: "carpet-tiles-4", description: "Stylish modular carpet tiles.", category: "carpet", price: 1200, compareAt: 1500, imageUrl: "/images/carpets/Carpet_Tiles_4.jpg", tags: ["carpet","tiles","stylish"] },
  { id: "carpet-custom-1", title: "Handcrafted Customized Carpet", slug: "customized-carpet-1", description: "Handcrafted customized carpet.", category: "carpet", price: 2800, compareAt: 3500, imageUrl: "/images/carpets/Customized_Carpet_1.jpg", tags: ["carpet","customized","luxury"] },
  { id: "carpet-custom-2", title: "Luxury Customized Carpet", slug: "customized-carpet-2", description: "Luxury customized carpet design.", category: "carpet", price: 3000, compareAt: 3800, imageUrl: "/images/carpets/Customized_Carpet_2.jpg", tags: ["carpet","customized","premium"] },
  { id: "carpet-custom-3", title: "Premium Handmade Carpet", slug: "customized-carpet-3", description: "Premium handmade customized carpet.", category: "carpet", price: 3200, compareAt: 4000, imageUrl: "/images/carpets/Customized_Carpet_3.jpg", tags: ["carpet","customized","handmade"] },
  { id: "carpet-custom-4", title: "Designer Customized Carpet", slug: "customized-carpet-4", description: "Designer customized carpet.", category: "carpet", price: 2900, compareAt: 3600, imageUrl: "/images/carpets/Customized_Carpet_4.jpg", tags: ["carpet","customized","designer"] },
  { id: "carpet-custom-5", title: "Exclusive Customized Carpet", slug: "customized-carpet-5", description: "Exclusive customized carpet.", category: "carpet", price: 3100, compareAt: 3900, imageUrl: "/images/carpets/Customized_Carpet_5.jpg", tags: ["carpet","customized","exclusive"] },
  { id: "carpet-wall-1", title: "Comfort Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-1", description: "Comfortable wall-to-wall carpet.", category: "carpet", price: 2200, compareAt: 2800, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_1.jpg", tags: ["carpet","wall-to-wall"] },
  { id: "carpet-wall-2", title: "Elegant Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-2", description: "Elegant wall-to-wall carpet.", category: "carpet", price: 2300, compareAt: 2900, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_2.jpg", tags: ["carpet","elegant"] },
  { id: "carpet-wall-3", title: "Premium Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-3", description: "Premium wall-to-wall carpet.", category: "carpet", price: 2500, compareAt: 3100, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_3.jpg", tags: ["carpet","premium"] },
  { id: "carpet-wall-4", title: "Designer Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-4", description: "Designer wall-to-wall carpet.", category: "carpet", price: 2400, compareAt: 3000, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_4.jpg", tags: ["carpet","designer"] },
  { id: "carpet-wall-5", title: "Stylish Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-5", description: "Stylish wall-to-wall carpet.", category: "carpet", price: 2100, compareAt: 2700, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_5.jpg", tags: ["carpet","stylish"] },
  { id: "carpet-wall-6", title: "Exclusive Wall-to-Wall Carpet", slug: "wall-to-wall-carpet-6", description: "Exclusive wall-to-wall carpet.", category: "carpet", price: 2600, compareAt: 3200, imageUrl: "/images/carpets/Wall_to_Wall_Carpet_6.jpg", tags: ["carpet","exclusive"] },

  // ---------------- Blinds ----------------
  { id: "blind-roller-1", title: "Premium Roller Blinds", slug: "roller-blinds-1", description: "Premium roller blinds.", category: "blind", price: 1300, compareAt: 1700, imageUrl: "/images/blinds/Roller_Blinds_1.jpg", tags: ["blinds","roller"] },
  { id: "blind-roller-2", title: "Contemporary Roller Blinds", slug: "roller-blinds-2", description: "Contemporary roller blinds.", category: "blind", price: 1350, compareAt: 1750, imageUrl: "/images/blinds/Roller_Blinds_2.jpg", tags: ["blinds","roller"] },
  { id: "blind-roller-3", title: "Elegant Roller Blinds", slug: "roller-blinds-3", description: "Elegant roller blinds.", category: "blind", price: 1400, compareAt: 1800, imageUrl: "/images/blinds/Roller_Blinds_3.jpg", tags: ["blinds","roller"] },
  { id: "blind-roller-4", title: "Designer Roller Blinds", slug: "roller-blinds-4", description: "Designer roller blinds.", category: "blind", price: 1450, compareAt: 1850, imageUrl: "/images/blinds/Roller_Blinds_4.jpg", tags: ["blinds","roller"] },
  { id: "blind-roller-5", title: "Exclusive Roller Blinds", slug: "roller-blinds-5", description: "Exclusive roller blinds.", category: "blind", price: 1500, compareAt: 1900, imageUrl: "/images/blinds/Roller_Blinds_5.jpg", tags: ["blinds","roller"] },
  { id: "blind-roller-6", title: "Stylish Roller Blinds", slug: "roller-blinds-6", description: "Stylish roller blinds.", category: "blind", price: 1550, compareAt: 1950, imageUrl: "/images/blinds/Roller_Blinds_6.jpg", tags: ["blinds","roller"] },
  { id: "blind-roman-1", title: "Elegant Roman Blinds", slug: "roman-blinds-1", description: "Elegant Roman blinds.", category: "blind", price: 1500, compareAt: 2000, imageUrl: "/images/blinds/Roman_Blinds_1.jpg", tags: ["blinds","roman"] },
  { id: "blind-roman-2", title: "Premium Roman Blinds", slug: "roman-blinds-2", description: "Premium Roman blinds.", category: "blind", price: 1550, compareAt: 2050, imageUrl: "/images/blinds/Roman_Blinds_2.jpg", tags: ["blinds","roman"] },
  { id: "blind-roman-3", title: "Stylish Roman Blinds", slug: "roman-blinds-3", description: "Stylish Roman blinds.", category: "blind", price: 1600, compareAt: 2100, imageUrl: "/images/blinds/Roman_Blinds_3.jpg", tags: ["blinds","roman"] },
  { id: "blind-roman-4", title: "Designer Roman Blinds", slug: "roman-blinds-4", description: "Designer Roman blinds.", category: "blind", price: 1650, compareAt: 2150, imageUrl: "/images/blinds/Roman_Blinds_4.jpg", tags: ["blinds","roman"] },
  { id: "blind-roman-5", title: "Exclusive Roman Blinds", slug: "roman-blinds-5", description: "Exclusive Roman blinds.", category: "blind", price: 1700, compareAt: 2200, imageUrl: "/images/blinds/Roman_Blinds_5.jpg", tags: ["blinds","roman"] },
  { id: "blind-vertical-1", title: "Functional Vertical Blinds", slug: "vertical-blinds-1", description: "Functional vertical blinds.", category: "blind", price: 1200, compareAt: 1600, imageUrl: "/images/blinds/Vertical_Blinds_1.jpg", tags: ["blinds","vertical"] },
  { id: "blind-vertical-2", title: "Modern Vertical Blinds", slug: "vertical-blinds-2", description: "Modern vertical blinds.", category: "blind", price: 1250, compareAt: 1650, imageUrl: "/images/blinds/Vertical_Blinds_2.jpg", tags: ["blinds","vertical"] },
  { id: "blind-vertical-3", title: "Elegant Vertical Blinds", slug: "vertical-blinds-3", description: "Elegant vertical blinds.", category: "blind", price: 1300, compareAt: 1700, imageUrl: "/images/blinds/Vertical_Blinds_3.jpg", tags: ["blinds","vertical"] },
  { id: "blind-vertical-4", title: "Premium Vertical Blinds", slug: "vertical-blinds-4", description: "Premium vertical blinds.", category: "blind", price: 1350, compareAt: 1750, imageUrl: "/images/blinds/Vertical_Blinds_4.jpg", tags: ["blinds","vertical"] },
  { id: "blind-vertical-5", title: "Designer Vertical Blinds", slug: "vertical-blinds-5", description: "Designer vertical blinds.", category: "blind", price: 1400, compareAt: 1800, imageUrl: "/images/blinds/Vertical_Blinds_5.jpg", tags: ["blinds","vertical"] },
  { id: "blind-zebra-1", title: "Premium Zebra Blinds", slug: "zebra-blinds-1", description: "Premium zebra blinds.", category: "blind", price: 1800, compareAt: 2500, imageUrl: "/images/blinds/Zebra_Blinds_1.jpg", tags: ["blinds","zebra"] },
  { id: "blind-zebra-2", title: "Contemporary Zebra Blinds", slug: "zebra-blinds-2", description: "Contemporary zebra blinds.", category: "blind", price: 1850, compareAt: 2550, imageUrl: "/images/blinds/Zebra_Blinds_2.jpg", tags: ["blinds","zebra"] },
  { id: "blind-zebra-3", title: "Modern Zebra Blinds", slug: "zebra-blinds-3", description: "Modern zebra blinds.", category: "blind", price: 1900, compareAt: 2600, imageUrl: "/images/blinds/Zebra_Blinds_3.jpg", tags: ["blinds","zebra"] },
  { id: "blind-zebra-4", title: "Stylish Zebra Blinds", slug: "zebra-blinds-4", description: "Stylish zebra blinds.", category: "blind", price: 1950, compareAt: 2650, imageUrl: "/images/blinds/Zebra_Blinds_4.jpg", tags: ["blinds","zebra"] },

  // ---------------- Greenery ----------------
  { id: "green-grass-1", title: "Natural Artificial Grass", slug: "artificial-grass-1", description: "Natural-looking artificial grass.", category: "green", price: 900, compareAt: 1200, imageUrl: "/images/greenery/Artificial_Grass_1.jpg", tags: ["green","grass","artificial"] },
  { id: "green-grass-2", title: "Durable Artificial Grass", slug: "artificial-grass-2", description: "Durable artificial grass.", category: "green", price: 1000, compareAt: 1300, imageUrl: "/images/greenery/Artificial_Grass_2.jpg", tags: ["green","grass"] },
  { id: "green-grass-3", title: "Premium Artificial Grass", slug: "artificial-grass-3", description: "Premium artificial grass.", category: "green", price: 1100, compareAt: 1400, imageUrl: "/images/greenery/Artificial_Grass_3.jpg", tags: ["green","grass"] },
  { id: "green-grass-4", title: "High-Quality Artificial Grass", slug: "artificial-grass-4", description: "High-quality artificial grass.", category: "green", price: 1150, compareAt: 1450, imageUrl: "/images/greenery/Artificial_Grass_4.jpg", tags: ["green","grass"] },
  { id: "green-vertical-1", title: "Elegant Vertical Grass Wall", slug: "vertical-grass-wall-1", description: "Elegant vertical grass wall.", category: "green", price: 2500, compareAt: 3000, imageUrl: "/images/greenery/Vertical_Grass_Wall_1.jpg", tags: ["green","vertical","wall"] },
  { id: "green-vertical-2", title: "Modern Vertical Grass Wall", slug: "vertical-grass-wall-2", description: "Modern vertical grass wall.", category: "green", price: 2600, compareAt: 3100, imageUrl: "/images/greenery/Vertical_Grass_Wall_2.jpg", tags: ["green","vertical","wall"] },
  { id: "green-vertical-3", title: "Premium Vertical Grass Wall", slug: "vertical-grass-wall-3", description: "Premium vertical grass wall.", category: "green", price: 2700, compareAt: 3200, imageUrl: "/images/greenery/Vertical_Grass_Wall_3.jpg", tags: ["green","vertical","wall"] },
  { id: "green-vertical-4", title: "Designer Vertical Grass Wall", slug: "vertical-grass-wall-4", description: "Designer vertical grass wall.", category: "green", price: 2800, compareAt: 3300, imageUrl: "/images/greenery/Vertical_Grass_Wall_4.jpg", tags: ["green","vertical","wall"] },
  { id: "green-vertical-5", title: "Exclusive Vertical Grass Wall", slug: "vertical-grass-wall-5", description: "Exclusive vertical grass wall.", category: "green", price: 2900, compareAt: 3400, imageUrl: "/images/greenery/Vertical_Grass_Wall_5.jpg", tags: ["green","vertical","wall"] },

  // ---------------- Panels ----------------
  { id: "panel-fluted-1", title: "Modern Fluted Wall Panel", slug: "fluted-panels-1", description: "Modern fluted wall panels.", category: "panel", price: 1600, compareAt: 2000, imageUrl: "/images/panels/Fluted_Panels_1.jpg", tags: ["panel","fluted"] },
  { id: "panel-fluted-2", title: "Stylish Fluted Wall Panel", slug: "fluted-panels-2", description: "Stylish fluted wall panels.", category: "panel", price: 1650, compareAt: 2050, imageUrl: "/images/panels/Fluted_Panels_2.jpg", tags: ["panel","fluted"] },
  { id: "panel-fluted-3", title: "Premium Fluted Wall Panel", slug: "fluted-panels-3", description: "Premium fluted wall panels.", category: "panel", price: 1700, compareAt: 2100, imageUrl: "/images/panels/Fluted_Panels_3.jpg", tags: ["panel","fluted"] },
  { id: "panel-fluted-4", title: "Designer Fluted Wall Panel", slug: "fluted-panels-4", description: "Designer fluted wall panels.", category: "panel", price: 1750, compareAt: 2150, imageUrl: "/images/panels/Fluted_Panels_4.jpg", tags: ["panel","fluted"] },
  { id: "panel-fluted-5", title: "Exclusive Fluted Wall Panel", slug: "fluted-panels-5", description: "Exclusive fluted wall panels.", category: "panel", price: 1800, compareAt: 2200, imageUrl: "/images/panels/Fluted_Panels_5.jpg", tags: ["panel","fluted"] },
  { id: "panel-pvc-1", title: "Durable PVC Panel Sheet", slug: "pvc-panels-1", description: "Durable PVC wall panel.", category: "panel", price: 1100, compareAt: 1500, imageUrl: "/images/panels/PVC_Panels_1.jpg", tags: ["panel","pvc"] },
  { id: "panel-pvc-2", title: "Modern PVC Panel Sheet", slug: "pvc-panels-2", description: "Modern PVC wall panel.", category: "panel", price: 1150, compareAt: 1550, imageUrl: "/images/panels/PVC_Panels_2.jpg", tags: ["panel","pvc"] },
  { id: "panel-pvc-3", title: "Premium PVC Panel Sheet", slug: "pvc-panels-3", description: "Premium PVC wall panel.", category: "panel", price: 1200, compareAt: 1600, imageUrl: "/images/panels/PVC_Panels_3.jpg", tags: ["panel","pvc"] },
  { id: "panel-pvc-4", title: "Exclusive PVC Panel Sheet", slug: "pvc-panels-4", description: "Exclusive PVC wall panel.", category: "panel", price: 1250, compareAt: 1650, imageUrl: "/images/panels/PVC_Panels_4.jpg", tags: ["panel","pvc"] },
  { id: "panel-marble-1", title: "Luxurious UV Marble Sheet", slug: "uv-marble-sheet-1", description: "Luxurious marble finish sheet.", category: "panel", price: 2800, compareAt: 3500, imageUrl: "/images/panels/VV_Marble_Sheets_1.jpg", tags: ["panel","marble"] },
  { id: "panel-marble-2", title: "Premium UV Marble Sheet", slug: "uv-marble-sheet-2", description: "Premium marble finish sheet.", category: "panel", price: 2900, compareAt: 3600, imageUrl: "/images/panels/VV_Marble_Sheets_2.jpg", tags: ["panel","marble"] },
  { id: "panel-marble-3", title: "Designer UV Marble Sheet", slug: "uv-marble-sheet-3", description: "Designer marble finish sheet.", category: "panel", price: 3000, compareAt: 3700, imageUrl: "/images/panels/VV_Marble_Sheets_3.jpg", tags: ["panel","marble"] },
  { id: "panel-marble-4", title: "Exclusive UV Marble Sheet", slug: "uv-marble-sheet-4", description: "Exclusive marble finish sheet.", category: "panel", price: 3100, compareAt: 3800, imageUrl: "/images/panels/VV_Marble_Sheets_4.jpg", tags: ["panel","marble"] },
  { id: "panel-marble-5", title: "Stylish UV Marble Sheet", slug: "uv-marble-sheet-5", description: "Stylish marble finish sheet.", category: "panel", price: 3200, compareAt: 3900, imageUrl: "/images/panels/VV_Marble_Sheets 5.jpg", tags: ["panel","marble"] },
];

export const categories = [
  { id: "flooring", name: "Flooring", icon: "layers" },
  { id: "wallpaper", name: "Wallpaper", icon: "wallpaper" },
  { id: "carpet", name: "Carpets", icon: "grid" },
  { id: "blind", name: "Window Blinds", icon: "blinds" },
  { id: "green", name: "Green Solutions", icon: "leaf" },
  { id: "panel", name: "Panels & Sheets", icon: "square" }
];

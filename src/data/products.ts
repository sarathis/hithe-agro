import { Product } from "../types/DataTypes";
import yardlong from "../images/yardlong.png";
import broccoli from "../images/broccoli.png";
import zucchini from "../images/zucchini.png";
import garlic from "../images/garlic.png";
import redcabbage from "../images/redcabbage.png";
import favabeans from "../images/favabeans.png";

export const productsData: Product[] = [
  {
    id: 1,
    title: "Asparagus Beans",
    shortDesc: "Asparagus beans (also known as yardlong beans or snake beans).",
    longDescBullets: [
      "Maintaining in the temperature  7°C - 10°C (45°F - 50°F).",
      "Pre-cooling to remove field heat immediately after harvesting.",
      "Harvesting early in the morning when temperatures are cool.",
      "Choosing beans that are firm, crisp, and of uniform color (typically green and glossy).",
      "Sorting carefully. Removing beans that are damaged, diseased, bruised, or over-mature.",
      "Reefer containers will be used to have settings to control humidity.",
      "Ooty Asparagus beans have a post-harvest shelf life of 10 to 14 days."
    ],
    image: yardlong,
    packSizes: ["5kg", "10kg"],
    hsCode: "0703"
  },
  {
    id:2,
    title: "Broccoli",
    shortDesc: "Tender okra picked early morning, pre-cooled to preserve quality.",
    longDescBullets: [
      "Harvest window: early morning to reduce heat stress",
      "Temperature for transport: 8–10°C; RH 90–95%",
      "Pack options: 5kg ventilated corrugated cartons",
      "Shelf life: 7–10 days with cold chain",
      "Quality: Sorted by size and free from blemishes",
      "HS Code: 0709"
    ],
    image: broccoli,
    packSizes: ["5kg"],
    hsCode: "0709"
  },
  {
    id: 3,
    title: "Zucchini Green",
    shortDesc: "Fresh drumsticks — crisp and well-trimmed for export quality.",
    longDescBullets: [
      "Origin: Local Nilgiris farms",
      "Transport temp: 10–12°C",
      "Packaging: Bundled and packed in ventilated cartons",
      "Shelf life: 10–14 days with cold chain",
      "Quality: Washed, trimmed and graded",
      "HS Code: 0709"
    ],
    image:zucchini,
    packSizes: ["10kg"],
    hsCode: "0709"
  },
  {
    id: 4,
    title: "Garlic",
    shortDesc: "Fresh drumsticks — crisp and well-trimmed for export quality.",
    longDescBullets: [
      "Origin: Local Nilgiris farms",
      "Transport temp: 10–12°C",
      "Packaging: Bundled and packed in ventilated cartons",
      "Shelf life: 10–14 days with cold chain",
      "Quality: Washed, trimmed and graded",
      "HS Code: 0709"
    ],
    image: garlic,
    packSizes: ["10kg"],
    hsCode: "0709"
  },
  {
    id: 5,
    title: "Cabbage Red",
    shortDesc: "Fresh drumsticks — crisp and well-trimmed for export quality.",
    longDescBullets: [
      "Origin: Local Nilgiris farms",
      "Transport temp: 10–12°C",
      "Packaging: Bundled and packed in ventilated cartons",
      "Shelf life: 10–14 days with cold chain",
      "Quality: Washed, trimmed and graded",
      "HS Code: 0709"
    ],
    image: redcabbage,
    packSizes: ["10kg"],
    hsCode: "0709"
  },
  {
    id: 6,
    title: "Fava Beans",
    shortDesc: "Fresh drumsticks — crisp and well-trimmed for export quality.",
    longDescBullets: [
      "Origin: Local Nilgiris farms",
      "Transport temp: 10–12°C",
      "Packaging: Bundled and packed in ventilated cartons",
      "Shelf life: 10–14 days with cold chain",
      "Quality: Washed, trimmed and graded",
      "HS Code: 0709"
    ],
    image: favabeans,
    packSizes: ["10kg"],
    hsCode: "0709"
  }
];

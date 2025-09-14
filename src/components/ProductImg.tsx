import { bottleImages } from "../../src/utils/chemicals";

import useProductStore from "../store";
import type { productDetails } from "./ProductCard";

const topLen = {
  "Speciality Chemicals": "top-62",
  "Toilet and Washroom": "top-64",
  "Kitchen & Catering Chemicals": "top-62",
  "Paint Strippers": "top-62",
  "Drain Chemicals": "top-62",
  "Food Processing": "top-60  ",
  "Hand Cleaners": "top-62",
  "Automotive Chemicals": "top-60",
  "Building Chemicals": "top-64",
  "Floor Chemicals": "top-59",
};

const ProductImg: React.FC<{ product: productDetails }> = ({ product }) => {
  const { selectedChemical } = useProductStore();
  return (
    <div className="relative w-[280px] flex   mx-auto">
      {/* Bottle Image */}
      <img
        src={bottleImages[selectedChemical as keyof typeof bottleImages]}
        alt="Product bottle"
        className="w-fit rounded-xl overflow-hidden h-auto"
      />
      {/* Label Overlay */}
      <div
        className={`w-[85%] py-2 rounded-xl flex flex-col gap-y-2 absolute ${
          topLen[selectedChemical as keyof typeof topLen] || "top-62"
        } left-1/2 -translate-x-1/2 z-10 px-4 h-auto`}
        style={{
          boxShadow: 'var(--shadow)',
          border: '1px solid rgba(255,255,255,.08)',
          backgroundColor: 'var(--panel)',
          borderRadius: 'var(--radius)'
        }}
      >
        <div className="flex justify-between">
          <span className="text-nowrap text-sm font-medium p-1 rounded theme-text" style={{ backgroundColor: 'var(--brand-2)' }}>
            {product.code}
          </span>
          <span className="text-nowrap max-w-40 overflow-hidden text-ellipsis text-sm theme-text-dim">
            {selectedChemical}
          </span>
        </div>
        <div className="flex items-start flex-col">
          {product.highlights.map((val: string) => {
            return <li className="text-xs theme-text-dim text-nowrap">{val}</li>;
          })}
        </div>

        <div className="border flex gap-1 rounded-full px-2 py-1 w-fit" style={{ backgroundColor: 'var(--brand)' }}>
          <span className="text-[8px] font-medium text-white">5L</span>
          <span className="text-[8px] font-medium text-white">10L</span>
          <span className="text-[8px] font-medium text-white">25L</span>
          <span className="text-[8px] font-medium text-white">200L</span>
          <span className="text-[8px] font-medium text-white">1000L</span>
        </div>
      </div>
    </div>
  );
};

export default ProductImg;

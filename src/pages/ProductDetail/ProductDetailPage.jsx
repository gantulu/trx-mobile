import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductOptions from "../../components/product/ProductOptions";
import ProductDescription from "../../components/product/ProductDescription";
import ProductDeliveryInfo from "../../components/product/ProductDeliveryInfo";

export default function ProductDetailPage() {
  return (
    <div className="page-composition">
      <ProductGallery />
      <ProductInfo />
      <ProductOptions />
      <ProductDescription />
      <ProductDeliveryInfo />
    </div>
  );
}

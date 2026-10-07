import { useParams } from "react-router";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductOptions from "../../components/product/ProductOptions";
import ProductDescription from "../../components/product/ProductDescription";
import ProductDeliveryInfo from "../../components/product/ProductDeliveryInfo";

export default function ProductDetailPage() {
  const { productId } = useParams();
  return <div className="page-composition"><ProductGallery /><ProductInfo productId={productId} /><ProductOptions /><ProductDescription productId={productId} /><ProductDeliveryInfo /></div>;
}

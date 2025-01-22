import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import {
    Trophy ,
    Airplay,
    CloudLightning,
    Shirt ,
    PartyPopper ,
    Gem ,
    ScanFace  ,
    Award ,
    ChevronLeftIcon, 
    ChevronRightIcon,
    ShoppingBasket,
    WashingMachine,
    Images,
    Heater
  } from "lucide-react";
  import { Card } from "@/components/ui/card";
  import { CardContent } from "@/components/ui/card";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import {
    fetchAllFilteredProducts,fetchProductDetails,
  } from "@/store/shop/products-slice";
import { useSelector } from "react-redux";
  import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";

import { getFeatureImages } from "@/store/common-slice";
const categoriesWithIcon = [
    { id: "tops", label: "Tops & T-Shirts" , icon: Shirt},
    { id: "dresses", label: "Dresses & Jumpsuits", icon: CloudLightning  },
    { id: "bottom-wear", label: "Bottom Wear", icon: Award },
    { id: "ethnic-wear", label: "Ethnic Wear" , icon: Gem},
    { id: "lingerie", label: "Lingerie & Innerwear" ,icon: ScanFace  },
    { id: "active-sportswear", label: "Active & Sportswear" , icon: Trophy},
    { id: "festive-wear", label: "Festive & Traditional Wear" , icon: PartyPopper },
  
  ];
  
const brandsWithIcon = [
    { id: "nike", label: "Nike", icon: Shirt },
    { id: "adidas", label: "Adidas", icon: WashingMachine },
    { id: "puma", label: "Puma", icon: ShoppingBasket  },
    { id: "levi", label: "Levi's", icon: Airplay },
    { id: "zara", label: "Zara", icon: Images },
    { id: "h&m", label: "H&M", icon: Heater },
  ];
function ShoppingHome(){

    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    const { user } = useSelector((state) => state.auth);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const { featureImageList } = useSelector((state) => state.commonFeature);

    const { toast } = useToast();
const slides=[bannerOne,bannerTwo,bannerThree]
const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );

  const navigate = useNavigate();
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }
  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }
  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);
useEffect(() => {
  if (productDetails !== null) setOpenDetailsDialog(true);
}, [productDetails]);
useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button variant="outline"  size="icon"
         onClick={() =>
          setCurrentSlide(
            (prevSlide) =>
              (prevSlide - 1 + featureImageList.length) %
              featureImageList.length
          )
          } className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80">
            <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline"  size="icon" 
         onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80">
            <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div> 
      <section className="py-12 bg-gray-50 ">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {categoriesWithIcon.map((categoryItem) => (
              <Card 
              onClick={() =>
                handleNavigateToListingPage(categoryItem, "category")
              }
              className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
      </section>
      <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandsWithIcon.map((brandItem) => (
              <Card 
              onClick={() => handleNavigateToListingPage(brandItem, "brand")}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
          </div>
      </section>
      
<ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
     />
      </div>
  );
}
export default ShoppingHome;
import React from 'react'
import CarouselRelatedProducts from '../components/relatedproducts';
import product2 from "../assets/image 2.svg";
import product3 from "../assets/image 1.svg";
import product4 from "../assets/Group 75.svg";
import product5 from "../assets/image 8.svg";
import product6 from "../assets/image 9.svg";
import product7 from "../assets/product-20-320x320 1.svg";
import product8 from "../assets/product-21-320x320 1.svg";
import product9 from "../assets/image 10.svg";
import ShoppingCartTable from '../components/shoppingcarttable';


const imagesArray = [
  { url: product2, alt: "Image 2",productname:"Beach Spider Lily",price:"$129.00" },
  { url: product3, alt: "Image 3",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product4, alt: "Image 4",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product5, alt: "Image 5",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product6, alt: "Image 6",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product7, alt: "Image 7",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product8, alt: "Image 8",productname:"Beach Spider Lily",price:"$129.00"  },
  { url: product9, alt: "Image 9",productname:"Beach Spider Lily",price:"$129.00"  },
];

const Plantcare = () => {
  return (
    <div>
      <ShoppingCartTable/>
      <CarouselRelatedProducts images={imagesArray} heading={"You may be interested in"}/>
    </div>
  )
}

export default Plantcare
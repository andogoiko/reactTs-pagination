import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product/productStyle";
import Product from "../../models/Product";
export default function ProductMeta({ product, matches } : { product : Product, matches : boolean }) {
    return (
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
    );
}
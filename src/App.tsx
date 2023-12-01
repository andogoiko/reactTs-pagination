import { useState } from 'react';
import logo from './logo.svg';
import AppPagination from './components/pagination/pagination-comp';
import './App.css';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import SingleProduct from './components/products/singleProduct';
import SingleProductDesktop from './components/products/singleProductDesktop';
import Product from './models/Product';

function App() {


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [products, setProducts] = useState<Product[]>([]);

  const renderProducts = products.map((product : Product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      >

      {matches ? (
        <SingleProduct product={product} matches={matches}/>
      ) : (
        <SingleProductDesktop product={product} matches={matches}/>
      )}

    </Grid>
  ))

  return (
    <Container className="App-header">
      
      <Grid
      container
      spacing={{ xs: 2, md: 3}}
      justifyContent={"center"}
      sx={{ margin: "20px 4px 10px 4px" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      >
          {renderProducts}
    </Grid>
      

          
        <AppPagination setProducts={(p: Product[]) => setProducts(p)} />
    </Container>
  );
}

export default App;

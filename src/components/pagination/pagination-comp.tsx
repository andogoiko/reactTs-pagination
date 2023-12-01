import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Product from "../../models/Product";
import service from "../../services/dataReader";


const pageSize = 3;

interface AppPaginationProps {
    setProducts: (products: Product[]) => void;
}

interface ServiceResponse {
    count: number;
    data: Product[];
  }

export default function AppPagination({ setProducts }: AppPaginationProps){

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    });

    useEffect(() => {
        service.getData({from: pagination.from, to: pagination.to}).then(response  => {
            const serviceResponse = response as ServiceResponse;

            setPagination({...pagination, count: serviceResponse.count});

            setProducts(serviceResponse.data);
            console.log(response);
        })
    }, [pagination.from, pagination.to]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
      
        setPagination({ ...pagination, from: from, to: to });
      };

    return(
        <Box justifyContent={"center"} alignItems={"center"} display={"flex"}
            sx={{
                margin: "20px 0px"
            }}>
            <Pagination 
                color="primary"
                count = {Math.ceil(pagination.count /pageSize)}
                onChange={handlePageChange}
            />
        </Box>
    );
}
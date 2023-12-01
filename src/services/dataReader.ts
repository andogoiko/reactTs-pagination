import { products } from "../data/data";

const service = {
    getData: ({ from, to }: { from: number; to: number }) => {
        return new Promise((resolve, reject) =>{

            const data = products.slice(from, to);

            resolve({
                count: products.length,
                data: data
            })
        })
    }
}

export default service;
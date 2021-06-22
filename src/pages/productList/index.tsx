import React, { useEffect, useState } from "react";
import styled from 'styled-components'
const { Card, CardContent, Text, Spacer, } = require('vcc-ui');

export type productListType = {
    id: String,
    bodyType: String,
    modelName: String,
    modelType: String,
    imageUrl: string,
}
const Wrapper = styled.section`

`;
const ProductionList = () => {
    const [products, setProducts] = useState<Array<productListType>>([]);
    useEffect(() => {
        const res = require('../../assets/api/cars.json');
        setProducts(res);
    }, [])
    return (
        <Wrapper>
            {
                products.map((p: productListType) => {
                    return (
                        <Card key={p.id}>
                            <div>{p.bodyType}</div>
                            <div>{p.modelName} + {p.modelType}</div>
                            <CardContent>
                               <img src={`../../${p.imageUrl}`} />
                            </CardContent>
                        </Card>
                    )
                })
            }
        </Wrapper>

    );
}

export default ProductionList;
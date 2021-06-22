import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Swiper from '../../components/Swiper'

const { SelectInput } = require('vcc-ui')
const Wrapper = styled.section`
    .pl-filter{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
    }
    #vcc-ui-select-input-1{
        margin-left: 10px;
        width: 200px;
    }
`;
export type productListType = {
    id: string,
    bodyType: string,
    modelName: string,
    modelType: string,
    imageUrl: string,
}
const ProductList = () => {
    const [initProducts, setInitProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [isPc, setIsPc] = useState(false);
    const [filterValue, setFilterValue] = useState(0);
    const [bodyTypeList, setBodyTypeList] = useState([]);
    useEffect(() => {
        const res = require('../../assets/api/cars.json');
        setInitProducts(res);
        console.log(res);
        const typeList: Array<any> = ['all'];
        res.map((r: productListType) => {
            if (!typeList.includes(r.bodyType)) {
                typeList.push(r.bodyType);
            }
        })
        setBodyTypeList(typeList);
        setProducts(res);
    }, [])
    useEffect(() => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            setSlidesPerView('1.2')
            setIsPc(false);
        } else {
            setSlidesPerView('4')
            setIsPc(true);
        }
        window.onresize = () => {
            if (window.matchMedia("(max-width: 767px)").matches) {
                setSlidesPerView('1.2')
                setIsPc(false);
            } else {
                setSlidesPerView('4')
                setIsPc(true);
            }
        }
        return () => {

        }
    }, [])
    const filterOnChange = (e) => {
        const value = e.target.value;
        setFilterValue(value);
        setProducts(value === 'all' ? initProducts : initProducts.filter((i: productListType) => i.bodyType === value))
    }
    return (
        <Wrapper>
            <div className="pl-filter">
                <span>BodyType: </span><SelectInput value={filterValue} onChange={e => filterOnChange(e)}>
                    {
                        bodyTypeList.map((b: string) => {
                            return (<option key={b} value={b}>{b}</option>)
                        })
                    }
                </SelectInput>
            </div>
            <Swiper products={products} isPc={isPc} slidesPerView={slidesPerView} />
        </Wrapper>

    );
}

export default ProductList;
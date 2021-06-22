import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Swiper from '../../components/Swiper'
const Wrapper = styled.section`

`;
const ProductionList = () => {
    const [products, setProducts] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [isPc, setIsPc] = useState(false);
    useEffect(() => {
        const res = require('../../assets/api/cars.json');
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
    return (
        <Wrapper>
            <Swiper products={products} isPc={isPc} slidesPerView={slidesPerView} />
        </Wrapper>

    );
}

export default ProductionList;
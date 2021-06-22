import React from "react";
import styled from 'styled-components'
import 'swiper/swiper.scss';
import {
    Link,
} from "react-router-dom";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Navigation, Pagination
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const { Swiper, SwiperSlide } = require('swiper/react');

const { Card } = require('vcc-ui');
const chevron = require('../assets/chevron-circled.svg')
const chevronSmall = require('../assets/chevron-small.svg')
export type productListType = {
    id: string,
    bodyType: string,
    modelName: string,
    modelType: string,
    imageUrl: string,
}
const Wrapper = styled.section`
.h{
    box-shadow: none;
}
    .swiper-container{
        overflow: unset;
    }
    .swiper-button-next, .swiper-button-prev{
        top: 120%;
        display: ${props => props.isPc ? 'flex' : 'none'};
    }
    .swiper-button-prev{
        background-image: url(${chevron});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transform: rotateZ(
            180deg
            );
        right: 55px;
        left: unset;
    }
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after{
        content: '';
    }
    .swiper-button-next{
        background-image: url(${chevron});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after{
        content: '';
    }
    .pl-type{
        padding: 0 20px;
        color: #bbb;
    }
    .pl-name{
        font-weight: bold;
        padding: 0 20px;
    }
    .pl-model{
        font-weight: 100;
        color: #bbb;
    }
    .pl-pic{
        padding: 10px 20px;
        img{
            width: 100%;
            height: auto;
        }
    }
    .pl-action{
        text-align: center;
        padding-bottom: 20px;
        a{
            text-decoration: none;
            font-size: 13px;
            letter-spacing: 2px;
            font-weight: bold;
        }
        img{
            width: 10px;
            height: 10px;
            margin-bottom: -.5px;
        }
        .pl-link-shop{
            margin-left: 15px;
        }
        
    }
    .swiper-pagination{
        display: ${props => props.isPc ? 'none' : 'block'};
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: -5px;
    }
`;

const SwiperContainer = ({ isPc, slidesPerView, products }) => {
    return (
        <Wrapper isPc={isPc}>
            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                navigation={true}
                pagination={{
                    "clickable": true
                }}
                onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    products.map((p: productListType) => {
                        return (
                            <SwiperSlide key={p.id}><Card >
                                <div className="pl-type">{p.bodyType}</div>
                                <div className="pl-name">{p.modelName} + <span className="pl-model">{p.modelType}</span></div>
                                <div className="pl-pic">
                                    <img alt={p.modelName} src={`../../${p.imageUrl}`} />
                                </div>
                                <div className="pl-action">
                                    <Link to={{
                                        pathname: `/learn/${p.id}`,
                                    }} >LEARN <img alt="learn-arrow" src={chevronSmall} /></Link>
                                    <Link className="pl-link-shop" to={{
                                        pathname: `/shop/${p.id}`,
                                    }}>SHOP <img alt="learn-arrow" src={chevronSmall} /></Link>
                                </div>
                            </Card></SwiperSlide>

                        )
                    })
                }
            </Swiper>

        </Wrapper>

    );
}

export default SwiperContainer;
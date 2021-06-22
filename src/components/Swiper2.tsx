import React from "react";
import styled from 'styled-components'
import {
    Link,
} from "react-router-dom";
import { useEffect } from "react";
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css';


// install Swiper modules


// const { Swiper, SwiperSlide } = require('swiper/react');

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
    /* .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: -5px;
    } */
`;
const SwiperContainer = ({ isPc, slidesPerView, products }) => {
    const initSwiper = async () => {
        
    }
    useEffect(() => {
        console.log('init');
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 300,
            loop: true,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

    }, [])
    return (
        <Wrapper>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        products.map((p: productListType) => {
                            return (
                                <div className="swiper-slide" key={p.id}><Card >
                                    <div className="pl-type">{p.bodyType}</div>
                                    <div className="pl-name">{p.modelName} + <span className="pl-model">{p.modelType}</span></div>
                                    <div className="pl-pic">
                                        <img alt={p.modelName} src={`../../${p.imageUrl}`} />
                                    </div>
                                    <div className="pl-action">
                                        <Link to="/learn">LEARN <img alt="learn-arrow" src={chevronSmall} /></Link>
                                        <Link className="pl-link-shop" to="/shop">SHOP <img alt="learn-arrow" src={chevronSmall} /></Link>
                                    </div>
                                </Card></div>

                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </Wrapper>

    );
}

export default SwiperContainer;
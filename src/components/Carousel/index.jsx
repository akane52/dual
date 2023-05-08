import React from "react";

import tvlpt_barceloneta from "../../resources/images/tvlpt_barceloneta.jpeg"
import tvlpt_cloud_bar from "../../resources/images/tvlpt_cloud_bar.jpeg"
import tvlpt_cocina from "../../resources/images/tvlpt_cocina.jpeg"
import tvlpt_cocina2 from "../../resources/images/tvlpt_cocina2.jpeg"
import tvlpt_recepcion from "../../resources/images/tvlpt_recepcion.jpeg"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import {CarouselStyles,
    CarouselSpecific
} from "./styles"

const CarouselPhotos = () => {
    return (
    <CarouselStyles>
        <CarouselSpecific>
          <Carousel autoPlay interval={4000} infiniteLoop>
            <div>
              <img src={tvlpt_recepcion} alt="Recepción"/>
            </div>
            <div>
              <img src={tvlpt_barceloneta} alt="Barceloneta" />
            </div>
            <div>
              <img src={tvlpt_cloud_bar} alt="Cloud Bar" />
            </div>
            <div>
              <img src={tvlpt_cocina} alt="Cocina" />
            </div>
            <div>
              <img src={tvlpt_cocina2} alt="Cocina" />
            </div>
          </Carousel>
        </CarouselSpecific> 
    </CarouselStyles>
    )
}
export default CarouselPhotos
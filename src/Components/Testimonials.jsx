import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import { Box, Image, Text } from "@chakra-ui/react";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2500}
      >
        <Box>
          <Image src="https://stocktutor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent_img2.54b25a0e.png&w=1920&q=75" />
          <Box className="myCarousel">
            <h3>Shreya Arora</h3>
            <Text>
              Life-changing stock market course with practical learning and
              excellent career support. Hightly recommended for aspiring
              traders! Super Happy!
            </Text>
          </Box>
        </Box>

        <Box>
          <Image src="https://stocktutor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent_img1.fd2aa59d.png&w=1920&q=75" />
          <Box className="myCarousel">
            <h3>Abhishek Sharma</h3>
            <Text>
              An excellent choice for informed investment decisions. Exceptional
              technical analysis training, practical approach, and valuable
              career support.
            </Text>
          </Box>
        </Box>

        <Box>
          <Image src="https://stocktutor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent_img3.60071885.png&w=1920&q=75" />
          <Box className="myCarousel">
            <h3>Rahul Malik</h3>
            <Text>
              Comprehensive learning, practical approach, and outstanding career
              support. Boosted my confidence for a rewarding financial career.
            </Text>
          </Box>
        </Box>
      </Carousel>
    );
  }
}

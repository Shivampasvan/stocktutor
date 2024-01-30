import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const CourseCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slides = [
    {
      imageUrl:
        "https://stocktutor.com/_next/image?url=https%3A%2F%2Fstocktutor.com%2Fbackendapi%2Fuploads%2F1705128397059.png&w=1920&q=75",
      buttonLabel: "Enroll Now",
      heading:"Basics of Stock Market",
      details:"In this foundational part of the course, you'll delve into the core principles of the stock market.",
      onClick: () => alert("Button 1 clicked"),
      lessons:'6 Lessons',
      duration:'4 Hours 35 Minutes',
    },
    {
      imageUrl:
        "https://stocktutor.com/_next/image?url=https%3A%2F%2Fstocktutor.com%2Fbackendapi%2Fuploads%2F1705128642186.png&w=1920&q=75",
      buttonLabel: "Enroll Now",
      heading:"Technical Analysis",
      details:"Technical Analysis is an indispensable component of stock market analysis. In this section, you will master the...",
      onClick: () => alert("Button 2 clicked"),
      lessons:'15 Lessons',
      duration:'10 Hours 45 Minutes',
    },
    {
      imageUrl:
        "https://stocktutor.com/_next/image?url=https%3A%2F%2Fstocktutor.com%2Fbackendapi%2Fuploads%2F1705128768893.png&w=1920&q=75",
      buttonLabel: "Enroll Now",
      heading:"Derivatives",
      details:"This section introduces you to these complex financial instruments, which are derived from underlying...",
      onClick: () => alert("Button 3 clicked"),
      lessons:'8 Lessons',
      duration:'13 Hours 5 Minutes',
    },
    {
        imageUrl:
          "https://stocktutor.com/_next/image?url=https%3A%2F%2Fstocktutor.com%2Fbackendapi%2Fuploads%2F1705560994164.png&w=1920&q=75",
        buttonLabel: "Enroll Now",
        heading:"Fundamental Analysis",
        details:"Learn advanced analysis techniques, risk management, and diverse investment strategies, including...",
        onClick: () => alert("Button 4 clicked"),
        lessons:'11 Lessons',
        duration:'12 Hours 20 Minutes',
      }
  ];

  return (
    <Slider {...settings} style={{ marginBottom: 30 }}>
      {slides.map((slide, index) => (
        <Box key={index} padding={4}>
          <Box
            padding={"20px"}
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          >
            <Box marginBottom={"20px"}>
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                width={'100%'}
              />
            </Box>
            <Grid marginBottom={"20px"} gap={2}>
              <Heading fontSize={'20px'} fontWeight={"600"} color={'#060A56'}>{slide.heading}</Heading>
              <Text fontSize={"16px"} fontWeight={"400"} color={'#5D5D5D'} lineHeight={1.3}>
                {slide.details}
              </Text>
            </Grid>

            <Flex justifyContent={"space-between"}>
              <Grid fontSize={"12px"} fontWeight={"600"} gap={1}>
                <Flex gap={1}>
                  <CollectionsBookmarkIcon style={{fontSize:'18px', color:'#060A56'}}/>
                  <Text color={'#454545'}>
                    {slide.lessons}
                  </Text>
                </Flex>

                <Flex gap={1} >
                  <QueryBuilderIcon style={{fontSize:'18px', color:'#060A56'}}/>
                  <Text color={'#454545'}>
                    {slide.duration}
                  </Text>
                </Flex>
              </Grid>
              <Box alignItems={"center"}>
                <Button
                  fontSize={'12px'}
                  marginTop={"7px"}
                  size="sm"
                  onClick={slide.onClick}
                  color={"whitesmoke"}
                  bg={"#040341"}
                  _onHover={{
                    color:"whitesmoke",
                    bg:"#040341"
                  }}
                >
                  {slide.buttonLabel}
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CourseCarousel;

import React from "react";
import "./Fourth.css";
import PaidIcon from '@mui/icons-material/Paid';
import AddchartIcon from '@mui/icons-material/Addchart';
import MoneyPattern from '../data/moneypattern.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, Text } from "@chakra-ui/react";

const Fourth = () => {
  return (
    <>
      <Box className="section mainsection" style={{
        backgroundImage:`url(${MoneyPattern})`       
    }}>
        <VerticalTimeline 
         lineColor={'#050845'}
          >
          <VerticalTimelineElement
            contentStyle={{
              boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
              border:`1px solid silver`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid #050845" }}
            iconStyle={{
              backgroundColor: `silver`,
              color: `#050845`,
              background:'#F7F8FD',
            }}
            icon={<PaidIcon />}
          >
            <Text data-aos="fade-right" style={{fontSize:15, padding:"auto", color:'#060A56'}}>
            Foundations of Finance: Lay the groundwork for your financial journey.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
                boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                border:`1px solid silver`,
                color: `var(--clr-fg-alt)`,
                background:'#F7F8FD'
            }}
            contentArrowStyle={{ borderRight: "16px solid #050845" }}
            iconStyle={{
              backgroundColor: `silver`,
              color: `#050845`,
              background:'#F7F8FD',
            }}
            icon={<AddchartIcon style={{
            }}/>}
          >
            <Text data-aos="fade-right" style={{fontSize:15, padding:"auto", color:'#060A56'}}>
            Venture into Investing: Begin your exploration of investment strategies.
            </Text>
          </VerticalTimelineElement> 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                border:`1px solid silver`,
                color: `var(--clr-fg-alt)`,
                background:'#F7F8FD'
            }}
            contentArrowStyle={{ borderRight: "16px solid #050845" }}
            iconStyle={{
              backgroundColor: `silver`,
              color: `#050845`,
              background:'#F7F8FD',
            }}
            icon={<BarChartIcon />}
          >
            <Text data-aos="fade-right" style={{fontSize:15, padding:"auto", color:'#060A56'}}>
            Trade with Confidence: Master the techniques of successful trading.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                border:`1px solid silver`,
                color: `var(--clr-fg-alt)`,
                background:'#F7F8FD'
            }}
            contentArrowStyle={{ borderRight: "16px solid #050845" }}
            iconStyle={{
               backgroundColor: `silver`,
              color: `#050845`,
              background:'#F7F8FD',
            }}
            icon={<EmojiEventsIcon />}
          >
            <Text data-aos="fade-right" style={{fontSize:15, fontWeight:540, padding:"auto", color:'#060A56'}}>
            Financial Goals Unlocked: Achieve your long-awaited financial milestones.
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </>
  );
};

export default Fourth;

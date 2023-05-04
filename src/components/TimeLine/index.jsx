import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { timelineData } from '../../dataSamples/TimelineInfo';

const TimeLine = () => {
    return (
        <div>
            <VerticalTimeline lineColor={ '#94A8B3' }>
                {timelineData.map((data) => (
                    <VerticalTimelineElement 
                        key={data.id}
                        contentStyle={{ background: '#94A8B3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={ <img src={data.logo} alt="Gherking logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
                    >
                        <h3 className="vertical-timeline-element-title">{data.date}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                        <p>{data.info}</p>
                        <p>{data.learnings}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default TimeLine

import React from 'react';
import DateTime from '../DateTime/DateTime';
import DateTimePretty from '../DateTimePretty/DateTimePretty';
import PropTypes from 'prop-types';

const WithDateTime = DateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe 
                src={props.url} 
                title="video" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
            ></iframe>
            <WithDateTime date={props.date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
}

export default Video
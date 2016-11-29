import React, { PropTypes } from 'react'

const SocialBTN = (props) => {
  const {social, url, external} = props
  const classes = "fa fa-" + social;
  return (
      <a href={url}
        target={(external)?"_blank": ""} >
        <i className={classes}/>
      </a>
  );
}

export default SocialBTN

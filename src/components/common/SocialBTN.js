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

SocialBTN.PropTypes = {
  social: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  external: PropTypes.string.isRequired
}

export default SocialBTN

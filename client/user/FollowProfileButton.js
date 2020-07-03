import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {unfollow, follow} from './api-user.js'

export default function FollowProfileButton (props) {
  const followClick = () => {
    props.onButtonClick(follow)
  }
  const unfollowClick = () => {
    props.onButtonClick(unfollow)
  }
    return (<div style={{margin:'5px'}}>
      { props.following
        ? (<Button variant="contained" color="secondary" onClick={unfollowClick}>دنبال نکردن</Button>)
        : (<Button variant="contained" color="primary" onClick={followClick}>دنبال کردن</Button>)
      }
    </div>)
}
FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

import React from 'react'
import {
    withRouter
} from "react-router-dom";

const Learn = ({ match }) => {

    return (
        <div>Learn: {match.params ? match.params.id : null}</div>
    )
}

export default withRouter(Learn);
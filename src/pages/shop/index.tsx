import React from 'react'
import {
    withRouter
} from "react-router-dom";

const Shop = ({ match }) => {

    return (
        <div>Shop: {match.params ? match.params.id : null}</div>
    )
}

export default withRouter(Shop);
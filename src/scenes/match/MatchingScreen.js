import React, {Component} from "react";
import MatchingView from "./MatchingView";
import SwipeDeck from "_components/organisms/SwipeDeck";


class Matching extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return(
            // <SwipeDeck/>
            <MatchingView/>
        )
    }
}

export default Matching;
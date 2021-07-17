import React, {Component} from "react";
import MatchingView from "./MatchingView";
import SwipeDeck from "./SwipeDeck";


class Matching extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <SwipeDeck
            />
        )
    }
}

export default Matching;
import React, {Component} from "react";
import MatchingView from "./MatchingView";
import SwipeDeck from "_components/organisms/SwipeDeck";
import "firebase/firestore";
import * as firebase from "firebase";


class Matching extends Component{

    constructor(props){
        super(props);
        this.state = {
            userID:"",
            preference:"",
            radius:"",
            location:"",
            age_range:50,
            imageDataset:{},
            promptDataset:{},
            bioDataset:{},
        }
    }
    getUserId = async() => {
        try {
          const userID = firebase.auth().currentUser;
          const db = firebase.firestore();
            
          this.setState({
            userId: userID.uid
          })
          
        } catch (error) { console.log("Error retrieving userId")};
    
    }
    
    findPartners = async () =>{
        await this.getUserId();

        const db = firebase.firestore();

        db.collection("users").get()
        .then((data) => {
            data.forEach((doc) => {
                console.log(doc.id);
                this.createCard(doc);

            });

        }).catch((error) => console.log("Error getting Users: ", error));
    }
    createCard= async(data) => {
        await this.setPhotosURI(data.id);
        var user = this.state.promptDataset
        user[data.id] = data.prompts
        
        this.setState({
            promptDataset:user
        });

    }
    setPhotosURI = async(UserId) => {
        let storageRef = firebase.storage().ref("user_images/" + "user_" + UserId);
        var user = this.state.imageDataset
        user[UserId] = []
        
        this.setState({
            imageDataset:user
        });        
        storageRef.listAll().then((result) => {
            result.items.forEach((imageref) => {
                imageref
                .getDownloadURL()
                .then((url) => {
                    var user = this.state.imageDataset
                    user[UserId].push({uri:url})
                    this.setState({
                        imageDataset:user
                    })
                })      
                .catch((error) => console.log(error))
            })
        }).catch((error) => (console.log("Error retrieving user Images: ", error)));

    }

    addLike = async(user,like) => {
        const db = firebase.firestore();
        var matches = db.collection("Matching").doc(this.state.userID);

        matches.update({
            Seen: firestore.FieldValue.arrayUnion(user)
        })
        .then(() => {console.log("Seen successfully updated!")})
        .catch((error) => {console.log("Error updating Seen: ",error)})

        if(like){
            matches.update({
                Likes: firestore.FieldValue.arrayUnion(user)
             })
             .then(() => {console.log("Likes successfully updated!")})
             .catch((error) => {console.log("Error updating Likes: ",error)})
        }
        else{
            matches.update({
                Dislikes: firestore.FieldValue.arrayUnion(user)
             })
             .then(() => {console.log("Dislikes successfully updated!")})
             .catch((error) => {console.log("Error updating Dislikes: ",error)})

        }
      

    }   

    componentDidMount(){
        this.findPartners()
      }

    render(){
        
        return(
            
            <MatchingView/>
        )
    }
}

export default Matching;
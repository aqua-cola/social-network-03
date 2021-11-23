import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {changePostText, stateType} from "./redux/State";

type AppPropsType = {
    state: stateType
    addPost: ()=>void
    changePostText: (newText: string)=>void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Nav/>
                <div className={"appWrapperContent"}>
                    <Route path={'/profile'} render={()=><Profile stateProfile={props.state} addPost={props.addPost} changePostText={changePostText}/>}/>
                    <Route path={'/dialogues'} component={()=><Dialogues stateDialogues={props.state}/>}/>
                    {/*<Route path={'/profile'} render={()=><Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path={'/dialogues'} component={()=><Dialogues dialoguesItemData={props.state.messagePage.dialoguesItemData} messageData={props.state.messagePage.messageData}/>}/>*/}
                    <Route path={'/news'} component={()=><News/>}/>
                    <Route path={'/music'} component={()=><Music/>}/>
                    <Route path={'/settings'} component={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

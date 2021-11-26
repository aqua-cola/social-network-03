import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionTypes, StateType} from "./redux/State";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

function App({state, dispatch, ...props}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Nav/>
                <div className={"appWrapperContent"}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile stateProfile={state} dispatch={dispatch}/>}/>
                        <Route path={'/dialogues'}
                               render={() => <Dialogues stateDialogues={state} dispatch={dispatch}/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import * as React from "react";
import {Admin, Resource} from 'react-admin';
import authProvider from './memberAuthProvider';
import dataProv from './dataProv';
import Userboard from "./Userboard";
import {UserList} from "./userTable";

const dataProvider = dataProv;


export const UserPage = () => {
    return (
        <div>
            <Admin dashboard={Userboard} authProvider={authProvider} dataProvider={dataProvider}>
                <Resource name="member" list={UserList}/>
            </Admin>
        </div>
    )
};

export default UserPage

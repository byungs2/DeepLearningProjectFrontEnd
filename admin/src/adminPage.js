import * as React from "react";
import { /*fetchUtils,*/ Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {MemberCreate, MemberEdit, MemberList} from './memberTable';
import dataProv from './dataProv';

const dataProvider = dataProv;
export const adminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="member" list={MemberList} edit= {MemberEdit} create = {MemberCreate}/>
    </Admin>
)

export default adminPage

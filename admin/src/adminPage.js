import * as React from "react";
import { /*fetchUtils,*/ Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {TestCreate, TestEdit, testDataShow} from './testData';
import dataProv from './dataProv';

const dataProvider = dataProv;
export const adminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="member" list={testDataShow} edit= {TestEdit} create = {TestCreate}/>
    </Admin>
)

export default adminPage

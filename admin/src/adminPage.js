import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate} from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {TestCreate, TestEdit, testDataShow} from './testData';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Expose-Headers','X-Total-Count');
    return fetchUtils.fetchJson(url, options);
}
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:8082');

export const adminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create = {PostCreate} />
        <Resource name="users" list={UserList} />
        <Resource name="member" list={testDataShow} edit= {TestEdit} create = {TestCreate}/>
    </Admin>
)

export default adminPage

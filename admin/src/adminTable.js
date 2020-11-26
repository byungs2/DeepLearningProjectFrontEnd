import * as React from "react";
import {PasswordInput ,Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput,List, Datagrid, TextField, SimpleForm,Edit} from 'react-admin';
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것


export const AdminList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="adminId" />
            <EditButton/>
        </Datagrid>
    </List>
);
export const AdminEdit = props => (
    <Edit {...props} undoable = {false} >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="adminId" />
            <PasswordInput source="existingPw" />
            <PasswordInput source="adminPw" />
        </SimpleForm>
    </Edit>
);
export const AdminCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="adminId" />
            <PasswordInput source="adminPw" />
        </SimpleForm>
    </Create>
);
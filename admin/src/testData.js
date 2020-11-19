import * as React from "react";
import {Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput, ImageField, List, Datagrid, TextField, ImageInput,SimpleForm,Edit } from 'react-admin';

export const testDataShow = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="memberName" />
            <TextField source="memberCount" />
            <ImageField source="memberFace" />
            <EditButton/>
        </Datagrid>
    </List>
);
export const TestFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const TestEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           <TextInput source="memberName" />
           <TextInput multiline source="memberCount" />
           <ImageInput source="memberFace" />
        </SimpleForm>
    </Edit>
);
export const TestCreate = props => (
    <Create {...props}>
        <SimpleForm>
           <TextInput source="memberName" />
           <TextInput multiline source="memberCount" />
           <ImageInput source="memberFace" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
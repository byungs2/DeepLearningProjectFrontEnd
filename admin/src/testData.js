import * as React from "react";
import {FileInput ,Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput, ImageField, List, Datagrid, TextField, ImageInput,SimpleForm,Edit } from 'react-admin';
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것


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
            <TextInput multiline = {false} source="memberCount" />
            <ImageInput source="memberFace" maxSize = {800000} accept = "image/*" multiple = {false} >
                <ImageField src = "src" source="memberFace"/>
            </ImageInput>
        </SimpleForm>
    </Create>
);
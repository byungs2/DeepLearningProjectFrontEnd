import * as React from "react";
import {ImageField,ReferenceField, Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput,List, Datagrid, TextField, SimpleForm,Edit} from 'react-admin';
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것


export const StateList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField label="MemberId" source="MemberId" reference="member" sortable = {false}>
                <TextField source = "id" />
            </ReferenceField>
            <ReferenceField label="MemberName" source="MemberId" reference="member" sortable = {false}>
                <TextField source = "memberName" />
            </ReferenceField>
            <TextField source="stateNote" sortable = {false}/>
            <TextField source="stateTime" sortable = {false}/>
            <EditButton/>
        </Datagrid>
    </List>
);
export const StateEdit = props => (
    <Edit {...props} undoable = {false} >
        <SimpleForm>
            <ReferenceField label="MemberId" source="MemberId" reference="member">
                <TextField source = "id" />
            </ReferenceField>
            <ReferenceField label="memberName" source="MemberId" reference="member">
                <TextField source = "memberName" />
            </ReferenceField>
            <ReferenceField label="MemberFace" source="MemberId" reference="member">
                <ImageField source = "memberFace" />
            </ReferenceField>
            <TextInput disabled source="id" />
            <TextInput source="stateNote" />
        </SimpleForm>
    </Edit>
);
export const StateCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="stateNote" />
            <TextInput label="MemberId" source="memberId" />
        </SimpleForm>
    </Create>
);
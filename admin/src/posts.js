// in src/posts.js
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, TextInput, SimpleForm, Edit, SelectInput, ReferenceInput, Create, Filter} from 'react-admin';
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것
export const PostList = props => ( 
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick = "edit">
            <TextField source = "id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);
export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
           </ReferenceInput>
           <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
           <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
           </ReferenceInput>
           <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
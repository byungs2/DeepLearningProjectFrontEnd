import * as React from "react";
import { Filter, TextInput, ReferenceInput, SelectInput, ImageField, List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const testDataShow = props => (
<List filters={<TestFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
            <ImageField source="pictures" title="desc" />
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

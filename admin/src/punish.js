import * as React from "react";
import { ImageField, List, Datagrid} from "react-admin";
// import { connect } from "react-redux";

export const UsersList = ({ groupNameFilter, ...props }) => {

    return (
        <React.Fragment>
            <List {...props} bulkActionButtons={false} sort={{ field: 'memberCount', order: 'DESC' }} perPage = {2} pagination = {false}>
                <Datagrid>
                    <ImageField source="memberFace" sortable = {false}/>
                </Datagrid>
            </List>
        </React.Fragment>
    );
};

export default UsersList;

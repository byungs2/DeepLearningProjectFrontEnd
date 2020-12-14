import * as React from "react";
import { ImageField, List, Datagrid} from "react-admin";
// import { connect } from "react-redux";

export const UsersList = ({ groupNameFilter, ...props }) => {

    return (
        <React.Fragment>
            <List {...props}>
                <Datagrid>
                    <ImageField source="memberFace"/>
                </Datagrid>
            </List>
        </React.Fragment>
    );
};

export default UsersList;

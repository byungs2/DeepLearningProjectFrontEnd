import * as React from "react";
import {connect} from "react-redux";
import {Filter, SearchInput, useTranslate, List, Datagrid, TextField} from 'react-admin';
import {makeStyles, Chip} from '@material-ui/core';

// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것

const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({label}) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)}/>;
};

const PostFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn/>
        <QuickFilter source="memberCount" label="최고 득점" defaultValue={5}/>
    </Filter>
);



export const UserList = props => {
    return (
        <React.Fragment>
            <List {...props} filters={<PostFilter/>} sort={{ field: 'memberCount', order: 'ASC' }} >
                <Datagrid style={{fontFamily: 'Do Hyeon'}}>
                    <TextField source="id"/>
                    <TextField source="memberName"/>
                    <TextField source="memberCount"/>
                </Datagrid>
            </List>
        </React.Fragment>
    );
};


export default UserList;


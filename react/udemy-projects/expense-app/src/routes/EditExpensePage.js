import React from 'react';

const EditExpensePage = (props) => (
    <div>
        Editing expense with id: {props.match.params.id}
    </div>
);

export default EditExpensePage;
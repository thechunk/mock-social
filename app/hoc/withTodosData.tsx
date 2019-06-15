import React, {ComponentType, FC, useEffect, useState} from 'react';
import {TodosApi} from '../classes/Api';

const withTodosData = <P extends IWithTodosDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithTodosDataProps> & IWithTodosDataOptionalProps> =>
    (props: HocOptional<P, IWithTodosDataProps> & IWithTodosDataOptionalProps) => {
        const [todos, setTodos] = useState<Array<ITodo>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) {
                TodosApi.getAllByUserId(props.id).then(setTodos).then(() => setLoading(false));
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithTodosDataOptionalProps} todos={todos} loading={loading} />
        );
    };

export default withTodosData;

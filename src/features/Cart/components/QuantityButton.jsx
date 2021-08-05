import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import { useQuantityButton } from 'hooks';
import React from 'react'

const useStyle = makeStyles({
    component: {
        marginTop: 30,
    },
    button: {
        borderRadius: "50%",
    }
})

function QuantityButton(props) {
    const classes = useStyle();
    const { getQuantityOfItem, handleIncrement, handleDecrement } = useQuantityButton();

    const { item } = props;

    const counter = getQuantityOfItem(item.id);

    return (
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={() => handleDecrement(item.id)} disabled={counter === 1}>-</Button>
            <Button>{getQuantityOfItem(item.id)}</Button>
            <Button className={classes.button} onClick={() => handleIncrement(item.id)}>+</Button>
        </ButtonGroup>
    )
}

export default QuantityButton

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, withStyles } from '@material-ui/core';

const styles = theme => ({
  Menu: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1.5),
  },
});

function PopperBasic(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color="default" onClick={handleClick}>
        {props.buttonText}
      </Button>
      <Menu
        // elevation={0}
        id={props.id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={props.classes.Menu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {props.children}
      </Menu>
    </div>
  );
}

PopperBasic.propTypes = {
  buttonText: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(PopperBasic);

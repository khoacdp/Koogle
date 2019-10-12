import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Divider, IconButton, withStyles } from '@material-ui/core';
import { KSelect } from 'modules/components/Input';
import classnames from 'classnames';

import MenuBar from './MenuBar';
import { listIcons } from '../menubars';

const styles = theme => ({
  Toolbar: {
    height: 36,
    minHeight: 36,
  },

  ToolbarMenuIcon: {
    borderRadius: '0 !important',
    margin: '6px 1px',
    color: '#444',
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem',
    },
  },

  ToolbarMenuIconSmallFontSize: {
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem',
    },
  },

  ToolbarMenuIconLargeFontSize: {
    '& .MuiSvgIcon-root': {
      fontSize: '1.7rem',
    },
  },

  LinkHomePage: {
    margin: `${theme.spacing(0.5)}px 0px ${theme.spacing(
      0.5,
    )}px ${theme.spacing(1)}px`,
    padding: theme.spacing(1),
  },

  Container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'var(--docs-font-family)',
  },

  Logo: {
    display: 'block',
    backgroundImage: `url('//ssl.gstatic.com/docs/common/material_common_sprite137.svg')`,
    backgroundPosition: '-20px -1562px',
    width: 40,
    height: 40,
  },

  Divider: {
    height: 20,
    borderLeft: '1px solid rgb(218, 220, 224)',
    margin: '9px 4px',
  },

  KSelect: {
    height: 24,
    top: 0,
    margin: '6px 1px',
    fontFamily: 'var(--docs-font-family)',
  },

  KSelectInput: {
    paddingLeft: 8,
    paddingRight: 32,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'pre',
    width: 'fit-content',
    maxWidth: 100,
    fontSize: '0.9rem',
  },
});

function Header(props) {
  const { classes } = props;

  const handleChangeOptions = () => {};

  const renderIconsToolbar = () => {
    return listIcons.map(icon => {
      if (icon.type === 'button') {
        return (
          <IconButton
            className={classnames(classes.ToolbarMenuIcon, {
              [classes.ToolbarMenuIconLargeFontSize]: icon.largeFontSize,
            })}
            size="small"
            aria-label={icon.label}
          >
            <icon.component />
          </IconButton>
        );
      }

      if (icon.type === 'select') {
        return (
          <KSelect
            options={icon.options}
            default={icon.options[0]}
            onChange={handleChangeOptions}
            name={`kdocs-${icon.label}`}
            className={classes.KSelect}
            inputProps={{ className: classes.KSelectInput }}
          />
        );
      }

      if (icon.type === 'divider') {
        return <Divider className={classes.Divider} orientation="vertical" />;
      }
    });
  };

  return (
    <div>
      <div className={classes.Container}>
        <a className={classes.LinkHomePage} href="/">
          <div className={classes.Logo} />
        </a>
        <MenuBar items={props.items} />
      </div>
      <Divider />
      <Toolbar className={classes.Toolbar}>{renderIconsToolbar()}</Toolbar>
    </div>
  );
}

Header.propTypes = {
  items: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);

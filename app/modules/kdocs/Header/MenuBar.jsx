import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  MenuItem,
  Divider,
  withStyles,
  Typography,
  Toolbar,
} from '@material-ui/core';
import { PopperBasic } from 'modules/components/utils';
import {
  Folder,
  Delete,
  LocalPrintshop,
  Undo,
  Redo,
  FilterNone,
  FileCopy,
  Photo,
  InsertChartOutlined,
  Remove,
  Euro,
  List,
} from '@material-ui/icons';

const styles = theme => ({
  Divider: {
    margin: theme.spacing(1),
  },

  MenuBar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  Title: {
    marginLeft: '0.8em',
    fontWeight: 500,
  },

  IconContainer: {
    marginRight: theme.spacing(1),
  },

  IconPlaceholder: {
    display: 'inline-block',
    marginRight: theme.spacing(2),
  },

  KeyboardShorcut: {
    fontSize: '0.83rem',
    fontWeight: 600,
    color: '#888',
    marginLeft: theme.spacing(3),
  },

  MenuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#444',
  },

  MenuItemText: {
    fontSize: '0.9rem',
    display: 'inline',
  },
});

function MenuBar(props) {
  const renderItemIcon = item => {
    switch (item) {
      case 'move': {
        return <Folder />;
      }
      case 'trash': {
        return <Delete />;
      }
      case 'print': {
        return <LocalPrintshop />;
      }
      case 'undo': {
        return <Undo />;
      }
      case 'redo': {
        return <Redo />;
      }
      case 'cut': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
          </svg>
        );
      }
      case 'copy': {
        return <FilterNone />;
      }
      case 'paste': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
          </svg>
        );
      }
      case 'image': {
        return <Photo />;
      }
      case 'chart': {
        return <InsertChartOutlined />;
      }
      case 'horizontalLine': {
        return <Remove />;
      }
      case 'patseWithoutFormatting': {
        return <FileCopy />;
      }
      case 'symbol': {
        return <Euro />;
      }
      case 'equation': {
        return <List />;
      }
      default:
        return <div className={props.classes.IconPlaceholder} />;
    }
  };

  const renderList = list => {
    return list.map(item => {
      const childs = item.get('childs');

      if (item.get('value') === 'divider') {
        return <Divider className={props.classes.Divider} />;
      }

      return (
        <MenuItem className={props.classes.MenuItem} key={item.get('value')}>
          <div>
            <span className={props.classes.IconContainer}>
              {renderItemIcon(item.get('value'))}
            </span>
            <Typography className={props.classes.MenuItemText}>
              {item.get('label')}
            </Typography>
          </div>
          {item.get('keyboardShortcut') && (
            <Typography
              className={props.classes.KeyboardShorcut}
              variant="button"
              display="block"
            >
              {item.get('keyboardShortcut')}
            </Typography>
          )}
          {/* {childs && renderSubList(childs)} */}
        </MenuItem>
      );
    });
  };

  const renderSubList = list => {
    return (
      <React.Fragment>
        {list &&
          list.map(item => (
            <MenuItem key={item.get('value')}>
              <span>{item.get('label')}</span>
            </MenuItem>
          ))}
      </React.Fragment>
    );
  };

  return (
    <div>
      <h3 className={props.classes.Title}>Untitled</h3>
      <ul className={props.classes.MenuBar}>
        {props.items.map(item => {
          return (
            <PopperBasic
              buttonText={item.get('label')}
              id={item.get('label')}
              key={item.get('label')}
            >
              {renderList(item.get('childs'))}
            </PopperBasic>
          );
        })}
      </ul>
    </div>
  );
}

MenuBar.propTypes = {
  items: PropTypes.object,
  classes: PropTypes.object,
  // callbackHandler: PropTypes.func,
};

export default withStyles(styles)(MenuBar);

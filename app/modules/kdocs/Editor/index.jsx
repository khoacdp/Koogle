import React from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState } from 'draft-js';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const KDocsEditorWrapper = styled(Paper)`
  width: 800px;
  height: 1130px;
  margin: 0 auto;
  cursor: text;

  .DraftEditor-root {
    height: 90%;
  }

  .public-DraftStyleDefault-block.public-DraftStyleDefault-ltr {
    margin-left: 96px;
    margin-right: 96px;
  }

  .DraftEditor-editorContainer,
  .public-DraftEditor-content {
    height: 100%;
  }
`;

const WorkspaceEditor = styled.div`
  background-color: #f5f5f5;
  padding-top: 16px;
`;

const BlockEmpty = styled.div`
  min-height: 96px;
  max-height: 449.2px;
  width: 794px;
`;

function DocsEditor(props) {
  let editorRef = null;
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  React.useEffect(() => {
    editorRef.focus();
  }, []);

  const handleInput = newState => {
    setEditorState(newState);
  };

  // 800, 1130
  return (
    <WorkspaceEditor>
      <KDocsEditorWrapper square>
        <BlockEmpty />
        <Editor
          ref={input => {
            editorRef = input;
          }}
          editorState={editorState}
          onChange={handleInput}
        />
      </KDocsEditorWrapper>
    </WorkspaceEditor>
  );
}

export default DocsEditor;

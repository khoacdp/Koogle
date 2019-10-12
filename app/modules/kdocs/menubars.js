import {
  Undo,
  Redo,
  Print,
  Spellcheck,
  FormatPaint,
  FormatBold,
  FormatUnderlined,
  FormatItalic,
  TextFormat,
  Create,
  Link,
  AddComment,
  FormatAlignLeft,
  FormatAlignRight,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatListNumbered,
  FormatListBulleted,
  FormatIndentIncrease,
  FormatIndentDecrease,
  FormatClear,
  LocalParking,
  CreateOutlined,
  ImageSharp,
  FormatLineSpacing,
} from '@material-ui/icons';
import {
  KDOCS_ZOOM_SCREEN,
  KDOCS_TEXT_TRANSFORM,
  KDOCS_FONT_FAMILY,
  KDOCS_FONT_SIZE,
} from 'modules/options';

export const listIcons = [
  {
    type: 'button',
    label: 'undo',
    component: Undo,
  },
  {
    type: 'button',
    label: 'redo',
    component: Redo,
  },
  {
    type: 'button',
    label: 'print',
    component: Print,
  },
  {
    type: 'button',
    label: 'spell-check',
    component: Spellcheck,
  },
  {
    type: 'button',
    label: 'paint-format',
    component: FormatPaint,
  },
  {
    type: 'divider',
  },
  {
    type: 'select',
    label: 'zoom-screen',
    options: KDOCS_ZOOM_SCREEN,
  },
  {
    type: 'divider',
  },
  {
    type: 'select',
    label: 'text-transform',
    options: KDOCS_TEXT_TRANSFORM,
  },
  {
    type: 'divider',
  },
  {
    type: 'select',
    label: 'font-family',
    options: KDOCS_FONT_FAMILY,
  },
  {
    type: 'divider',
  },
  {
    type: 'select',
    label: 'font-size',
    options: KDOCS_FONT_SIZE,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'bold-format',
    component: FormatBold,
  },
  {
    type: 'button',
    label: 'italic-format',
    component: FormatItalic,
  },
  {
    type: 'button',
    label: 'underline-format',
    component: FormatUnderlined,
  },
  {
    type: 'button',
    label: 'text-format',
    largeFontSize: true,
    component: TextFormat,
  },
  {
    type: 'button',
    label: 'highlight-color',
    component: Create,
  },

  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'insert-link',
    component: Link,
  },
  {
    type: 'button',
    label: 'add-comments',
    component: AddComment,
  },
  {
    type: 'button',
    label: 'add-images',
    component: ImageSharp,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'format-align-left',
    component: FormatAlignLeft,
  },
  {
    type: 'button',
    label: 'format-align-center',
    component: FormatAlignCenter,
  },
  {
    type: 'button',
    label: 'format-align-right',
    component: FormatAlignRight,
  },
  {
    type: 'button',
    label: 'format-align-justify',
    component: FormatAlignJustify,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'format-line-spacing',
    component: FormatLineSpacing,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'format-list-numbered',
    component: FormatListNumbered,
  },
  {
    type: 'button',
    label: 'format-list-bulleted',
    component: FormatListBulleted,
  },
  {
    type: 'button',
    label: 'format-indent-increase',
    component: FormatIndentIncrease,
  },
  {
    type: 'button',
    label: 'format-indent-decrease',
    component: FormatIndentDecrease,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'format-clear',
    component: FormatClear,
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    label: 'input-tools',
    component: LocalParking,
  },
  {
    type: 'button',
    label: 'editing-mode',
    component: CreateOutlined,
  },
  {
    type: 'divider',
  },
];

export const File = {
  label: 'File',
  childs: [
    { label: 'Share', value: 'share', childs: null },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'New',
      value: 'new',
      childs: [{ label: 'Document', value: 'new/document' }],
    },
    {
      label: 'Open',
      value: 'open',
      keyboardShortcut: 'Ctrl+O',
      childs: null,
    },
    { label: 'Make a copy', value: 'clone', childs: null },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'Download',
      value: 'download',
      childs: [
        { label: 'Microsoft Word(.docx)', value: 'download/word' },
        { label: 'Plain Text(.txt)', value: 'download/txt' },
        { label: 'PDF Document(.pdf)', value: 'download/pdf' },
      ],
    },
    { label: 'Email as a attachment', value: 'email', childs: null },
    { label: 'Make available offline', value: 'offline', childs: null },
    {
      label: 'Version history',
      value: 'history',
      childs: [
        { label: 'Name current version', value: 'history/current' },
        { label: 'See version history', value: 'history/all' },
      ],
    },
    { label: 'divider', value: 'divider', childs: null },
    { label: 'Rename', value: 'rename', childs: null },
    { label: 'Move', value: 'move', childs: null },
    { label: 'Move to trash', value: 'trash', childs: null },
    { label: 'divider', value: 'divider', childs: null },
    { label: 'Publish to the web', value: 'publish', childs: null },
    { label: 'Email collaborators', value: 'collaborators', childs: null },
    { label: 'divider', value: 'divider', childs: null },
    { label: 'Document details', value: 'details', childs: null },
    {
      label: 'Language',
      value: 'language',
      childs: [
        { label: 'English', value: 'language/english' },
        { label: 'Vietnamese', value: 'language/vietnamese' },
      ],
    },
    { label: 'Page setup', value: 'setup', childs: null },
    {
      label: 'Print',
      value: 'print',
      keyboardShortcut: 'Ctrl+P',
      childs: null,
    },
  ],
};

export const Edit = {
  label: 'Edit',
  childs: [
    {
      label: 'Undo',
      value: 'undo',
      keyboardShortcut: 'Ctrl+Z',
      childs: null,
    },
    {
      label: 'Redo',
      value: 'redo',
      keyboardShortcut: 'Ctrl+Y',
      childs: null,
    },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'Cut',
      value: 'cut',
      keyboardShortcut: 'Ctrl+X',
      childs: null,
    },
    {
      label: 'Copy',
      value: 'copy',
      keyboardShortcut: 'Ctrl+C',
      childs: null,
    },
    {
      label: 'Paste',
      value: 'paste',
      keyboardShortcut: 'Ctrl+V',
      childs: null,
    },
    {
      label: 'Paste without formatting',
      value: 'patseWithoutFormatting',
      keyboardShortcut: 'Ctrl+Shift+V',
      childs: null,
    },
    {
      label: 'Delete',
      value: 'delete',
      childs: null,
    },
    {
      label: 'Select all',
      value: 'selectAll',
      keyboardShortcut: 'Ctrl+A',
      childs: null,
    },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'Find and replace',
      value: 'findAndReplace',
      keyboardShortcut: 'Ctrl+H',
      childs: null,
    },
  ],
};

export const View = {
  label: 'View',
  childs: [
    {
      label: 'Print layout',
      value: 'printLayout',
      childs: null,
    },
    {
      label: 'Mode',
      value: 'mode',
      childs: [{ label: 'Editting', value: 'mode/editting' }],
    },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'Show ruler',
      value: 'ruler',
      childs: null,
    },
    {
      label: 'Show document outline',
      value: 'outline',
      keyboardShortcut: 'Ctrl+Alt+A Ctrl+Alt+H',
      childs: null,
    },
    {
      label: 'Show equaltion toolbar',
      value: 'equaltion',
      childs: null,
    },
    {
      label: 'Show section breaks',
      value: 'breaks',
      childs: null,
    },
    { label: 'divider', value: 'divider', childs: null },
    {
      label: 'Full screen',
      value: 'fullScreen',
      childs: null,
    },
  ],
};

export const Insert = {
  label: 'Insert',
  childs: [
    {
      label: 'Image',
      value: 'image',
      childs: [
        {
          label: 'Upload from computer',
          value: 'image/computer',
          childs: null,
        },
        {
          label: 'Search the web',
          value: 'image/web',
          childs: null,
        },
        {
          label: 'Drive',
          value: 'image/drive',
          childs: null,
        },
        {
          label: 'Photos',
          value: 'image/photos',
          childs: null,
        },
        {
          label: 'By URL',
          value: 'image/url',
          childs: null,
        },
        {
          label: 'Camera',
          value: 'image/camera',
          childs: null,
        },
      ],
    },
    {
      label: 'Table',
      value: 'table',
      childs: null,
    },
    {
      label: 'Drawing',
      value: 'drawing',
      childs: [
        {
          label: '+ New',
          value: 'drawing/new',
          childs: null,
        },
        {
          label: 'From Drive',
          value: 'drawing/drive',
          childs: null,
        },
      ],
    },
    {
      label: 'Chart',
      value: 'chart',
      childs: [
        {
          label: 'Bar',
          value: 'chart/bar',
          childs: null,
        },
        {
          label: 'Line',
          value: 'chart/line',
          childs: null,
        },
        {
          label: 'Pie',
          value: 'chart/pie',
          childs: null,
        },
        {
          label: 'Column',
          value: 'chart/column',
          childs: null,
        },
        {
          label: 'divider',
          value: 'divider',
          childs: null,
        },
        {
          label: 'From Sheet',
          value: 'chart/sheet',
          childs: null,
        },
      ],
    },
    {
      label: 'Horizontal Line',
      value: 'horizontalLine',
      childs: null,
    },
    {
      label: 'Foot note',
      value: 'footnote',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Special characters',
      value: 'symbol',
      childs: null,
    },
    {
      label: 'Equation',
      value: 'equation',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Header & page number',
      value: 'headerAndPageNumber',
      childs: [
        {
          label: 'Header',
          value: 'header',
          childs: null,
        },
        {
          label: 'Footer',
          value: 'footer',
          childs: null,
        },
        {
          label: 'Page Number',
          value: 'pageNumber',
          childs: [],
        },
        {
          label: 'Page Count',
          value: 'pageCount',
          childs: null,
        },
      ],
    },
    {
      label: 'Break',
      value: 'break',
      childs: [
        {
          label: 'Page break',
          value: 'break/page',
          childs: null,
        },
        {
          label: 'Column break',
          value: 'break/column',
          childs: null,
        },
        {
          label: 'Section break (next page)',
          value: 'break/section-next',
          childs: null,
        },
        {
          label: 'Section break (continous)',
          value: 'break/section-continous',
          childs: null,
        },
      ],
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Link',
      value: 'link',
      childs: null,
    },
    {
      label: 'Comment',
      value: 'comment',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Bookmark',
      value: 'bookmark',
      childs: null,
    },
    {
      label: 'Table of contents',
      value: 'tableContents',
      childs: [],
    },
  ],
};

export const Tools = {
  label: 'Tools',
  childs: [
    {
      label: 'Spelling and grammar',
      value: 'spellingAndGrammar',
      childs: [
        {
          label: 'Spelling and grammar check',
          value: 'spellingAndGrammar/check',
          childs: null,
        },
        {
          label: 'Show spelling suggestions',
          value: 'spellingAndGrammar/suggestions',
          childs: null,
        },
        {
          label: 'Show spelling suggestions',
          value: 'spellingAndGrammar/wordCount',
          childs: null,
        },
        {
          label: 'Personal dictionary',
          value: 'spellingAndGrammar/personalDictionary',
          childs: null,
        },
      ],
    },
    {
      label: 'Word count',
      value: 'wordCount',
      childs: null,
    },
    {
      label: 'Review suggested edits',
      value: 'review',
      childs: null,
    },
    {
      label: 'Compare documents',
      value: 'compareDoc',
      childs: null,
    },
    {
      label: 'Explore',
      value: 'explore',
      childs: null,
    },
    {
      label: 'Linked objects',
      value: 'linkedObjects',
      childs: null,
    },
    {
      label: 'Dictionary',
      value: 'dictionary',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Translate document',
      value: 'translate',
      childs: null,
    },
    {
      label: 'Voice typing',
      value: 'voice',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Script editor',
      value: 'script',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Preferences',
      value: 'preferences',
      childs: null,
    },
    {
      label: 'Accessibility settings',
      value: 'accessibility',
      childs: null,
    },
  ],
};

export const AddOns = {
  label: 'Add-ons',
  childs: [
    {
      label: 'Do more with Docs',
      value: 'doMore',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Get add-ons',
      value: 'get',
      childs: null,
    },
    {
      label: 'Manage add-ons',
      value: 'manage',
      childs: null,
    },
  ],
};

export const Help = {
  label: 'Help',
  childs: [
    {
      label: 'Docs Help',
      value: 'help',
      childs: null,
    },
    {
      label: 'Training',
      value: 'training',
      childs: null,
    },
    {
      label: 'Updates',
      value: 'updates',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Report a problem',
      value: 'reportProblem',
      childs: null,
    },
    {
      label: 'Report abuse/copyright',
      value: 'reportAbuse',
      childs: null,
    },
    {
      label: 'divider',
      value: 'divider',
      childs: null,
    },
    {
      label: 'Keyboard shortcuts',
      value: 'shortcuts',
      childs: null,
    },
  ],
};

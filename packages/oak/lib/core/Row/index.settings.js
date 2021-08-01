export default {
  title: t => t('core.components.row.settings.title', 'Row options'),
  popperSettings: {
    placement: 'right-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 5],
      },
    }],
  },
  fields: [{
    type: 'select',
    key: 'settings.flexDirection',
    default: 'row',
    label: t =>
      t('core.components.row.settings.flexDirection.title', 'Direction'),
    options: [{
      title: t => t('core.components.row.settings.flexDirection.row',
        'Row (left to right)'),
      value: 'row',
    }, {
      title: t => t('core.components.row.settings.flexDirection.rowReverse',
        'Reversed row (right to left)'),
      value: 'row-reverse',
    }, {
      title: t => t('core.components.row.settings.flexDirection.column',
        'Column (top to bottom)'),
      value: 'column',
    }, {
      title: t => t('core.components.row.settings.flexDirection.columnReverse',
        'Reversed column (bottom to top)'),
      value: 'column-reverse',
    }],
  }, {
    type: 'select',
    key: 'settings.justifyContent',
    default: 'flex-start',
    label: t => t('core.components.row.settings.justifyContent.title',
      'Horizontal alignment'),
    options: [{
      title: t => t('core.components.row.settings.justifyContent.flexStart',
        'Left'),
      value: 'flex-start',
    }, {
      title: t => t('core.components.row.settings.justifyContent.center',
        'Center'),
      value: 'center',
    }, {
      title: t => t('core.components.row.settings.justifyContent.flexEnd',
        'Right'),
      value: 'flex-end',
    }, {
      title: t => t('core.components.row.settings.justifyContent.spaceBetween',
        'Space between columns'),
      value: 'space-between',
    }, {
      title: t => t('core.components.row.settings.justifyContent.spaceAround',
        'Space around columns'),
      value: 'space-around',
    }],
  }, {
    type: 'select',
    key: 'settings.alignItems',
    default: 'flex-start',
    label: t => t('core.components.row.settings.alignItems.title',
      'Vertical alignment'),
    options: [{
      title: t => t('core.components.row.settings.alignItems.flexStart',
        'Top'),
      value: 'flex-start',
    }, {
      title: t => t('core.components.row.settings.alignItems.center',
        'Center'),
      value: 'center',
    }, {
      title: t => t('core.components.row.settings.alignItems.flexEnd',
        'Bottom'),
      value: 'flex-end',
    }],
  }, {
    type: 'select',
    key: 'settings.gutters',
    default: true,
    label: t => t('core.components.row.settings.gutters.title',
      'Column gap'),
    options: [{
      title: t => t('core.components.row.settings.gutters.enabled',
        'Enabled'),
      value: true,
    }, {
      title: t => t('core.components.row.settings.gutters.disabled',
        'Disabled'),
      value: false,
    }],
  }],
};

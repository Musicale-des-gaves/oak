import { useEffect, useRef, useState } from 'react';
import { useSlate } from 'slate-react';
import { Transforms, Editor } from 'slate';
import {
  ColorField,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Tooltip,
  classNames,
} from '@junipero/react';
import { Text } from '@poool/oak';

import { toggleMark } from './editor';

export default ({ className }) => {
  const editor = useSlate();
  const colorFieldRef = useRef();
  const [selection, setSelection] = useState(editor.selection);
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    if (!editor || !editor.selection) {
      return;
    }

    setSelection(editor.selection);
  }, [editor.selection]);

  const onChange = field => {
    if (!selection) {
      return;
    }

    Transforms.select(editor, selection);
    setColor(field.value);
    toggleMark(editor, 'color', field.value);
  };

  const onClick = e => {
    e.preventDefault();
    colorFieldRef.current?.dropdownRef.current?.open();
    const selectedColor = getSelectedColor();
    setColor(selectedColor);
  };

  const getSelectedColor = () => Editor.marks(editor)?.color || '#000000';

  return (
    <Dropdown className="oak-color-field">
      <DropdownToggle>
        <span>
          <Tooltip text={(
            <Text
              name="addons.richtextField.fields.editor.color"
              default="Color"
            />
          )}
          >
            <a
              href="#"
              onClick={onClick}
              className={classNames(
                'oak-toolbar-button',
                'oak-color-button',
                className,
              )}
            >
              <i className="oak-icons" style={{ color: getSelectedColor() }}>
                format_color_text
              </i>
            </a>
          </Tooltip>
        </span>
      </DropdownToggle>
      <DropdownMenu>
        <ColorField
          ref={colorFieldRef}
          value={color}
          onChange={onChange}
          opened={true}
          trigger="manual"
        />
      </DropdownMenu>
    </Dropdown>
  );
};

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from 'localization/data';
import { FieldEditor, FieldEditorProps } from './FieldEditor';

describe('Test FieldEditor component', () => {
  const setup = (initialEditMode: boolean) => {
    const language = 'en';
    const translationData = translations[language].translation;

    const props: FieldEditorProps = {
      initialEditMode,
      fieldName: 'test',
      value: 'something',
      onSubmit: jest.fn(),
      onDelete: jest.fn(),
      onEditToggle: jest.fn(),
    };

    const { container } = render(
      <BrowserRouter>
        <IntlProvider locale={language} messages={translationData}>
          <FieldEditor {...props} />
        </IntlProvider>
      </BrowserRouter>
    );

    return {
      ...props,
      container,
      textarea: screen.getByRole('textbox'),
      getSubmitButton: () =>
        screen.getByRole('button', { name: translationData['submit'] }),
      getCancelButton: () =>
        screen.getByRole('button', { name: translationData['cancel'] }),
      getDeleteButton: () =>
        screen.getByRole('button', { name: translationData['delete'] }),
      getEditButton: () =>
        screen.getByRole('button', { name: translationData['edit'] }),
    };
  };

  it('should render textarea', () => {
    const { textarea } = setup(true);
    expect(textarea).toBeInTheDocument();
  });

  it('should render textarea with given initial value', () => {
    const { textarea, value } = setup(true);
    expect(textarea).toHaveValue(value);
  });

  describe('test submit button', () => {
    it('should render button', () => {
      const { getSubmitButton } = setup(true);
      expect(getSubmitButton()).toBeInTheDocument();
    });

    it('should call onSubmit when clicked', () => {
      const { textarea, getSubmitButton, onSubmit } = setup(true);
      const typedValue = 'whatever';
      userEvent.type(textarea, typedValue);
      userEvent.click(getSubmitButton());
      expect(onSubmit).toBeCalledWith(typedValue);
    });
  });

  describe('test cancel button', () => {
    it('should render button', () => {
      const { getCancelButton } = setup(true);
      expect(getCancelButton()).toBeInTheDocument();
    });

    it('should call onEdit toggle when clicked', () => {
      const { onEditToggle, getCancelButton } = setup(true);
      userEvent.click(getCancelButton());
      expect(onEditToggle).toBeCalled();
    });
  });

  describe('test edit button', () => {
    it('should render button', () => {
      const { getEditButton } = setup(false);
      expect(getEditButton()).toBeInTheDocument();
    });

    it('should call onEdit toggle when clicked', () => {
      const { onEditToggle, getEditButton } = setup(false);
      userEvent.click(getEditButton());
      expect(onEditToggle).toBeCalled();
    });
  });

  describe('test delete button', () => {
    it('should render button', () => {
      const { getDeleteButton } = setup(true);
      expect(getDeleteButton()).toBeInTheDocument();
    });

    it('should call onDelete when clicked', () => {
      const { onDelete, getDeleteButton } = setup(true);
      userEvent.click(getDeleteButton());
      expect(onDelete).toBeCalled();
    });
  });

  describe('test typing behavior', () => {
    it('should have typed value', () => {
      const { textarea } = setup(true);
      const typedValue = 'whatever';
      userEvent.type(textarea, typedValue);
      expect(textarea).toHaveValue(typedValue);
    });

    it('should prevent typing line break and put whitespace instead', () => {
      const { textarea } = setup(true);
      userEvent.type(textarea, 'line\nbreak');
      expect(textarea).toHaveValue('line break');
    });

    it('should call onSubmit on Enter', () => {
      const { textarea, onSubmit } = setup(true);

      const typedValue = 'TypedValue';
      userEvent.type(textarea, typedValue);
      fireEvent.keyDown(textarea, {
        charCode: 13,
        code: 13,
        key: 'Enter',
        keyCode: 13,
      });

      expect(onSubmit).toBeCalledWith(typedValue);
    });

    it('should exit edit mode on Escape', () => {
      const { textarea, onEditToggle } = setup(true);

      fireEvent.keyDown(textarea, {
        charCode: 27,
        code: 27,
        key: 'Escape',
        keyCode: 27,
      });

      expect(onEditToggle).toBeCalled();
    });
  });
});

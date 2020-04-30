import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import Modal from "react-modal";
import { expensePropTypes, IntlPropType, SERVER_URL } from "../../constants";
import { Textarea, Label, ErrorText, Text, Button, Loader, CloseButton, StyledRow } from "../UI/styled";
import FileUpload from "../FileUpload";
import Select from "../Select";
import ExpenseInfo from "../ExpenseInfo";
import {
  StyledCurrentExpense,
  StyledActions,
  StyledLoaderOverlay,
  StyledReceipt,
  StyledReceiptsWrap,
  StyledHeader
} from "./styled";

const CurrentExpense = ({ expense, updateExpense, showSuccessMessage, error, isLoading, resetExpenseId, intl }) => {
  const { id, receipts } = expense;
  const [comment, setComment] = useState(expense.comment);
  const [category, setCategory] = useState(expense.category);
  const [file, setFile] = useState(null);

  // reset uploaded file on success upload
  useEffect(() => {
    if (showSuccessMessage) {
      setFile(null);
    }
  }, [showSuccessMessage]);

  const saveExpanse = () => {
    const expense = {
      id,
      comment,
      category
    };

    if (file) {
      const files = new FormData();
      files.set("receipt", file, "receipt");
      expense.files = files;
    }

    updateExpense(expense);
  };

  const categoriesOptions = [
    { value: "food", label: intl.formatMessage({ id: "categories.food" }) },
    { value: "software", label: intl.formatMessage({ id: "categories.software" }) },
    { value: "travel", label: intl.formatMessage({ id: "categories.travel" }) }
  ];

  return (
    <Modal
      className="modal"
      ariaHideApp={false}
      isOpen={!!id}
      onRequestClose={resetExpenseId}
      bodyOpenClassName="preventScroll"
    >
      <CloseButton onClick={resetExpenseId} />

      {id && (
        <StyledCurrentExpense>
          <StyledHeader>{intl.formatMessage({ id: "general.edit_expense" })}</StyledHeader>
          <ExpenseInfo expense={expense} />
          <StyledRow withIndent>
            <Label htmlFor="category">{intl.formatMessage({ id: "general.category" })}</Label>
            <Select
              name="category"
              id="category"
              placeholder={intl.formatMessage({ id: "general.select_category" })}
              onChange={e => setCategory(e.target.value)}
              value={category}
              options={categoriesOptions}
            />
          </StyledRow>
          <Label htmlFor="comment">{intl.formatMessage({ id: "general.comment" })}</Label>
          <Textarea rows="3" id="comment" value={comment} onChange={e => setComment(e.target.value)} />

          <Text>{intl.formatMessage({ id: "general.receipts" })}</Text>
          <StyledReceiptsWrap>
            {receipts.map(({ url }) => (
              <StyledReceipt data-test="receipt" key={url} style={{ backgroundImage: `url(${SERVER_URL}${url})` }} />
            ))}
          </StyledReceiptsWrap>

          <FileUpload name="file" file={file} onDrop={setFile} />

          {isLoading && (
            <StyledLoaderOverlay>
              <Loader />
            </StyledLoaderOverlay>
          )}

          {showSuccessMessage && (
            <Text bold align="center" data-test="success-msg">
              {intl.formatMessage({ id: "messages.success_expense_save" })}
            </Text>
          )}

          {error && (
            <ErrorText align="center" data-test="error-msg">
              {error}
            </ErrorText>
          )}

          <StyledActions>
            <Button centered data-test="save" onClick={saveExpanse}>
              {intl.formatMessage({ id: "general.save" })}
            </Button>
          </StyledActions>
        </StyledCurrentExpense>
      )}
    </Modal>
  );
};

CurrentExpense.propTypes = {
  expense: expensePropTypes,
  updateExpense: PropTypes.func,
  onSuccessUpdate: PropTypes.func,
  intl: IntlPropType
};

export default injectIntl(CurrentExpense);

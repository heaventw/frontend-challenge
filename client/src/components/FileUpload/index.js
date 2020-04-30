import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { IntlPropType } from "../../constants";
import { StyledFileUpload, StyledImage, StyledDropContainer, StyledFileInput } from "./styled";

const FileUpload = ({ onDrop, name, file, intl }) => {
  const [isOver, setOverlay] = useState(false);
  const inputRef = useRef(null);

  const handleDragOver = e => {
    e.preventDefault();
    setOverlay(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setOverlay(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.persist();

    onDropFile(e.dataTransfer.files[0]);
    setOverlay(false);
  };

  const handleFileInputChange = e => {
    onDropFile(e.target.files[0]);
  };

  const onDropFile = file => {
    if (file && file.type.includes("image")) {
      file.preview = URL.createObjectURL(file);
    }
    onDrop(file);
  };

  return (
    <StyledFileUpload>
      <StyledDropContainer
        onClick={() => {
          inputRef.current.click();
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        isOver={isOver}
      >
        {intl.formatMessage({ id: "messages.file_upload" })}
        <StyledFileInput
          type="file"
          accept="image/*"
          name={name}
          ref={inputRef}
          onChange={handleFileInputChange}
          multiple={false}
        />
      </StyledDropContainer>
      {!!file && <StyledImage key={file.name} src={file.preview} alt="file" />}
    </StyledFileUpload>
  );
};

FileUpload.propTypes = {
  onDrop: PropTypes.func,
  name: PropTypes.string,
  file: PropTypes.shape({
    name: PropTypes.string,
    preview: PropTypes.string
  }),
  intl: IntlPropType
};

export default injectIntl(FileUpload);

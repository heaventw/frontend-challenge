import React from 'react';
import { injectIntl } from 'react-intl';
import classnames from 'classnames';
import './index.scss';

const FileUpload = ({ intl, className, onChange, isUploadingFile }) => {
  const placeholder = intl.formatMessage({
    id: 'upload_a_reciept'
  });
  const labelClasses = classnames('file-upload__label', className, {
    'file-upload__label--uploading': isUploadingFile
  });
  return (
    <label htmlFor="file" className={labelClasses}>
      <input
        type="file"
        name="file"
        id="file"
        className="file-upload"
        aria-label={placeholder}
        onChange={e => onChange(e.currentTarget.files[0])}
      />
    </label>
  );
};

export default injectIntl(FileUpload);

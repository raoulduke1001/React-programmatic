import React, { useState } from "react";
import cx from "classnames";

import { FilePond, registerPlugin } from "react-filepond";
// import { FilePond, File, registerPlugin } from "react-filepond"

import "filepond/dist/filepond.min.css";
import "./FileUpload.scss";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FileUpload({ className }) {
  const [files, setFiles] = useState([]);

  return (
    <div className={cx("FileUpload", className)}>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        maxFiles={3}
        server="/api"
        name="files"
        labelIdle="Добавить файл"
      />
    </div>
  );
}

export default FileUpload;

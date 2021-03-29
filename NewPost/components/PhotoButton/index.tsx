import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { Container } from "./styles";
const PhotoButton = ({ handleSelect = () => {} }) => {
  const [file, setFile] = useState([]);
  const reader = new FileReader();
  reader.onload = (e) => {
    setFile({ ...file, src: e.target.result });
  };

  const handleClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = e => {
      console.log(e);
      setFile({ name: e.path[0].files[0].name });
      reader.readAsDataURL(e.path[0].files[0]);
      handleSelect(e.path[0].files);
    };
    fileInput.click();
  };
  return (
    <Container onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
      </svg>
      <Typography variant="caption" display="block" gutterBottom>
        Foto
      </Typography>
      {file?.src &&
      <div>
       <img className="image-preview" src={file.src} />
     
        <Typography variant="caption" display="block" gutterBottom>
          {file.name}
        </Typography>
      </div>
      }
    
    </Container>
  );
};
export default PhotoButton;

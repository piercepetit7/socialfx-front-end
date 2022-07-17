import React, { useState } from "react";

const AddDetailsForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    activities: '',
    items: '',
    guestList: '',
  });
  
  const FormTitles = ["Activities", "Items", "GuestList"];

  const PageDisplay = () => {
    if (page === 0) {
      return <ActInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ItemInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <GuestListInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return(
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
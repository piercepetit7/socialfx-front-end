import React from "react";

function ActInfo({ formData, setFormData }) {
  return (
    <div className="ActInfo-container">
      <input
        type="text"
        placeholder="Activity..."
        value={formData.activities}
        onChange={(event) =>
          setFormData({ ...formData, activities: event.target.value })
        }
      />
    </div>
  );
}

export default ActInfo;
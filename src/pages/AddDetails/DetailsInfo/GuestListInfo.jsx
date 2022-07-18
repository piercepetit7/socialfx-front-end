function GuestListInfo({ formData, setFormData }) {
  return (
    <div className="GuestListInfo-container">
      <input
        type="text"
        placeholder="Guest List..."
        value={formData.guestList}
        onChange={(event) =>
          setFormData({ ...formData, guestList: event.target.value })
        }
      />
    </div>
  );
}

export default GuestListInfo;
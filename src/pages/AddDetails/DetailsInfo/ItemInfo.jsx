function ItemInfo({ formData, setFormData }) {
  return (
    <div className="ItemInfo-container">
      <input
        type="text"
        placeholder="Items..."
        value={formData.items}
        onChange={(event) =>
          setFormData({ ...formData, items: event.target.value })
        }
      />
    </div>
  );
}

export default ItemInfo;
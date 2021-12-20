export default function URLForm({ value, handleChange, handleSubmit }) {
  return (
    <form className="URL__form" onSubmit={handleSubmit}>
      <label className="URL__form__label">
        Enter a URL
        <input
          className="URL__form__input"
          type="url"
          placeholder="Enter a URL"
          name="url"
          onChange={handleChange}
          value={value}
        ></input>
        <button className="URL__form__button">Submit</button>
      </label>
    </form>
  );
}

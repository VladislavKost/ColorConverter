import "./ColorConverterForm.css";

export const ColorConverterForm = ({
  setHex,
}: {
  setHex: (value: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.length === 7) {
      const result = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(value);
      if (result) {
        document.body.style.backgroundColor = value;
        setHex(value);
      } else {
        document.body.style.backgroundColor = "white";
        setHex("Ошибка");
      }
    }
  };
  return (
    <form>
      <input
        className="input-color"
        type="text"
        onChange={handleChange}
        maxLength={7}
      />
    </form>
  );
};

import "./ConvertResult.css";

export const ConvertResult = ({ result }: { result: string }) => {
  return (
    <>
      <div className="convert-result">{result}</div>
    </>
  );
};

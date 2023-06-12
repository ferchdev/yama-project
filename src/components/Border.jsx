export const Border = ({ selected = false }) => {
  return (
    <span
      className={`h-full w-[5px] [&>span]:w-[2px] [&>span]:h-[2px] rounded-full [&>span]:bg-[#676c73] flex flex-col justify-between items-center me-5 transition-all duration-300 ${
        selected && "bg-[#f68633] border-t-full border-b-full"
      }`}
    >
      {!selected && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
    </span>
  );
};

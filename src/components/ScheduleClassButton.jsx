import { useEffect, useState } from "react";

const ScheduleClassButton = ({
  name,
  comp,
  classCompList,
  setClassCompList,
}) => {
  const [isClick, setIsClick] = useState(false);

  const onClickOpen = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (isClick) {
      setClassCompList([...classCompList, comp]);
    } else {
      const temp = classCompList.filter((v, i) => v !== comp);

      setClassCompList(temp);
    }
  }, [isClick]);

  return (
    <button
      className={`py-2 px-3 border rounded-md ${
        isClick && "border-techit-main text-techit-main bg-[#fff7ed]"
      }`}
      onClick={onClickOpen}
    >
      {name}
    </button>
  );
};

export default ScheduleClassButton;

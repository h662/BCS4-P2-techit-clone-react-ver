const KdtCard = ({ image, title, ing, desc, period }) => {
  return (
    <div className="w-[290px] h-[416px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 ease-out duration-300 rounded-lg"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className="pt-4">
        <span
          className={`${ing === "모집중" && "kdt-ing"} ${
            ing === "사전알림신청" && "kdt-alarm"
          } ${ing === "모집마감" && "kdt-fin"}`}
        >
          {ing}
        </span>
        <h3 className="pt-4 py-2 text-xl font-semibold">{title}</h3>
        <h5 className="text-lg">{desc}</h5>
        <div className="text-techit-gray-100 mt-4">{period}</div>
      </div>
    </div>
  );
};

export default KdtCard;

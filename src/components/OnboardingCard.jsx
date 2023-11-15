const OnboardingCard = ({ image, title, desc, discountPrice, price }) => {
  return (
    <div className="w-[397px] h-[316px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 ease-out duration-300 rounded-lg"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className="pt-4">
        <h5 className="text-sm">{desc}</h5>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <div className="font-medium">
          <span>{discountPrice}</span>
          <span className="text-techit-gray-100 line-through text-sm ml-1">
            {price}
          </span>
        </div>
        <span className="mt-1 bg-[#ffedd5] text-techit-main px-[6px] py-[2px] text-sm font-semibold rounded-sm">
          수료 시 전액환급
        </span>
      </div>
    </div>
  );
};

export default OnboardingCard;

function Feature({ icon,title }) {
  return (
    <div className="feature flex flex-col justify-center items-center text-center max-w-[25%]">
      {/* icon */}
      <div className="icon bg-[#081730] rounded-2xl p-4">
        <img src={icon} 
        alt=""
        className="w-[3rem]" />
      </div>
      <span className="mt-5">{title}</span>

      <span className="text-[#707070] mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore debitis fuga voluptatibus!
      </span>
      <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">Learn more</span>
    </div>
  );
}

export default Feature;

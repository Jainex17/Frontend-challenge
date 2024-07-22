interface ProductProps {
    icon: React.ReactNode;
    name: string;
    }

export const Product = ({icon, name}: ProductProps) => {
  return (
    <div className="flex items-center gap-5">
      <span className="bg-white p-2 rounded-full cs-box-shadow">
        {icon}
      </span>
      <h3 className="font-semibold text-sm md:text-base">{name}</h3>
    </div>
  );
};

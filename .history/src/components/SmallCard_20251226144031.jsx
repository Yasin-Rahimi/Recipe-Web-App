import { Clock, Users, ChefHat } from "lucide-react";

const cards = [
  {
    label: "Prep Time",
    value: "30 min",
    Icon: Clock,
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    label: "Servings",
    value: "4 people",
    Icon: Users,
    bg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    label: "Difficulty",
    value: "medium",
    Icon: ChefHat,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function SmallCards() {
  return (
    <div className="flex flex-wrap justify-evenly bg-white rounded-lg mt-5 p-5 shadow-lg max-w-[35rem]">
      {cards.map(({ label, value, Icon, bg, iconColor }) => (
        <div
          key={label}
          className={`flex flex-col p-4 rounded-lg h-[100px] w-[150px] justify-center items-center ${bg}`}
        >
          <Icon className={`${iconColor} mb-2`} />
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-600">
              {label}
            </span>
            <span className="font-semibold text-gray-900">{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

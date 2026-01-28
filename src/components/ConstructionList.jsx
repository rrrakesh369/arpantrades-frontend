import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export default function ConstructionList() {
    const dispatch = useDispatch();
    const { name, description, title, imageName, imageUrl, loading } = useSelector((state) => state.construction);


  const solutions = [
    { id: "68faf7ebb2b0aac18f02ec79", prodType: "Build" },
    { id: "68fc79c1dbbaa71f02ef08ee", prodType: "Protect" },
    { id: "68fc7c58dbbaa71f02ef08f1", prodType: "Finish" },
    { id: "68fc7d8fdbbaa71f02ef08f5", prodType: "Repair" },
    
  ];

  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold my-6">
        Construction Solutions
      </h2>

      <div className="flex flex-col items-center gap-4">
        {solutions.map((item) => (
          <Link
            key={item.id}
            to={`/construction/solutions/${item.id}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

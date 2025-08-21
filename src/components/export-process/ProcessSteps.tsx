import { JSX } from "react";
import { IProcessSteps } from "../../types/DataTypes";

const ProcessSteps = (step: IProcessSteps) => {
  return (
    <>
      <div
        key={step.id}
        className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
      >
        <div>{step.icon}</div>
        <div>
          <h2 className="text-xl font-semibold text-left">{step.title}</h2>
          <p className="text-gray-600 text-left">{step.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProcessSteps;

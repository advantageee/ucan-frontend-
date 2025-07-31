import { useState } from "react";
import DesignCodeAndBaseMaterial from "./design-wizard/DesignCodeAndBaseMaterial";
import GeometrySetup from "./design-wizard/GeometrySetup";
import LoadEntry from "./design-wizard/LoadEntry";
import AnchorSelection from "./design-wizard/AnchorSelection";
import Results from "./design-wizard/Results";

const steps = [
  "Design Code & Base Material",
  "Geometry Setup",
  "Load Entry",
  "Anchor Selection",
  "Results",
];

const DesignWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <DesignCodeAndBaseMaterial />;
      case 1:
        return <GeometrySetup />;
      case 2:
        return <LoadEntry />;
      case 3:
        return <AnchorSelection />;
      case 4:
        return <Results />;
      default:
        return <DesignCodeAndBaseMaterial />;
    }
  };

  return (
    <div>
      <h2>Design Wizard</h2>
      <div>
        {steps.map((step, index) => (
          <span
            key={step}
            style={{
              margin: "0 10px",
              fontWeight: index === currentStep ? "bold" : "normal",
            }}
          >
            {step}
          </span>
        ))}
      </div>
      <div>{renderStep()}</div>
      <div>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DesignWizard;

import React from "react";
import { Heading } from "@nypl/design-system-react-components";

// If your components needs props, declare them in this interface.
interface SampleComponentProps {}

/**
 * Sample Component
 * Placeholder component that renders "Hello World!"
 */
const SampleComponent: React.FC<SampleComponentProps> = () => {
  return <Heading level="two">Hello World!</Heading>;
};

{
  /* Exporting SampleComponent so that it can be imported in index.tsx */
}
export default SampleComponent;

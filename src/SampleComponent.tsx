import React from "react";
import * as DS from "@nypl/design-system-react-components";

// If your components needs props, declare them in this interface.
interface SampleComponentProps {}

/**
 * Sample Component
 * Placeholder component that renders "Hello World!"
 */
const SampleComponent: React.FC<SampleComponentProps> = () => {
  return <DS.Heading level={2}>Hello World!</DS.Heading>;
};

{
  /* Exporting SampleComponent so that it can be imported in index.tsx */
}
export default SampleComponent;

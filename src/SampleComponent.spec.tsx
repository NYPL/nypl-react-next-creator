// This uses mocha, chai, and enzyme.

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import SampleComponent from "./SampleComponent";

describe("SampleComponent", () => {
   it("renders an h2 and hello world", () => {
      const wrapper = shallow(<SampleComponent />);

      // In case you need to see the output of the component:
      console.debug(wrapper.html());

      expect(wrapper.render().html()).to.equal("Hello World!")
   });
});

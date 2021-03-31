import WrappedCreateRepository from "../view/home";
// import { findByTestAtrr } from "../Utilities/index";
import { shallow } from 'enzyme';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    createRepository
  };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<WrappedCreateRepository {...props} />);

  return {
    enzymeWrapper,
    props,
  };
}

describe("Home Component", () => {

  it("It should have card-head classname", () => {
    const setUp = (props = {}) => {
      const wrapper = shallow(<WrappedCreateRepository {...props} />);
      expect(wrapper.find(".card-head")).toBeDefined();
    };
  }); 
  
  it("It should have pg-inner-container classname", () => {
    const setUp = (props = {}) => {
      const wrapper = shallow(<WrappedCreateRepository {...props} />);
      expect(wrapper.find(".pg-inner-container")).toBeDefined();
    };
  }); 

  it("It should have pg-title classname", () => {
    const setUp = (props = {}) => {
      const wrapper = shallow(<WrappedCreateRepository {...props} />);
      expect(wrapper.find(".pg-title")).toBeDefined();
    };
  }); 

  it("It should have navigation-link classname", () => {
    const setUp = (props = {}) => {
      const wrapper = shallow(<WrappedCreateRepository {...props} />);
      expect(wrapper.find(".navigation-link")).toBeDefined();
    };
  }); 

  it("It should have virual-coins-img classname", () => {
    const setUp = (props = {}) => {
      const wrapper = shallow(<WrappedCreateRepository {...props} />);
      expect(wrapper.find(".virual-coins-img")).toBeDefined();
    };
  });
  
});

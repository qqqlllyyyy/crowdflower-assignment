// This file is needed if you want to use 'enzyme' for testing
import raf from "./tempPolyfills";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

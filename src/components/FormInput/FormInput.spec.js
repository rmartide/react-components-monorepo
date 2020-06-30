import { render, configure } from "@testing-library/react";
import FormInput from './FormInput';

configure({ testIdAttribute: "data-spec" });

describe("Task.vue", () => {
	it("component renders", () => {
        const { getByTestId } = render(FormInput);
        
        getByTestId('formInput');

        getByTestId('formLabel');
	});

});

import '@testing-library/jest-dom';
import { render, configure } from "@testing-library/react";
import React from 'react';
import FormInput from './FormInput';

configure({ testIdAttribute: "data-spec" });

describe("Task.vue", () => {
	it("component renders", () => {
        const { getByTestId } = render(<FormInput label="asdf"/>);
        
        getByTestId('formInput');

        getByTestId('formLabel');
	});

});

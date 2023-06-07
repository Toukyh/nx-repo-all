import { render } from '@testing-library/react';

import InternalAddHeader from './internal-add-header';

describe('InternalAddHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InternalAddHeader />);
    expect(baseElement).toBeTruthy();
  });
});

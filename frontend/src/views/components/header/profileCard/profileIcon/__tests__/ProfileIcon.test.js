import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AppContextProvider } from '../../../../../../AppContextProvider';

import ProfileIcon from '../ProfileIcon';

test('profile icon renders correctly', () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(
    <AppContextProvider>
      <ProfileIcon />
    </AppContextProvider>
);
  expect(snapshotComponent).toMatchSnapshot();
});
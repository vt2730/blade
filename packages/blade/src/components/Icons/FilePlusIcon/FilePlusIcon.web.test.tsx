import FilePlusIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<FilePlusIcon />', () => {
  it('should render FilePlusIcon', () => {
    const { container } = renderWithTheme(
      <FilePlusIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});

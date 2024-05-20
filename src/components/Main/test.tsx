import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //render component
    const { container } = render(<Main />)
    //Search element is verifier the exist
    expect(
      screen.getByRole('heading', { name: /SisCentral Boilerplate Next/i })
    ).toBeInTheDocument()
    //generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})

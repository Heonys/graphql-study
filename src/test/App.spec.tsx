import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '@/App';
import { mockConsoleError } from './util';

describe('app', () => {
  mockConsoleError();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.skip('테스트', async () => {
    render(<App />);
    const inputElement = await screen.findByTestId('my-input');
    await userEvent.type(inputElement, '1234');
    expect(inputElement).toHaveValue('1234');
  });

  it('포커스하면 키패드가 열린다', async () => {
    render(<App />);

    await userEvent.click(await screen.findByTestId(`input-1`));

    expect(await screen.findByText(/비밀번호를 입력해주세요/)).toBeInTheDocument();
    expect(await screen.findByText(/6자리로 입력해주세요/)).toBeInTheDocument();

    // for (let i = 0; i <= 9; i++) {
    //   expect(await screen.findByTestId(i)).toBeInTheDocument();
    // }
  });
});

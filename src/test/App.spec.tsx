import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '@/App';
import { mockConsoleError } from './util';

describe('app', () => {
  mockConsoleError();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.only('포커스하면 키패드가 열린다', async () => {
    render(<App />);

    expect(await screen.findByText(/비밀번호를 입력해주세요/)).toBeInTheDocument();
    expect(await screen.findByText(/6자리로 입력해주세요/)).toBeInTheDocument();

    for (let i = 0; i <= 9; i++) {
      expect(await screen.findByTestId(i)).toBeInTheDocument();
    }
  });

  it('"확인" 버튼을 누르면 키패드가 닫힌다', async () => {
    render(<App />);

    await userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));
    await userEvent.click(await screen.findByText('확인'));

    expect(screen.queryByText(/비밀번호를 입력해주세요/)).not.toBeInTheDocument();
    expect(screen.queryByText(/6자리로 입력해주세요/)).not.toBeInTheDocument();
  });

  it.skip('6자리 모두 입력하지 않고 "확인" 버튼을 누르면 입력값이 초기화된다', async () => {
    render(<App />);

    await userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));

    await userEvent.click(await screen.findByTestId(1));
    await userEvent.click(await screen.findByTestId(2));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(2);

    await userEvent.click(await screen.findByText('확인'));

    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(0);

    expect(screen.queryByText(/비밀번호를 입력해주세요/)).not.toBeInTheDocument();
    expect(screen.queryByText(/6자리로 입력해주세요/)).not.toBeInTheDocument();
  });

  it('숫자패드를 누르면 값이 입력된다', async () => {
    render(<App />);

    userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));

    userEvent.click(await screen.findByTestId(1));
    userEvent.click(await screen.findByTestId(2));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(2);

    userEvent.click(await screen.findByTestId(3));
    userEvent.click(await screen.findByTestId(4));
    userEvent.click(await screen.findByTestId(5));
    userEvent.click(await screen.findByTestId(6));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(6);
  });

  it('6자리까지만 입력할 수 있다', async () => {
    render(<App />);

    userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));

    userEvent.click(await screen.findByTestId(1));
    userEvent.click(await screen.findByTestId(2));
    userEvent.click(await screen.findByTestId(3));
    userEvent.click(await screen.findByTestId(4));
    userEvent.click(await screen.findByTestId(5));
    userEvent.click(await screen.findByTestId(6));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(6);

    userEvent.click(await screen.findByTestId(7));
    userEvent.click(await screen.findByTestId(8));
    userEvent.click(await screen.findByTestId(9));
    userEvent.click(await screen.findByTestId(0));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(6);
  });

  it('공백패드는 입력되지 않는다', async () => {
    render(<App />);

    userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));

    userEvent.click(await screen.findByTestId('blank'));
    userEvent.click(await screen.findByTestId('blank'));
    userEvent.click(await screen.findByTestId('blank'));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(0);
  });

  it('input에 직접 값을 입력할 수 없다', async () => {
    render(<App />);

    userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));
    userEvent.type(await screen.findByLabelText<HTMLInputElement>(`비밀번호`), 'test');
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(0);
  });

  it('"전체삭제" 버튼을 누르면 값이 모두 삭제된다', async () => {
    render(<App />);

    userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`));

    userEvent.click(await screen.findByTestId(1));
    userEvent.click(await screen.findByTestId(1));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(2);

    userEvent.click(await screen.findByText('전체삭제'));
    expect((await screen.findByLabelText<HTMLInputElement>(`비밀번호`)).value).toHaveLength(0);
  });
});

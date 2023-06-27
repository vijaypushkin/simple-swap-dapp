import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalTrigger from './modal-trigger.tsx';
import userEvent from '@testing-library/user-event';
import ModalProvider from '../../context/modal-context.tsx';

describe('ModalTrigger', () => {
  it('should render', () => {
    render(
      <ModalProvider>
        <ModalTrigger
          trigger={'Open Modal'}
          modalName={'test-modal'}
          modalContent={<div>Test</div>}
        />
      </ModalProvider>,
    );

    expect(
      screen.getByRole('button', { name: /open modal/i }),
    ).toBeInTheDocument();
  });

  it('should open modal', async () => {
    render(
      <ModalTrigger
        trigger={'Open Modal'}
        modalName={'test-modal'}
        modalContent={<div>Test</div>}
      />,
    );

    await userEvent.click(screen.getByRole('button', { name: /open modal/i }));

    expect(screen.getByTestId('test-modal')).toBeInTheDocument();
  });

  it('should close modal', async () => {
    render(
      <ModalTrigger
        trigger={'Open Modal'}
        modalName={'test-modal'}
        modalContent={<div>Test</div>}
      />,
    );

    await userEvent.click(screen.getByRole('button', { name: /open modal/i }));

    await userEvent.click(screen.getByTestId('close-modal'));

    expect(screen.getByTestId('test-modal')).not.toHaveAttribute('open');
  });
});

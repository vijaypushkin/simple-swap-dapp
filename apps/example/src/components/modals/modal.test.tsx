import { render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import Modal from './modal.tsx';
import { useState } from 'react';

const DummyApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={isOpen}
        modalName={'test-modal'}
        onClose={() => setIsOpen(false)}
      >
        <div>Modal content</div>
      </Modal>
    </>
  );
};

// ! JSDOM does not support dialog element
beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = () => {
    document.getElementsByTagName('dialog')[0].open = true;
  };
  HTMLDialogElement.prototype.close = () => {
    document.getElementsByTagName('dialog')[0].open = false;
  };
});
describe('Modal', () => {
  it('should open the modal', async () => {
    render(<DummyApp />);

    await userEvent.click(screen.getByText('Open modal'));

    expect(screen.getByTestId('test-modal')).toHaveAttribute('open');
  });

  it('should close the modal on clicking close button', async () => {
    render(<DummyApp />);

    await userEvent.click(screen.getByText('Open modal'));

    await userEvent.click(screen.getByTestId('close-modal'));

    expect(screen.queryByText('Modal content')).not.toHaveAttribute('open');
  });

  it('should close the modal when clicking outside', async () => {
    render(<DummyApp />);

    await userEvent.click(screen.getByText('Open modal'));

    // ? Outside the modal
    await userEvent.click(screen.getByText('Open modal'));

    expect(screen.queryByText('Modal content')).not.toHaveAttribute('open');
  });
});

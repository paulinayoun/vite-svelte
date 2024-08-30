// modal.test.js
import { render, fireEvent } from '@testing-library/svelte';
import Modal from './Modal.svelte';
import '@testing-library/jest-dom'; // Custom Jest matchers

describe('Modal Component', () => {
  test('모달 열고 닫기', async () => {
    const { getByText, queryByText } = render(Modal, {
      open: false,
      modalHeading: '모달 설정',
      primaryButtonText: '확인',
      secondaryButtonText: '취소',
      buttonText: '모달열기',
      modalContent: '모달 데모',
    });

    // "모달열기" 버튼이 있는지 확인
    const openButton = getByText('모달열기');
    expect(openButton).toBeInTheDocument();

    // "모달열기" 버튼 클릭하여 모달 열기
    await fireEvent.click(openButton);

    // 모달 헤딩이 표시되는지 확인
    const modalHeading = getByText('모달 설정');
    expect(modalHeading).toBeInTheDocument();

    // "확인" 버튼이 있는지 확인
    const confirmButton = getByText('확인');
    expect(confirmButton).toBeInTheDocument();

    // "취소" 버튼이 있는지 확인
    const cancelButton = getByText('취소');
    expect(cancelButton).toBeInTheDocument();

    // "취소" 버튼 클릭하여 모달 닫기
    await fireEvent.click(cancelButton);

    // 모달 헤딩이 더 이상 표시되지 않는지 확인
    expect(queryByText('모달 설정')).not.toBeInTheDocument();
  });

  test('모달 콘텐츠 렌더링', () => {
    const { getByText } = render(Modal, {
      open: true,
      modalContent: '모달 데모',
    });

    // 모달 콘텐츠가 표시되는지 확인
    expect(getByText('모달 데모')).toBeInTheDocument();
  });
});

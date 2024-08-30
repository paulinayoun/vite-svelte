// Modal.stories.ts

import ModalComponent from './Modal.svelte';  // Modal 컴포넌트 경로에 맞게 수정하세요.
import "carbon-components-svelte/css/all.css";
import { action } from '@storybook/addon-actions';

// Storybook에서 컴포넌트의 기본 구성
export default {
    component: ModalComponent,
    title: 'Components/Modal',
    argTypes: {
        open: { control: 'boolean' },
        buttonText: { control: 'text' },
        modalContent: { control: 'text' },
        modalHeading: { control: 'text' },
        primaryButtonText: { control: 'text' },
        secondaryButtonText: { control: 'text' },
    },
    actions: { argTypesRegex: "^on.*" }
};

// Default 스토리 정의
export const Default = {
  args: { 
    open: false,
    buttonText: '모달열기',
    modalContent : '모달 내용',
    modalHeading: '모달 설정',
    primaryButtonText: '확인',
    secondaryButtonText: '취소',
  },
};
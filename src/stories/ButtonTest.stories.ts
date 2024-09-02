import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from "carbon-components-svelte";
import "carbon-components-svelte/css/all.css";


const meta = {
    title: 'Example/ButtonTest',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    
    },
  } satisfies Meta<Button>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
      primary: true,  // 기본 설정으로 주요 버튼 스타일 사용
      label: 'Example Button',  // 버튼에 표시할 텍스트  // 추가할 클래스 설정
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/mHLGmGv2WXjTAVXwjZBXiB/UI-Component?node-id=62-107&t=0VJQYgHS4EBu5NqR-4',
      },
    },
  };

export const Default = {
    args: { 
            label : 'Example button',
        },
    };
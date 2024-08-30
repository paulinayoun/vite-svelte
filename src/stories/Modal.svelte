<script lang="ts">
    import { Button, Modal } from "carbon-components-svelte";

    export let open = false;
    export let modalHeading = '모달 설정';
    export let primaryButtonText = '확인';
    export let secondaryButtonText = '취소';
    export let buttonText = '모달열기';
    export let modalContent = '모달 데모';

    const handleOpen = () => (open = true);
    const handleClose = () => (open = false);
  </script>
  
  <Button on:click={handleOpen}>{buttonText}</Button>
  
  <Modal
    bind:open={open}
    modalHeading={modalHeading}
    primaryButtonText={primaryButtonText}
    secondaryButtonText={secondaryButtonText}
    on:click:button--secondary={handleClose}
    on:open
    on:close
    on:submit
  >
    <p>{modalContent}</p>
  </Modal>
  
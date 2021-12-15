<template>
  <div class="w-full">
    <div class="max-w-3xl mx-auto mt-4">
      <p>
        The content below this paragraph is rendered in the right/bottom (red)
        container by PortalVue
      </p>
      <button @click="$nuxt.$emit('ShowAccountDeleteDialog')" class="btn">
        <span>button</span>
      </button>
      <Portal to="right-basic">
        <p class="red">
          This is content from the left/top container (green). The cool part is,
          it works across components, so you can send your content anywhere!
        </p>
      </Portal>
    </div>
    <PortalTarget name="right-basic"></PortalTarget>
    <confirm-dialog />
  </div>
</template>

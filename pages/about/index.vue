<template>
  <div>
    <p>
      The content below this paragraph is rendered in the right/bottom (red)
      container by PortalVue
    </p>
    <Portal to="right-basic">
      <p class="red">
        This is content from the left/top container (green). The cool part is,
        it works across components, so you can send your content anywhere!
      </p>
    </Portal>
    <PortalTarget name="right-basic"></PortalTarget>
  </div>
</template>

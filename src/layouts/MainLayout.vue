<template>
  <q-layout view="lHh Lpr lFf">
    <div class="flex h-screen bg-gray-200">
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        @click="sidebarOpen = false"
        class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      ></div>

      <!--Start Sidebar here-->
      <SideBar
        :class="
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        "
        @close="sidebarOpen = false"
      />
      <!--End Sidebar here-->

      <div class="flex flex-col flex-1 overflow-hidden">
        <!--Start Nav-bar here-->
        <AppHeader class="sticky top-0" @toggle-headerbar="toggleHeaderBar" />
        <!--Start Nav-bar end-->

        <router-view />
      </div>

      <!--Start Header here-->
      <HeaderBar
        class="lg:hidden"
        :class="
          toggleHeaderBar
            ? 'translate-x-0 ease-out'
            : '-translate-x-full ease-in'
        "
        :isOpen="headerBarOpen"
        @toggle-headerbar="toggleHeaderBar"
      />
      <!--End Header here-->
    </div>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import AppHeader from 'components/AppHeader.vue'
import SideBar from 'components/SideBar.vue'
import HeaderBar from 'components/HeaderBar.vue'

// Reactive variable to manage sidebar state
const sidebarOpen = ref(false)
const headerBarOpen = ref(false)

defineOptions({
  name: 'MainLayout',
})

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function toggleHeaderBar() {
  headerBarOpen.value = !headerBarOpen.value
  if (headerBarOpen.value) {
    sidebarOpen.value = false
  }
}
</script>

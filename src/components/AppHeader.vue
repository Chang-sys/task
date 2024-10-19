<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
    <div class="flex items-center">
      <button
         @click="handleToggleHeaderBar"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <AvatarDropDown />
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from 'vue'
import AvatarDropDown from 'components/AvatarDropDown.vue'

defineOptions({
  name: 'AppHeader',
})

const emit = defineEmits(['toggle-headerbar'])

function handleToggleHeaderBar() {
  emit('toggle-headerbar')
}


</script>

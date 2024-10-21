<template>
  <div
    v-if="isOpen"
    class="fixed inset-x-0 top-0 z-auto w-full bg-gray-900 shadow-md"
  >
    <div class="flex items-center justify-between h-16 px-6">
      <div class="flex items-center">
        <!-- Logo and title -->
        <svg
          class="w-12 h-12"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
            fill="#4C51BF"
            stroke="#4C51BF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
            fill="white"
          ></path>
        </svg>

        <span class="mx-2 text-2xl font-semibold text-white">Admin</span>
      </div>

      <!-- Close button -->
      <div class="flex items-center">
        <button
          @click="CloseHeaderBar"
          class="text-red-600 hover:text-red-200 focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <nav class="mt-4 mb-4 flex flex-col bg-gray-900">
      <div class="flex-1">
        <!-- Dashboard link -->
        <router-link
          class="flex items-center px-6 py-2 mt-4 text-gray-500"
          :to="{ name: 'Dashboard' }"
          :class="{
            'bg-gray-700 bg-opacity-25 text-white': $route.name === 'Dashboard',
          }"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>

          <span class="mx-3">Dashboard</span>
        </router-link>
      </div>

      <div class="flex-1">
        <!-- User management link -->
        <router-link
          class="flex items-center px-6 py-2 mt-4 text-gray-500"
          :to="{ name: 'UserManagement' }"
          :class="{
            'bg-gray-700 bg-opacity-25 text-white':
              $route.name === 'UserManagement',
          }"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
          </svg>

          <span class="mx-3">User</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle-headerbar'])

defineOptions({
  name: 'HeaderBar',
})

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

function CloseHeaderBar() {
  emit('toggle-headerbar')
}
</script>

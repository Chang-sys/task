<template>
  <div x-data="{ dropdownOpen: false }" class="relative">
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="relative block w-12 h-12 overflow-hidden rounded-full shadow focus:outline-none"
    >
      <img
        class="object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=296&q=80"
        alt="Your avatar"
      />
    </button>

    <div
      x-show="dropdownOpen"
      @click="dropdownOpen = false"
      class="fixed inset-0 z-10 w-full h-full"
      style="display: none"
    ></div>

    <div
      x-show="dropdownOpen"
      class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
      style="display: none"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
        >Profile</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
        >Products</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
        >Logout</a
      >
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AvatarDropDown',
})
</script>

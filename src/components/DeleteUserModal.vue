<template>
  <div>
    <q-btn flat dense color="red" label="Delete" @click="deleteModal = true" />

    <q-dialog v-model="deleteModal">
      <q-card
        style="width: 560px; max-width: 80vw;"
        class="flex flex-col items-center justify-center gap-6"
      >
        <q-card-section class="mt-10">
          <div class="text-3xl font-medium text-gray-400">Are you sure?</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <div class="text-lg text-gray-400 font-normal">
            Do you really want to delete this user record? This process cannot
            be <span class="text-red-500">undone</span>!
          </div>
        </q-card-section>

        <q-card-actions
          class="text-gray-500 mb-10 w-full items-center justify-center"
        >
          <q-btn
            class="text-xl mr-10"
            flat
            label="Cancel"
            v-close-popup
            no-caps
          />
          <q-btn
            class="text-xl ml-10 w-[160px]"
            label="Delete"
            color="red"
            no-caps
            @click="confirmDelete"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const deleteModal = ref(false)

    const confirmDelete = () => {
      emit('confirm-delete', props.user)
      deleteModal.value = false
    }

    return {
      deleteModal,
      confirmDelete,
    }
  },
}
</script>

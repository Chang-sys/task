<template>
  <q-dialog
    v-model="isOpen"
    @hide="onClose"
    backdrop-filter="blur(4px) saturate(150%)"
  >
    <q-card class="my-card">
      <q-img :src="selectedUser?.avatar" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ selectedUser?.firstName }} {{ selectedUser?.lastName }}
          </div>
        </div>

        <div class="text-caption text-grey-300">
          {{ selectedUser?.role.label }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ selectedUser?.title }}
        </div>
        <div class="text-caption text-grey">
          {{ selectedUser?.email }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Close" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  selectedUser: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

// Watch for changes to the modelValue prop to sync the dialog state
watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue
  }
)

// Method to handle dialog close event
const onClose = () => {
  isOpen.value = false // Close the dialog
  emit('update:modelValue', isOpen.value) // Emit update event to the parent
}
</script>

<style scoped>
.q-card.my-card {
  width: 400px;
  max-width: 100%;
}
</style>

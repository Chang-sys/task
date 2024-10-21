<template>
  <q-dialog
    v-model="isOpen"
    @hide="onClose"
    backdrop-filter="blur(4px) saturate(150%)"
  >
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-xl font-bold">
          {{ isEditMode ? 'Edit User' : 'Add New User' }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="grid grid-cols-2 gap-4">
            <q-input
              rounded
              filled
              v-model="firstName"
              label="First Name *"
              hint="First Name"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'This field (first name) is required',
              ]"
            />
            <q-input
              rounded
              filled
              v-model="lastName"
              label="Last Name *"
              hint="Last Name"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'This field (last name) is required',
              ]"
            />
            <div class="col-span-2">
              <q-input
                rounded
                filled
                v-model="avatar"
                label="Avatar URL *"
                hint="Enter the link of the image"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Avatar URL is required',
                ]"
              />
            </div>

            <q-input
              rounded
              filled
              v-model="email"
              label="Email *"
              hint="Enter your email here"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email is required',
                (val) => /^[\w\.-]+@gmail\.com$/.test(val) || 'Email must be a valid Gmail address',
              ]"
            />

            <q-input
              rounded
              filled
              v-model="title"
              label="Job Position *"
              hint="Enter title here(Devoloper, Designer, etc)"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'This field (Job Position) is required',
              ]"
            />

            <q-input
              rounded
              filled
              v-model="subtitle"
              label="Your Team *"
              hint="Your team title(Frontend, Backend, etc)"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'This field (Your Team) is required',
              ]"
            />

            <q-select
              v-model="role"
              :options="roleOptions"
              label="Role *"
              lazy-rules
              :rules="[(val) => !!val || 'Role is required']"
            />
          </div>

          <div class="bg-white text-teal" align="right">
            <q-btn
              :label="isEditMode ? 'Save' : 'Submit'"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Cancel"
              type="button"
              color="primary"
              flat
              class="q-ml-sm"
              @click="onClose"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'
import { useQuasar } from 'quasar'

// Utility function to generate unique IDs
const generateId = () => Math.floor(Math.random() * 10000) + 1 // Adjust the range as needed

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  selectedUser: {
    type: Object,
    default: () => ({}),
  },
  isEditMode: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'user-saved'])

const isOpen = ref(props.modelValue)
const $q = useQuasar()

// User input state
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const title = ref('')
const subtitle = ref('')
const role = ref(null)
const avatar = ref('') // New field for avatar
const status = ref('Active') // Set status to Active by default

// Role options for the select input
const roleOptions = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'HR', value: 'hr' },
]

// Watch for changes to the modelValue prop to sync the dialog state
watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue
    // Check if we are in edit mode
    const editMode = !!props.selectedUser // Check if selectedUser is provided
    if (editMode) {
      // Populate fields for editing
      firstName.value = props.selectedUser.firstName
      lastName.value = props.selectedUser.lastName
      email.value = props.selectedUser.email
      title.value = props.selectedUser.title
      subtitle.value = props.selectedUser.subtitle
      role.value = props.selectedUser.role
      avatar.value = props.selectedUser.avatar // Populate avatar for editing
    } else {
      // Reset fields for adding a new user
      onReset()
    }
  }
)

// Method to handle dialog close event
const onClose = () => {
  isOpen.value = false // Close the dialog
  emit('update:modelValue', isOpen.value) // Emit update event to the parent
}

// Method to handle form submission
const onSubmit = () => {
  const formData = {
    id: props.isEditMode ? props.selectedUser.id : generateId(), // Use existing ID or generate a new one
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    title: title.value,
    subtitle: subtitle.value,
    role: role.value,
    avatar: avatar.value, // Include avatar in the form data
    status: status.value,
    action: ['View', 'Edit', 'Delete'], // Default actions
    createdAt: props.isEditMode
      ? props.selectedUser.createdAt
      : new Date().toISOString(), // Keep old createdAt or set new
  }

  // Emit the formData to the parent component
  emit('user-saved', formData)

  console.log('Form data:', formData)

  // Notify the user of successful submission
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: props.isEditMode
      ? 'User updated successfully'
      : 'User added successfully',
  })

  // Optionally close the dialog
  onClose()
}

// Reset form fields
const onReset = () => {
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  title.value = ''
  subtitle.value = ''
  role.value = '' // Reset role
  avatar.value = '' // Reset avatar
  status.value = 'Active' // Reset status to Active
}
</script>

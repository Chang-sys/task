<template>
  <div class="m-10 ml-3 mb-3 pl-2 flex flex-row items-center justify-between">
    <p class="text-2xl font-bold">User Management</p>
    <q-btn label="Add User" color="primary" @click="openAddUserModal" />
  </div>

  <div class="q-pa-md">
    <q-table
      flat
      bordered
      ref="tableRef"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
      :loading="loading"
      :filter="filter"
      binary-state-sort
      @request="onRequest"
      class="user-table"
    >
      <template v-if="loading" v-slot:loading>
        <div class="flex justify-center items-center text-center">
          <q-spinner-dots size="40px" color="primary" />
        </div>
      </template>

      <!-- Custom cell templates -->
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <div class="flex items-center gap-3">
            <q-avatar size="40px">
              <img :src="props.row.avatar" />
            </q-avatar>
            <div>
              <div class="font-medium text-gray-900">
                {{ props.row.firstName }} {{ props.row.lastName }}
              </div>
              <div class="text-sm text-gray-500">{{ props.row.email }}</div>
            </div>
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-title="props">
        <q-td :props="props">
          <div>
            <div class="font-medium text-gray-900">{{ props.row.title }}</div>
            <div class="text-sm text-gray-500">{{ props.row.subtitle }}</div>
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div
            class="px-2 py-1 rounded-full text-xs font-medium inline-block"
            :class="{
              'bg-green-100 text-green-700':
                props.row.status.toLowerCase() === 'active',
              'bg-red-100 text-red-700':
                props.row.status.toLowerCase() === 'inactive',
            }"
          >
            {{ props.row.status }}
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="flex gap-2">
            <q-btn
              flat
              dense
              color="blue"
              label="View"
              @click="viewUser(props.row)"
            />
            <q-btn
              flat
              dense
              color="orange"
              label="Edit"
              @click="editUser(props.row)"
            />
            <q-btn
              flat
              dense
              color="red"
              label="Delete"
              @click="deleteUser(props.row)"
            />
          </div>
        </q-td>
      </template>

      <template v-slot:top-left>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search By Name"
          class="border border-gray-300 rounded-lg p-1 px-3"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>

  <AddEditUserModal
    v-model="isUserModalOpen"
    :selectedUser="selectedUser"
    :isEditMode="isEditMode"
    @user-saved="saveUser"
  />

  <UserDeatilModel
    v-model="isViewUserDetailModalOpen"
    :selectedUser="selectedUser"
  />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import AddEditUserModal from 'src/components/AddEditUserModal.vue'
import UserDeatilModel from 'src/components/UserDeatilModel.vue'

const store = useStore() // Initialize the store

// Table columns definition
const columns = [
  {
    name: 'name',
    required: true,
    label: 'NAME',
    align: 'left',
    field: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  {
    name: 'title',
    label: 'TITLE',
    align: 'left',
    field: 'title',
    sortable: false,
  },
  {
    name: 'status',
    label: 'STATUS',
    align: 'left',
    field: 'status',
    sortable: false,
  },
  {
    name: 'role',
    label: 'ROLE',
    align: 'left',
    field: (row) => `${row.role.value}`,
    sortable: false,
  },
  {
    name: 'action',
    label: 'Action',
    align: 'left',
    field: 'action',
    sortable: false,
  },
]

// Mock user data
const originalRows = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    title: 'Software Engineer',
    subtitle: 'Web dev',
    status: 'Active',
    role: 'Owner',
  },
  {
    id: 2,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    title: 'Product Manager',
    subtitle: 'Product team',
    status: 'Inactive',
    role: 'Admin',
  },
]

const tableRef = ref(null)
const rows = computed(() => {
  // Get users from Vuex state
  const usersFromState = store.getters['user/allUsers'] || []
  // Combine original rows with Vuex users
  return [...originalRows, ...usersFromState]
})

const filter = ref('')
const loading = ref(false)
const pagination = ref({
  sortBy: 'dec',
  descending: false,
  page: 1,
  rowsPerPage: 5,
  rowsNumber: originalRows.length,
})

const selectedUser = ref(null)
const isUserModalOpen = ref(false)
const isEditMode = ref(false)
const isViewUserDetailModalOpen = ref(false)

const openAddUserModal = () => {
  selectedUser.value = null
  isEditMode.value = false
  isUserModalOpen.value = true
}

// Save user data from modal
const saveUser = (selectedUser) => {
  if (isEditMode.value) {
    const index = rows.value.findIndex((row) => row.id === selectedUser.id)
    if (index !== -1) {
      rows.value[index] = selectedUser
    }
  } else {
    selectedUser.id = rows.value.length + 1
    rows.value.push(selectedUser)
  }
  isUserModalOpen.value = false
}

const viewUser = (user) => {
  console.log('Viewing user:', user)
  selectedUser.value = user
  isViewUserDetailModalOpen.value = true
}

const editUser = (user) => {
  console.log('Editing user:', user)
  selectedUser.value = user
  isEditMode.value = true
  isUserModalOpen.value = true
}

const deleteUser = (user) => {
  console.log('Deleting user with ID:', user.id)
  rows.value = rows.value.filter((row) => row.id !== user.id)
  console.log('Remaining users after deletion:', rows.value)
}

const fetchFromServer = (startRow, count, filter, sortBy, descending) => {
  const data = filter
    ? rows.value.filter((row) =>
        row.firstName.toLowerCase().includes(filter.toLowerCase() || row.lastName.toLowerCase().includes(filter.toLowerCase()))
      )
    : rows.value

  // Sort data
  const sortFn = descending
    ? (a, b) => (a[sortBy] < b[sortBy] ? 1 : -1)
    : (a, b) => (a[sortBy] > b[sortBy] ? 1 : -1)

  data.sort(sortFn)
  return data.slice(startRow, startRow + count)
}

// Get the total number of rows
const getRowsNumberCount = (filter) => {
  return filter
    ? rows.value.filter((row) =>
        row.firstName.toLowerCase().includes(filter.toLowerCase())
      ).length
    : rows.value.length
}

function onRequest(props) {
  const { page, rowsPerPage, sortBy, descending } = props.pagination
  const filter = props.filter

  loading.value = true

  // emulate server
  setTimeout(() => {
    // update rowsCount with appropriate value
    pagination.value.rowsNumber = getRowsNumberCount(filter)

    // get all rows if "All" (0) is selected
    const fetchCount =
      rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage

    // calculate starting row of data
    const startRow = (page - 1) * rowsPerPage

    // fetch data from "server"
    const returnedData = fetchFromServer(
      startRow,
      fetchCount,
      filter,
      sortBy,
      descending
    )

    // clear out existing data and add new
    rows.value.splice(0, rows.value.length, ...returnedData)

    // don't forget to update local pagination object
    pagination.value.page = page
    pagination.value.rowsPerPage = rowsPerPage
    pagination.value.sortBy = sortBy
    pagination.value.descending = descending

    // ...and turn of loading indicator
    loading.value = false
  }, 1500)
}

onMounted(() => {
  tableRef.value.requestServerInteraction()
})
</script>

<style>
.q-table__bottom-nodata-icon {
  display: none !important;
}
</style>

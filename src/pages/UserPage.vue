<template>
  <!-- Responsive layout for header -->
  <div class="m-10 ml-3 mb-3 pl-2 flex flex-col sm:flex-row items-center justify-between">
    <p class="text-2xl font-bold">User Management</p>
    <q-btn
      label="Add User"
      color="primary"
      class="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto"
      @click="openAddUserModal"
    />
  </div>

  <!-- Wrapping the q-table in a div for horizontal scrolling -->
  <div class="q-pa-md">
    <!-- Force scrollable container -->
    <div class="w-full overflow-hidden">
      <!-- Force table to be scrollable -->
      <div class="w-full min-w-[1000px] overflow-x-scroll">
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
          class="min-w-full"
        >
          <!-- Loading spinner -->
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
                  'bg-green-100 text-green-700': props.row.status.toLowerCase() === 'active',
                  'bg-red-100 text-red-700': props.row.status.toLowerCase() === 'inactive',
                }"
              >
                {{ props.row.status }}
              </div>
            </q-td>
          </template>

          <!-- Action buttons for each row -->
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <div class="flex gap-2 flex-wrap sm:flex-nowrap">
                <q-btn flat dense color="blue" label="View" @click="viewUser(props.row)" />
                <q-btn flat dense color="orange" label="Edit" @click="editUser(props.row)" />
                <q-btn flat dense color="red" label="Delete" @click="deleteUser(props.row)" />
              </div>
            </q-td>
          </template>

          <!-- Top left search bar with responsive reset button -->
          <template v-slot:top-left>
            <div class="flex flex-wrap items-center">
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search By Name"
                class="border border-gray-300 rounded-lg p-1 px-3 mr-2 w-full sm:w-auto"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn
                label="Reset"
                color="secondary"
                class="mt-2 sm:mt-0"
                @click="reloadPage"
              />
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </div>

  <!-- Modals for add/edit user -->
  <AddEditUserModal
    v-model="isUserModalOpen"
    :selectedUser="selectedUser"
    :isEditMode="isEditMode"
    @user-saved="saveUser"
  />

  <!-- User Detail Modal -->
  <UserDetailModal
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
    field: (row) => `${row.role.label}`,
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
const originalRows = ref([
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    title: 'Software Engineer',
    subtitle: 'Web dev',
    status: 'Active',
    role: { label: 'Developer', value: 'developer' },
  },
  {
    id: 2,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@gmail.com',
    title: 'Product Manager',
    subtitle: 'Product team',
    status: 'Inactive',
    role: { label: 'Admin', value: 'admin' },
  },
  {
    id: 3,
    avatar:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh',
    firstName: 'Elon',
    lastName: 'Musk',
    email: 'elonmusk@gmail.com',
    title: 'CEO of Tesla Motors',
    subtitle: 'Engineering',
    status: 'Active',
    role: { label: 'Owner', value: 'owner' },
  },
  {
    id: 4,
    avatar:
      'https://www.aiscribbles.com/img/variant/large-preview/38412/?v=d0b611',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@gmail.com',
    title: 'UX Designer',
    subtitle: 'Design Team',
    status: 'Active',
    role: { label: 'Editor', value: 'editor' },
  },
])

const tableRef = ref(null)
const rows = computed(() => {
  // Combine original rows with Vuex users
  const usersFromState = store.getters['user/allUsers'] || []
  const allRows = [...originalRows.value, ...usersFromState]

  if (!filter.value) {
    return allRows
  }

  const lowerCaseFilter = filter.value.toLowerCase()
  return allRows.filter((row) => {
    const fullName = `${row.firstName} ${row.lastName}`.toLowerCase()
    return fullName.includes(lowerCaseFilter)
  })
})

const filter = ref('')
const loading = ref(false)
const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 5,
  rowsNumber: rows.value.length,
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
  selectedUser.value = user
  isViewUserDetailModalOpen.value = true
}

const editUser = (user) => {
  selectedUser.value = user
  isEditMode.value = true
  isUserModalOpen.value = true
}

const deleteUser = (user) => {
  console.log('Deleting user with ID:', user.id)
  rows.value = rows.value.filter((row) => row.id !== user.id)
  originalRows.value = originalRows.value.filter((row) => row.id !== user.id)
  store.dispatch('user/deleteUser', user.id)
}

const fetchFromServer = (startRow, count, filter, sortBy, descending) => {
  const data = filter
    ? rows.value.filter(
        (row) =>
          row.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          row.lastName.toLowerCase().includes(filter.toLowerCase())
      )
    : rows.value

  if (sortBy) {
    const sortFn =
      sortBy === 'desc'
        ? descending
          ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
          : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
        : descending
        ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
        : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy])
    data.sort(sortFn)
  }

  return data.slice(startRow, startRow + count)
}

// Get the total number of rows
const getRowsNumberCount = (filter) => {
  if (!filter) {
    return rows.value.length
  }
  let count = 0
  rows.value.forEach((treat) => {
    if (treat.email.includes(filter)) {
      ++count
    }
  })
  return count
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

const reloadPage = () => {
  location.reload()
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

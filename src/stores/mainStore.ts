import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      openModal: false,
      modal_teacher: false
    }
  },
})

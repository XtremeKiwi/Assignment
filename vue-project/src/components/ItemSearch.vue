<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="search-wrap">
    <input
      :value="modelValue"
      type="text"
      placeholder="Search items..."
      @input="onInput"
      class="search-input"
      aria-label="Search items"
    />
  </div>
</template>

<style scoped>
.search-wrap {
  width: 100%;
  margin-bottom: 0.75rem;
}

.search-input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  font-size: 0.95rem;
  box-sizing: border-box;
  background: #fff;
}

.search-input:focus {
  outline: none;
  border-color: #7aa8ff;
  box-shadow: 0 0 0 4px rgba(122, 168, 255, 0.08);
}
</style>
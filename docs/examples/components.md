# 컴포넌트 예제

VitePress에서 Vue 컴포넌트를 사용하는 방법을 알아보겠습니다.

## Vue 컴포넌트 기본

VitePress에서는 마크다운 파일에 직접 Vue 컴포넌트를 작성할 수 있습니다.

<script setup>
import { ref, computed } from 'vue'

// 카운터
const count = ref(0)
const name = ref('VitePress')

// 동적 리스트
const items = ref(['사과', '바나나', '체리'])
const newItem = ref('')

const itemCount = computed(() => items.value.length)

const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push(newItem.value.trim())
    newItem.value = ''
  }
}

const removeItem = (index) => {
  items.value.splice(index, 1)
}

// 조건부 렌더링
const showMessage = ref(false)
const messageType = ref('info')
</script>

<style scoped>
.demo-box {
  border: 2px solid #42b883;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #f0f9ff;
}

.button-group {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.button-group button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

.button-group button:hover {
  background-color: #369870;
}

input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
  width: 200px;
}
</style>

## 인터랙티브 예제

### 카운터

현재 카운트: {{ count }}

<button @click="count++">증가</button>
<button @click="count--">감소</button>
<button @click="count = 0">리셋</button>

### 입력 필드

안녕하세요, {{ name }}님!

<input v-model="name" placeholder="이름을 입력하세요" />

## 스타일링

<div class="demo-box">
  <h3>스타일이 적용된 박스</h3>
  <p>이 박스는 CSS로 스타일링되었습니다.</p>
</div>

## 계산된 속성

### 동적 리스트

총 {{ itemCount }}개의 항목:

<ul>
  <li v-for="(item, index) in items" :key="index">
    {{ item }}
    <button @click="removeItem(index)" style="margin-left: 10px; font-size: 12px;">삭제</button>
  </li>
</ul>

<div style="margin: 10px 0;">
  <input 
    v-model="newItem" 
    @keyup.enter="addItem"
    placeholder="새 항목 추가" 
  />
  <button @click="addItem" style="margin-left: 10px;">추가</button>
</div>

## 조건부 렌더링

<button @click="showMessage = !showMessage">
  {{ showMessage ? '메시지 숨기기' : '메시지 보이기' }}
</button>

<div v-if="showMessage" :class="messageType" style="padding: 10px; margin: 10px 0; border-radius: 4px; border-left: 4px solid #42b883;">
  이것은 조건부로 표시되는 메시지입니다!
</div>

## 외부 컴포넌트

VitePress에서는 `.vitepress/theme/components/` 폴더에 컴포넌트를 만들어 전역으로 사용할 수도 있습니다.

```vue
<!-- .vitepress/theme/components/CustomButton.vue -->
<template>
  <button class="custom-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.custom-btn {
  background: linear-gradient(45deg, #42b883, #369870);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-btn:hover {
  transform: scale(1.05);
}
</style>
```

이렇게 만든 컴포넌트는 마크다운에서 바로 사용할 수 있습니다!
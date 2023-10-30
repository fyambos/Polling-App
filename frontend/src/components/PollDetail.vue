<script setup lang="ts">
const pollId = 1
const indexes = [1]
const poll = {
      id: '1',
      question: 'Quelle est votre couleur préférée?',
      options: ['Bleu', 'Rouge', 'Vert'],
      votes: [0, 0, 0]
}
</script>

<template>
  <div class="poll">
    <div v-if="indexes.includes(pollId)">
      {{ poll.question }}
      <div v-for="option in poll.options">
        <ul>
          <li>
            {{ option }}
          </li>
        </ul>
      </div>
      <button @click="vote()">vote</button>
    </div>
  </div>
</template>

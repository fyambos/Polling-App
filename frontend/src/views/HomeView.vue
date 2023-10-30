<script setup lang="ts">

const polls = [{
      id: '1',
      question: 'Quelle est votre couleur préférée?',
      options: ['Bleu', 'Rouge', 'Vert'],
      votes: [0, 0, 0]
    },
    {
      id: '2',
      question: 'Quel est votre animal préféré?',
      options: ['Chien', 'Chat', 'Oiseau'],
      votes: [0, 0, 0]
    },
    ]
</script>

<template>
  <main>
    Liste des sondages
    <div v-for="poll in polls">
      <ul>
        <li>
          {{ poll.question }}
        </li>
      </ul>
    </div>
  </main>
</template>

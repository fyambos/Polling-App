
<script>
const polls = [
  {
    id: '1',
    question: 'What is your favorite color?',
    options: ['Blue', 'Red', 'Green'],
    votes: [0, 0, 0]
  },
  {
    id: '2',
    question: 'What is your favorite animal?',
    options: ['Dog', 'Cat', 'Bird'],
    votes: [0, 0, 0]
  }
];

export default {
  data() {
    return {
      poll: null
    };
  },
  created() {
    const pollId = this.$route.params.id;
    this.poll = polls.find(poll => poll.id === pollId);
  },
  methods: {
    vote(optionIndex) {
      if (this.poll && optionIndex >= 0 && optionIndex < this.poll.options.length) {
        this.poll.votes[optionIndex]++;
      }
    }
  }
};
</script>

<template>
  <div class="poll">
    <div v-if="poll">
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
    <div v-else>
      <p>Le sondage n'a pas été trouvé.</p>
    </div>
  </div>
</template>



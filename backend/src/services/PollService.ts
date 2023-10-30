import { Poll } from '../models/PollModel';

class PollService {
  private polls: Poll[] = [
    {
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
  ];

  getPollById(id: string): Poll | undefined {
    return this.polls.find(poll => poll.id === id);
  }

  voteOnPoll(id: string, optionIndex: number): void {
    const poll = this.getPollById(id);
    if (poll) {
      poll.votes[optionIndex]++;
    }
  }
}

export default new PollService();

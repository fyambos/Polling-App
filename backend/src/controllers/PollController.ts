import { Request, Response } from 'express';
import { Poll } from '../models/PollModel';
import { PollService } from '../services/PollService';

// Récupérer un sondage par ID
export const getPollById = (req: Request, res: Response) => {
    const pollId = req.params.id; // L'ID du sondage
    // Recherchez le sondage dans votre service
    const poll: Poll | undefined = PollService.getPollById(pollId);
    if (!poll) {
        res.status(404).json({ message: 'Sondage introuvable' });
    } else {
        res.json(poll);
    }
}

// Enregistrer un vote sur un sondage
export const votePoll = (req: Request, res: Response) => {
    const pollId = req.params.id; // L'ID du sondage
    const optionIndex = req.body.optionIndex; // L'index de l'option votée

    // Enregistrez le vote dans votre service
    PollService.voteOnPoll(pollId, optionIndex);

    res.json({ message: 'Vote enregistré avec succès' });
}

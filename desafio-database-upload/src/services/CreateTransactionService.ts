import { getRepository } from "typeorm";
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({title, value, type, category}: Request): Promise<Transaction> {
    const transactionsRepository = getRepository(Transaction);

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id: category,
    })

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

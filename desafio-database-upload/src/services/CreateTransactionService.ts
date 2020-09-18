import { getCustomRepository, getRepository } from "typeorm";
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({title, value, type, category}: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);

    
    if (type === 'outcome') {
      const { total } = await transactionsRepository.getBalance();

      if ( total < value) {
        throw new AppError('Insufficient balance.', 400);
      }
    }
        
    let transactionCategory = await categoryRepository.findOne({
      where: { title : category } 
    });

    if (!transactionCategory) {
      transactionCategory = categoryRepository.create({
        title: category,
      })
      
      await categoryRepository.save(transactionCategory);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: transactionCategory,
    })

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

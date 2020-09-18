import AppError from '../errors/AppError';

import { getCustomRepository } from "typeorm";
import TransactionsRepository from "../repositories/TransactionsRepository";

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const trasactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionExist = await trasactionsRepository.findOne(id);

    if (!transactionExist) {
      throw new AppError('Transaction not found!', 404);
    }

    await trasactionsRepository.delete({ id })

  }
}

export default DeleteTransactionService;

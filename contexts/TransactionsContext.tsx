import { Transaction } from "@/entities/Transaction";
import { createContext, ReactNode, useState } from "react";

const initialTransactions: Transaction[] = [
  { id: '1', description: 'Supermercado', amount: -50.75, referenceDate: new Date('2025-01-02') },
  { id: '2', description: 'Salário', amount: 2500.00, referenceDate: new Date('2025-01-24') },
  { id: '3', description: 'Restaurante', amount: -120.40, referenceDate: new Date('2025-01-12') },
  { id: '4', description: 'Aluguel', amount: -800.00, referenceDate: new Date('2025-01-16') },
  { id: '5', description: 'Ração do cachorro', amount: -199.99, referenceDate: new Date('2025-01-17') },
  { id: '6', description: 'Ida ao cinema', amount: -54.78, referenceDate: new Date('2025-01-16') },
  { id: '7', description: 'Freela', amount: 1600.00, referenceDate: new Date('2025-01-13') },
  { id: '8', description: 'Contas de luz', amount: -252.91, referenceDate: new Date('2025-01-28') },
  { id: '9', description: 'Conta de água', amount: -80, referenceDate: new Date('2025-01-26') }
];

type AddTransactionInput = {
  description: string,
  amount: number,
  referenceDate?: Date
}

type TransactionsContextProps = {
  balance: number
  transactions: Transaction[]
  addTransaction: (data: AddTransactionInput) => Transaction
  getLastTransactions: (limit?: number) => Transaction[]
  findTransactionById: (id: string) => Transaction | undefined
  updateTransaction: (id: string, attributes: Partial<Transaction>) => void
  deleteTransaction: (id: string) => void
}

export const TransactionsContext = createContext<TransactionsContextProps | null>(null)

export const TransactionsContextProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  // estados das transações
  const [transactions, setTransactions] = useState<Transaction[]>([])
  // calcular o saldo baseado no estado de transações
  const balance = transactions.reduce((sum, t) => sum + t.amount, 0)

  const getLastTransactions = (limit = 5) => {
    return [...transactions]
      .sort((a, b) => b.referenceDate.getTime() - a.referenceDate.getTime())
      .slice(0, limit)
  }

  const findTransactionById = (id: string) => {
    return transactions.find(t => t.id === id)
  }

  const addTransaction = (data: AddTransactionInput) => {
    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 999999).toString(),
      description: data.description,
      amount: data.amount,
      referenceDate: data.referenceDate ?? new Date()
    }
    setTransactions(current => [...current, newTransaction])
    return newTransaction
  }

  const updateTransaction = (id: string, attributes: Partial<Transaction>) => {
    setTransactions(current => current.map(transaction => (
      transaction.id === id
        ? { ...transaction, ...attributes, id: transaction.id }
        : transaction
    )))
  }

  const deleteTransaction = (id: string) => {
    setTransactions(current => current.filter(transaction => transaction.id !== id))
  }

  return (
    <TransactionsContext.Provider
      value={{
        balance,
        transactions,
        addTransaction,
        getLastTransactions,
        findTransactionById,
        updateTransaction,
        deleteTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}